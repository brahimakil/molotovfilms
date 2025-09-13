import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { storage } from "../firebase/config";
import { ref, getDownloadURL } from 'firebase/storage';

const ScriptWriting = () => {
  const [videoUrl, setVideoUrl] = useState('');
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);
  const heroRef = useRef(null);

  // Load video from Firebase
  useEffect(() => {
    const loadVideo = async () => {
      if (!shouldLoadVideo) return;
      
      try {
        const videoRef = ref(storage, 'videos/hero-video.mp4');
        const url = await getDownloadURL(videoRef);
        setVideoUrl(url);
        setVideoLoaded(true);
      } catch (error) {
        console.log('Video not found, using fallback');
        setVideoError(true);
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShouldLoadVideo(true);
        }
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    if (shouldLoadVideo) {
      loadVideo();
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, [shouldLoadVideo]);

  const heroStyles = {
    scriptHeroBanner: {
      position: 'relative',
      height: '60vh',
      minHeight: '400px',
      overflow: 'hidden',
      background: 'linear-gradient(135deg, #2c3e50 0%, #34495e 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    heroContent: {
      position: 'relative',
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
      marginBottom: '1.5rem',
      color: 'white',
      lineHeight: '1.2'
    },
    heroSubtitle: {
      fontSize: '1.3rem',
      marginBottom: '2rem',
      opacity: 0.9,
      color: '#ecf0f1'
    },
    breadcrumb: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '10px',
      marginTop: '1rem',
      fontSize: '1rem'
    },
    breadcrumbLink: {
      color: 'rgba(255, 255, 255, 0.7)',
      textDecoration: 'none',
      transition: 'color 0.3s ease'
    },
    breadcrumbCurrent: {
      color: '#3498db',
      fontWeight: '600'
    }
  };

  // Mobile responsive styles
  const isMobile = window.innerWidth <= 768;
  if (isMobile) {
    heroStyles.heroTitle.fontSize = '2.5rem';
    heroStyles.heroSubtitle.fontSize = '1.1rem';
    heroStyles.heroContent.padding = '0 15px';
    heroStyles.heroContent.maxWidth = '95%';
  }

  return (
    <div style={{ margin: 0, padding: 0, minHeight: '100vh' }}>
      {/* Hero Section */}
      <section ref={heroRef} style={heroStyles.scriptHeroBanner}>
        <div style={heroStyles.heroContent}>
          <h1 style={heroStyles.heroTitle}>
            Professional Scriptwriting
          </h1>
          <p style={heroStyles.heroSubtitle}>
            Crafting compelling narratives that bring your vision to life
          </p>
          
          <div style={heroStyles.breadcrumb}>
            <Link to="/" style={heroStyles.breadcrumbLink}>
              Home
            </Link>
            <span style={{ color: 'rgba(255, 255, 255, 0.5)' }}>→</span>
            <Link to="/services" style={heroStyles.breadcrumbLink}>
              Services
            </Link>
            <span style={{ color: 'rgba(255, 255, 255, 0.5)' }}>→</span>
            <span style={heroStyles.breadcrumbCurrent}>
              Scriptwriting
            </span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section style={{ paddingTop: '80px', paddingBottom: '80px', background: '#f8f9fa' }}>
        <div className="container">
          <div className="row">
            {/* Main Content */}
            <div className="col-lg-8">
              {/* Intro Section */}
              <div style={{ 
                background: 'white',
                borderRadius: '15px',
                padding: '40px',
                marginBottom: '40px',
                boxShadow: '0 5px 20px rgba(0,0,0,0.1)'
              }}>
                <h2 style={{
                  fontSize: '2.5rem',
                  marginBottom: '25px',
                  color: '#2c3e50',
                  fontWeight: '700'
                }}>
                  From Concept to Screen
                </h2>
                <p style={{ 
                  fontSize: '1.2rem', 
                  lineHeight: '1.8', 
                  color: '#555',
                  marginBottom: '25px'
                }}>
                  Every great film starts with a great script. Our scriptwriting team specializes in creating compelling narratives that capture your audience's attention from the first page to the final scene.
                </p>
                <p style={{ 
                  fontSize: '1.1rem', 
                  lineHeight: '1.7', 
                  color: '#666'
                }}>
                  We work closely with you to develop characters, plot structures, and dialogue that not only tell your story but create an emotional connection with your viewers.
                </p>
              </div>

              {/* Video Section - Flipped and Expanded */}
              <div style={{ 
                background: 'white',
                borderRadius: '15px',
                padding: '40px',
                marginBottom: '40px',
                boxShadow: '0 5px 20px rgba(0,0,0,0.1)'
              }}>
                <div className="row align-items-center">
                  {/* Video/Image First - Expanded */}
                  <div className="col-lg-7">
                    <div style={{
                      height: '400px', // Increased from 300px
                      background: 'linear-gradient(135deg, #34495e, #2c3e50)',
                      borderRadius: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      fontSize: '1.2rem',
                      fontWeight: '600',
                      textAlign: 'center',
                      position: 'relative',
                      overflow: 'hidden',
                      marginBottom: '20px'
                    }}>
                      {videoLoaded && videoUrl ? (
                        <video
                          src={videoUrl}
                          controls
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            borderRadius: '12px'
                          }}
                        />
                      ) : (
                        <div>
                          <div style={{ fontSize: '4rem', marginBottom: '15px' }}>▶️</div>
                          <div style={{ fontSize: '1.4rem', fontWeight: '700' }}>
                            Scriptwriting Process
                          </div>
                          <div style={{ fontSize: '1rem', opacity: '0.8', marginTop: '10px' }}>
                            Watch Our Creative Journey
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  {/* Content Second - Compact but Complete */}
                  <div className="col-lg-5">
                    <h3 style={{
                      fontSize: '2rem',
                      marginBottom: '20px',
                      color: '#2c3e50',
                      fontWeight: '600'
                    }}>
                      See Our Process in Action
                    </h3>
                    <p style={{ 
                      fontSize: '1.1rem', 
                      lineHeight: '1.7', 
                      color: '#555',
                      marginBottom: '20px'
                    }}>
                      Watch how we transform a simple idea into a compelling script that's ready for production. Our collaborative approach ensures your vision is perfectly captured.
                    </p>
                    <ul style={{ 
                      listStyle: 'none', 
                      padding: 0,
                      fontSize: '1rem',
                      color: '#666'
                    }}>
                      <li style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
                        <span style={{
                          width: '6px',
                          height: '6px',
                          background: '#3498db',
                          borderRadius: '50%',
                          marginRight: '12px'
                        }} />
                        Story structure and pacing
                      </li>
                      <li style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
                        <span style={{
                          width: '6px',
                          height: '6px',
                          background: '#e74c3c',
                          borderRadius: '50%',
                          marginRight: '12px'
                        }} />
                        Authentic dialogue creation
                      </li>
                      <li style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
                        <span style={{
                          width: '6px',
                          height: '6px',
                          background: '#27ae60',
                          borderRadius: '50%',
                          marginRight: '12px'
                        }} />
                        Visual storytelling elements
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="col-lg-4">
              {/* Services Card */}
              <div style={{
                background: 'white',
                borderRadius: '15px',
                padding: '30px',
                marginBottom: '30px',
                boxShadow: '0 5px 20px rgba(0,0,0,0.1)'
              }}>
                <h3 style={{ 
                  fontSize: '1.5rem',
                  marginBottom: '25px',
                  color: '#2c3e50',
                  fontWeight: '600'
                }}>
                  📝 Our Services
                </h3>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {[
                    "Feature Film Scripts",
                    "Short Film Scripts", 
                    "Commercial Scripts",
                    "Documentary Scripts",
                    "Web Series Scripts",
                    "Corporate Videos",
                    "Educational Content",
                    "Social Media Scripts"
                  ].map((item, index) => (
                    <li key={index} style={{
                      padding: '12px 0',
                      borderBottom: index < 7 ? '1px solid rgba(0,0,0,0.1)' : 'none',
                      fontSize: '1rem',
                      color: '#555',
                      transition: 'color 0.3s ease',
                      cursor: 'pointer'
                    }}
                    onMouseEnter={(e) => e.target.style.color = '#3498db'}
                    onMouseLeave={(e) => e.target.style.color = '#555'}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Card */}
              <div style={{
                background: 'linear-gradient(135deg, #3498db, #2980b9)',
                borderRadius: '15px',
                padding: '30px',
                color: 'white',
                textAlign: 'center'
              }}>
                <h3 style={{ 
                  fontSize: '1.5rem',
                  marginBottom: '15px',
                  color: 'white'
                }}>
                  Ready to Start?
                </h3>
                <p style={{ 
                  fontSize: '1rem',
                  marginBottom: '20px',
                  opacity: 0.9
                }}>
                  Let's discuss your project and bring your story to life.
                </p>
                <Link 
                  to="/contact-us" 
                  style={{
                    background: 'white',
                    color: '#3498db',
                    padding: '12px 25px',
                    borderRadius: '25px',
                    textDecoration: 'none',
                    fontSize: '1rem',
                    fontWeight: '600',
                    display: 'inline-block',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.boxShadow = '0 5px 15px rgba(0,0,0,0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = 'none';
                  }}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* BREAK OUT THE SCRIPTWRITING PROCESS SECTION - PROPERLY CENTERED */}
        <div style={{ 
          background: 'white',
          borderRadius: '15px',
          padding: '60px 40px',
          margin: '40px auto', // Use auto for proper centering!
          boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
          width: 'calc(100vw - 40px)', // Width with side margins
          maxWidth: '1600px' // Max width limit
        }}>
          <div className="container-fluid" style={{ maxWidth: '1400px', margin: '0 auto' }}>
            <h3 style={{
              fontSize: '2.5rem',
              marginBottom: '50px',
              color: '#2c3e50',
              fontWeight: '600',
              textAlign: 'center'
            }}>
              Our Scriptwriting Process
            </h3>
            
            <div className="row g-5 justify-content-center">
              {/* Image Placeholder 1 - NOW ACTUALLY WIDER */}
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div style={{
                  height: '400px',
                  background: 'linear-gradient(135deg, #3498db, #2980b9)',
                  borderRadius: '15px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '1.3rem',
                  fontWeight: '600',
                  textAlign: 'center',
                  marginBottom: '25px',
                  position: 'relative',
                  overflow: 'hidden',
                  boxShadow: '0 10px 30px rgba(52, 152, 219, 0.3)'
                }}>
                  <div style={{ fontSize: '5rem', marginBottom: '20px' }}>💡</div>
                  <div style={{ fontSize: '1.6rem', fontWeight: '700' }}>
                    Script Development
                  </div>
                  <div style={{ fontSize: '1.1rem', opacity: '0.9', marginTop: '10px' }}>
                    Concept to Story
                  </div>
                </div>
                <h4 style={{ fontSize: '1.6rem', color: '#2c3e50', marginBottom: '15px', fontWeight: '600' }}>
                  Initial Concept
                </h4>
                <p style={{ color: '#666', fontSize: '1.1rem', lineHeight: '1.7' }}>
                  We start by understanding your vision and developing the core concept that will drive your narrative forward with compelling storytelling elements.
                </p>
              </div>

              {/* Image Placeholder 2 - NOW ACTUALLY WIDER */}
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div style={{
                  height: '400px',
                  background: 'linear-gradient(135deg, #e74c3c, #c0392b)',
                  borderRadius: '15px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '1.3rem',
                  fontWeight: '600',
                  textAlign: 'center',
                  marginBottom: '25px',
                  position: 'relative',
                  overflow: 'hidden',
                  boxShadow: '0 10px 30px rgba(231, 76, 60, 0.3)'
                }}>
                  <div style={{ fontSize: '5rem', marginBottom: '20px' }}>👥</div>
                  <div style={{ fontSize: '1.6rem', fontWeight: '700' }}>
                    Character Building
                  </div>
                  <div style={{ fontSize: '1.1rem', opacity: '0.9', marginTop: '10px' }}>
                    Bringing Life to Stories
                  </div>
                </div>
                <h4 style={{ fontSize: '1.6rem', color: '#2c3e50', marginBottom: '15px', fontWeight: '600' }}>
                  Character Development
                </h4>
                <p style={{ color: '#666', fontSize: '1.1rem', lineHeight: '1.7' }}>
                  Creating authentic, relatable characters that audiences connect with and remember long after the credits roll.
                </p>
              </div>

              {/* Image Placeholder 3 - NOW ACTUALLY WIDER */}
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div style={{
                  height: '400px',
                  background: 'linear-gradient(135deg, #27ae60, #229954)',
                  borderRadius: '15px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '1.3rem',
                  fontWeight: '600',
                  textAlign: 'center',
                  marginBottom: '25px',
                  position: 'relative',
                  overflow: 'hidden',
                  boxShadow: '0 10px 30px rgba(39, 174, 96, 0.3)'
                }}>
                  <div style={{ fontSize: '5rem', marginBottom: '20px' }}>📝</div>
                  <div style={{ fontSize: '1.6rem', fontWeight: '700' }}>
                    Final Script
                  </div>
                  <div style={{ fontSize: '1.1rem', opacity: '0.9', marginTop: '10px' }}>
                    Production Ready
                  </div>
                </div>
                <h4 style={{ fontSize: '1.6rem', color: '#2c3e50', marginBottom: '15px', fontWeight: '600' }}>
                  Script Finalization
                </h4>
                <p style={{ color: '#666', fontSize: '1.1rem', lineHeight: '1.7' }}>
                  Polishing dialogue, refining scenes, and delivering a production-ready script that exceeds expectations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ScriptWriting;
