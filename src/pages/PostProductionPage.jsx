import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { storage } from "../firebase/config";
import { ref, getDownloadURL } from 'firebase/storage';
import SEO, { seoData } from "../component/SEO";
import useResponsive from "../utils/useResponsive";
import { useTranslation } from 'react-i18next';

// Import placeholder images for post-production showcase
import editingImg from "../assets/images/s-1.webp";
import colorGradingImg from "../assets/images/s-2.webp";
import motionGraphicsImg from "../assets/images/s-3.webp";

const PostProductionPage = () => {
  const { t } = useTranslation();
  const [showcaseVideoUrl, setShowcaseVideoUrl] = useState('');
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [activeService, setActiveService] = useState('editing');
  const [currentProject, setCurrentProject] = useState(0);
  const heroRef = useRef(null);
  const { isMobile } = useResponsive();

  // Post-production services data with new color scheme
  const services = {
    editing: {
      title: t('postProductionPage.services.0.title'),
      description: t('postProductionPage.services.0.description'),
      icon: '✂️',
      color: '#556b2f',
      features: t('postProductionPage.services.0.features', { returnObjects: true })
    },
    color: {
      title: t('postProductionPage.services.1.title'),
      description: t('postProductionPage.services.1.description'),
      icon: '🎨',
      color: '#f4d03f',
      features: t('postProductionPage.services.1.features', { returnObjects: true })
    },
    sound: {
      title: t('postProductionPage.services.2.title'),
      description: t('postProductionPage.services.2.description'),
      icon: '🎵',
      color: '#2d3e2d',
      features: t('postProductionPage.services.2.features', { returnObjects: true })
    },
    motion: {
      title: t('postProductionPage.services.3.title'),
      description: t('postProductionPage.services.3.description'),
      icon: '⚡',
      color: '#556b2f',
      features: t('postProductionPage.services.3.features', { returnObjects: true })
    }
  };

  // Content repurposing showcase
  const repurposingProjects = [
    {
      original: t('postProductionPage.contentRepurposing.projects.0.input'),
      creativeTitle: t('postProductionPage.contentRepurposing.projects.0.output'),
      outputs: t('postProductionPage.contentRepurposing.projects.0.outputs', { returnObjects: true }),
      multiplier: t('postProductionPage.contentRepurposing.projects.0.multiplier'),
      description: 'One documentary becomes 8 pieces of content'
    },
    {
      original: t('postProductionPage.contentRepurposing.projects.1.input'),
      creativeTitle: t('postProductionPage.contentRepurposing.projects.1.output'),
      outputs: t('postProductionPage.contentRepurposing.projects.1.outputs', { returnObjects: true }),
      multiplier: t('postProductionPage.contentRepurposing.projects.1.multiplier'),
      description: 'Maximum reach across all platforms'
    },
    {
      original: t('postProductionPage.contentRepurposing.projects.2.input'),
      creativeTitle: t('postProductionPage.contentRepurposing.projects.2.output'),
      outputs: t('postProductionPage.contentRepurposing.projects.2.outputs', { returnObjects: true }),
      multiplier: t('postProductionPage.contentRepurposing.projects.2.multiplier'),
      description: 'Every conversation becomes multiple touchpoints'
    }
  ];

  // Load showcase video
  useEffect(() => {
    const loadVideo = async () => {
      try {
        const videoPath = 'servicepostproductionpage/post vedio servecie.mp4';
        const videoRefFirebase = ref(storage, videoPath);
        const url = await getDownloadURL(videoRefFirebase);
        setShowcaseVideoUrl(url);
        setVideoLoaded(true);
      } catch (error) {
        console.error('Error loading video:', error);
      }
    };
    loadVideo();
  }, []);

  // Auto-rotate projects
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProject(prev => (prev + 1) % repurposingProjects.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <SEO 
        title={seoData.postProduction.title}
        description={seoData.postProduction.description}
        keywords={seoData.postProduction.keywords}
      />
      {/* Creative Hero Section */}
      <section 
        ref={heroRef}
        style={{
          minHeight: '100vh',
          background: 'linear-gradient(45deg, #1a1a1a 0%, #2d3e2d 50%, #556b2f 100%)',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden', 
          padding: isMobile ? '60px 0' : '80px 0'
        }}
      >
        {/* Floating Elements Background */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `
            radial-gradient(circle at 20% 30%, rgba(85, 107, 47, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(244, 208, 63, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.05) 0%, transparent 50%)
          `
        }} />

        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7 order-2 order-lg-1">
              <div style={{ 
                position: 'relative', 
                zIndex: 10,
                padding: isMobile ? '20px 0' : '0'
              }}>
                
                <h1 style={{
                  fontSize: isMobile ? 'clamp(1.8rem, 6vw, 2.5rem)' : 'clamp(2.5rem, 4vw, 3rem)',
                  fontWeight: '900',
                  marginBottom: isMobile ? '20px' : '30px',
                  color: 'white',
                  lineHeight: '1.1',
                  textAlign: isMobile ? 'center' : 'left'
                }}>
                  <br /><br />
                  {t('postProductionPage.heroHeading')}
                  <span style={{
                    background: 'linear-gradient(135deg, #f4d03f, #556b2f, #ffffff)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    display: 'block'
                  }}>
                    {t('postProductionPage.heroSubheading')}
                  </span>
                </h1>
                
                <p style={{
                  fontSize: isMobile ? 'clamp(1rem, 3vw, 1.1rem)' : 'clamp(1.1rem, 2vw, 1.2rem)',
                  color: '#e8f5e8',
                  marginBottom: isMobile ? '30px' : '50px',
                  lineHeight: '1.7',
                  maxWidth: isMobile ? '100%' : '600px',
                  textAlign: isMobile ? 'center' : 'left'
                }}>
                  {t('postProductionPage.heroDescription')}
                </p>

                {/* Service Selector */}
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: isMobile ? '10px' : '15px',
                  marginBottom: isMobile ? '30px' : '40px',
                  justifyContent: isMobile ? 'center' : 'flex-start'
                }}>
                  {Object.entries(services).map(([key, service]) => (
                    <button
                      key={key}
                      onClick={() => setActiveService(key)}
                      style={{
                        background: activeService === key 
                          ? `linear-gradient(135deg, ${service.color}, ${service.color}dd)` 
                          : 'rgba(255, 255, 255, 0.1)',
                        color: 'white',
                        border: activeService === key ? 'none' : '1px solid rgba(255, 255, 255, 0.2)',
                        padding: isMobile ? '10px 16px' : '12px 20px',
                        borderRadius: '30px',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        fontSize: isMobile ? '0.8rem' : '0.9rem',
                        fontWeight: 'bold',
                        backdropFilter: 'blur(10px)',
                        whiteSpace: 'nowrap'
                      }}
                    >
                      {service.icon} {isMobile ? service.title.split(' ')[0] : service.title}
                    </button>
                  ))}
                </div>

                {/* Active Service Details */}
                <div style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: isMobile ? '15px' : '20px',
                  padding: isMobile ? '20px' : '30px',
                  backdropFilter: 'blur(15px)',
                  border: `2px solid ${services[activeService].color}33`
                }}>
                  <h3 style={{
                    color: services[activeService].color,
                    fontSize: isMobile ? 'clamp(1.2rem, 4vw, 1.3rem)' : 'clamp(1.3rem, 3vw, 1.5rem)',
                    fontWeight: 'bold',
                    marginBottom: '15px',
                    textAlign: isMobile ? 'center' : 'left'
                  }}>
                    {services[activeService].title}
                  </h3>
                  <p style={{
                    color: '#f0f8f0',
                    marginBottom: '20px',
                    fontSize: isMobile ? 'clamp(0.9rem, 3vw, 1rem)' : 'clamp(1rem, 2vw, 1.1rem)',
                    textAlign: isMobile ? 'center' : 'left'
                  }}>
                    {services[activeService].description}
                  </p>
                  <div style={{ 
                    display: 'flex', 
                    flexWrap: 'wrap', 
                    gap: '10px',
                    justifyContent: isMobile ? 'center' : 'flex-start'
                  }}>
                    {services[activeService].features.map((feature, index) => (
                      <span key={index} style={{
                        background: `${services[activeService].color}22`,
                        color: services[activeService].color,
                        padding: isMobile ? '5px 10px' : '6px 12px',
                        borderRadius: '15px',
                        fontSize: isMobile ? '0.8rem' : '0.9rem',
                        fontWeight: '500'
                      }}>
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-5 order-1 order-lg-2 mb-4 mb-lg-0">
              <div style={{
                position: 'relative',
                borderRadius: isMobile ? '15px' : '25px',
                overflow: 'hidden',
                boxShadow: '0 30px 60px rgba(0, 0, 0, 0.4)',
                margin: isMobile ? '0 auto' : '0',
                maxWidth: isMobile ? '350px' : '100%'
              }}>
                {videoLoaded && showcaseVideoUrl ? (
                  <video
                    style={{
                      width: '100%',
                      height: isMobile ? '250px' : '500px',
                      objectFit: 'cover'
                    }}
                    autoPlay
                    muted
                    loop
                    playsInline
                  >
                    <source src={showcaseVideoUrl} type="video/mp4" />
                  </video>
                ) : (
                  <div style={{
                    width: '100%',
                    height: isMobile ? '250px' : '500px',
                    background: `linear-gradient(135deg, ${services[activeService].color}, #2d3e2d)`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: isMobile ? '1rem' : '1.3rem'
                  }}>
                    {t('postProductionPage.loadingShowcase')}
                  </div>
                )}
                
                {/* Floating Badge */}
                <div style={{
                  position: 'absolute',
                  top: isMobile ? '15px' : '25px',
                  left: isMobile ? '15px' : '25px',
                  background: 'rgba(85, 107, 47, 0.9)',
                  color: 'white',
                  padding: isMobile ? '8px 12px' : '12px 18px',
                  borderRadius: isMobile ? '15px' : '20px',
                  fontSize: isMobile ? '0.8rem' : '0.9rem',
                  fontWeight: 'bold',
                  backdropFilter: 'blur(10px)'
                }}>
                  {t('postProductionPage.heroBadge')}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Repurposing Section */}
      <section style={{ padding: '120px 0', background: '#fafafa' }}>
        <div className="container">
          <div className="row mb-5">
            <div className="col-lg-10 mx-auto text-center">
              <h2 style={{
                fontSize: '3.5rem',
                fontWeight: '900',
                marginBottom: '30px',
                background: 'linear-gradient(135deg, #2d3e2d, #556b2f)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
{t('postProductionPage.contentRepurposing.heading')}
</h2>
              <p style={{ fontSize: '1.3rem', color: '#556b2f', lineHeight: '1.8', maxWidth: '800px', margin: '0 auto' }}>
              Stop the content treadmill. The most successful brands don't create more; they create smarter. We strategically dissect your hero content—transforming one long-form video into a full arsenal of platform-native assets. Get more reach, more engagement, and a bigger ROI from a single investment.
              </p>
            </div>
          </div>

          {/* Repurposing Showcase */}
          <div className="row g-4">
            {repurposingProjects.map((project, index) => (
              <div key={index} className="col-lg-4">
                <div style={{
                  background: 'white',
                  borderRadius: '25px',
                  padding: '40px',
                  height: '100%',
                  boxShadow: currentProject === index ? '0 20px 40px rgba(85, 107, 47, 0.2)' : '0 10px 30px rgba(0, 0, 0, 0.1)',
                  border: currentProject === index ? '3px solid #556b2f' : '1px solid #e8f5e8',
                  transform: currentProject === index ? 'translateY(-10px)' : 'translateY(0)',
                  transition: 'all 0.5s ease'
                }}>
                  {/* Original Content */}
                  <div style={{
                    textAlign: 'center',
                    marginBottom: '30px'
                  }}>
                    <div style={{
                      width: '80px',
                      height: '80px',
                      background: 'linear-gradient(135deg, #556b2f, #f4d03f)',
                      borderRadius: '20px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 20px'
                    }}>
                      {index === 0 && (
                        // Documentary Film Icon
                        <svg width="50" height="50" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect x="4" y="8" width="32" height="24" rx="3" fill="white" stroke="white" strokeWidth="2"/>
                          <rect x="6" y="10" width="28" height="20" rx="2" fill="none" stroke="#2d3e2d" strokeWidth="1.5"/>
                          <rect x="2" y="6" width="4" height="4" rx="1" fill="white"/>
                          <rect x="34" y="6" width="4" height="4" rx="1" fill="white"/>
                          <rect x="2" y="30" width="4" height="4" rx="1" fill="white"/>
                          <rect x="34" y="30" width="4" height="4" rx="1" fill="white"/>
                        </svg>
                      )}
                      {index === 1 && (
                        // Product Launch Rocket Icon
                        <svg width="50" height="50" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M20 4 L24 12 L32 8 L28 16 L36 20 L28 24 L32 32 L24 28 L20 36 L16 28 L8 32 L12 24 L4 20 L12 16 L8 8 L16 12 Z" fill="white" stroke="white" strokeWidth="1"/>
                          <circle cx="20" cy="20" r="6" fill="none" stroke="#2d3e2d" strokeWidth="2"/>
                          <circle cx="20" cy="20" r="3" fill="#556b2f"/>
                        </svg>
                      )}
                      {index === 2 && (
                        // Interview/Microphone Icon
                        <svg width="50" height="50" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect x="16" y="6" width="8" height="16" rx="4" fill="white" stroke="white" strokeWidth="2"/>
                          <rect x="17" y="7" width="6" height="14" rx="3" fill="none" stroke="#2d3e2d" strokeWidth="1.5"/>
                          <path d="M12 18 C12 22.4 15.6 26 20 26 C24.4 26 28 22.4 28 18" stroke="white" strokeWidth="2" fill="none"/>
                          <line x1="20" y1="26" x2="20" y2="32" stroke="white" strokeWidth="2"/>
                          <line x1="16" y1="32" x2="24" y2="32" stroke="white" strokeWidth="2"/>
                          <circle cx="20" cy="14" r="1.5" fill="#556b2f"/>
                        </svg>
                      )}
                    </div>
                    <h4 style={{
                      fontSize: '1.3rem',
                      fontWeight: 'bold',
                      color: '#2d3e2d',
                      marginBottom: '10px'
                    }}>
                      {project.original}
                    </h4>
                    <div style={{
                      fontSize: '1rem',
                      color: '#556b2f',
                      fontWeight: '600',
                      marginBottom: '5px'
                    }}>
                      ⬇️
                    </div>
                    <div style={{
                      fontSize: '1.1rem',
                      color: '#f4d03f',
                      fontWeight: 'bold',
                      fontStyle: 'italic'
                    }}>
                      {project.creativeTitle}
                    </div>
                  </div>

                  {/* Arrow */}
                  <div style={{
                    textAlign: 'center',
                    marginBottom: '30px'
                  }}>
            
                    <div style={{
                      background: 'linear-gradient(135deg, #556b2f, #f4d03f)',
                      color: 'white',
                      padding: '8px 16px',
                      borderRadius: '20px',
                      fontSize: '1.2rem',
                      fontWeight: 'bold',
                      display: 'inline-block',
                      marginTop: '10px'
                    }}>
                      {project.multiplier}
                    </div>
                  </div>

                  {/* Outputs */}
                  <div style={{ marginBottom: '25px' }}>
                    {project.outputs.map((output, idx) => (
                      <div key={idx} style={{
                        background: '#f8fdf8',
                        padding: '12px 16px',
                        borderRadius: '12px',
                        marginBottom: '8px',
                        fontSize: '0.95rem',
                        fontWeight: '500',
                        color: '#2d3e2d',
                        border: '1px solid #e8f5e8'
                      }}>
                        📱 {output}
                      </div>
                    ))}
                  </div>

                  <p style={{
                    color: '#556b2f',
                    fontSize: '0.95rem',
                    fontStyle: 'italic',
                    textAlign: 'center'
                  }}>
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Process */}
      <section style={{ padding: '120px 0', background: 'linear-gradient(135deg, #1a1a1a 0%, #2d3e2d 100%)' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <h2 style={{
                fontSize: '3.5rem',
                fontWeight: '900',
                marginBottom: '60px',
                color: 'white'
              }}>
{t('postProductionPage.workflow.heading')}
</h2>
            </div>
          </div>

          <div className="row g-4">
            {[
              {
                phase: t('postProductionPage.workflow.phases.0.label'),
                title: t('postProductionPage.workflow.phases.0.title'),
                description: t('postProductionPage.workflow.phases.0.description'),
                icon: '🔍',
                color: '#556b2f'
              },
              {
                phase: t('postProductionPage.workflow.phases.1.label'),
                title: t('postProductionPage.workflow.phases.1.title'),
                description: t('postProductionPage.workflow.phases.1.description'),
                icon: '✂️',
                color: '#f4d03f'
              },
              {
                phase: t('postProductionPage.workflow.phases.2.label'),
                title: t('postProductionPage.workflow.phases.2.title'),
                description: t('postProductionPage.workflow.phases.2.description'),
                icon: '🎨',
                color: '#2d3e2d'
              },
              {
                phase: t('postProductionPage.workflow.phases.3.label'),
                title: t('postProductionPage.workflow.phases.3.title'),
                description: t('postProductionPage.workflow.phases.3.description'),
                color: '#556b2f',
                icon: '📱'
              } 
            ].map((step, index) => (
              <div key={index} className="col-lg-6">
                <div style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: '25px',
                  padding: '40px',
                  backdropFilter: 'blur(15px)',
                  border: '2px solid rgba(85, 107, 47, 0.2)',
                  height: '100%'
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: '25px'
                  }}>
                    <div style={{
                      width: '60px',
                      height: '60px',
                      background: `linear-gradient(135deg, ${step.color}, ${step.color}dd)`,
                      borderRadius: '15px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginRight: '20px'
                    }}>
                      {index === 0 && (
                        // INTAKE - Mission Blueprint (Magnifying Glass/Analysis)
                        <svg width="35" height="35" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="16" cy="16" r="10" fill="none" stroke="white" strokeWidth="3"/>
                          <circle cx="16" cy="16" r="6" fill="none" stroke="white" strokeWidth="2" opacity="0.7"/>
                          <line x1="24" y1="24" x2="35" y2="35" stroke="white" strokeWidth="3" strokeLinecap="round"/>
                          <circle cx="16" cy="16" r="3" fill="white" opacity="0.8"/>
                          <path d="M12 12 L20 20" stroke="white" strokeWidth="1.5" opacity="0.6"/>
                          <circle cx="30" cy="30" r="2" fill="white" opacity="0.9"/>
                        </svg>
                      )}
                      {index === 1 && (
                        // EDIT - Tactical Assembly (Scissors/Cutting)
                        <svg width="35" height="35" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="12" cy="12" r="4" fill="white"/>
                          <circle cx="12" cy="28" r="4" fill="white"/>
                          <path d="M16 12 L30 20 L16 28" stroke="white" strokeWidth="2.5" fill="none"/>
                          <line x1="30" y1="20" x2="35" y2="20" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                          <path d="M12 16 L25 22" stroke="white" strokeWidth="1.5" strokeDasharray="2,2"/>
                          <path d="M12 24 L25 18" stroke="white" strokeWidth="1.5" strokeDasharray="2,2"/>
                          <circle cx="30" cy="20" r="1.5" fill="white"/>
                        </svg>
                      )}
                      {index === 2 && (
                        // POLISH - Visual & Audio Polish (Palette/Brush)
                        <svg width="35" height="35" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <ellipse cx="20" cy="25" rx="15" ry="10" fill="white" opacity="0.9"/>
                          <circle cx="12" cy="22" r="2" fill="#556b2f"/>
                          <circle cx="20" cy="20" r="2" fill="#f4d03f"/>
                          <circle cx="28" cy="22" r="2" fill="#2d3e2d"/>
                          <circle cx="16" cy="28" r="1.5" fill="#556b2f"/>
                          <circle cx="24" cy="28" r="1.5" fill="#f4d03f"/>
                          <path d="M25 8 L30 15 L22 18 Z" fill="white"/>
                          <line x1="25" y1="8" x2="22" y2="18" stroke="white" strokeWidth="2"/>
                        </svg>
                      )}
                      {index === 3 && (
                        // REPURPOSE - Strategic Deployment (Mobile/Multi-platform)
                        <svg width="35" height="35" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect x="15" y="6" width="10" height="16" rx="2" fill="white"/>
                          <rect x="16" y="7" width="8" height="12" rx="1" fill="none" stroke="#556b2f" strokeWidth="1.5"/>
                          <circle cx="20" cy="20.5" r="0.5" fill="#556b2f"/>
                          <rect x="8" y="12" width="6" height="8" rx="1" fill="white" opacity="0.8"/>
                          <rect x="26" y="12" width="6" height="8" rx="1" fill="white" opacity="0.8"/>
                          <circle cx="11" cy="16" r="1" fill="#556b2f"/>
                          <circle cx="29" cy="16" r="1" fill="#556b2f"/>
                          <path d="M20 25 L15 30 L20 35 L25 30 Z" fill="white" opacity="0.7"/>
                          <circle cx="20" cy="30" r="1" fill="#556b2f"/>
                        </svg>
                      )}
                    </div>
                    <div>
                      <div style={{
                        color: step.color,
                        fontSize: '0.9rem',
                        fontWeight: 'bold',
                        marginBottom: '5px'
                      }}>
                        {step.phase}
                      </div>
                      <h4 style={{
                        color: 'white',
                        fontSize: '1.4rem',
                        fontWeight: 'bold',
                        margin: 0
                      }}>
                        {step.title}
                      </h4>
                    </div>
                  </div>
                  <p style={{
                    color: '#e8f5e8',
                    lineHeight: '1.7',
                    fontSize: '1.05rem'
                  }}>
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
<br>
</br>
<br>
</br><br>
</br><br>
</br><br>
</br><br>
</br><br>
</br>
    </>
  );
};

export default PostProductionPage;