import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { storage } from "../firebase/config";
import { ref, getDownloadURL } from 'firebase/storage';

const FeaturesPage = () => {
  const [videoUrl, setVideoUrl] = useState('');
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);

  // Add state for multiple videos
  const [showcaseVideoUrl, setShowcaseVideoUrl] = useState('');
  const [showcaseVideoLoaded, setShowcaseVideoLoaded] = useState(false);
  const [showcaseVideoError, setShowcaseVideoError] = useState(false);
  const [shouldLoadShowcaseVideo, setShouldLoadShowcaseVideo] = useState(false);

  const [portfolioVideoUrl, setPortfolioVideoUrl] = useState('');
  const [portfolioVideoLoaded, setPortfolioVideoLoaded] = useState(false);
  const [portfolioVideoError, setPortfolioVideoError] = useState(false);
  const [shouldLoadPortfolioVideo, setShouldLoadPortfolioVideo] = useState(false);

  const videoRef = useRef(null);
  const heroRef = useRef(null);
  const showcaseVideoRef = useRef(null);
  const portfolioVideoRef = useRef(null);

  // Hero video loading (same as before)
  useEffect(() => {
    const cacheKey = 'features_hero_video_url';
    const cacheTimeKey = 'features_hero_video_timestamp';
    const cacheExpiration = 24 * 60 * 60 * 1000;
    
    const cachedUrl = localStorage.getItem(cacheKey);
    const cachedTime = localStorage.getItem(cacheTimeKey);
    const now = Date.now();
    
    if (cachedUrl && cachedTime && (now - parseInt(cachedTime)) < cacheExpiration) {
      console.log('Features hero video loaded instantly from cache');
      setVideoUrl(cachedUrl);
      setVideoLoaded(true);
    } else {
      setShouldLoadVideo(true);
    }
  }, []);

  useEffect(() => {
    if (!shouldLoadVideo || videoLoaded) return;

    const loadVideo = async () => {
      const cacheKey = 'features_hero_video_url';
      const cacheTimeKey = 'features_hero_video_timestamp';
      
      try {
        console.log('Fetching Features hero video from Firebase Storage');
        let videoPath = 'servicedetails(reels..)/reels section-optimized.mp4';
        const videoRefFirebase = ref(storage, videoPath);
        
        try {
          const url = await getDownloadURL(videoRefFirebase);
          localStorage.setItem(cacheKey, url);
          localStorage.setItem(cacheTimeKey, Date.now().toString());
          setVideoUrl(url);
          setVideoLoaded(true);
          console.log('Features hero video loaded and cached successfully');
        } catch (optimizedError) {
          console.log('Optimized version not found, falling back to original');
          const fallbackRef = ref(storage, 'servicedetails(reels..)/reels section.mp4');
          const fallbackUrl = await getDownloadURL(fallbackRef);
          localStorage.setItem(cacheKey, fallbackUrl);
          localStorage.setItem(cacheTimeKey, Date.now().toString());
          setVideoUrl(fallbackUrl);
          setVideoLoaded(true);
          console.log('Features hero video (fallback) loaded and cached successfully');
        }
      } catch (error) {
        console.error('Error loading Features hero video:', error);
        setVideoError(true);
        setVideoLoaded(false);
        localStorage.removeItem(cacheKey);
        localStorage.removeItem(cacheTimeKey);
      }
    };

    loadVideo();
  }, [shouldLoadVideo, videoLoaded]);

  // Showcase video loading
  useEffect(() => {
    setShouldLoadShowcaseVideo(true);
  }, []);

  useEffect(() => {
    if (!shouldLoadShowcaseVideo || showcaseVideoLoaded) return;

    const loadShowcaseVideo = async () => {
      try {
        const videoPath = 'servicedetails(reels..)/videoinplaceofimage-optimized.mp4';
        const videoRefFirebase = ref(storage, videoPath);
        const url = await getDownloadURL(videoRefFirebase);
        setShowcaseVideoUrl(url);
        setShowcaseVideoLoaded(true);
      } catch (error) {
        console.error('Error loading showcase video:', error);
        setShowcaseVideoError(true);
      }
    };

    loadShowcaseVideo();
  }, [shouldLoadShowcaseVideo, showcaseVideoLoaded]);

  // Portfolio video loading
  useEffect(() => {
    setShouldLoadPortfolioVideo(true);
  }, []);

  useEffect(() => {
    if (!shouldLoadPortfolioVideo || portfolioVideoLoaded) return;

    const loadPortfolioVideo = async () => {
      try {
        const videoPath = 'servicedetails(reels..)/Low Budget Heist website 1-optimized.mp4';
        const videoRefFirebase = ref(storage, videoPath);
        const url = await getDownloadURL(videoRefFirebase);
        setPortfolioVideoUrl(url);
        setPortfolioVideoLoaded(true);
      } catch (error) {
        console.error('Error loading portfolio video:', error);
        setPortfolioVideoError(true);
      }
    };

    loadPortfolioVideo();
  }, [shouldLoadPortfolioVideo, portfolioVideoLoaded]);

  const heroStyles = {
    videoHeroBanner: {
      position: 'relative',
      height: '60vh',
      minHeight: '400px',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#000',
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
      background: 'rgba(0, 0, 0, 0.6)',
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
      maxWidth: '700px'
    },
    heroTitle: {
      fontSize: '2.8rem',
      fontWeight: 700,
      marginBottom: '0.8rem',
      textShadow: '3px 3px 6px rgba(0, 0, 0, 0.7)',
      lineHeight: '1.2'
    },
    heroSubtitle: {
      fontSize: '1.1rem',
      marginBottom: '1.5rem',
      opacity: 0.95,
      textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)'
    },
    breadcrumb: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '10px',
      marginTop: '1rem',
      fontSize: '1rem',
      textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)'
    },
    breadcrumbLink: {
      color: 'rgba(255, 255, 255, 0.8)',
      textDecoration: 'none',
      transition: 'color 0.3s ease'
    },
    breadcrumbCurrent: {
      color: '#6B8E23',
      fontWeight: '600'
    },
    loadingPlaceholder: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      color: 'white',
      backgroundColor: '#1a1a1a'
    },
    fallbackImage: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      backgroundColor: '#2a2a2a',
      color: 'white'
    }
  };

  const breadcrumbs = [
    { label: "Home", link: "/" },
    { label: <i className="fa-solid fa-angle-right"></i>, link: null },
    { label: "Features & Films", link: null },
  ];

  return (
    <>
      {/* Hero Video Section */}
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
            >
              <source src={videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : videoError ? (
            <div style={heroStyles.fallbackImage}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', marginBottom: '10px' }}>🎬</div>
                <div>Features & Films</div>
              </div>
            </div>
          ) : (
            <div style={heroStyles.loadingPlaceholder}>
              <div style={{
                width: '40px',
                height: '40px',
                border: '3px solid #6B7A47',
                borderTop: '3px solid transparent',
                borderRadius: '50%',
                animation: 'spin 1s linear infinite',
                margin: '0 auto 20px'
              }} />
              <div style={{ fontSize: '18px', marginBottom: '10px' }}>Loading...</div>
            </div>
          )}
          
          <div style={heroStyles.videoOverlay}></div>
          
          <div style={heroStyles.heroContent}>
            <h1 style={heroStyles.heroTitle}>Features & Films</h1>
            <p style={heroStyles.heroSubtitle}>
              From 15-second ads to full-length films - cinematic storytelling that delivers results
            </p>
            <div style={heroStyles.breadcrumb}>
              {breadcrumbs.map((item, index) => (
                <span key={index}>
                  {item.link ? (
                    <Link 
                      to={item.link} 
                      style={heroStyles.breadcrumbLink}
                      onMouseOver={(e) => e.target.style.color = 'white'}
                      onMouseOut={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.8)'}
                    >
                      {item.label}
                    </Link>
                  ) : index === breadcrumbs.length - 1 ? (
                    <span style={heroStyles.breadcrumbCurrent}>{item.label}</span>
                  ) : (
                    <span style={{ color: 'rgba(255, 255, 255, 0.6)' }}>{item.label}</span>
                  )}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content - Different Structure */}
      <section className="features_content" style={{ padding: '80px 0' }}>
        <div className="container">
          
          {/* Introduction Section */}
          <div className="row mb-5">
            <div className="col-lg-8 mx-auto text-center">
              <h2 style={{
                fontSize: '3rem',
                fontWeight: 'bold',
                background: 'linear-gradient(135deg, #556b2f, #6b8e23)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                marginBottom: '30px'
              }}>
                CINEMA THAT CUTS DEEP
              </h2>
              <p style={{ fontSize: '1.2rem', color: '#666', lineHeight: '1.8' }}>
                We don't just make films — we craft experiences that linger. From intimate brand stories 
                to sweeping documentaries, every project gets the full cinematic treatment.
              </p>
            </div>
          </div>

          {/* Video Showcase Section - Side by Side */}
          <div className="row align-items-center mb-5">
            <div className="col-lg-6">
              <div style={{ position: 'relative', borderRadius: '15px', overflow: 'hidden', marginBottom: '30px' }}>
                {showcaseVideoLoaded && showcaseVideoUrl ? (
                  <video
                    ref={showcaseVideoRef}
                    style={{
                      width: '100%',
                      height: '350px',
                      objectFit: 'cover'
                    }}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    controls={false}
                  >
                    <source src={showcaseVideoUrl} type="video/mp4" />
                  </video>
                ) : (
                  <div style={{
                    width: '100%',
                    height: '350px',
                    backgroundColor: '#f0f0f0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '15px'
                  }}>
                    <div>🎬 Loading showcase...</div>
                  </div>
                )}
              </div>
            </div>
            <div className="col-lg-6">
              <h3 style={{ 
                fontSize: '2.2rem', 
                fontWeight: 'bold', 
                color: '#333',
                marginBottom: '20px'
              }}>
                Brand Stories That Stick
              </h3>
              <p style={{ fontSize: '1.1rem', color: '#666', lineHeight: '1.7', marginBottom: '25px' }}>
                Every brand has a pulse. We find it, amplify it, and turn it into cinema that 
                refuses to be ignored. Whether it's a 15-second social spot or a 5-minute brand film, 
                we bring the same intensity to every frame.
              </p>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ marginBottom: '10px', fontSize: '1rem' }}>
                  ✓ <strong>15s-5min Brand Films</strong> — Maximum impact, any length
                </li>
                <li style={{ marginBottom: '10px', fontSize: '1rem' }}>
                  ✓ <strong>Commercial Spots</strong> — TV & Digital ready
                </li>
                <li style={{ marginBottom: '10px', fontSize: '1rem' }}>
                  ✓ <strong>Product Launches</strong> — Cinematic reveals that wow
                </li>
              </ul>
            </div>
          </div>

          {/* Categories Grid - Different Layout */}
          <div className="row mb-5">
            <div className="col-12">
              <h3 style={{ 
                fontSize: '2.5rem', 
                textAlign: 'center',
                fontWeight: 'bold',
                color: '#333',
                marginBottom: '50px'
              }}>
                What We Create
              </h3>
            </div>
          </div>

          <div className="row g-4 mb-5">
            {/* Category Cards in Grid */}
            <div className="col-md-4">
              <div style={{
                background: 'linear-gradient(135deg, #556b2f, #6b8e23)',
                borderRadius: '20px',
                padding: '40px 30px',
                color: 'white',
                textAlign: 'center',
                height: '100%'
              }}>
                <div style={{ fontSize: '3rem', marginBottom: '20px' }}>🎬</div>
                <h4 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '15px' }}>
                  Brand Films
                </h4>
                <p style={{ fontSize: '1rem', opacity: 0.9 }}>
                  Corporate stories, culture films, and brand documentaries that build connection and trust.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div style={{
                background: 'linear-gradient(135deg, #8B4513, #D2691E)',
                borderRadius: '20px',
                padding: '40px 30px',
                color: 'white',
                textAlign: 'center',
                height: '100%'
              }}>
                <div style={{ fontSize: '3rem', marginBottom: '20px' }}>📽️</div>
                <h4 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '15px' }}>
                  Documentaries
                </h4>
                <p style={{ fontSize: '1rem', opacity: 0.9 }}>
                  Real stories told with cinematic power. From 10-minute shorts to feature-length deep dives.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div style={{
                background: 'linear-gradient(135deg, #2F4F4F, #708090)',
                borderRadius: '20px',
                padding: '40px 30px',
                color: 'white',
                textAlign: 'center',
                height: '100%'
              }}>
                <div style={{ fontSize: '3rem', marginBottom: '20px' }}>🎭</div>
                <h4 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '15px' }}>
                  Feature Films
                </h4>
                <p style={{ fontSize: '1rem', opacity: 0.9 }}>
                  Full-length narratives, web series, and cinematic experiences built for theaters and streaming.
                </p>
              </div>
            </div>
          </div>

          {/* Portfolio Video Section - Different Placement */}
          <div className="row align-items-center">
            <div className="col-lg-5">
              <h3 style={{ 
                fontSize: '2.2rem', 
                fontWeight: 'bold', 
                color: '#333',
                marginBottom: '20px'
              }}>
                Our Process
              </h3>
              <div style={{ marginBottom: '30px' }}>
                <h5 style={{ color: '#556b2f', fontWeight: 'bold', marginBottom: '10px' }}>
                  🔥 Find the Fire
                </h5>
                <p style={{ color: '#666', marginBottom: '20px' }}>
                  Every story has a heartbeat. We dig until we find it — the emotion, the conflict, the hook.
                </p>
                
                <h5 style={{ color: '#556b2f', fontWeight: 'bold', marginBottom: '10px' }}>
                  ⚡ Shape the Vision
                </h5>
                <p style={{ color: '#666', marginBottom: '20px' }}>
                  Concepts become scripts. Scripts become storyboards. Every element serves the story.
                </p>
                
                <h5 style={{ color: '#556b2f', fontWeight: 'bold', marginBottom: '10px' }}>
                  🎯 Execute with Precision
                </h5>
                <p style={{ color: '#666' }}>
                  Production, post, delivery. Fast when needed, timeless when it counts.
                </p>
              </div>
            </div>
            <div className="col-lg-7">
              <div style={{ position: 'relative', borderRadius: '15px', overflow: 'hidden' }}>
                {portfolioVideoLoaded && portfolioVideoUrl ? (
                  <video
                    ref={portfolioVideoRef}
                    style={{
                      width: '100%',
                      height: '400px',
                      objectFit: 'cover'
                    }}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    controls={false}
                  >
                    <source src={portfolioVideoUrl} type="video/mp4" />
                  </video>
                ) : (
                  <div style={{
                    width: '100%',
                    height: '400px',
                    backgroundColor: '#f0f0f0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '15px'
                  }}>
                    <div>🎬 Loading portfolio...</div>
                  </div>
                )}
              </div>
            </div>
          </div>

        </div>
      </section>

  

      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </>
  );
};

export default FeaturesPage;
