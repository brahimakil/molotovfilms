import React, { useState, useEffect, useRef } from "react";
import InnerServices from "../component/InnerServices";
import Faq from "../component/Faq";
import Testimonials from "../component/Testimonials";
import Blog from "../component/BlogOne";
import { storage } from "../firebase/config";
import { ref, getDownloadURL } from 'firebase/storage';

const ServicesPage = () => {
  // Add loading state and preload optimization
  const [videoUrl, setVideoUrl] = useState('');
  const [videoLoading, setVideoLoading] = useState(true);
  const videoRef = useRef(null);

  useEffect(() => {
    const getVideoUrl = async () => {
      try {
        setVideoLoading(true);
        const videoRef = ref(storage, 'servicesvideos/headerofservicespage.mp4');
        const url = await getDownloadURL(videoRef);
        setVideoUrl(url);
        setVideoLoading(false);
      } catch (error) {
        console.error('Error getting video URL:', error);
        setVideoLoading(false);
      }
    };

    getVideoUrl();
  }, []);

  // Enhanced autoplay handling with scroll protection
  useEffect(() => {
    if (videoRef.current && videoUrl && !videoLoading) {
      const video = videoRef.current;
      
      const playVideo = async () => {
        try {
          video.muted = true; // Ensure muted for autoplay
          await video.play();
        } catch (error) {
          console.log('Autoplay prevented:', error);
          // Fallback: try to play on user interaction
          const playOnInteraction = () => {
            video?.play().catch(console.error);
            document.removeEventListener('click', playOnInteraction);
            document.removeEventListener('touchstart', playOnInteraction);
          };
          document.addEventListener('click', playOnInteraction);
          document.addEventListener('touchstart', playOnInteraction);
        }
      };

      // Keep video playing on scroll and other events
      const ensureVideoPlays = () => {
        if (video && video.paused && !video.ended) {
          video.play().catch(console.error);
        }
      };

      // Add event listeners to prevent video from stopping
      const handleVisibilityChange = () => {
        if (!document.hidden && video && video.paused) {
          video.play().catch(console.error);
        }
      };

      const handleScroll = () => {
        // Small delay to avoid too frequent calls
        setTimeout(() => {
          if (video && video.paused && !video.ended) {
            video.play().catch(console.error);
          }
        }, 100);
      };

      const handleFocus = () => {
        if (video && video.paused && !video.ended) {
          video.play().catch(console.error);
        }
      };

      // Intersection Observer to keep video playing when in view
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && video && video.paused && !video.ended) {
              video.play().catch(console.error);
            }
          });
        },
        { threshold: 0.1 }
      );

      // Initial play
      const timer = setTimeout(playVideo, 100);

      // Add all event listeners
      document.addEventListener('visibilitychange', handleVisibilityChange);
      document.addEventListener('scroll', handleScroll, { passive: true });
      window.addEventListener('focus', handleFocus);
      
      // Start observing the video element
      if (video) {
        observer.observe(video);
      }

      // Cleanup function
      return () => {
        clearTimeout(timer);
        document.removeEventListener('visibilitychange', handleVisibilityChange);
        document.removeEventListener('scroll', handleScroll);
        window.removeEventListener('focus', handleFocus);
        observer.disconnect();
      };
    }
  }, [videoUrl, videoLoading]);

  // Additional effect to handle video pause events
  useEffect(() => {
    if (videoRef.current) {
      const video = videoRef.current;
      
      const handlePause = () => {
        // If video pauses unexpectedly, try to resume it
        setTimeout(() => {
          if (video && video.paused && !video.ended) {
            video.play().catch(console.error);
          }
        }, 50);
      };

      const handleEnded = () => {
        // Restart video when it ends (since it should loop)
        if (video) {
          video.currentTime = 0;
          video.play().catch(console.error);
        }
      };

      video.addEventListener('pause', handlePause);
      video.addEventListener('ended', handleEnded);

      return () => {
        video.removeEventListener('pause', handlePause);
        video.removeEventListener('ended', handleEnded);
      };
    }
  }, [videoUrl, videoLoading]);

  // Load appropriate size based on screen
  const getVideoSize = () => {
    if (window.innerWidth <= 768) return 'cover-video-480p.MP4';
    if (window.innerWidth <= 1200) return 'cover-video-720p.MP4';
    return 'cover-video-1080p.MP4';
  };

  const heroStyles = {
    videoHeroBanner: {
      position: 'relative',
      height: '100vh',
      minHeight: '100vh',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: '0', // NO NEGATIVE MARGIN
      paddingTop: '0'  // NO PADDING
    },
    videoContainer: {
      position: 'relative',
      width: '100%',
      height: '100%'
    },
    heroVideo: {
      position: 'absolute',
      top: '0',
      left: '0',
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      zIndex: 1
    },
    videoOverlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'rgba(0, 0, 0, 0.5)',
      zIndex: 2
    },
    heroContent: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      zIndex: 10,
      color: 'white',
      textAlign: 'center',
      padding: '0 20px',
      width: '100%',
      maxWidth: '800px'
    },
    heroTitle: {
      fontSize: '3.5rem',
      fontWeight: 700,
      marginBottom: '1rem',
      textShadow: '3px 3px 6px rgba(0, 0, 0, 0.7)',
      lineHeight: '1.2'
    },
    heroSubtitle: {
      fontSize: '1.25rem',
      marginBottom: '2rem',
      opacity: 0.95,
      textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)'
    },
    heroButtons: {
      marginTop: '2rem',
      display: 'flex',
      justifyContent: 'center',
      gap: '15px',
      flexWrap: 'wrap'
    },
    btn: {
      padding: '15px 35px',
      fontSize: '1.1rem',
      fontWeight: 600,
      borderRadius: '50px',
      textDecoration: 'none',
      display: 'inline-block',
      transition: 'all 0.3s ease',
      cursor: 'pointer',
      border: 'none'
    },
    btnPrimary: {
      background: 'linear-gradient(45deg, #007bff, #0056b3)',
      color: 'white',
      boxShadow: '0 4px 15px rgba(0, 123, 255, 0.3)'
    },
    btnOutlineLight: {
      border: '2px solid white',
      color: 'white',
      background: 'rgba(255, 255, 255, 0.1)',
      backdropFilter: 'blur(10px)'
    }
  };

  // Media query styles for mobile - FIXED
  const isMobile = window.innerWidth <= 768;
  if (isMobile) {
    // REMOVE ALL POSITIONING OVERRIDES FOR MOBILE
    heroStyles.heroTitle.fontSize = '1.8rem';
    heroStyles.heroSubtitle.fontSize = '0.95rem';
    heroStyles.btn.padding = '10px 20px';
    heroStyles.btn.fontSize = '0.9rem';
    heroStyles.heroButtons.flexDirection = 'column';
    heroStyles.heroButtons.alignItems = 'center';
    heroStyles.heroButtons.gap = '10px';
    heroStyles.heroContent.padding = '0 15px';
    heroStyles.heroContent.maxWidth = '95%';
    // REMOVED: All margin/padding overrides that were breaking layout
  }

  // Add loading placeholder
  return (
    <div style={{ margin: 0, padding: 0, minHeight: '100vh' }}>
      {/* Professional Video Hero Banner */}
      <section style={{
        position: 'relative',
        height: '100vh',
        minHeight: '100vh',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 0,
        padding: 0,
        top: 0,
        left: 0,
        right: 0
      }}>
        <div style={heroStyles.videoContainer}>
          {videoLoading ? (
            <div style={{
              height: '100vh',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: '#000'
            }}>
              <div style={{ color: '#fff', fontSize: '24px' }}>Loading...</div>
            </div>
          ) : videoUrl ? (
            <video
              ref={videoRef}
              style={heroStyles.heroVideo}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              controls={false}
              onLoadedData={() => {
                // Force play when video data is loaded
                if (videoRef.current) {
                  videoRef.current.play().catch(console.error);
                }
              }}
            >
              <source src={videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : null}
          
          {/* Video Overlay */}
          <div style={heroStyles.videoOverlay}></div>
          
          {/* Hero Content */}
          <div style={heroStyles.heroContent}>
            <h1 style={heroStyles.heroTitle}>
              Our <span style={{color: '#6B8E23'}}>Services</span> & Expertise
            </h1>
            <p style={heroStyles.heroSubtitle}>Comprehensive video production services from concept to delivery. We bring your vision to life with professional quality and creative excellence.</p>
            <div style={heroStyles.heroButtons}>
              <a 
                href="#services" 
                style={{...heroStyles.btn, ...heroStyles.btnPrimary}}
              >
                 View Services 
              </a>
              
            </div>
          </div>
        </div>
      </section>

      <InnerServices />
      <Testimonials addClass="inner_testimonails" />
      <Blog />
    </div>
  );
};

export default ServicesPage;
