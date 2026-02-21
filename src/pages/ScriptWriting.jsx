import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { storage } from "../firebase/config";
import { ref, getDownloadURL } from 'firebase/storage';
import useResponsive from "../utils/useResponsive";
import { useTranslation } from 'react-i18next';

const ScriptWriting = () => {
  const { t } = useTranslation();
  const [videoUrl, setVideoUrl] = useState('');
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);
  const heroRef = useRef(null);
  const { isMobile } = useResponsive();

  // Creative process steps
  const creativeSteps = [
    {
      number: "01",
      title: t('scriptWritingPage.creativeProcess.steps.0.title'),
      description: `${t('scriptWritingPage.creativeProcess.steps.0.subtitle')} ${t('scriptWritingPage.creativeProcess.steps.0.description')}`,
      icon: "💡"
    },
    {
      number: "02", 
      title: t('scriptWritingPage.creativeProcess.steps.1.title'),
      description: `${t('scriptWritingPage.creativeProcess.steps.1.subtitle')} ${t('scriptWritingPage.creativeProcess.steps.1.description')}`,
      icon: "🏗️"
    },
    {
      number: "03",
      title: t('scriptWritingPage.creativeProcess.steps.2.title'),
      description: `${t('scriptWritingPage.creativeProcess.steps.2.subtitle')} ${t('scriptWritingPage.creativeProcess.steps.2.description')}`,
      icon: "✍️"
    },
    {
      number: "04",
      title: t('scriptWritingPage.creativeProcess.steps.3.title'),
      description: `${t('scriptWritingPage.creativeProcess.steps.3.subtitle')} ${t('scriptWritingPage.creativeProcess.steps.3.description')}`,
      icon: "🎬"
    }
  ];

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
      height: '70vh',
      minHeight: '500px',
      overflow: 'hidden',
      background: 'linear-gradient(135deg, #2d3e2d 0%, #556b2f 50%, #1a1a1a 100%)',
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
      maxWidth: '900px'
    },
    heroTitle: {
      fontSize: '4rem',
      fontWeight: 700,
      marginBottom: '1.5rem',
      background: 'linear-gradient(135deg, #f4d03f, #556b2f, #ffffff)',
      backgroundClip: 'text',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      lineHeight: '1.2'
    },
    heroSubtitle: {
      fontSize: '1.4rem',
      marginBottom: '2rem',
      opacity: 0.9,
      color: '#e8f5e8'
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
      color: '#f4d03f',
      fontWeight: '600'
    },
    decorativeElements: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      pointerEvents: 'none',
      zIndex: 5
    }
  };

  // Mobile responsive styles
  if (isMobile) {
    heroStyles.heroTitle.fontSize = '2.5rem';
    heroStyles.heroSubtitle.fontSize = '1.1rem';
    heroStyles.heroContent.padding = '0 15px';
    heroStyles.heroContent.maxWidth = '95%';
  }

  return (
    <div style={{ margin: 0, padding: 0, minHeight: '100vh' }}>
      {/* Hero Section with Animated Background */}
      <section ref={heroRef} style={heroStyles.scriptHeroBanner}>
        {/* Animated Background Elements */}
        <div style={heroStyles.decorativeElements}>
          <div style={{
            position: 'absolute',
            top: '20%',
            left: '10%',
            width: '2px',
            height: '100px',
            background: 'linear-gradient(to bottom, transparent, #f4d03f, transparent)',
            opacity: 0.6,
            animation: 'float 3s ease-in-out infinite'
          }} />
          <div style={{
            position: 'absolute',
            top: '60%',
            right: '15%',
            width: '2px',
            height: '80px',
            background: 'linear-gradient(to bottom, transparent, #556b2f, transparent)',
            opacity: 0.6,
            animation: 'float 4s ease-in-out infinite reverse'
          }} />
          <div style={{
            position: 'absolute',
            bottom: '30%',
            left: '20%',
            width: '1px',
            height: '60px',
            background: 'linear-gradient(to bottom, transparent, #ffffff, transparent)',
            opacity: 0.4,
            animation: 'float 5s ease-in-out infinite'
          }} />
        </div>

        <div style={heroStyles.heroContent}>
          <h1 style={heroStyles.heroTitle}>
          {t('scriptWritingPage.heroHeading')}
          </h1>
          <p style={heroStyles.heroSubtitle}>
          {t('scriptWritingPage.heroSubheading')}
          </p>
          
          <div style={heroStyles.breadcrumb}>
            <Link to="/" style={heroStyles.breadcrumbLink}>
              {t('scriptWritingPage.breadcrumbs.0')}
            </Link>
            <span style={{ color: 'rgba(255, 255, 255, 0.5)' }}>→</span>
            <Link to="/services" style={heroStyles.breadcrumbLink}>
              {t('scriptWritingPage.breadcrumbs.1')}
            </Link>
            <span style={{ color: 'rgba(255, 255, 255, 0.5)' }}>→</span>
            <span style={heroStyles.breadcrumbCurrent}>
              {t('scriptWritingPage.breadcrumbs.2')}
            </span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="service_details" style={{ paddingTop: '80px', paddingBottom: '80px', backgroundColor: '#fafafa' }}>
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-lg-7">
              <div className="service_details_head">
                <h2 className="text_5xl" style={{ marginBottom: '30px' }}>
                  <span style={{
                    background: 'linear-gradient(135deg, #556b2f 0%, #f4d03f 50%, #2d3e2d 100%)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    fontWeight: '700'
                  }}>
{t('scriptWritingPage.mainHeading')}
</span>
                  <br />
                  <span style={{ color: '#2d3e2d' }}>{t('scriptWritingPage.mainSubheading')}</span>
                  </h2>
              </div>

              {/* Creative Process Steps */}
              <div style={{ marginBottom: '50px' }}>
                <h3 style={{ 
                  fontSize: '2rem', 
                  marginBottom: '30px',
                  color: '#2d3e2d',
                  fontWeight: '600'
                }}>
{t('scriptWritingPage.creativeProcess.heading')}
  </h3>
                
                <div className="row g-4">
                  {creativeSteps.map((step, index) => (
                    <div key={index} className="col-lg-6">
                      <div style={{
                        background: 'linear-gradient(135deg, #ffffff 0%, #f8fdf8 100%)',
                        borderRadius: '20px',
                        padding: '30px',
                        border: '2px solid #e8f5e8',
                        transition: 'all 0.3s ease',
                        cursor: 'pointer',
                        position: 'relative',
                        overflow: 'hidden'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-5px)';
                        e.currentTarget.style.boxShadow = '0 20px 40px rgba(85, 107, 47, 0.15)';
                        e.currentTarget.style.borderColor = '#556b2f';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = 'none';
                        e.currentTarget.style.borderColor = '#e8f5e8';
                      }}>
                        {/* Step Number */}
                        <div style={{
                          position: 'absolute',
                          top: '-10px',
                          right: '-10px',
                          width: '60px',
                          height: '60px',
                          background: 'linear-gradient(135deg, #556b2f, #f4d03f)',
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'white',
                          fontSize: '1.2rem',
                          fontWeight: 'bold',
                          opacity: 0.9
                        }}>
                          {step.number}
                        </div>
                        
                        <div style={{ fontSize: '2.5rem', marginBottom: '15px' }}>
                          {step.icon}
                        </div>
                        
                        <h4 style={{ 
                          fontSize: '1.5rem', 
                          marginBottom: '15px',
                          color: '#2d3e2d',
                          fontWeight: '600'
                        }}>
                          {step.title}
                        </h4>
                        
                        <p style={{ 
                          color: '#556b2f', 
                          lineHeight: '1.6',
                          fontSize: '1rem'
                        }}>
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Main Description */}
              <div style={{ marginBottom: '40px' }}>
                <p style={{ 
                  fontSize: '1.2rem', 
                  lineHeight: '1.8', 
                  color: '#2d3e2d',
                  marginBottom: '25px'
                }}>
                  {t('scriptWritingPage.descriptionParagraphs.0')}
                </p>

                <p style={{ 
                  fontSize: '1.1rem', 
                  lineHeight: '1.7', 
                  color: '#556b2f',
                  marginBottom: '30px'
                }}>
                  {t('scriptWritingPage.descriptionParagraphs.1')}
                </p>
              </div>

              {/* Services List */}
              <div style={{ marginBottom: '40px' }}>
                <h3 style={{ 
                  fontSize: '2rem', 
                  marginBottom: '25px',
                  color: '#2d3e2d',
                  fontWeight: '600'
                }}>
{t('scriptWritingPage.servicesList.heading')}
</h3>
                
                <div className="row">
                  <div className="col-lg-6">
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                      <li style={{ 
                        marginBottom: '15px',
                        display: 'flex',
                        alignItems: 'center',
                        fontSize: '1.1rem',
                        color: '#2d3e2d'
                      }}>
                        <span style={{
                          width: '8px',
                          height: '8px',
                          background: 'linear-gradient(45deg, #556b2f, #f4d03f)',
                          borderRadius: '50%',
                          marginRight: '15px'
                        }} />
{t('scriptWritingPage.servicesList.items.0')}
</li>
                      <li style={{ 
                        marginBottom: '15px',
                        display: 'flex',
                        alignItems: 'center',
                        fontSize: '1.1rem',
                        color: '#2d3e2d'
                      }}>
                        <span style={{
                          width: '8px',
                          height: '8px',
                          background: 'linear-gradient(45deg, #f4d03f, #556b2f)',
                          borderRadius: '50%',
                          marginRight: '15px'
                        }} />
{t('scriptWritingPage.servicesList.items.1')}
</li>
                      <li style={{ 
                        marginBottom: '15px',
                        display: 'flex',
                        alignItems: 'center',
                        fontSize: '1.1rem',
                        color: '#2d3e2d'
                      }}>
                        <span style={{
                          width: '8px',
                          height: '8px',
                          background: 'linear-gradient(45deg, #2d3e2d, #f4d03f)',
                          borderRadius: '50%',
                          marginRight: '15px'
                        }} />
{t('scriptWritingPage.servicesList.items.2')}
</li>
                    </ul>
                  </div>
                  <div className="col-lg-6">
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                      <li style={{ 
                        marginBottom: '15px',
                        display: 'flex',
                        alignItems: 'center',
                        fontSize: '1.1rem',
                        color: '#2d3e2d'
                      }}>
                        <span style={{
                          width: '8px',
                          height: '8px',
                          background: 'linear-gradient(45deg, #556b2f, #2d3e2d)',
                          borderRadius: '50%',
                          marginRight: '15px'
                        }} />
{t('scriptWritingPage.servicesList.items.3')}
</li>
                     
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="col-xxl-4 col-lg-5 res_mt">
              {/* Quote Card */}
              <div style={{
                background: 'linear-gradient(135deg, #556b2f 0%, #2d3e2d 100%)',
                borderRadius: '25px',
                padding: '40px 30px',
                marginBottom: '30px',
                color: 'white',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <div style={{
                  position: 'absolute',
                  top: '-50px',
                  right: '-50px',
                  width: '100px',
                  height: '100px',
                  background: 'rgba(244, 208, 63, 0.1)',
                  borderRadius: '50%'
                }} />
                
                <div style={{ fontSize: '3rem', marginBottom: '20px', opacity: 0.9, color: '#f4d03f' }}>
                  "
                </div>
                <p style={{ 
                  fontSize: '1.2rem', 
                  fontStyle: 'italic',
                  lineHeight: '1.6',
                  marginBottom: '20px',
                  position: 'relative',
                  zIndex: 2
                }}>
{t('scriptWritingPage.sidebar.quote')}
</p>
                <div style={{ 
                  fontSize: '1rem',
                  opacity: 0.9,
                  fontWeight: '600',
                  color: '#f4d03f'
                }}>
                  {t('scriptWritingPage.sidebar.quoteAttribution')}
                </div>
              </div>

              {/* Categories */}
              <div className="card_item" style={{
                background: '#ffffff',
                borderRadius: '20px',
                padding: '30px',
                border: '2px solid #e8f5e8'
              }}>
                <h3 style={{ 
                  fontSize: '1.5rem',
                  marginBottom: '25px',
                  color: '#2d3e2d'
                }}>
{t('scriptWritingPage.sidebar.categoriesHeading')}
</h3>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {t('scriptWritingPage.sidebar.categories', { returnObjects: true }).map((item, index) => (
                    <li key={index} style={{
                      padding: '12px 0',
                      borderBottom: index < 7 ? '1px solid #e8f5e8' : 'none',
                      fontSize: '1rem',
                      color: '#556b2f',
                      transition: 'color 0.3s ease',
                      cursor: 'pointer'
                    }}
                    onMouseEnter={(e) => e.target.style.color = '#f4d03f'}
                    onMouseLeave={(e) => e.target.style.color = '#556b2f'}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Add floating animation keyframes */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
      `}</style>
    </div>
  );
};

export default ScriptWriting;