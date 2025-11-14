import React, { useState, useEffect, useRef } from "react";
import InnerServices from "../component/InnerServices";
import Faq from "../component/Faq";
import Testimonials from "../component/Testimonials";
import Blog from "../component/BlogOne";
import { storage } from "../firebase/config";
import { ref, getDownloadURL } from 'firebase/storage';

const ServicesPage = () => {
  const [videoUrl, setVideoUrl] = useState('');
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);
  
  // Section loading states
  const [loadInnerServices, setLoadInnerServices] = useState(false);
  const [loadTestimonials, setLoadTestimonials] = useState(false);
  const [loadBlog, setLoadBlog] = useState(false);

  const videoRef = useRef(null);
  const heroRef = useRef(null);
  const innerServicesRef = useRef(null);
  const testimonialsRef = useRef(null);
  const blogRef = useRef(null);

  // Check cache immediately and load video header first
  useEffect(() => {
    const cacheKey = 'services_hero_video_url';
    const cacheTimeKey = 'services_hero_video_timestamp';
    const cacheExpiration = 24 * 60 * 60 * 1000; // 24 hours
    
    const cachedUrl = localStorage.getItem(cacheKey);
    const cachedTime = localStorage.getItem(cacheTimeKey);
    const now = Date.now();
    
    if (cachedUrl && cachedTime && (now - parseInt(cachedTime)) < cacheExpiration) {
      console.log('Services hero video loaded instantly from cache');
      setVideoUrl(cachedUrl);
      setVideoLoaded(true);
    } else {
      // Hero section is always in view, so load immediately if not cached
      setShouldLoadVideo(true);
    }
  }, []);

  // Load video only if not cached
  useEffect(() => {
    if (!shouldLoadVideo || videoLoaded) return;

    const loadVideo = async () => {
      const cacheKey = 'services_hero_video_url';
      const cacheTimeKey = 'services_hero_video_timestamp';
      
      try {
        console.log('Fetching Services hero video from Firebase Storage');
        
        // Try to get optimized version first, fallback to original
        let videoPath = 'servicesvideos/headerofservicespage-optimized.mp4';
        
        const videoRefFirebase = ref(storage, videoPath);
        
        try {
          const url = await getDownloadURL(videoRefFirebase);
          
          // Cache the URL and timestamp
          localStorage.setItem(cacheKey, url);
          localStorage.setItem(cacheTimeKey, Date.now().toString());
          
          setVideoUrl(url);
          setVideoLoaded(true);
          console.log('Services hero video loaded and cached successfully');
        } catch (optimizedError) {
          console.log('Optimized version not found, falling back to original');
          const fallbackRef = ref(storage, 'servicesvideos/headerofservicespage.mp4');
          const fallbackUrl = await getDownloadURL(fallbackRef);
          
          // Cache the fallback URL and timestamp
          localStorage.setItem(cacheKey, fallbackUrl);
          localStorage.setItem(cacheTimeKey, Date.now().toString());
          
          setVideoUrl(fallbackUrl);
          setVideoLoaded(true);
          console.log('Services hero video (fallback) loaded and cached successfully');
        }
        
      } catch (error) {
        console.error('Error loading Services hero video:', error);
        setVideoError(true);
        setVideoLoaded(false);
        
        // Clear any invalid cached data
        localStorage.removeItem(cacheKey);
        localStorage.removeItem(cacheTimeKey);
      }
    };

    loadVideo();
  }, [shouldLoadVideo, videoLoaded]);

  // Progressive section loading with IntersectionObserver
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '200px' // Start loading 200px before section is visible
    };

    const observers = [];

    // InnerServices Observer (loads first after hero)
    if (innerServicesRef.current) {
      const innerServicesObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !loadInnerServices) {
              console.log('Loading InnerServices section');
              setLoadInnerServices(true);
            }
          });
        },
        observerOptions
      );
      innerServicesObserver.observe(innerServicesRef.current);
      observers.push(innerServicesObserver);
    }

    // Testimonials Observer (loads after InnerServices)
    if (testimonialsRef.current) {
      const testimonialsObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !loadTestimonials && loadInnerServices) {
              console.log('Loading Testimonials section');
              setLoadTestimonials(true);
            }
          });
        },
        observerOptions
      );
      testimonialsObserver.observe(testimonialsRef.current);
      observers.push(testimonialsObserver);
    }

    // Blog Observer (loads last)
    if (blogRef.current) {
      const blogObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !loadBlog && loadTestimonials) {
              console.log('Loading Blog section');
              setLoadBlog(true);
            }
          });
        },
        observerOptions
      );
      blogObserver.observe(blogRef.current);
      observers.push(blogObserver);
    }

    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, [loadInnerServices, loadTestimonials, loadBlog]);

  const heroStyles = {
    videoHeroBanner: {
      position: 'relative',
      height: '60vh', // Changed from '100vh' to match ServiceDetailsPage
      minHeight: '400px', // Changed from '100vh' to match ServiceDetailsPage
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

  // Section placeholder component
  const SectionPlaceholder = ({ height = '400px', message = 'Loading section...' }) => (
    <div style={{
      height,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #f8f9fa, #e9ecef)',
      color: '#666',
      fontSize: '16px',
      fontWeight: '500'
    }}>
      <div style={{ textAlign: 'center' }}>
        <div style={{
          width: '30px',
          height: '30px',
          border: '3px solid #6B7A47',
          borderTop: '3px solid transparent',
          borderRadius: '50%',
          animation: 'spin 1s linear infinite',
          margin: '0 auto 15px'
        }} />
        {message}
      </div>
    </div>
  );

  return (
    <div style={{ margin: 0, padding: 0, minHeight: '100vh' }}>
      {/* Hero Video Section - Loads First */}
      <section ref={heroRef} style={heroStyles.videoHeroBanner}>
        <div style={heroStyles.videoContainer}>
          {videoLoaded && videoUrl ? (
            <video
              ref={videoRef}
              style={heroStyles.heroVideo}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              controls={false}
              onLoadStart={() => console.log('Services video loading started')}
              onCanPlayThrough={() => console.log('Services video can play through')}
              onError={(e) => {
                console.error('Services video playback error:', e);
                setVideoError(true);
              }}
            >
              <source src={videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : videoError ? (
            <div style={heroStyles.fallbackImage}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', marginBottom: '10px' }}>🎬</div>
                <div>Our Services</div>
              </div>
            </div>
          ) : (
            <div style={heroStyles.loadingPlaceholder}>
              <div style={{ textAlign: 'center' }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  border: '3px solid #6B7A47',
                  borderTop: '3px solid transparent',
                  borderRadius: '50%',
                  animation: 'spin 1s linear infinite',
                  margin: '0 auto 20px'
                }} />
                <div style={{ fontSize: '18px', marginBottom: '10px' }}>
                  {localStorage.getItem('services_hero_video_url') ? 'Loading from cache...' : 'Loading...'}
                </div>
                <div style={{ fontSize: '14px', opacity: 0.8 }}>Preparing your experience</div>
              </div>
            </div>
          )}
          
          {/* Video Overlay */}
          <div style={heroStyles.videoOverlay}></div>
          
          {/* Hero Content */}
          <div style={heroStyles.heroContent}>
            <h1 style={heroStyles.heroTitle}>
              All <span style={{color: '#6B8E23'}}>Media.</span> All <span style={{color: '#6B8E23'}}> Stories.</span> One <span style={{color: '#6B8E23'}}> Production </span> House.
            </h1>
            <br /> <br />
            <p style={heroStyles.heroSubtitle}>
            We create it all — films, videos, and everything media. A film house built to turn vision into unforgettable stories.
            </p>
       
          </div>
        </div>
      </section>

   

      {/* Testimonials Section - Loads Third */}
      <div ref={testimonialsRef}>
        {loadTestimonials ? (
          <Testimonials addClass="inner_testimonails" />
        ) : (
          <SectionPlaceholder height="500px" message="Loading Testimonials section..." />
        )}
      </div>

      
         {/* InnerServices Section - Loads Second */}
      <div ref={innerServicesRef} style={{ margin: 0, padding: 0 }}>
        {loadInnerServices ? (
          <InnerServices />
        ) : (
          <SectionPlaceholder height="600px" message="Loading Services section..." />
        )}
      </div>
{/* 
      {}
      <div ref={blogRef} style={{ margin: 0, padding: 0 }}>
        {loadBlog ? (
          <Blog />
        ) : (
          <SectionPlaceholder height="400px" message="Loading Blog section..." />
        )}
      </div> */}

      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default ServicesPage;
