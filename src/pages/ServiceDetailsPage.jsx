import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { storage } from "../firebase/config";
import { ref, getDownloadURL } from 'firebase/storage';

// Import images
// import s3Image from "../assets/images/s-3.webp"; // Remove this line

const ServiceDetailsPage = () => {
  const [videoUrl, setVideoUrl] = useState('');
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);

  // Add state for the Low Budget Heist video
  const [heistVideoUrl, setHeistVideoUrl] = useState('');
  const [heistVideoLoaded, setHeistVideoLoaded] = useState(false);
  const [heistVideoError, setHeistVideoError] = useState(false);
  const [shouldLoadHeistVideo, setShouldLoadHeistVideo] = useState(false);

  // Add state for the Low Budget Heist2 video
  const [heist2VideoUrl, setHeist2VideoUrl] = useState('');
  const [heist2VideoLoaded, setHeist2VideoLoaded] = useState(false);
  const [heist2VideoError, setHeist2VideoError] = useState(false);
  const [shouldLoadHeist2Video, setShouldLoadHeist2Video] = useState(false);

  // Add state for the main video (replacing mainImage)
  const [mainVideoUrl, setMainVideoUrl] = useState('');
  const [mainVideoLoaded, setMainVideoLoaded] = useState(false);
  const [mainVideoError, setMainVideoError] = useState(false);
  const [shouldLoadMainVideo, setShouldLoadMainVideo] = useState(false);

  // Add state for the s3 video (replacing s3Image)
  const [s3VideoUrl, setS3VideoUrl] = useState('');
  const [s3VideoLoaded, setS3VideoLoaded] = useState(false);
  const [s3VideoError, setS3VideoError] = useState(false);
  const [shouldLoadS3Video, setShouldLoadS3Video] = useState(false);

  const videoRef = useRef(null);
  const heroRef = useRef(null);
  const heistVideoRef = useRef(null);
  const heist2VideoRef = useRef(null);
  const mainVideoRef = useRef(null);
  const s3VideoRef = useRef(null);

  // Check cache immediately and load video header first
  useEffect(() => {
    const cacheKey = 'service_details_hero_video_url';
    const cacheTimeKey = 'service_details_hero_video_timestamp';
    const cacheExpiration = 24 * 60 * 60 * 1000; // 24 hours
    
    const cachedUrl = localStorage.getItem(cacheKey);
    const cachedTime = localStorage.getItem(cacheTimeKey);
    const now = Date.now();
    
    if (cachedUrl && cachedTime && (now - parseInt(cachedTime)) < cacheExpiration) {
      console.log('Service Details hero video loaded instantly from cache');
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
      const cacheKey = 'service_details_hero_video_url';
      const cacheTimeKey = 'service_details_hero_video_timestamp';
      
      try {
        console.log('Fetching Service Details hero video from Firebase Storage');
        
        // Try to get optimized version first, fallback to original
        let videoPath = 'servicedetails(reels..)/reels section-optimized.mp4';
        
        const videoRefFirebase = ref(storage, videoPath);
        
        try {
          const url = await getDownloadURL(videoRefFirebase);
          
          // Cache the URL and timestamp
          localStorage.setItem(cacheKey, url);
          localStorage.setItem(cacheTimeKey, Date.now().toString());
          
          setVideoUrl(url);
          setVideoLoaded(true);
          console.log('Service Details hero video loaded and cached successfully');
        } catch (optimizedError) {
          console.log('Optimized version not found, falling back to original');
          const fallbackRef = ref(storage, 'servicedetails(reels..)/reels section.mp4');
          const fallbackUrl = await getDownloadURL(fallbackRef);
          
          // Cache the fallback URL and timestamp
          localStorage.setItem(cacheKey, fallbackUrl);
          localStorage.setItem(cacheTimeKey, Date.now().toString());
          
          setVideoUrl(fallbackUrl);
          setVideoLoaded(true);
          console.log('Service Details hero video (fallback) loaded and cached successfully');
        }
        
      } catch (error) {
        console.error('Error loading Service Details hero video:', error);
        setVideoError(true);
        setVideoLoaded(false);
        
        // Clear any invalid cached data
        localStorage.removeItem(cacheKey);
        localStorage.removeItem(cacheTimeKey);
      }
    };

    loadVideo();
  }, [shouldLoadVideo, videoLoaded]);

  // Add useEffect for checking heist video cache
  useEffect(() => {
    const cacheKey = 'heist_video_url';
    const cacheTimeKey = 'heist_video_timestamp';
    const cacheExpiration = 24 * 60 * 60 * 1000; // 24 hours
    
    const cachedUrl = localStorage.getItem(cacheKey);
    const cachedTime = localStorage.getItem(cacheTimeKey);
    const now = Date.now();
    
    if (cachedUrl && cachedTime && (now - parseInt(cachedTime)) < cacheExpiration) {
      console.log('Heist video loaded instantly from cache');
      setHeistVideoUrl(cachedUrl);
      setHeistVideoLoaded(true);
    } else {
      // Load when needed
      setShouldLoadHeistVideo(true);
    }
  }, []);

  // Add useEffect for loading heist video
  useEffect(() => {
    if (!shouldLoadHeistVideo || heistVideoLoaded) return;

    const loadHeistVideo = async () => {
      const cacheKey = 'heist_video_url';
      const cacheTimeKey = 'heist_video_timestamp';
      
      try {
        console.log('Fetching Heist video from Firebase Storage');
        
        // Try to get optimized version first, fallback to original
        let videoPath = 'servicedetails(reels..)/Low Budget Heist website 1-optimized.mp4';
        
        const videoRefFirebase = ref(storage, videoPath);
        
        try {
          const url = await getDownloadURL(videoRefFirebase);
          
          // Cache the URL and timestamp
          localStorage.setItem(cacheKey, url);
          localStorage.setItem(cacheTimeKey, Date.now().toString());
          
          setHeistVideoUrl(url);
          setHeistVideoLoaded(true);
          console.log('Heist video loaded and cached successfully');
        } catch (optimizedError) {
          console.log('Optimized version not found, falling back to original');
          const fallbackRef = ref(storage, 'servicedetails(reels..)/Low Budget Heist website 1.mp4');
          const fallbackUrl = await getDownloadURL(fallbackRef);
          
          // Cache the fallback URL and timestamp
          localStorage.setItem(cacheKey, fallbackUrl);
          localStorage.setItem(cacheTimeKey, Date.now().toString());
          
          setHeistVideoUrl(fallbackUrl);
          setHeistVideoLoaded(true);
          console.log('Heist video (fallback) loaded and cached successfully');
        }
        
      } catch (error) {
        console.error('Error loading Heist video:', error);
        setHeistVideoError(true);
        setHeistVideoLoaded(false);
        
        // Clear any invalid cached data
        localStorage.removeItem(cacheKey);
        localStorage.removeItem(cacheTimeKey);
      }
    };

    loadHeistVideo();
  }, [shouldLoadHeistVideo, heistVideoLoaded]);

  // Add useEffect for checking heist2 video cache
  useEffect(() => {
    const cacheKey = 'heist2_video_url';
    const cacheTimeKey = 'heist2_video_timestamp';
    const cacheExpiration = 24 * 60 * 60 * 1000; // 24 hours
    
    const cachedUrl = localStorage.getItem(cacheKey);
    const cachedTime = localStorage.getItem(cacheTimeKey);
    const now = Date.now();
    
    if (cachedUrl && cachedTime && (now - parseInt(cachedTime)) < cacheExpiration) {
      console.log('Heist2 video loaded instantly from cache');
      setHeist2VideoUrl(cachedUrl);
      setHeist2VideoLoaded(true);
    } else {
      // Load when needed
      setShouldLoadHeist2Video(true);
    }
  }, []);

  // Add useEffect for loading heist2 video
  useEffect(() => {
    if (!shouldLoadHeist2Video || heist2VideoLoaded) return;

    const loadHeist2Video = async () => {
      const cacheKey = 'heist2_video_url';
      const cacheTimeKey = 'heist2_video_timestamp';
      
      try {
        console.log('Fetching Heist2 video from Firebase Storage');
        
        // Try to get optimized version first, fallback to original
        let videoPath = 'servicedetails(reels..)/Low Budget Heist2-optimized.mp4';
        
        const videoRefFirebase = ref(storage, videoPath);
        
        try {
          const url = await getDownloadURL(videoRefFirebase);
          
          // Cache the URL and timestamp
          localStorage.setItem(cacheKey, url);
          localStorage.setItem(cacheTimeKey, Date.now().toString());
          
          setHeist2VideoUrl(url);
          setHeist2VideoLoaded(true);
          console.log('Heist2 video loaded and cached successfully');
        } catch (optimizedError) {
          console.log('Optimized version not found, falling back to original');
          const fallbackRef = ref(storage, 'servicedetails(reels..)/Low Budget Heist2.mp4');
          const fallbackUrl = await getDownloadURL(fallbackRef);
          
          // Cache the fallback URL and timestamp
          localStorage.setItem(cacheKey, fallbackUrl);
          localStorage.setItem(cacheTimeKey, Date.now().toString());
          
          setHeist2VideoUrl(fallbackUrl);
          setHeist2VideoLoaded(true);
          console.log('Heist2 video (fallback) loaded and cached successfully');
        }
        
      } catch (error) {
        console.error('Error loading Heist2 video:', error);
        setHeist2VideoError(true);
        setHeist2VideoLoaded(false);
        
        // Clear any invalid cached data
        localStorage.removeItem(cacheKey);
        localStorage.removeItem(cacheTimeKey);
      }
    };

    loadHeist2Video();
  }, [shouldLoadHeist2Video, heist2VideoLoaded]);

  // Add useEffect for checking main video cache
  useEffect(() => {
    const cacheKey = 'main_video_url';
    const cacheTimeKey = 'main_video_timestamp';
    const cacheExpiration = 24 * 60 * 60 * 1000; // 24 hours
    
    const cachedUrl = localStorage.getItem(cacheKey);
    const cachedTime = localStorage.getItem(cacheTimeKey);
    const now = Date.now();
    
    if (cachedUrl && cachedTime && (now - parseInt(cachedTime)) < cacheExpiration) {
      console.log('Main video loaded instantly from cache');
      setMainVideoUrl(cachedUrl);
      setMainVideoLoaded(true);
    } else {
      // Load when needed
      setShouldLoadMainVideo(true);
    }
  }, []);

  // Add useEffect for loading main video
  useEffect(() => {
    if (!shouldLoadMainVideo || mainVideoLoaded) return;

    const loadMainVideo = async () => {
      const cacheKey = 'main_video_url';
      const cacheTimeKey = 'main_video_timestamp';
      
      try {
        console.log('Fetching Main video from Firebase Storage');
        
        // Try to get optimized version first, fallback to original
        let videoPath = 'servicedetails(reels..)/videoinplaceofimage-optimized.mp4';
        
        const videoRefFirebase = ref(storage, videoPath);
        
        try {
          const url = await getDownloadURL(videoRefFirebase);
          
          // Cache the URL and timestamp
          localStorage.setItem(cacheKey, url);
          localStorage.setItem(cacheTimeKey, Date.now().toString());
          
          setMainVideoUrl(url);
          setMainVideoLoaded(true);
          console.log('Main video loaded and cached successfully');
        } catch (optimizedError) {
          console.log('Optimized version not found, falling back to original');
          const fallbackRef = ref(storage, 'servicedetails(reels..)/videoinplaceofimage.mp4');
          const fallbackUrl = await getDownloadURL(fallbackRef);
          
          // Cache the fallback URL and timestamp
          localStorage.setItem(cacheKey, fallbackUrl);
          localStorage.setItem(cacheTimeKey, Date.now().toString());
          
          setMainVideoUrl(fallbackUrl);
          setMainVideoLoaded(true);
          console.log('Main video (fallback) loaded and cached successfully');
        }
        
      } catch (error) {
        console.error('Error loading Main video:', error);
        setMainVideoError(true);
        setMainVideoLoaded(false);
        
        // Clear any invalid cached data
        localStorage.removeItem(cacheKey);
        localStorage.removeItem(cacheTimeKey);
      }
    };

    loadMainVideo();
  }, [shouldLoadMainVideo, mainVideoLoaded]);

  // Add useEffect for checking s3 video cache
  useEffect(() => {
    const cacheKey = 's3_video_url';
    const cacheTimeKey = 's3_video_timestamp';
    const cacheExpiration = 24 * 60 * 60 * 1000; // 24 hours
    
    const cachedUrl = localStorage.getItem(cacheKey);
    const cachedTime = localStorage.getItem(cacheTimeKey);
    const now = Date.now();
    
    if (cachedUrl && cachedTime && (now - parseInt(cachedTime)) < cacheExpiration) {
      console.log('S3 video loaded instantly from cache');
      setS3VideoUrl(cachedUrl);
      setS3VideoLoaded(true);
    } else {
      // Load when needed
      setShouldLoadS3Video(true);
    }
  }, []);

  // Add useEffect for loading s3 video
  useEffect(() => {
    if (!shouldLoadS3Video || s3VideoLoaded) return;

    const loadS3Video = async () => {
      const cacheKey = 's3_video_url';
      const cacheTimeKey = 's3_video_timestamp';
      
      try {
        console.log('Fetching S3 video from Firebase Storage');
        
        // Try to get optimized version first, fallback to original
        let videoPath = 'servicedetails(reels..)/low budget heist3-optimized.mp4';
        
        const videoRefFirebase = ref(storage, videoPath);
        
        try {
          const url = await getDownloadURL(videoRefFirebase);
          
          // Cache the URL and timestamp
          localStorage.setItem(cacheKey, url);
          localStorage.setItem(cacheTimeKey, Date.now().toString());
          
          setS3VideoUrl(url);
          setS3VideoLoaded(true);
          console.log('S3 video loaded and cached successfully');
        } catch (optimizedError) {
          console.log('Optimized version not found, falling back to original');
          const fallbackRef = ref(storage, 'servicedetails(reels..)/low budget heist3.mp4');
          const fallbackUrl = await getDownloadURL(fallbackRef);
          
          // Cache the fallback URL and timestamp
          localStorage.setItem(cacheKey, fallbackUrl);
          localStorage.setItem(cacheTimeKey, Date.now().toString());
          
          setS3VideoUrl(fallbackUrl);
          setS3VideoLoaded(true);
          console.log('S3 video (fallback) loaded and cached successfully');
        }
        
      } catch (error) {
        console.error('Error loading S3 video:', error);
        setS3VideoError(true);
        setS3VideoLoaded(false);
        
        // Clear any invalid cached data
        localStorage.removeItem(cacheKey);
        localStorage.removeItem(cacheTimeKey);
      }
    };

    loadS3Video();
  }, [shouldLoadS3Video, s3VideoLoaded]);

  const heroStyles = {
    videoHeroBanner: {
      position: 'relative',
      height: '60vh', // Changed back from 100vh to 60vh
      minHeight: '400px', // Changed back from 100vh to 400px
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
      background: 'rgba(0, 0, 0, 0.6)', // Slightly darker overlay for smaller section
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
      maxWidth: '700px' // Slightly smaller max width
    },
    heroTitle: {
      fontSize: '2.8rem', // Reduced from 3.5rem
      fontWeight: 700,
      marginBottom: '0.8rem', // Reduced margin
      textShadow: '3px 3px 6px rgba(0, 0, 0, 0.7)',
      lineHeight: '1.2'
    },
    heroSubtitle: {
      fontSize: '1.1rem', // Reduced from 1.25rem
      marginBottom: '1.5rem', // Reduced margin
      opacity: 0.95,
      textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)'
    },
    breadcrumb: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '10px',
      marginTop: '1rem',
      fontSize: '1rem', // Slightly smaller
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
    { label: "Service Details", link: null },
  ];

  return (
    <>
      {/* Hero Video Section - Full Height like Home Page */}
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
              onLoadStart={() => console.log('Service Details video loading started')}
              onCanPlayThrough={() => console.log('Service Details video can play through')}
              onError={(e) => {
                console.error('Service Details video playback error:', e);
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
                <div>Service Details</div>
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
              <div style={{ fontSize: '18px', marginBottom: '10px' }}>
                {localStorage.getItem('service_details_hero_video_url') ? 'Loading from cache...' : 'Loading...'}
              </div>
              <div style={{ fontSize: '14px', opacity: 0.8 }}>Preparing your experience</div>
            </div>
          )}
          
          {/* Video Overlay */}
          <div style={heroStyles.videoOverlay}></div>
          
          {/* Hero Content */}
          <div style={heroStyles.heroContent}>
            <h1 style={heroStyles.heroTitle}>Service Details</h1>
            <p style={heroStyles.heroSubtitle}>
              Discover our comprehensive range of film and video production services
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

      <section className="service_details">
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-lg-7">
              <div className="service_details_head">
                <h2 className="text_5xl">
                  <span style={{
                    background: 'linear-gradient(232.42deg, #556b2f 1.36%, #6b8e23 99.95%)', // Changed to oily green
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    fontWeight: '700'
                  }}>
                POP. CUT. ROLL. REPEAT.
                  </span>
                  <br />
                  Big ideas. Brighter execution. Films that shout.
                </h2>
              </div>
              <div className="service_details_thumb">
                {/* Replace mainImage with main video */}
                {mainVideoLoaded && mainVideoUrl ? (
                  <video
                    ref={mainVideoRef}
                    style={{
                      width: '100%',
                      height: '450px',
                      objectFit: 'cover',
                      borderRadius: '8px'
                    }}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    controls={false}
                    onLoadStart={() => console.log('Main video loading started')}
                    onCanPlayThrough={() => console.log('Main video can play through')}
                    onError={(e) => {
                      console.error('Main video playback error:', e);
                      setMainVideoError(true);
                    }}
                  >
                    <source src={mainVideoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : mainVideoError ? (
                  <div style={{
                    width: '100%',
                    height: '450px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#f0f0f0',
                    borderRadius: '8px',
                    color: '#666'
                  }}>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ fontSize: '3rem', marginBottom: '15px' }}>🎬</div>
                      <div style={{ fontSize: '18px' }}>Video unavailable</div>
                    </div>
                  </div>
                ) : (
                  <div style={{
                    width: '100%',
                    height: '450px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#f8f8f8',
                    borderRadius: '8px',
                    color: '#666'
                  }}>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{
                        width: '40px',
                        height: '40px',
                        border: '3px solid #6B7A47',
                        borderTop: '3px solid transparent',
                        borderRadius: '50%',
                        animation: 'spin 1s linear infinite',
                        margin: '0 auto 15px'
                      }} />
                      <div style={{ fontSize: '16px' }}>Loading video...</div>
                    </div>
                  </div>
                )}
              </div>
              <div className="service_details_txt">
                <p className="text_lg">
                We’re a production house that paints in light and sound  militant about craft, reckless about boring.

                </p>
              </div>
              <div className="row">
                <div className="col-lg-4">
                  <div className="service_details_item">
                    <span className="icon">
                      <svg
                        width="40"
                        height="40"
                        viewBox="0 0 40 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M29.3511 0H10.6667C3.85778 0 0 3.85778 0 10.6667V29.3333C0 36.1422 3.85778 40 10.6667 40H29.3511C36.16 40 40 36.1422 40 29.3333V10.6667C40 3.85778 36.16 0 29.3511 0Z"
                          fill="url(#paint0_linear_2489_22109)"
                        />
                        <path
                          d="M8.5 12C7.67157 12 7 12.6716 7 13.5V26.5C7 27.3284 7.67157 28 8.5 28H31.5C32.3284 28 33 27.3284 33 26.5V13.5C33 12.6716 32.3284 12 31.5 12H8.5ZM12 16H28V18H12V16ZM12 20H24V22H12V20ZM12 24H20V26H12V24Z"
                          fill="white"
                        />
                        <path
                          d="M28 8C29.1046 8 30 8.89543 30 10C30 11.1046 29.1046 12 28 12C26.8954 12 26 11.1046 26 10C26 8.89543 26.8954 8 28 8Z"
                          fill="white"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_2489_22109"
                            x1="1.13475"
                            y1="33.8462"
                            x2="44.4562"
                            y2="28.8605"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#556b2f" /> {/* Changed from #6427FF */}
                            <stop offset="1" stopColor="#6b8e23" /> {/* Changed from #7D51ED */}
                          </linearGradient>
                        </defs>
                      </svg>
                    </span>
                    <Link to="#" className="text_xl">
                      Pre-Production
                    </Link>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="service_details_item">
                    <span className="icon">
                      <svg
                        width="37"
                        height="46"
                        viewBox="0 0 37 46"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M29.3265 30.1924H7.99318C1.18425 30.1924 0 31.7507 0 37.984C0 44.2197 1.38979 45.833 7.99318 45.833H29.3265C35.9299 45.833 37.3197 44.277 37.3197 38.0413C37.3197 31.8057 35.9299 30.1924 29.3265 30.1924Z"
                          fill="url(#paint0_linear_production)"
                        />
                        <path
                          d="M8.5 2C5.46243 2 3 4.46243 3 7.5V22.5C3 25.5376 5.46243 28 8.5 28H28.5C31.5376 28 34 25.5376 34 22.5V7.5C34 4.46243 31.5376 2 28.5 2H8.5Z"
                          fill="url(#paint1_linear_production)"
                        />
                        <path
                          d="M12 8L26 15L12 22V8Z"
                          fill="white"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_production"
                            x1="1.0398"
                            y1="43.4268"
                            x2="38.5348"
                            y2="33.3146"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#556b2f" /> {/* Changed from #6427FF */}
                            <stop offset="1" stopColor="#6b8e23" /> {/* Changed from #7D51ED */}
                          </linearGradient>
                          <linearGradient
                            id="paint1_linear_production"
                            x1="6.8873"
                            y1="20.5235"
                            x2="33.1563"
                            y2="17.5003"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#556b2f" /> {/* Changed from #6427FF */}
                            <stop offset="1" stopColor="#6b8e23" /> {/* Changed from #7D51ED */}
                          </linearGradient>
                        </defs>
                      </svg>
                    </span>
                    <Link to="#" className="text_xl">
                      Production
                    </Link>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="service_details_item">
                    <span className="icon">
                      <svg
                        width="51"
                        height="41"
                        viewBox="0 0 51 41"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2 2C0.895431 2 0 2.89543 0 4V37C0 38.1046 0.895431 39 2 39H49C50.1046 39 51 38.1046 51 37V4C51 2.89543 50.1046 2 49 2H2Z"
                          fill="url(#paint0_linear_postproduction)"
                        />
                        <path
                          d="M6 8H45V33H6V8Z"
                          fill="white"
                        />
                        <path
                          d="M8 10H43V12H8V10ZM8 14H39V16H8V14ZM8 18H35V20H8V18ZM8 22H31V24H8V22ZM8 26H27V28H8V26ZM8 30H23V32H8V30Z"
                          fill="url(#paint1_linear_postproduction)"
                        />
                        <path
                          d="M45 10C46.1046 10 47 10.8954 47 12C47 13.1046 46.1046 14 45 14C43.8954 14 43 13.1046 43 12C43 10.8954 43.8954 10 45 10Z"
                          fill="white"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_postproduction"
                            x1="1.44681"
                            y1="34.5231"
                            x2="56.2784"
                            y2="26.6352"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#556b2f" /> {/* Changed from #6427FF */}
                            <stop offset="1" stopColor="#6b8e23" /> {/* Changed from #7D51ED */}
                          </linearGradient>
                          <linearGradient
                            id="paint1_linear_postproduction"
                            x1="19.6373"
                            y1="24.6508"
                            x2="33.0801"
                            y2="23.0943"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#556b2f" /> {/* Changed from #6427FF */}
                            <stop offset="1" stopColor="#6b8e23" /> {/* Changed from #7D51ED */}
                          </linearGradient>
                        </defs>
                      </svg>
                    </span>
                    <Link to="#" className="text_xl">
                      Post-Production
                    </Link>
                  </div>
                </div>
              </div>

              <div className="service_details_txt">
                <p className="text_lg">
                Imagine a comic-strip panel where every frame is a film poster. That’s our approach: theatrical boldness, cinematic discipline. We take projects from scribbles on a napkin to festival-ready masters — with scriptsmiths, scouts, crews and mixers who love the weird work as much as the clean one.
                </p>
              </div>

              <div className="row">
                <div className="col-lg-6">
                  <div className="our_goal_item">
                    <h2>Our Goal </h2>
                    <ul>
                      <li>
                        <span>
                          <svg
                            width="14"
                            height="12"
                            viewBox="0 0 14 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1 6.76923L5.8 10.2308L13 1"
                              stroke="url(#paint0_linear_2489_22259)"
                              strokeWidth="2"
                              strokeLinecap="round"
                            />
                            <defs>
                              <linearGradient
                                id="paint0_linear_2489_22259"
                                x1="1.34043"
                                y1="8.81065"
                                x2="14.2207"
                                y2="6.88363"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop stopColor="#556b2f" /> {/* Changed from #6427FF */}
                                <stop offset="1" stopColor="#6b8e23" /> {/* Changed from #7D51ED */}
                              </linearGradient>
                            </defs>
                          </svg>
                        </span>
                        Blow up mediocrity with films, reels, and shorts that ignite.
                      </li>
                      <li>
                        <span>
                          <svg
                            width="14"
                            height="12"
                            viewBox="0 0 14 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1 6.76923L5.8 10.2308L13 1"
                              stroke="url(#paint0_linear_2489_22259_2)"
                              strokeWidth="2"
                              strokeLinecap="round"
                            />
                            <defs>
                              <linearGradient
                                id="paint0_linear_2489_22259_2"
                                x1="1.34043"
                                y1="8.81065"
                                x2="14.2207"
                                y2="6.88363"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop stopColor="#556b2f" /> {/* Changed from #6427FF */}
                                <stop offset="1" stopColor="#6b8e23" /> {/* Changed from #7D51ED */}
                              </linearGradient>
                            </defs>
                          </svg>
                        </span>
                        Craft cinema that refuses to be scrolled past.
                      </li>
                      <li>
                        <span>
                          <svg
                            width="14"
                            height="12"
                            viewBox="0 0 14 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1 6.76923L5.8 10.2308L13 1"
                              stroke="url(#paint0_linear_2489_22259_3)"
                              strokeWidth="2"
                              strokeLinecap="round"
                            />
                            <defs>
                              <linearGradient
                                id="paint0_linear_2489_22259_3"
                                x1="1.34043"
                                y1="8.81065"
                                x2="14.2207"
                                y2="6.88363"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop stopColor="#556b2f" /> {/* Changed from #6427FF */}
                                <stop offset="1" stopColor="#6b8e23" /> {/* Changed from #7D51ED */}
                              </linearGradient>
                            </defs>
                          </svg>
                        </span>
                        Turn ideas into weapons — precise, bold, unforgettable.
                      </li>
                      <li>
                        <span>
                          <svg
                            width="14"
                            height="12"
                            viewBox="0 0 14 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1 6.76923L5.8 10.2308L13 1"
                              stroke="url(#paint0_linear_2489_22259_4)"
                              strokeWidth="2"
                              strokeLinecap="round"
                            />
                            <defs>
                              <linearGradient
                                id="paint0_linear_2489_22259_4"
                                x1="1.34043"
                                y1="8.81065"
                                x2="14.2207"
                                y2="6.88363"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop stopColor="#556b2f" /> {/* Changed from #6427FF */}
                                <stop offset="1" stopColor="#6b8e23" /> {/* Changed from #7D51ED */}
                              </linearGradient>
                            </defs>
                          </svg>
                        </span>
                        Stay raw, stay cinematic, stay dangerous.
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="our_goal_item">
                    <h2>The Challenge</h2>
                    <p>
                    The industry runs on safe bets, empty trends, and fast churn.
Our challenge is to resist the bland, to carve beauty out of chaos, and to make every frame hit harder than the last.
We don’t adapt to platforms , we bend them.
We don’t follow timelines , we weaponize them.
At Molotov, every project is a strike , calculated, explosive, and built to leave a mark.
                    </p>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-6">
                  <div className="ratio_item">
                    <div className="ratio_item_text">
                      <h4 className="text_2xl">Success Ratio</h4>
                      <p>We’re best for our success work ration.</p>
                      <Link to="#"> Details </Link>
                    </div>

                    <div className="ratio_item_inner">
                      <h2 className="text_xl">91%</h2>
                      <span className="circel">
                        <svg
                          width="114"
                          height="114"
                          viewBox="0 0 114 114"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M18.6423 18.991C8.97248 28.7489 3 42.177 3 57C3 86.8234 27.1766 111 57 111C86.8234 111 111 86.8234 111 57C111 27.1766 86.8234 3 57 3"
                            stroke="url(#paint0_linear_2489_22174)"
                            strokeWidth="6"
                            strokeLinecap="round"
                          />
                          <defs>
                            <linearGradient
                              id="paint0_linear_2489_22174"
                              x1="6.06383"
                              y1="94.3846"
                              x2="123.032"
                              y2="80.9234"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stopColor="#556b2f" /> {/* Changed from #6427FF */}
                              <stop offset="1" stopColor="#6b8e23" /> {/* Changed from #7D51ED */}
                            </linearGradient>
                          </defs>
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="ratio_item">
                    <div className="ratio_item_text">
                      <h4 className="text_2xl">Failure Ratio</h4>
                      <p>We’ve very low failur ratio in our work history.</p>
                      <Link to="#"> Details </Link>
                    </div>
                    <div className="ratio_item_inner">
                      <h2 className="text_xl">9%</h2>
                      <span className="circel two">
                        <svg
                          width="57"
                          height="109"
                          viewBox="0 0 57 109"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M23.2505 105.752C41.4363 97.0635 54 78.4989 54 57C54 27.1766 29.8234 3 0 3"
                            stroke="url(#paint0_linear_2489_22164)"
                            strokeWidth="6"
                            strokeLinejoin="round"
                          />
                          <defs>
                            <linearGradient
                              id="paint0_linear_2489_22164"
                              x1="-4.5"
                              y1="3"
                              x2="70.6916"
                              y2="31.9186"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stopColor="#FF172E" />
                              <stop offset="1" stopColor="#FF868B" />
                            </linearGradient>
                          </defs>
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row mg_top_40px">
                <div className="col-lg-6 col-md-6">
                  <div className="s_thumb_main">
                    <div className="s_thumb">
                      {/* Replace s3Image with s3 video */}
                      {s3VideoLoaded && s3VideoUrl ? (
                        <video
                          ref={s3VideoRef}
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            borderRadius: '8px'
                          }}
                          autoPlay
                          muted
                          loop
                          playsInline
                          preload="metadata"
                          controls={false}
                          onLoadStart={() => console.log('S3 video loading started')}
                          onCanPlayThrough={() => console.log('S3 video can play through')}
                          onError={(e) => {
                            console.error('S3 video playback error:', e);
                            setS3VideoError(true);
                          }}
                        >
                          <source src={s3VideoUrl} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      ) : s3VideoError ? (
                        <div style={{
                          width: '100%',
                          height: '300px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          backgroundColor: '#f0f0f0',
                          borderRadius: '8px',
                          color: '#666'
                        }}>
                          <div style={{ textAlign: 'center' }}>
                            <div style={{ fontSize: '2rem', marginBottom: '10px' }}>🎬</div>
                            <div>Video unavailable</div>
                          </div>
                        </div>
                      ) : (
                        <div style={{
                          width: '100%',
                          height: '300px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          backgroundColor: '#f8f8f8',
                          borderRadius: '8px',
                          color: '#666'
                        }}>
                          <div style={{ textAlign: 'center' }}>
                            <div style={{
                              width: '30px',
                              height: '30px',
                              border: '3px solid #6B7A47',
                              borderTop: '3px solid transparent',
                              borderRadius: '50%',
                              animation: 'spin 1s linear infinite',
                              margin: '0 auto 10px'
                            }} />
                            <div style={{ fontSize: '14px' }}>Loading video...</div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="s_thumb_main">
                    <div className="s-thumb-two">
                      {heistVideoLoaded && heistVideoUrl ? (
                        <video
                          ref={heistVideoRef}
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            borderRadius: '8px'
                          }}
                          autoPlay
                          muted
                          loop
                          playsInline
                          preload="metadata"
                          controls={false}
                          onLoadStart={() => console.log('Heist video loading started')}
                          onCanPlayThrough={() => console.log('Heist video can play through')}
                          onError={(e) => {
                            console.error('Heist video playback error:', e);
                            setHeistVideoError(true);
                          }}
                        >
                          <source src={heistVideoUrl} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      ) : heistVideoError ? (
                        <div style={{
                          width: '100%',
                          height: '200px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          backgroundColor: '#f0f0f0',
                          borderRadius: '8px',
                          color: '#666'
                        }}>
                          <div style={{ textAlign: 'center' }}>
                            <div style={{ fontSize: '2rem', marginBottom: '10px' }}>🎬</div>
                            <div>Video unavailable</div>
                          </div>
                        </div>
                      ) : (
                        <div style={{
                          width: '100%',
                          height: '200px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          backgroundColor: '#f8f8f8',
                          borderRadius: '8px',
                          color: '#666'
                        }}>
                          <div style={{ textAlign: 'center' }}>
                            <div style={{
                              width: '30px',
                              height: '30px',
                              border: '3px solid #6B7A47',
                              borderTop: '3px solid transparent',
                              borderRadius: '50%',
                              animation: 'spin 1s linear infinite',
                              margin: '0 auto 10px'
                            }} />
                            <div style={{ fontSize: '14px' }}>Loading video...</div>
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="s-thumb-two three">
                      {heist2VideoLoaded && heist2VideoUrl ? (
                        <video
                          ref={heist2VideoRef}
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            borderRadius: '8px'
                          }}
                          autoPlay
                          muted
                          loop
                          playsInline
                          preload="metadata"
                          controls={false}
                          onLoadStart={() => console.log('Heist2 video loading started')}
                          onCanPlayThrough={() => console.log('Heist2 video can play through')}
                          onError={(e) => {
                            console.error('Heist2 video playback error:', e);
                            setHeist2VideoError(true);
                          }}
                        >
                          <source src={heist2VideoUrl} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      ) : heist2VideoError ? (
                        <div style={{
                          width: '100%',
                          height: '200px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          backgroundColor: '#f0f0f0',
                          borderRadius: '8px',
                          color: '#666'
                        }}>
                          <div style={{ textAlign: 'center' }}>
                            <div style={{ fontSize: '2rem', marginBottom: '10px' }}>🎬</div>
                            <div>Video unavailable</div>
                          </div>
                        </div>
                      ) : (
                        <div style={{
                          width: '100%',
                          height: '200px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          backgroundColor: '#f8f8f8',
                          borderRadius: '8px',
                          color: '#666'
                        }}>
                          <div style={{ textAlign: 'center' }}>
                            <div style={{
                              width: '30px',
                              height: '30px',
                              border: '3px solid #6B7A47',
                              borderTop: '3px solid transparent',
                              borderRadius: '50%',
                              animation: 'spin 1s linear infinite',
                              margin: '0 auto 10px'
                            }} />
                            <div style={{ fontSize: '14px' }}>Loading video...</div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-12">
                  <div className="s_text_main">
                    <h2>🎬 Easy Process, Big Impact</h2>
                    <p className="text_lg">
                    We keep it sharp, fast, and cinematic. No endless meetings, no empty talk — just fire on screen.
                    </p>
                    <ul>
                      <li>
                        <span>
                          <svg
                            width="16"
                            height="13"
                            viewBox="0 0 16 13"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1 6.37099L5.57333 11.467L14.72 1.66699"
                              stroke="#111827"
                              strokeWidth="2"
                              strokeLinecap="round"
                            />
                          </svg>
                        </span>
                         Find the Spark
                      </li>
                        <span style={{ marginLeft: '40px', display: 'block', fontSize: '16px', color: '#666', marginBottom: '15px' }}>
                        Every story has a pulse. We dig until we catch it — the problem, the vibe, the hook.
                        </span>

                      <li>
                        <span>
                          <svg
                            width="16"
                              height="16"
                              viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                                d="M8 1L10.5 6H15L11.5 9.5L13 15L8 12L3 15L4.5 9.5L1 6H5.5L8 1Z"
                                fill="url(#paint0_linear_vision)"
                                stroke="url(#paint1_linear_vision)"
                                strokeWidth="0.5"
                              />
                              <defs>
                                <linearGradient
                                  id="paint0_linear_vision"
                                  x1="1"
                                  y1="8"
                                  x2="15"
                                  y2="8"
                                  gradientUnits="userSpaceOnUse"
                                >
                                  <stop stopColor="#556b2f" /> {/* Changed from #6427FF */}
                                  <stop offset="1" stopColor="#6b8e23" /> {/* Changed from #7D51ED */}
                                </linearGradient>
                                <linearGradient
                                  id="paint1_linear_vision"
                                  x1="1"
                                  y1="8"
                                  x2="15"
                                  y2="8"
                                  gradientUnits="userSpaceOnUse"
                                >
                                  <stop stopColor="#556b2f" /> {/* Changed from #6427FF */}
                                  <stop offset="1" stopColor="#6b8e23" /> {/* Changed from #7D51ED */}
                                </linearGradient>
                              </defs>
                          </svg>
                        </span>
                           Shape the Vision
                      </li>
                        <span style={{ marginLeft: '40px', display: 'block', fontSize: '16px', color: '#666', marginBottom: '15px' }}>
                        Research, remix, and sharpen. Pop culture, history, street noise — it all feeds the frame.
                        </span>

                      <li>
                        <span>
                          <svg
                            width="16"
                              height="16"
                              viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                              <circle cx="8" cy="8" r="6" fill="none" stroke="url(#paint0_linear_fuse)" strokeWidth="1.5"/>
                            <path
                                d="M8 4V8L11 11"
                                stroke="url(#paint1_linear_fuse)"
                                strokeWidth="1.5"
                              strokeLinecap="round"
                            />
                              <circle cx="8" cy="8" r="1" fill="url(#paint2_linear_fuse)"/>
                              <path
                                d="M8 2L7 1M8 2L9 1M14 8L15 7M14 8L15 9M8 14L9 15M8 14L7 15M2 8L1 9M2 8L1 7"
                                stroke="url(#paint3_linear_fuse)"
                                strokeWidth="1"
                                strokeLinecap="round"
                              />
                              <defs>
                                <linearGradient
                                  id="paint0_linear_fuse"
                                  x1="2"
                                  y1="8"
                                  x2="14"
                                  y2="8"
                                  gradientUnits="userSpaceOnUse"
                                >
                                  <stop stopColor="#556b2f" /> {/* Changed from #6427FF */}
                                  <stop offset="1" stopColor="#6b8e23" /> {/* Changed from #7D51ED */}
                                </linearGradient>
                                <linearGradient
                                  id="paint1_linear_fuse"
                                  x1="8"
                                  y1="4"
                                  x2="11"
                                  y2="11"
                                  gradientUnits="userSpaceOnUse"
                                >
                                  <stop stopColor="#556b2f" /> {/* Changed from #6427FF */}
                                  <stop offset="1" stopColor="#6b8e23" /> {/* Changed from #7D51ED */}
                                </linearGradient>
                                <linearGradient
                                  id="paint2_linear_fuse"
                                  x1="7"
                                  y1="8"
                                  x2="9"
                                  y2="8"
                                  gradientUnits="userSpaceOnUse"
                                >
                                  <stop stopColor="#556b2f" /> {/* Changed from #6427FF */}
                                  <stop offset="1" stopColor="#6b8e23" /> {/* Changed from #7D51ED */}
                                </linearGradient>
                                <linearGradient
                                  id="paint3_linear_fuse"
                                  x1="1"
                                  y1="8"
                                  x2="15"
                                  y2="8"
                                  gradientUnits="userSpaceOnUse"
                                >
                                  <stop stopColor="#556b2f" /> {/* Changed from #6427FF */}
                                  <stop offset="1" stopColor="#6b8e23" /> {/* Changed from #7D51ED */}
                                </linearGradient>
                              </defs>
                          </svg>
                        </span>
                         Light the Fuse
                      </li>
                        <span style={{ marginLeft: '40px', display: 'block', fontSize: '16px', color: '#666', marginBottom: '15px' }}>
                        Plan it, shoot it, cut it. Fast when needed, timeless when it counts.                        </span>
                    </ul>
                    <p className="text_lg">
                      One touch of a red-hot stove is usually all we need to
                      avoid that kind of discomfort in quis future. The same
                      Duis aute irure dolor in reprehenderit. sunt in culpa qui
                      official deserunt mollit anim id avoid est laborum.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xxl-4 col-lg-5 res_mt">
              <div className="card_item">
                <h3 style={{
                  background: 'linear-gradient(232.42deg, #556b2f 1.36%, #6b8e23 99.95%)', // Changed to oily green
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontStyle: 'oblique 15deg',
                  fontWeight: '600'
                }}>
                  The Pitch Package
                </h3>
                <ul>
                  <li className="text_2xl">
                    Idea Spark <span style={{ color: '#daa520' }}>→ Concept & Development</span>
                  </li>
                  <li className="text_2xl">
                    Story Sketch <span style={{ color: '#daa520' }}>→ Pre-prep & Story</span>
                  </li>
                  <li className="text_2xl">
                    Faces & Voices <span style={{ color: '#daa520' }}>→ Casting & Talent</span>
                  </li>
                  <li className="text_2xl">
                    Scene Hunt <span style={{ color: '#daa520' }}>→ Locations & Permits</span>
                  </li>
                  <li className="text_2xl">
                    Frame & Flame <span style={{ color: '#daa520' }}>→ Cinematography & Lighting</span>
                  </li>
                  <li className="text_2xl">
                    Sound Check <span style={{ color: '#daa520' }}>→ Production Audio</span>
                  </li>
                  <li className="text_2xl">
                    Style & Skin <span style={{ color: '#daa520' }}>→ Design & Wardrobe</span>
                  </li>
                  <li className="text_2xl">
                    Action Day <span style={{ color: '#daa520' }}>→ Full Production</span>
                  </li>
                  <li className="text_2xl">
                    Cut & Flow <span style={{ color: '#daa520' }}>→ Editing</span>
                  </li>
                  <li className="text_2xl">
                    Color Pop <span style={{ color: '#daa520' }}>→ Grading & Finish</span>
                  </li>
                  <li className="text_2xl">
                    Motion Magic <span style={{ color: '#daa520' }}>→ VFX & Graphics</span>
                  </li>
                  <li className="text_2xl">
                    Sound Rush <span style={{ color: '#daa520' }}>→ Design & Score</span>
                  </li>  
                  <li className="text_2xl">
                    Hype Drop <span style={{ color: '#daa520' }}>→ Marketing & Release</span>
                  </li>
                  <li className="text_2xl">
                    Fest Pack <span style={{ color: '#daa520' }}>→ DCPs & Distribution</span>
                  </li>
                </ul>
              </div><br /><br /><br />

              <div className="card_item mg_top_30px">
                <h3>Tags</h3>
                <div className="tag_item">
                   <Link to="#" className="tag_btn">
                      Cinema 
                    </Link>
                    <Link to="#" className="tag_btn">
                      Film 
                    </Link>
                    <Link to="#" className="tag_btn">
                      Production 
                    </Link>
                    <Link to="#" className="tag_btn">
                      Script 
                    </Link>
                    <Link to="#" className="tag_btn">
                      Marketing 
                    </Link>
                    <Link to="#" className="tag_btn">
                      Reels 
                    </Link>
                    <Link to="#" className="tag_btn">
                      Social media 
                    </Link>
                    <Link to="#" className="tag_btn">
                      Movies 
                    </Link>
                    <Link to="#" className="tag_btn">
                      Ads
                    </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceDetailsPage;
