import React, { useState, useRef, useEffect } from "react";
import { storage } from "../firebase/config";
import { ref, getDownloadURL } from 'firebase/storage';

const VideoComparison = () => {
  const [currentCategory, setCurrentCategory] = useState('COLORING'); // COLORING or VFX
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0); // 0, 1, 2 for videos 1, 2, 3
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [videosData, setVideosData] = useState({});
  const [videosLoading, setVideosLoading] = useState(false);
  const [videosReady, setVideosReady] = useState({ before: false, after: false });
  const [canPlay, setCanPlay] = useState(false);
  const [shouldLoadVideos, setShouldLoadVideos] = useState(false);
  const [currentVideoLoading, setCurrentVideoLoading] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const containerRef = useRef(null);
  const beforeVideoRef = useRef(null);
  const afterVideoRef = useRef(null);
  const sectionRef = useRef(null);

  // Define video categories and paths
  const videoCategories = {
    COLORING: [
      {
        beforePath: 'before&after/coloring/coloring 1.mp4',
        afterPath: 'before&after/coloring/coloring 1.1.mp4',
      },
      {
        beforePath: 'before&after/coloring/coloring 2.mp4',
        afterPath: 'before&after/coloring/coloring 2.2.mp4',
      },
      {
        beforePath: 'before&after/coloring/coloring 3.mp4',
        afterPath: 'before&after/coloring/coloring 3.3.mp4',
      }
    ],
    VFX: [
      {
        beforePath: 'before&after/before (ba7er).mp4',
        afterPath: 'before&after/after (ba7er).mp4',
      },
      {
        beforePath: 'before&after/benet (before).mp4',
        afterPath: 'before&after/benet (after).mp4',
      }
    ]
  };

  // Lazy load videos only when section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !shouldLoadVideos) {
            console.log('VideoComparison section in view, starting to load videos');
            setShouldLoadVideos(true);
          }
        });
      },
      { threshold: 0.2, rootMargin: '100px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [shouldLoadVideos]);

  // Load current video pair with caching
  const loadVideoUrls = async (category, index) => {
    const videoSet = videoCategories[category][index];
    const cacheKey = `video_comparison_${category}_${index}`;
    const cacheTimeKey = `video_comparison_${category}_${index}_timestamp`;
    const cacheExpiration = 24 * 60 * 60 * 1000; // 24 hours

    try {
      setCurrentVideoLoading(true);
      setVideoError(false);
      
      // Check if we have cached URLs that are still valid
      const cachedData = localStorage.getItem(cacheKey);
      const cachedTime = localStorage.getItem(cacheTimeKey);
      const now = Date.now();
      
      if (cachedData && cachedTime && (now - parseInt(cachedTime)) < cacheExpiration) {
        console.log(`Loading ${category} video ${index + 1} from cache`);
        const parsedData = JSON.parse(cachedData);
        setVideosData(prev => ({
          ...prev,
          [category]: {
            ...prev[category],
            [index]: parsedData
          }
        }));
        setCurrentVideoLoading(false);
        return;
      }

      console.log(`Fetching ${category} video ${index + 1} from Firebase Storage`);
      
      // Create timeout promise
      const timeout = new Promise((_, reject) =>
        setTimeout(() => reject(new Error('Video load timeout')), 15000)
      );
      
      const beforeVideoRef = ref(storage, videoSet.beforePath);
      const afterVideoRef = ref(storage, videoSet.afterPath);
      
      const videoPromises = Promise.all([
        getDownloadURL(beforeVideoRef),
        getDownloadURL(afterVideoRef)
      ]);

      const [beforeUrl, afterUrl] = await Promise.race([videoPromises, timeout]);
      
      const videoData = {
        ...videoSet,
        beforeUrl,
        afterUrl
      };
      
      // Cache the URLs and timestamp
      localStorage.setItem(cacheKey, JSON.stringify(videoData));
      localStorage.setItem(cacheTimeKey, now.toString());
      
      setVideosData(prev => ({
        ...prev,
        [category]: {
          ...prev[category],
          [index]: videoData
        }
      }));
      
      setCurrentVideoLoading(false);
      console.log(`${category} video ${index + 1} loaded and cached successfully`);
      
    } catch (error) {
      console.error(`Error loading ${category} video ${index + 1}:`, error);
      setCurrentVideoLoading(false);
      setVideoError(true);
      
      // Clear any invalid cached data
      localStorage.removeItem(cacheKey);
      localStorage.removeItem(cacheTimeKey);
    }
  };

  // Load current video when shouldLoadVideos becomes true or when video changes
  useEffect(() => {
    if (shouldLoadVideos) {
      loadVideoUrls(currentCategory, currentVideoIndex);
    }
  }, [shouldLoadVideos, currentCategory, currentVideoIndex]);

  // Reset video states when changing category or video
  useEffect(() => {
    setSliderPosition(50);
    setIsDragging(false);
    setVideosReady({ before: false, after: false });
    setCanPlay(false);
  }, [currentCategory, currentVideoIndex]);

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
    console.log('Before video ready');
    setVideosReady(prev => ({ ...prev, before: true }));
  };

  const handleAfterVideoCanPlay = () => {
    console.log('After video ready');
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
    setVideoError(true);
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
    height: window.innerWidth <= 768 ? '60vh' : '70vh', // Increased from 50vh to 60vh on mobile
    maxHeight: window.innerWidth <= 768 ? '500px' : '600px', // Increased from 400px to 500px
    minHeight: window.innerWidth <= 768 ? '350px' : '400px', // Increased from 250px to 350px
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
    objectFit: window.innerWidth <= 768 ? 'cover' : 'cover' // Changed contain to cover on mobile
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

  // Number tab styles
  const numberTabStyle = {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    fontSize: '18px',
    fontWeight: 'bold',
    transition: 'all 0.3s ease',
    marginBottom: '15px',
    border: '2px solid #ddd',
    background: 'rgba(255, 255, 255, 0.9)',
    color: '#666'
  };

  const activeNumberTabStyle = {
    ...numberTabStyle,
    background: 'linear-gradient(45deg, #6B7A47, #8B9A5A)',
    color: 'white',
    border: '2px solid #6B7A47',
    transform: 'scale(1.1)'
  };

  const currentVideo = videosData[currentCategory] && videosData[currentCategory][currentVideoIndex];

  return (
    <section ref={sectionRef} style={{ padding: '80px 0', background: '#f8f9fa' }}>
      <div className="container"> 
        <div className="row">
          <div className="col-12">
            <div style={{ textAlign: 'center', marginBottom: '50px' }}>
              <h2 className="main_titel_two" style={{ marginBottom: '20px' }}>
                From Raw to <span>Radiant</span>
              </h2>
              <p className="text_lg" style={{ maxWidth: '600px', margin: '0 auto' }}>
                A cinematic before-and-after showcasing how VFX and color grading bring every frame to life.
              </p>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className={window.innerWidth <= 768 ? "col-lg-10" : "col-lg-12"}>
            {!shouldLoadVideos ? (
              <div style={{
                ...containerStyle,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'linear-gradient(135deg, #f0f0f0, #e0e0e0)'
              }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '2rem', marginBottom: '10px' }}>🎬</div>
                  <div style={{ fontSize: '18px', color: '#666' }}>Scroll down to load videos</div>
                </div>
              </div>
            ) : currentVideoLoading && !currentVideo ? (
              <div style={{
                ...containerStyle,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: '#000'
              }}>
                <div style={{ textAlign: 'center', color: '#fff' }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    border: '3px solid #6B7A47',
                    borderTop: '3px solid transparent',
                    borderRadius: '50%',
                    animation: 'spin 1s linear infinite',
                    margin: '0 auto 20px'
                  }} />
                  <div style={{ fontSize: '18px' }}>Loading {currentCategory} Video {currentVideoIndex + 1}...</div>
                  <div style={{ fontSize: '14px', opacity: 0.7, marginTop: '5px' }}>
                    {localStorage.getItem(`video_comparison_${currentCategory}_${currentVideoIndex}`) ? 'Loading from cache...' : 'Fetching from server...'}
                  </div>
                </div>
              </div>
            ) : videoError ? (
              <div style={{
                ...containerStyle,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'linear-gradient(135deg, #f0f0f0, #e0e0e0)'
              }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '2rem', marginBottom: '10px' }}>⚠️</div>
                  <div style={{ fontSize: '18px', color: '#666' }}>Failed to load videos</div>
                  <button 
                    onClick={() => loadVideoUrls(currentCategory, currentVideoIndex)}
                    style={{
                      marginTop: '10px',
                      padding: '8px 16px',
                      background: '#6B7A47',
                      color: 'white',
                      border: 'none',
                      borderRadius: '5px',
                      cursor: 'pointer'
                    }}
                  >
                    Retry
                  </button>
                </div>
              </div>
            ) : currentVideo ? (
              <>
                {/* Video Comparison Container with Side Elements */}
                <div style={{ 
                  position: 'relative', 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: window.innerWidth <= 768 ? '10px' : '20px',
                  flexDirection: window.innerWidth <= 768 ? 'column' : 'row' // Stack vertically on mobile
                }}>
                  {/* Left Side - COLORING Number Tabs */}
                  {window.innerWidth > 768 && (
                    <div style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      minWidth: '60px'
                    }}>
                      {videoCategories.COLORING.map((_, index) => (
                        <div
                          key={`coloring-${index}`}
                          style={currentCategory === 'COLORING' && currentVideoIndex === index ? activeNumberTabStyle : numberTabStyle}
                          onClick={() => {
                            setCurrentCategory('COLORING');
                            setCurrentVideoIndex(index);
                          }}
                          onMouseEnter={(e) => {
                            if (!(currentCategory === 'COLORING' && currentVideoIndex === index)) {
                              e.target.style.background = '#f0f0f0';
                              e.target.style.transform = 'scale(1.05)';
                            }
                          }}
                          onMouseLeave={(e) => {
                            if (!(currentCategory === 'COLORING' && currentVideoIndex === index)) {
                              e.target.style.background = 'rgba(255, 255, 255, 0.9)';
                              e.target.style.transform = 'scale(1)';
                            }
                          }}
                        >
                          {index + 1}
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Category Text - Hide on mobile */}
                  {window.innerWidth > 768 && (
                    <div style={{
                      fontSize: '24px',
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
                  )}

                  {/* Video Container */}
                  <div
                    ref={containerRef}
                    style={{
                      ...containerStyle,
                      maxWidth: window.innerWidth <= 768 ? '100%' : '85%', // Full width on mobile
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
                      preload="metadata"
                      onCanPlay={handleAfterVideoCanPlay}
                      onLoadStart={() => console.log('After video loading started')}
                      onCanPlayThrough={() => console.log('After video can play through')}
                      onError={() => handleVideoError('after')}
                      key={`after-${currentCategory}-${currentVideoIndex}`}
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
                      preload="metadata"
                      onCanPlay={handleBeforeVideoCanPlay}
                      onPlay={handleBeforeVideoPlay}
                      onPause={handleBeforeVideoPause}
                      onTimeUpdate={handleBeforeVideoTimeUpdate}
                      onLoadStart={() => console.log('Before video loading started')}
                      onCanPlayThrough={() => console.log('Before video can play through')}
                      onError={() => handleVideoError('before')}
                      key={`before-${currentCategory}-${currentVideoIndex}`}
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

                  {/* Right Side Text - Hide on mobile */}
                  {window.innerWidth > 768 && (
                    <div style={{
                      fontSize: '24px',
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
                  )}

                  {/* Right Side - VFX Number Tabs - Hide on mobile */}
                  {window.innerWidth > 768 && (
                    <div style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      minWidth: '60px'
                    }}>
                      {videoCategories.VFX.map((_, index) => (
                        <div
                          key={`vfx-${index}`}
                          style={currentCategory === 'VFX' && currentVideoIndex === index ? activeNumberTabStyle : numberTabStyle}
                          onClick={() => {
                            setCurrentCategory('VFX');
                            setCurrentVideoIndex(index);
                          }}
                          onMouseEnter={(e) => {
                            if (!(currentCategory === 'VFX' && currentVideoIndex === index)) {
                              e.target.style.background = '#f0f0f0';
                              e.target.style.transform = 'scale(1.05)';
                            }
                          }}
                          onMouseLeave={(e) => {
                            if (!(currentCategory === 'VFX' && currentVideoIndex === index)) {
                              e.target.style.background = 'rgba(255, 255, 255, 0.9)';
                              e.target.style.transform = 'scale(1)';
                            }
                          }}
                        >
                          {index + 1}
                        </div>
                      ))}
                    </div>
                  )}
                  
                  {/* Mobile: Show tabs horizontally below video */}
                  {window.innerWidth <= 768 && (
                    <div style={{
                      display: 'flex',
                      gap: '10px',
                      justifyContent: 'center',
                      marginTop: '20px',
                      width: '100%'
                    }}>
                      <div style={{ textAlign: 'center' }}>
                        <div style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '10px', color: '#333' }}>COLORING</div>
                        <div style={{ display: 'flex', gap: '10px' }}>
                          {videoCategories.COLORING.map((_, index) => (
                            <div
                              key={`coloring-${index}`}
                              style={currentCategory === 'COLORING' && currentVideoIndex === index ? activeNumberTabStyle : numberTabStyle}
                              onClick={() => {
                                setCurrentCategory('COLORING');
                                setCurrentVideoIndex(index);
                              }}
                            >
                              {index + 1}
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div style={{ textAlign: 'center' }}>
                        <div style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '10px', color: '#333' }}>VFX</div>
                        <div style={{ display: 'flex', gap: '10px' }}>
                          {videoCategories.VFX.map((_, index) => (
                            <div
                              key={`vfx-${index}`}
                              style={currentCategory === 'VFX' && currentVideoIndex === index ? activeNumberTabStyle : numberTabStyle}
                              onClick={() => {
                                setCurrentCategory('VFX');
                                setCurrentVideoIndex(index);
                              }}
                            >
                              {index + 1}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
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

      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
};

export default VideoComparison;
