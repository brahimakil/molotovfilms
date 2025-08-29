import React, { useState, useRef, useEffect } from "react";
import { storage } from "../firebase/config";
import { ref, getDownloadURL } from 'firebase/storage';

const VideoComparison = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [videosData, setVideosData] = useState([]);
  const [videosLoading, setVideosLoading] = useState(true);
  const [videosReady, setVideosReady] = useState({ before: false, after: false });
  const [canPlay, setCanPlay] = useState(false);
  const containerRef = useRef(null);
  const beforeVideoRef = useRef(null);
  const afterVideoRef = useRef(null);

  // Define both sets of videos
  const videoSets = [
    {
      beforePath: 'before&after/before (ba7er).mp4',
      afterPath: 'before&after/after (ba7er).mp4',
    
    },
    {
      beforePath: 'before&after/benet (before).mp4',
      afterPath: 'before&after/benet (after).mp4',

    }
  ];

  // Fetch videos from Firebase - NO CACHING TO AVOID CORS
  useEffect(() => {
    const getVideoUrls = async () => {
      try {
        setVideosLoading(true);
        
        const videoPromises = videoSets.map(async (videoSet) => {
          const beforeVideoRef = ref(storage, videoSet.beforePath);
          const afterVideoRef = ref(storage, videoSet.afterPath);
          
          const [beforeUrl, afterUrl] = await Promise.all([
            getDownloadURL(beforeVideoRef),
            getDownloadURL(afterVideoRef)
          ]);
          
          return {
            ...videoSet,
            beforeUrl,
            afterUrl
          };
        });
        
        const loadedVideos = await Promise.all(videoPromises);
        setVideosData(loadedVideos);
        setVideosLoading(false);
      } catch (error) {
        console.error('Error getting video URLs:', error);
        setVideosLoading(false);
      }
    };

    getVideoUrls();
  }, []);

  // Reset video states when changing pages
  useEffect(() => {
    setSliderPosition(50);
    setIsDragging(false);
    setVideosReady({ before: false, after: false });
    setCanPlay(false);
  }, [currentPage]);

  // Check if both videos are ready to play
  useEffect(() => {
    const bothReady = videosReady.before && videosReady.after;
    setCanPlay(bothReady);
    
    if (bothReady) {
      // Start playing both videos when both are ready
      setTimeout(() => {
        if (beforeVideoRef.current && afterVideoRef.current) {
          beforeVideoRef.current.play().catch(() => {});
          afterVideoRef.current.play().catch(() => {});
        }
      }, 100);
    }
  }, [videosReady]);

  // Video ready handlers
  const handleBeforeVideoCanPlay = () => {
    setVideosReady(prev => ({ ...prev, before: true }));
  };

  const handleAfterVideoCanPlay = () => {
    setVideosReady(prev => ({ ...prev, after: true }));
  };

  // Sync video playback
  const syncVideos = () => {
    if (beforeVideoRef.current && afterVideoRef.current && canPlay) {
      const beforeVideo = beforeVideoRef.current;
      const afterVideo = afterVideoRef.current;
      
      // Sync time
      const timeDiff = Math.abs(beforeVideo.currentTime - afterVideo.currentTime);
      if (timeDiff > 0.1) { // Only sync if difference is significant
        afterVideo.currentTime = beforeVideo.currentTime;
      }
      
      // Sync play/pause state
      if (!beforeVideo.paused && afterVideo.paused) {
        afterVideo.play().catch(() => {});
      } else if (beforeVideo.paused && !afterVideo.paused) {
        afterVideo.pause();
      }
    }
  };

  // Enhanced play handler - only play if both videos are ready
  const handleBeforeVideoPlay = () => {
    if (canPlay && afterVideoRef.current) {
      afterVideoRef.current.play().catch(() => {});
    } else if (!canPlay) {
      // Pause the video if the other isn't ready
      beforeVideoRef.current?.pause();
    }
  };

  // Enhanced pause handler
  const handleBeforeVideoPause = () => {
    if (afterVideoRef.current) {
      afterVideoRef.current.pause();
    }
  };

  // Enhanced time update with sync check
  const handleBeforeVideoTimeUpdate = () => {
    if (canPlay) {
      syncVideos();
    }
  };

  // Handle video errors
  const handleVideoError = (videoType) => {
    console.error(`${videoType} video failed to load`);
    setVideosReady(prev => ({ ...prev, [videoType]: false }));
  };

  // Navigation functions
  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % videoSets.length);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + videoSets.length) % videoSets.length);
  };

  const goToPage = (pageIndex) => {
    setCurrentPage(pageIndex);
  };

  // Handle mouse events for slider
  const handleMouseDown = (e) => {
    setIsDragging(true);
    updateSliderPosition(e);
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      updateSliderPosition(e);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const updateSliderPosition = (e) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
      setSliderPosition(percentage);
    }
  };

  // Touch events for mobile
  const handleTouchStart = (e) => {
    setIsDragging(true);
    updateSliderPositionTouch(e);
  };

  const handleTouchMove = (e) => {
    if (isDragging) {
      updateSliderPositionTouch(e);
    }
  };

  const updateSliderPositionTouch = (e) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.touches[0].clientX - rect.left;
      const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
      setSliderPosition(percentage);
    }
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      document.addEventListener('touchmove', handleTouchMove);
      document.addEventListener('touchend', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging]);

  // Styles
  const containerStyle = {
    position: 'relative',
    width: '100%',
    height: window.innerWidth <= 768 ? '50vh' : '70vh',
    maxHeight: window.innerWidth <= 768 ? '400px' : '600px',
    minHeight: window.innerWidth <= 768 ? '250px' : '400px',
    overflow: 'hidden',
    borderRadius: '15px',
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
    cursor: isDragging ? 'grabbing' : 'grab'
  };

  const videoStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: window.innerWidth <= 768 ? 'contain' : 'cover'
  };

  const beforeVideoStyle = {
    ...videoStyle,
    clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`
  };

  const sliderStyle = {
    position: 'absolute',
    top: 0,
    left: `${sliderPosition}%`,
    width: '2px', // Very thin white line like the image
    height: '100%',
    background: 'rgba(255, 255, 255, 0.9)', // White instead of blue
    transform: 'translateX(-50%)',
    cursor: 'ew-resize',
    zIndex: 10,
    boxShadow: '0 0 8px rgba(255, 255, 255, 0.3)' // White glow
  };

  const sliderHandleStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '20px', // Smaller handle
    height: '20px',
    background: 'rgba(255, 255, 255, 0.95)', // White handle
    borderRadius: '50%',
    border: '2px solid rgba(255, 255, 255, 1)',
    cursor: 'grab',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.3)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#333', // Dark text on white background
    fontSize: '10px',
    fontWeight: 'bold'
  };

  const labelStyle = {
    position: 'absolute',
    bottom: '20px',
    padding: '8px 16px',
    background: 'rgba(0, 0, 0, 0.8)',
    color: 'white',
    borderRadius: '20px',
    fontSize: '14px',
    fontWeight: 'bold',
    backdropFilter: 'blur(10px)'
  };

  const paginationStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '20px',
    marginTop: '30px'
  };

  const navButtonStyle = {
    padding: '12px 24px',
    background: 'linear-gradient(45deg, #007bff, #0056b3)',
    color: 'white',
    border: 'none',
    borderRadius: '25px',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: 'bold',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 15px rgba(0, 123, 255, 0.3)'
  };

  const dotStyle = {
    width: '12px',
    height: '12px',
    borderRadius: '50%',
    border: '2px solid #007bff',
    cursor: 'pointer',
    transition: 'all 0.3s ease'
  };

  const activeDotStyle = {
    ...dotStyle,
    background: '#007bff'
  };

  const loadingIndicatorStyle = {
    position: 'absolute',
    top: '10px',
    right: '10px',
    padding: '5px 10px',
    background: 'rgba(0, 123, 255, 0.9)',
    color: 'white',
    borderRadius: '15px',
    fontSize: '12px',
    zIndex: 5
  };

  const currentVideo = videosData[currentPage];

  return (
    
    <section style={{ padding: '80px 0', background: '#f8f9fa' }}>
      <div className="container"> 
        <div className="row">
          <div className="col-12">
            <div style={{ textAlign: 'center', marginBottom: '50px' }}>
              <h2 className="main_titel_two" style={{ marginBottom: '20px' }}>
                See the <span>Transformation</span>
              </h2>
              <p className="text_lg" style={{ maxWidth: '600px', margin: '0 auto' }}>
                Experience the power of our cinematic production. Drag the slider to see the dramatic before and after transformation of our video projects.
              </p>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className={window.innerWidth <= 768 ? "col-lg-10" : "col-lg-12"}>
            {videosLoading ? (
              <div style={{
                ...containerStyle,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: '#000'
              }}>
                <div style={{ color: '#fff', fontSize: '24px' }}>Loading videos...</div>
              </div>
            ) : currentVideo ? (
              <>
                {/* Current Video Title */}
                <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                  <h3 style={{ margin: '0 0 10px 0', fontSize: '24px', fontWeight: 'bold' }}>
                    {currentVideo.title}
                  </h3>
                  <p style={{ margin: 0, color: '#666', fontSize: '16px' }}>
                    {currentVideo.description}
                  </p>
                </div>

                {/* Video Comparison Container with Side Text */}
                <div style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: '20px' }}>
                  {/* Left Side Text */}
                  <div style={{
                    fontSize: window.innerWidth <= 768 ? '18px' : '24px',
                    fontWeight: 'bold',
                    letterSpacing: '8px',
                    writingMode: 'vertical-rl',
                    textOrientation: 'mixed',
                    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
                    userSelect: 'none',
                    color: '#333',
                    minWidth: '40px'
                  }}>
                    COLORING
                  </div>

                  {/* Video Container */}
                  <div
                    ref={containerRef}
                    style={{
                      ...containerStyle,
                      maxWidth: window.innerWidth <= 768 ? '100%' : '90%',
                      margin: '0 auto',
                      flex: 1
                    }}
                    onMouseDown={handleMouseDown}
                    onTouchStart={handleTouchStart}
                  >
                    {/* Loading Indicator */}
                    {!canPlay && (
                      <div style={loadingIndicatorStyle}>
                        Syncing videos... {videosReady.before ? '✓' : '○'} {videosReady.after ? '✓' : '○'}
                      </div>
                    )}

                    {/* After Video (Background) */}
                    <video
                      ref={afterVideoRef}
                      style={videoStyle}
                      muted
                      loop
                      playsInline
                      preload="auto"
                      onCanPlay={handleAfterVideoCanPlay}
                      onError={() => handleVideoError('after')}
                      key={`after-${currentPage}`}
                    >
                      <source src={currentVideo.afterUrl} type="video/mp4" />
                    </video>

                    {/* Before Video (Clipped) */}
                    <video
                      ref={beforeVideoRef}
                      style={beforeVideoStyle}
                      muted
                      loop
                      playsInline
                      preload="auto"
                      onCanPlay={handleBeforeVideoCanPlay}
                      onPlay={handleBeforeVideoPlay}
                      onPause={handleBeforeVideoPause}
                      onTimeUpdate={handleBeforeVideoTimeUpdate}
                      onError={() => handleVideoError('before')}
                      key={`before-${currentPage}`}
                    >
                      <source src={currentVideo.beforeUrl} type="video/mp4" />
                    </video>

                    {/* Slider Line */}
                    <div style={sliderStyle}>
                      <div style={sliderHandleStyle}>
                        ⟷
                      </div>
                    </div>
                  </div>

                  {/* Right Side Text */}
                  <div style={{
                    fontSize: window.innerWidth <= 768 ? '18px' : '24px',
                    fontWeight: 'bold',
                    letterSpacing: '8px',
                    writingMode: 'vertical-rl',
                    textOrientation: 'mixed',
                    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
                    userSelect: 'none',
                    color: '#333',
                    minWidth: '40px'
                  }}>
                    VFX
                  </div>
                </div>

                {/* Modern Navigation - Subtle Arrows */}
                <div style={{
                  position: 'relative',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: '30px',
                  height: '60px'
                }}>
                  {/* Left Arrow */}
                  <div
                    style={{
                      position: 'absolute',
                      left: '20%',
                      width: '40px',
                      height: '40px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#666',
                      fontSize: '24px',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      borderRadius: '50%',
                      border: '1px solid #ddd',
                      background: 'rgba(255, 255, 255, 0.9)'
                    }}
                    onClick={prevPage}
                    onMouseEnter={(e) => {
                      e.target.style.color = '#333';
                      e.target.style.transform = 'scale(1.1)';
                      e.target.style.borderColor = '#007bff';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.color = '#666';
                      e.target.style.transform = 'scale(1)';
                      e.target.style.borderColor = '#ddd';
                    }}
                  >
                    ←
                  </div>

                  {/* Elegant Dots */}
                  <div style={{ display: 'flex', gap: '12px' }}>
                    {videoSets.map((_, index) => (
                      <div
                        key={index}
                        style={{
                          width: '10px',
                          height: '10px',
                          borderRadius: '50%',
                          background: index === currentPage ? '#007bff' : '#ddd',
                          cursor: 'pointer',
                          transition: 'all 0.3s ease'
                        }}
                        onClick={() => goToPage(index)}
                        onMouseEnter={(e) => e.target.style.transform = 'scale(1.3)'}
                        onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                      />
                    ))}
                  </div>

                  {/* Right Arrow */}
                  <div
                    style={{
                      position: 'absolute',
                      right: '20%',
                      width: '40px',
                      height: '40px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#666',
                      fontSize: '24px',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      borderRadius: '50%',
                      border: '1px solid #ddd',
                      background: 'rgba(255, 255, 255, 0.9)'
                    }}
                    onClick={nextPage}
                    onMouseEnter={(e) => {
                      e.target.style.color = '#333';
                      e.target.style.transform = 'scale(1.1)';
                      e.target.style.borderColor = '#007bff';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.color = '#666';
                      e.target.style.transform = 'scale(1)';
                      e.target.style.borderColor = '#ddd';
                    }}
                  >
                    →
                  </div>
                </div>
              </>
            ) : (
              <div style={{ textAlign: 'center', padding: '40px' }}>
                <p>No videos available</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoComparison;
