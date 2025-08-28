import React, { useState, useEffect } from "react";
import AbouUsTwo from "../component/AbouUsTwo";
import ChoseTwo from "../component/ChoseTwo";
import Working from "../component/Working";
import VideoComparison from "../component/VideoComparison";
import { storage } from "../firebase/config";
import { ref, getDownloadURL } from 'firebase/storage';

const AboutPage = () => {
  // Add loading state and preload optimization
  const [videoUrl, setVideoUrl] = useState('');
  const [videoLoading, setVideoLoading] = useState(true);

  useEffect(() => {
    const getVideoUrl = async () => {
      try {
        setVideoLoading(true);
        const videoRef = ref(storage, 'homevideo/cover vimeo.MP4');
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
          ) : null}
          
          {/* Video Overlay */}
          <div style={heroStyles.videoOverlay}></div>
          
          {/* Hero Content */}
          <div style={heroStyles.heroContent}>
            <h1 style={heroStyles.heroTitle}>
               We Create Films, <span style={{color: '#6B8E23'}}>Ads & Social Content</span> That Drive Impact
            </h1>
            <p style={heroStyles.heroSubtitle}>From cinematic commercials to viral Reels, we craft stories that capture attention and grow your brand across every platform.</p>
            <div style={heroStyles.heroButtons}>
              <a 
                href="#services" 
                style={{...heroStyles.btn, ...heroStyles.btnPrimary}}
              >
                 Let's Work 
              </a>
              
            </div>
          </div>
        </div>
      </section>

      <AbouUsTwo />
      <ChoseTwo addClass="inner_chose" />
      <Working />
      <VideoComparison />
    </div>
  );
};

export default AboutPage;
