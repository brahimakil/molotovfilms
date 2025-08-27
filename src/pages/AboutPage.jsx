import React, { useState, useEffect } from "react";
import AbouUsTwo from "../component/AbouUsTwo";
import ChoseTwo from "../component/ChoseTwo";
import Working from "../component/Working";
import Blog from "../component/BlogOne";
import { storage } from "../firebase/config";
import { ref, getDownloadURL } from 'firebase/storage';

const AboutPage = () => {
  const [videoUrl, setVideoUrl] = useState('');

  useEffect(() => {
    const getVideoUrl = async () => {
      try {
        const videoRef = ref(storage, 'homevideo/cover vimeo.mp4');
        const url = await getDownloadURL(videoRef);
        setVideoUrl(url);
      } catch (error) {
        console.error('Error getting video URL:', error);
      }
    };

    getVideoUrl();
  }, []);

  const heroStyles = {
    videoHeroBanner: {
      position: 'relative',
      height: '100vh',
      minHeight: '600px',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: '-80px', // Adjust based on your header height
      paddingTop: '80px'   // Add padding to compensate
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

  // Media query styles for mobile
  const isMobile = window.innerWidth <= 768;
  if (isMobile) {
    heroStyles.videoHeroBanner.height = '100vh';
    heroStyles.videoHeroBanner.minHeight = '500px';
    heroStyles.videoHeroBanner.marginTop = '-60px';
    heroStyles.videoHeroBanner.paddingTop = '60px';
    heroStyles.heroTitle.fontSize = '2.5rem';
    heroStyles.heroSubtitle.fontSize = '1.1rem';
    heroStyles.btn.padding = '12px 25px';
    heroStyles.btn.fontSize = '1rem';
    heroStyles.heroButtons.flexDirection = 'column';
    heroStyles.heroButtons.alignItems = 'center';
  }

  return (
    <>
      {/* Professional Video Hero Banner */}
      <section style={heroStyles.videoHeroBanner}>
        <div style={heroStyles.videoContainer}>
          {videoUrl && (
            <video
              style={heroStyles.heroVideo}
              autoPlay
              muted
              loop
              playsInline
            >
              <source src={videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
          
          {/* Video Overlay */}
          <div style={heroStyles.videoOverlay}></div>
          
          {/* Hero Content */}
          <div style={heroStyles.heroContent}>
            <h1 style={heroStyles.heroTitle}>Welcome to Our Business</h1>
            <p style={heroStyles.heroSubtitle}>Professional Solutions for Your Success</p>
            <div style={heroStyles.heroButtons}>
              <a 
                href="#services" 
                style={{...heroStyles.btn, ...heroStyles.btnPrimary}}
              >
                Get Started
              </a>
              <a 
                href="#about" 
                style={{...heroStyles.btn, ...heroStyles.btnOutlineLight}}
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      <AbouUsTwo />
      <ChoseTwo addClass="inner_chose" />
      <Working />
      <Blog />
    </>
  );
};

export default AboutPage;
