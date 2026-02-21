import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import AbouUsTwo from "../component/AbouUsTwo";
import ChoseTwo from "../component/ChoseTwo";
import Working from "../component/Working";
import VideoComparison from "../component/VideoComparison";
import { storage } from "../firebase/config";
import { ref, getDownloadURL } from 'firebase/storage';

const AboutPage = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const [videoUrl, setVideoUrl] = useState('');
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);
  
  // Section loading states
  const [loadAboutUsTwo, setLoadAboutUsTwo] = useState(false);
  const [loadChoseTwo, setLoadChoseTwo] = useState(false);
  const [loadWorking, setLoadWorking] = useState(false);
  const [loadVideoComparison, setLoadVideoComparison] = useState(false);

  const videoRef = useRef(null);
  const heroRef = useRef(null);
  const aboutUsTwoRef = useRef(null);
  const choseTwoRef = useRef(null);
  const workingRef = useRef(null);
  const videoComparisonRef = useRef(null);

  // Handle scroll to calendar when navigated from contact page
  useEffect(() => {
    if (location.state?.scrollToCalendar) {
      // Force load the Working section first
      setLoadWorking(true);
      
      // Wait a bit for the component to render, then scroll
      const timer = setTimeout(() => {
        if (workingRef.current) {
          workingRef.current.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [location.state]);

  // Check cache immediately and load video header first
  useEffect(() => {
    const cacheKey = 'about_hero_video_url';
    const cacheTimeKey = 'about_hero_video_timestamp';
    const cacheExpiration = 24 * 60 * 60 * 1000; // 24 hours
    
    const cachedUrl = localStorage.getItem(cacheKey);
    const cachedTime = localStorage.getItem(cacheTimeKey);
    const now = Date.now();
    
    if (cachedUrl && cachedTime && (now - parseInt(cachedTime)) < cacheExpiration) {
      console.log('About hero video loaded instantly from cache');
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
      const cacheKey = 'about_hero_video_url';
      const cacheTimeKey = 'about_hero_video_timestamp';
      
      try {
        console.log('Fetching About hero video from Firebase Storage');
        const videoRef = ref(storage, 'homevideo/cover vimeo.MP4');
        const url = await getDownloadURL(videoRef);
        
        // Cache the URL and timestamp
        localStorage.setItem(cacheKey, url);
        localStorage.setItem(cacheTimeKey, Date.now().toString());
        
        setVideoUrl(url);
        setVideoLoaded(true);
        console.log('About hero video loaded and cached successfully');
        
      } catch (error) {
        console.error('Error loading About hero video:', error);
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

    // AbouUsTwo Observer (loads first after hero)
    if (aboutUsTwoRef.current) {
      const aboutUsTwoObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !loadAboutUsTwo) {
              console.log('Loading AbouUsTwo section');
              setLoadAboutUsTwo(true);
            }
          });
        },
        observerOptions
      );
      aboutUsTwoObserver.observe(aboutUsTwoRef.current);
      observers.push(aboutUsTwoObserver);
    }

    // ChoseTwo Observer (loads after AbouUsTwo)
    if (choseTwoRef.current) {
      const choseTwoObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !loadChoseTwo && loadAboutUsTwo) {
              console.log('Loading ChoseTwo section');
              setLoadChoseTwo(true);
            }
          });
        },
        observerOptions
      );
      choseTwoObserver.observe(choseTwoRef.current);
      observers.push(choseTwoObserver);
    }

    // Working Observer (loads after ChoseTwo)
    if (workingRef.current) {
      const workingObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !loadWorking && loadChoseTwo) {
              console.log('Loading Working section');
              setLoadWorking(true);
            }
          });
        },
        observerOptions
      );
      workingObserver.observe(workingRef.current);
      observers.push(workingObserver);
    }

    // VideoComparison Observer (loads last)
    if (videoComparisonRef.current) {
      const videoComparisonObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !loadVideoComparison && loadWorking) {
              console.log('Loading VideoComparison section');
              setLoadVideoComparison(true);
            }
          });
        },
        observerOptions
      );
      videoComparisonObserver.observe(videoComparisonRef.current);
      observers.push(videoComparisonObserver);
    }

    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, [loadAboutUsTwo, loadChoseTwo, loadWorking, loadVideoComparison]);

  const heroStyles = {
    videoHeroBanner: {
      position: 'relative',
      height: '100vh',
      minHeight: '100vh',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: '0',
      paddingTop: '0'
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
              onLoadStart={() => console.log('About hero video loading started')}
              onCanPlayThrough={() => console.log('About hero video can play through')}
              onError={(e) => {
                console.error('About hero video playback error:', e);
                setVideoError(true);
              }}
            >
              <source src={videoUrl} type="video/mp4" />
              {t('aboutPage.videoFallback')}
            </video>
          ) : videoError ? (
            <div style={heroStyles.loadingPlaceholder}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', marginBottom: '10px' }}>🎬</div>
                <div>{t('aboutPage.pageTitle')}</div>
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
                  {localStorage.getItem('about_hero_video_url') ? t('aboutPage.loadingFromCache') : t('aboutPage.loading')}
                </div>
                <div style={{ fontSize: '14px', opacity: 0.8 }}>{t('aboutPage.preparingExperience')}</div>
              </div>
            </div>
          )}
          
          {/* Video Overlay */}
          <div style={heroStyles.videoOverlay}></div>
          
          {/* Hero Content */}
          <div style={heroStyles.heroContent}>

            <h1 style={heroStyles.heroTitle}>
              <img 
                src="/Molotov Logo PNG.png" 
                alt="Molotov Logo" 
                style={{
                  height: '110px',
                  width: 'auto',
                  marginBottom: '15px',
                  display: 'block',
                  margin: '0 auto 15px auto'
                }}
              />
              {t('aboutPage.heroHeading')}
            </h1>
            {/* <div style={heroStyles.heroButtons}>
              <a 
                href="#services" 
                style={{...heroStyles.btn, ...heroStyles.btnPrimary}}
              >
                 Let's Work 
              </a>
            </div> */}
          </div>
        </div>
      </section>

      {/* AbouUsTwo Section - Loads Second */}
      <div ref={aboutUsTwoRef}>
        {loadAboutUsTwo ? (
          <AbouUsTwo />
        ) : (
          <SectionPlaceholder height="500px" message={t('aboutPage.aboutUs')} />
        )}
      </div>

      {/* ChoseTwo Section - Loads Third */}
      <div ref={choseTwoRef}>
        {loadChoseTwo ? (
          <ChoseTwo addClass="inner_chose" />
        ) : (
          <SectionPlaceholder height="600px" message={t('aboutPage.storytelling')} />
        )}
      </div>

      {/* Working Section - Loads Fourth */}
      <div ref={workingRef}>
        {loadWorking ? (
          <Working />
        ) : (
          <SectionPlaceholder height="800px" message={t('aboutPage.workingProcess')} />
        )}
      </div>

      {/* Spacing before VideoComparison */}
      <div style={{ height: window.innerWidth <= 768 ? '24px' : '64px' }} />

      {/* VideoComparison Section - Loads Last */}
      <div ref={videoComparisonRef}>
        {loadVideoComparison ? (
          <VideoComparison />
        ) : (
          <SectionPlaceholder height="700px" message={t('aboutPage.videoComparison')} />
        )}
      </div>

      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default AboutPage;
