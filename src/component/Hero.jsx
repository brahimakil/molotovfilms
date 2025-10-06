import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { ref, getDownloadURL } from "firebase/storage";
import { storage } from "../firebase/config";

const Hero = () => {
  const [videoUrl, setVideoUrl] = useState(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    const loadVideo = async () => {
      try {
        const cacheKey = 'about_hero_video_url';
        const cacheTimeKey = 'about_hero_video_timestamp';
        const CACHE_DURATION = 3600000; // 1 hour

        // Check cache first
        const cachedUrl = localStorage.getItem(cacheKey);
        const cachedTime = localStorage.getItem(cacheTimeKey);
        const now = Date.now();

        if (cachedUrl && cachedTime && (now - parseInt(cachedTime)) < CACHE_DURATION) {
          setVideoUrl(cachedUrl);
          setVideoLoaded(true);
          return;
        }

        // Fetch from Firebase with timeout
        const videoRef = ref(storage, 'aboutus/Studio Showreel.mp4');
        
        const urlPromise = getDownloadURL(videoRef);
        const timeoutPromise = new Promise((_, reject) => 
          setTimeout(() => reject(new Error('Timeout')), 10000)
        );

        const url = await Promise.race([urlPromise, timeoutPromise]);
        
        // Cache the URL
        localStorage.setItem(cacheKey, url);
        localStorage.setItem(cacheTimeKey, now.toString());
        
        setVideoUrl(url);
        setVideoLoaded(true);
      } catch (error) {
        console.error('Error loading hero video:', error);
        setVideoLoaded(true); // Prevent hanging
      }
    };

    loadVideo();
  }, []);

  const heroStyles = {
    videoHeroBanner: {
      position: 'relative',
      height: '70vh',
      minHeight: '500px',
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
      background: 'rgba(0, 0, 0, 0.4)',
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
      maxWidth: '900px'
    },
    heroTitle: {
      fontSize: '3.5rem',
      fontWeight: 700,
      marginBottom: '1.5rem',
      textShadow: '3px 3px 6px rgba(0, 0, 0, 0.8)',
      lineHeight: '1.2',
      color: '#fff'
    },
    heroSubtitle: {
      fontSize: '1.35rem',
      marginBottom: '2.5rem',
      opacity: 0.95,
      textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
      color: '#fff',
      lineHeight: '1.6'
    },
    heroButtons: {
      marginTop: '2rem',
      display: 'flex',
      justifyContent: 'center',
      gap: '20px',
      flexWrap: 'wrap'
    },
    loadingPlaceholder: {
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#000',
      color: '#fff',
      fontSize: '1.2rem'
    }
  };

  return (
    <section style={heroStyles.videoHeroBanner}>
      <div style={heroStyles.videoContainer}>
        {videoLoaded && videoUrl ? (
          <video
            style={heroStyles.heroVideo}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          >
            <source src={videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <div style={heroStyles.loadingPlaceholder}>
            <span>Loading...</span>
          </div>
        )}
        
        {/* Dark overlay for better text visibility */}
        <div style={heroStyles.videoOverlay}></div>
        
        {/* Hero Content */}
        <div style={heroStyles.heroContent}>
          <h1 style={heroStyles.heroTitle}>
            WE MAKE FILMS PEOPLE REMEMBER.
          </h1>
          <p style={heroStyles.heroSubtitle}>
            Studio-grade scale. Art-house nerve. Stories that refuse to vanish.
          </p>
          
          <div style={heroStyles.heroButtons}>
            <Link to="/contuct-us" className="sara-btn">
              Get in Touch
            </Link>
            <Link 
              to="/services" 
              className="sara-btn__border"
              style={{
                color: '#fff',
                borderColor: '#fff',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.color = '#6bd723';
                e.target.style.borderColor = '#6bd723';
                e.target.style.background = 'transparent';
              }}
              onMouseLeave={(e) => {
                e.target.style.color = '#fff';
                e.target.style.borderColor = '#fff';
                e.target.style.background = 'transparent';
              }}
            >
              Learn more
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
