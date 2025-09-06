import React, { useState, useEffect, useRef } from "react";
import InnerServices from "../component/InnerServices";
import Faq from "../component/Faq";
import Testimonials from "../component/Testimonials";
import Blog from "../component/BlogOne";
import { storage } from "../firebase/config";
import { ref, getDownloadURL } from 'firebase/storage';

const ServicesPage = () => {
  const [videoUrl, setVideoUrl] = useState('');
  const [videoLoading, setVideoLoading] = useState(true);
  const [videoError, setVideoError] = useState(false);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);
  const videoRef = useRef(null);
  const heroRef = useRef(null);

  // Lazy load video only when hero section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !shouldLoadVideo) {
            setShouldLoadVideo(true);
          }
        });
      },
      { threshold: 0.1, rootMargin: '100px' }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, [shouldLoadVideo]);

  // Load video with caching and timeout handling
  useEffect(() => {
    if (!shouldLoadVideo) return;

    const getVideoUrl = async () => {
      const cacheKey = 'services_hero_video_url';
      const cacheTimeKey = 'services_hero_video_timestamp';
      const cacheExpiration = 24 * 60 * 60 * 1000; // 24 hours

      try {
        setVideoLoading(true);
        setVideoError(false);
        
        // Check if we have a cached URL that's still valid
        const cachedUrl = localStorage.getItem(cacheKey);
        const cachedTime = localStorage.getItem(cacheTimeKey);
        const now = Date.now();
        
        if (cachedUrl && cachedTime && (now - parseInt(cachedTime)) < cacheExpiration) {
          console.log('Loading Services hero video from cache');
          setVideoUrl(cachedUrl);
          setVideoLoading(false);
          return;
        }

        console.log('Fetching Services hero video from Firebase Storage');
        
        // Create timeout promise
        const timeout = new Promise((_, reject) =>
          setTimeout(() => reject(new Error('Video load timeout')), 10000)
        );
        
        // Try to get optimized version first, fallback to original
        let videoPath = 'servicesvideos/headerofservicespage-optimized.mp4';
        
        const videoPromise = getDownloadURL(ref(storage, videoPath)).catch(() => {
          console.log('Optimized version not found, falling back to original');
          return getDownloadURL(ref(storage, 'servicesvideos/headerofservicespage.mp4'));
        });

        const url = await Promise.race([videoPromise, timeout]);
        
        // Cache the URL and timestamp
        localStorage.setItem(cacheKey, url);
        localStorage.setItem(cacheTimeKey, now.toString());
        
        setVideoUrl(url);
        setVideoLoading(false);
        console.log('Services hero video loaded and cached successfully');
        
      } catch (error) {
        console.error('Error getting Services hero video URL:', error);
        setVideoLoading(false);
        setVideoError(true);
        
        // Clear any invalid cached data
        localStorage.removeItem(cacheKey);
        localStorage.removeItem(cacheTimeKey);
      }
    };

    getVideoUrl();
  }, [shouldLoadVideo]);

  // Optimized video play handling
  useEffect(() => {
    if (videoRef.current && videoUrl && !videoLoading) {
      const video = videoRef.current;
      
      const playVideo = async () => {
        try {
          video.muted = true;
          video.playbackRate = 1; // Normal speed
          await video.play();
        } catch (error) {
          console.log('Autoplay prevented:', error);
        }
      };

      // Simple play on load
      const timer = setTimeout(playVideo, 500);
      return () => clearTimeout(timer);
    }
  }, [videoUrl, videoLoading]);

  const heroStyles = {
    videoHeroBanner: {
      position: 'relative',
      height: '100vh',
      minHeight: '100vh',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#000', // Fallback background
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
    loadingPlaceholder: {
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white'
    },
    fallbackImage: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      fontSize: '1.5rem',
      zIndex: 1
    }
  };

  // Mobile responsive styles
  const isMobile = window.innerWidth <= 768;
  if (isMobile) {
    heroStyles.heroTitle.fontSize = '1.8rem';
    heroStyles.heroSubtitle.fontSize = '0.95rem';
    heroStyles.btn.padding = '10px 20px';
    heroStyles.btn.fontSize = '0.9rem';
    heroStyles.heroButtons.flexDirection = 'column';
    heroStyles.heroButtons.alignItems = 'center';
    heroStyles.heroButtons.gap = '10px';
    heroStyles.heroContent.padding = '0 15px';
    heroStyles.heroContent.maxWidth = '95%';
  }

  return (
    <div style={{ margin: 0, padding: 0, minHeight: '100vh' }}>
      {/* Optimized Video Hero Banner */}
      <section ref={heroRef} style={heroStyles.videoHeroBanner}>
        <div style={heroStyles.videoContainer}>
          {videoLoading && !videoError ? (
            <div style={heroStyles.loadingPlaceholder}>
              <div style={{ fontSize: '24px', marginBottom: '20px' }}>
                {localStorage.getItem('services_hero_video_url') ? 'Loading from cache...' : 'Loading...'}
              </div>
              <div style={{ fontSize: '16px', opacity: 0.8 }}>Preparing your experience</div>
            </div>
          ) : videoError ? (
            <div style={heroStyles.fallbackImage}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', marginBottom: '10px' }}>🎬</div>
                <div>Our Services</div>
              </div>
            </div>
          ) : videoUrl ? (
            <video
              ref={videoRef}
              style={heroStyles.heroVideo}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata" // Changed from "auto" to "metadata"
              controls={false}
              poster="" // Add a poster image if you have one
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
            <p style={heroStyles.heroSubtitle}>
              Comprehensive video production services from concept to delivery. 
              We bring your vision to life with professional quality and creative excellence.
            </p>
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
