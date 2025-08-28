import React, { useState, useRef, useEffect } from "react";
import { storage } from "../firebase/config";
import { ref, getDownloadURL } from 'firebase/storage';

const VideoComparison = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [videosData, setVideosData] = useState([]);
  const [videosLoading, setVideosLoading] = useState(true);
  const containerRef = useRef(null);
  const beforeVideoRef = useRef(null);
  const afterVideoRef = useRef(null);

  // Define both sets of videos
  const videoSets = [
    {
      beforePath: 'before&after/before (ba7er).mp4',
      afterPath: 'before&after/after (ba7er).mp4',
      title: 'Project Transformation #1',
      description: 'See how we transformed raw footage into cinematic excellence'
    },
    {
      beforePath: 'before&after/benet (before).mp4',
      afterPath: 'before&after/benet (after).mp4',
      title: 'Project Transformation #2',
      description: 'Another example of our professional video enhancement process'
    }
    
  ];

  // Fetch videos from Firebase
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

  // Reset slider when changing pages
  useEffect(() => {
    setSliderPosition(50);
    setIsDragging(false);
  }, [currentPage]);

  // Sync video playback
  const syncVideos = () => {
    if (beforeVideoRef.current && afterVideoRef.current) {
      const beforeVideo = beforeVideoRef.current;
      const afterVideo = afterVideoRef.current;
      
      afterVideo.currentTime = beforeVideo.currentTime;
      
      if (!beforeVideo.paused) {
        afterVideo.play().catch(() => {});
      } else {
        afterVideo.pause();
      }
    }
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

  const handleBeforeVideoPlay = () => {
    if (afterVideoRef.current) {
      afterVideoRef.current.play().catch(() => {});
    }
  };

  const handleBeforeVideoPause = () => {
    if (afterVideoRef.current) {
      afterVideoRef.current.pause();
    }
  };

  const handleBeforeVideoTimeUpdate = () => {
    syncVideos();
  };

  // Styles
  const containerStyle = {
    position: 'relative',
    width: '100%',
    height: '70vh',
    maxHeight: '600px',
    minHeight: '400px',
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
    objectFit: 'cover'
  };

  const beforeVideoStyle = {
    ...videoStyle,
    clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`
  };

  const sliderStyle = {
    position: 'absolute',
    top: 0,
    left: `${sliderPosition}%`,
    width: '4px',
    height: '100%',
    background: 'linear-gradient(45deg, #007bff, #0056b3)',
    transform: 'translateX(-50%)',
    cursor: 'ew-resize',
    zIndex: 10,
    boxShadow: '0 0 10px rgba(0, 123, 255, 0.5)'
  };

  const sliderHandleStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '40px',
    height: '40px',
    background: 'linear-gradient(45deg, #007bff, #0056b3)',
    borderRadius: '50%',
    border: '3px solid white',
    cursor: 'grab',
    boxShadow: '0 4px 15px rgba(0, 123, 255, 0.4)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontSize: '12px',
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
          <div className="col-lg-10">
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

                {/* Video Comparison Container */}
                <div
                  ref={containerRef}
                  style={containerStyle}
                  onMouseDown={handleMouseDown}
                  onTouchStart={handleTouchStart}
                >
                  {/* After Video (Background) */}
                  <video
                    ref={afterVideoRef}
                    style={videoStyle}
                    muted
                    loop
                    playsInline
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
                    onPlay={handleBeforeVideoPlay}
                    onPause={handleBeforeVideoPause}
                    onTimeUpdate={handleBeforeVideoTimeUpdate}
                    autoPlay
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

                  {/* Labels */}
                  <div style={{ ...labelStyle, left: '20px' }}>
                    Before
                  </div>
                  <div style={{ ...labelStyle, right: '20px' }}>
                    After
                  </div>
                </div>

                {/* Pagination */}
                <div style={paginationStyle}>
                  <button
                    style={navButtonStyle}
                    onClick={prevPage}
                    onMouseEnter={(e) => e.target.style.transform = 'translateY(-2px)'}
                    onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
                  >
                    ← Previous
                  </button>

                  <div style={{ display: 'flex', gap: '10px' }}>
                    {videoSets.map((_, index) => (
                      <div
                        key={index}
                        style={index === currentPage ? activeDotStyle : dotStyle}
                        onClick={() => goToPage(index)}
                        onMouseEnter={(e) => e.target.style.transform = 'scale(1.2)'}
                        onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                      />
                    ))}
                  </div>

                  <button
                    style={navButtonStyle}
                    onClick={nextPage}
                    onMouseEnter={(e) => e.target.style.transform = 'translateY(-2px)'}
                    onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
                  >
                    Next →
                  </button>
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
