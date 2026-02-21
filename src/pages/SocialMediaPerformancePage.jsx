import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { storage } from "../firebase/config";
import { ref, getDownloadURL } from 'firebase/storage';
import { useTranslation } from 'react-i18next';

// Import placeholder images
import analyticsImg from "../assets/images/s-1.webp";
import testingImg from "../assets/images/s-2.webp";
import optimizationImg from "../assets/images/s-3.webp";

const SocialMediaPerformancePage = () => {
  const { t } = useTranslation();

  // Video loading states
  const [heroVideoUrl, setHeroVideoUrl] = useState('');
  const [heroVideoLoaded, setHeroVideoLoaded] = useState(false);
  const [heroVideoError, setHeroVideoError] = useState(false);
  const [shouldLoadHeroVideo, setShouldLoadHeroVideo] = useState(false);

  const [showcaseVideoUrl, setShowcaseVideoUrl] = useState('');
  const [showcaseVideoLoaded, setShowcaseVideoLoaded] = useState(false);
  const [showcaseVideoError, setShowcaseVideoError] = useState(false);
  const [shouldLoadShowcaseVideo, setShouldLoadShowcaseVideo] = useState(false);

  // Analytics data for visualization
  const [selectedMetric, setSelectedMetric] = useState('ctr');
  const [animatedValues, setAnimatedValues] = useState({
    ctr: 0,
    conversions: 0,
    roi: 0,
    engagement: 0
  });

  const heroRef = useRef(null);
  const videoRef = useRef(null);
  const showcaseVideoRef = useRef(null);

  // Performance metrics data - Updated with green theme colors
  const metricsData = {
    ctr: { value: 8.7, label: t('socialMediaPerformancePage.metrics', { returnObjects: true })[0].label, unit: '%', color: '#6b8e23' },
    conversions: { value: 24.3, label: t('socialMediaPerformancePage.metrics', { returnObjects: true })[1].label, unit: '%', color: '#556b2f' },
    roi: { value: 340, label: t('socialMediaPerformancePage.metrics', { returnObjects: true })[2].label, unit: '%', color: '#daa520' },
    engagement: { value: 92.1, label: t('socialMediaPerformancePage.metrics', { returnObjects: true })[3].label, unit: '%', color: '#6B7A47' }
  };

  // Combined service offerings
  const combinedServices = [
    {
      id: 1,
      title: t('socialMediaPerformancePage.services', { returnObjects: true })[0].title,
      description: t('socialMediaPerformancePage.services', { returnObjects: true })[0].description,
      icon: "🎯",
      features: t('socialMediaPerformancePage.services', { returnObjects: true })[0].features
    },
    {
      id: 2,
      title: t('socialMediaPerformancePage.services', { returnObjects: true })[1].title,
      description: t('socialMediaPerformancePage.services', { returnObjects: true })[1].description,
      icon: "🚀",
      features: t('socialMediaPerformancePage.services', { returnObjects: true })[1].features
    },
    {
      id: 3,
      title: t('socialMediaPerformancePage.services', { returnObjects: true })[2].title,
      description: t('socialMediaPerformancePage.services', { returnObjects: true })[2].description,
      icon: "📊",
      features: t('socialMediaPerformancePage.services', { returnObjects: true })[2].features
    },
    {
      id: 4,
      title: t('socialMediaPerformancePage.services', { returnObjects: true })[3].title,
      description: t('socialMediaPerformancePage.services', { returnObjects: true })[3].description,
      icon: "💬",
      features: t('socialMediaPerformancePage.services', { returnObjects: true })[3].features
    }
  ];

  // A/B Testing showcase data
  const abTestResults = [
    {
      id: 1,
      title: t('socialMediaPerformancePage.abTesting.tests', { returnObjects: true })[0].title,
      variantA: { name: t('socialMediaPerformancePage.abTesting.tests', { returnObjects: true })[0].variantA, performance: 6.2, image: analyticsImg },
      variantB: { name: t('socialMediaPerformancePage.abTesting.tests', { returnObjects: true })[0].variantB, performance: 8.7, image: testingImg },
      winner: "B",
      improvement: t('socialMediaPerformancePage.abTesting.tests', { returnObjects: true })[0].improvement
    },
    {
      id: 2,
      title: t('socialMediaPerformancePage.abTesting.tests', { returnObjects: true })[1].title,
      variantA: { name: t('socialMediaPerformancePage.abTesting.tests', { returnObjects: true })[1].variantA, performance: 4.1, image: testingImg },
      variantB: { name: t('socialMediaPerformancePage.abTesting.tests', { returnObjects: true })[1].variantB, performance: 7.3, image: optimizationImg },
      winner: "B",
      improvement: t('socialMediaPerformancePage.abTesting.tests', { returnObjects: true })[1].improvement
    },
    {
      id: 3,
      title: t('socialMediaPerformancePage.abTesting.tests', { returnObjects: true })[2].title,
      variantA: { name: t('socialMediaPerformancePage.abTesting.tests', { returnObjects: true })[2].variantA, performance: 5.8, image: optimizationImg },
      variantB: { name: t('socialMediaPerformancePage.abTesting.tests', { returnObjects: true })[2].variantB, performance: 9.1, image: analyticsImg },
      winner: "B",
      improvement: t('socialMediaPerformancePage.abTesting.tests', { returnObjects: true })[2].improvement
    }
  ];

  // Load hero video
  useEffect(() => {
    setShouldLoadHeroVideo(true);
  }, []);

  useEffect(() => {
    if (!shouldLoadHeroVideo || heroVideoLoaded) return;

    const loadHeroVideo = async () => {
      try {
        const videoPath = 'servicedetails(reels..)/videoinplaceofimage-optimized.mp4';
        const videoRefFirebase = ref(storage, videoPath);
        const url = await getDownloadURL(videoRefFirebase);
        setHeroVideoUrl(url);
        setHeroVideoLoaded(true);
      } catch (error) {
        console.error('Error loading hero video:', error);
        setHeroVideoError(true);
      }
    };

    loadHeroVideo();
  }, [shouldLoadHeroVideo, heroVideoLoaded]);

  // Load showcase video
  useEffect(() => {
    setShouldLoadShowcaseVideo(true);
  }, []);

  useEffect(() => {
    if (!shouldLoadShowcaseVideo || showcaseVideoLoaded) return;

    const loadShowcaseVideo = async () => {
      try {
        const videoPath = 'servicedetails(reels..)/Low Budget Heist website 1-optimized.mp4';
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

  // Animate metrics on load
  useEffect(() => {
    const animateMetrics = () => {
      Object.keys(metricsData).forEach((key, index) => {
        setTimeout(() => {
          const targetValue = metricsData[key].value;
          let currentValue = 0;
          const increment = targetValue / 50;
          
          const timer = setInterval(() => {
            currentValue += increment;
            if (currentValue >= targetValue) {
              currentValue = targetValue;
              clearInterval(timer);
            }
            setAnimatedValues(prev => ({
              ...prev,
              [key]: currentValue
            }));
          }, 30);
        }, index * 200);
      });
    };

    animateMetrics();
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section 
        ref={heroRef}
        style={{
          position: 'relative',
          minHeight: '100vh',
          height: 'auto',
          background: 'linear-gradient(135deg, #556b2f 0%, #6b8e23 50%, #2d3d1f 100%)',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          padding: '80px 0'
        }}
      >
        {/* Animated Background Grid */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `
            linear-gradient(rgba(107, 142, 35, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(107, 142, 35, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          animation: 'gridMove 20s linear infinite'
        }} />

        <div className="container">
          <div className="row align-items-center">
            {/* Left Content */}
            <div className="col-lg-6 mb-5 mb-lg-0">
              <div style={{ color: 'white', zIndex: 10, position: 'relative' }}>
                <h1 style={{
                  fontSize: 'clamp(1.8rem, 4vw, 2.3rem)',
                  fontWeight: 'bold',
                  marginBottom: '30px',
                  background: 'linear-gradient(135deg, #daa520, #ffd700)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  lineHeight: '1.2'
                }}>
                  {t('socialMediaPerformancePage.heroHeading')}
                </h1>
                <p style={{
                  fontSize: 'clamp(1rem, 2.5vw, 1.3rem)',
                  marginBottom: '40px',
                  color: '#e8f5e8',
                  lineHeight: '1.6'
                }}>
                  {t('socialMediaPerformancePage.heroDescription')}
                </p>
                
                {/* Real-time Metrics Dashboard */}
                <div style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '20px',
                  padding: 'clamp(20px, 4vw, 30px)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)'
                }}>
                  <h3 style={{ 
                    color: 'white', 
                    marginBottom: '20px', 
                    fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
                    textAlign: 'center'
                  }}>{t('socialMediaPerformancePage.liveMetricsLabel')}</h3>
                  <div className="row g-2 g-md-3">
                    {Object.entries(metricsData).map(([key, data]) => (
                      <div key={key} className="col-6 col-md-6">
                        <div style={{
                          textAlign: 'center',
                          padding: 'clamp(10px, 2vw, 15px)',
                          background: selectedMetric === key ? 'rgba(255, 255, 255, 0.2)' : 'rgba(255, 255, 255, 0.05)',
                          borderRadius: '12px',
                          cursor: 'pointer',
                          transition: 'all 0.3s ease',
                          border: selectedMetric === key ? `2px solid ${data.color}` : '1px solid rgba(255, 255, 255, 0.1)'
                        }}
                        onClick={() => setSelectedMetric(key)}
                        onMouseOver={(e) => {
                          if (selectedMetric !== key) {
                            e.target.style.background = 'rgba(255, 255, 255, 0.15)';
                          }
                        }}
                        onMouseOut={(e) => {
                          if (selectedMetric !== key) {
                            e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                          }
                        }}>
                          <div style={{
                            fontSize: 'clamp(1.2rem, 3vw, 2rem)',
                            fontWeight: 'bold',
                            color: data.color,
                            marginBottom: '5px'
                          }}>
                            {animatedValues[key].toFixed(1)}{data.unit}
                          </div>
                          <div style={{ 
                            color: '#e8f5e8', 
                            fontSize: 'clamp(0.7rem, 1.5vw, 0.9rem)',
                            lineHeight: '1.2'
                          }}>
                            {data.label}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Video */}
            <div className="col-lg-6">
              <div style={{
                position: 'relative',
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: '0 25px 50px rgba(0, 0, 0, 0.3)',
                maxWidth: '100%'
              }}>
                {heroVideoLoaded && heroVideoUrl ? (
                  <video
                    ref={videoRef}
                    style={{
                      width: '100%',
                      height: 'clamp(250px, 50vw, 400px)',
                      objectFit: 'cover'
                    }}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    controls={false}
                  >
                    <source src={heroVideoUrl} type="video/mp4" />
                  </video>
                ) : (
                  <div style={{
                    width: '100%',
                    height: 'clamp(250px, 50vw, 400px)',
                    background: 'linear-gradient(135deg, #6b8e23, #556b2f)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
                    textAlign: 'center',
                    padding: '20px'
                  }}>
                    {t('socialMediaPerformancePage.loadingData')}
                  </div>
                )}
                
                {/* Floating Analytics Badge */}
                <div style={{
                  position: 'absolute',
                  top: '20px',
                  right: '20px',
                  background: 'linear-gradient(135deg, #6b8e23, #556b2f)',
                  color: 'white',
                  padding: 'clamp(8px, 2vw, 10px) clamp(12px, 3vw, 15px)',
                  borderRadius: '25px',
                  fontSize: 'clamp(0.8rem, 1.5vw, 0.9rem)',
                  fontWeight: 'bold',
                  backdropFilter: 'blur(10px)'
                }}>
                  {t('socialMediaPerformancePage.roiAchieved')}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section style={{ padding: '100px 0', background: '#f8faf8' }}>
        <div className="container">
          <div className="row mb-5">
            <div className="col-lg-8 mx-auto text-center">
              <h2 style={{
                fontSize: '3rem',
                fontWeight: 'bold',
                marginBottom: '30px',
                background: 'linear-gradient(135deg, #556b2f, #6b8e23)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                {t('socialMediaPerformancePage.ctaHeading')}
              </h2>
              <p style={{ fontSize: '1.2rem', color: '#4a5d4a', lineHeight: '1.8' }}>
                {t('socialMediaPerformancePage.ctaDescription')}
              </p>
            </div>
          </div>

          {/* Combined Services Grid */}
          <div className="row g-4">
            {combinedServices.map((service, index) => (
              <div key={service.id} className="col-md-6 col-lg-3">
                <div style={{
                  background: index % 2 === 0 
                    ? 'linear-gradient(135deg, #6b8e23, #556b2f)' 
                    : 'linear-gradient(135deg, #daa520, #b8860b)',
                  borderRadius: '20px',
                  padding: '40px 30px',
                  color: 'white',
                  textAlign: 'center',
                  height: '100%',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(85, 107, 47, 0.3)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
                >
                  <div style={{ fontSize: '3rem', marginBottom: '20px' }}>{service.icon}</div>
                  <h4 style={{ fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '15px' }}>
                    {service.title}
                  </h4>
                  <p style={{ fontSize: '0.95rem', opacity: 0.9, marginBottom: '20px' }}>
                    {service.description}
                  </p>
                  <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.9rem' }}>
                    {service.features.map((feature, idx) => (
                      <li key={idx} style={{ marginBottom: '5px', opacity: 0.8 }}>
                        • {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* A/B Testing Showcase Section */}
      <section style={{ padding: '100px 0', background: 'white' }}>
        <div className="container">
          <div className="row mb-5">
            <div className="col-lg-8 mx-auto text-center">
              <h2 style={{
                fontSize: '3rem',
                fontWeight: 'bold',
                marginBottom: '30px',
                background: 'linear-gradient(135deg, #556b2f, #6b8e23)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                {t('socialMediaPerformancePage.abTesting.heading')}
              </h2>
              <p style={{ fontSize: '1.2rem', color: '#4a5d4a', lineHeight: '1.8' }}>
                {t('socialMediaPerformancePage.abTesting.description')}
              </p>
            </div>
          </div>

          {/* A/B Test Results */}
          <div className="row g-4">
            {abTestResults.map((test, index) => (
              <div key={test.id} className="col-lg-4">
                <div style={{
                  background: 'white',
                  borderRadius: '20px',
                  padding: '30px',
                  boxShadow: '0 10px 30px rgba(85, 107, 47, 0.1)',
                  height: '100%',
                  border: '2px solid #f0f5f0'
                }}>
                  <h4 style={{
                    fontSize: '1.3rem',
                    fontWeight: 'bold',
                    marginBottom: '25px',
                    color: '#2d3d1f'
                  }}>
                    {test.title}
                  </h4>

                  {/* Variant Comparison */}
                  <div style={{ marginBottom: '25px' }}>
                    {/* Variant A */}
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      marginBottom: '15px',
                      padding: '15px',
                      background: test.winner === 'A' ? '#f0f8f0' : '#f8f9fa',
                      borderRadius: '12px',
                      border: test.winner === 'A' ? '2px solid #6b8e23' : '1px solid #e2e8f0'
                    }}>
                      <img 
                        src={test.variantA.image} 
                        alt="Variant A"
                        style={{
                          width: '50px',
                          height: '50px',
                          borderRadius: '8px',
                          objectFit: 'cover',
                          marginRight: '15px'
                        }}
                      />
                      <div style={{ flex: 1 }}>
                        <div style={{ fontWeight: 'bold', color: '#374151' }}>A: {test.variantA.name}</div>
                        <div style={{ color: '#6b7280', fontSize: '0.9rem' }}>{test.variantA.performance}% Performance</div>
                      </div>
                      {test.winner === 'A' && (
                        <div style={{ color: '#6b8e23', fontWeight: 'bold' }}>{t('socialMediaPerformancePage.abTesting.winnerLabel')}</div>
                      )}
                    </div>

                    {/* Variant B */}
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      padding: '15px',
                      background: test.winner === 'B' ? '#f0f8f0' : '#f8f9fa',
                      borderRadius: '12px',
                      border: test.winner === 'B' ? '2px solid #6b8e23' : '1px solid #e2e8f0'
                    }}>
                      <img 
                        src={test.variantB.image} 
                        alt="Variant B"
                        style={{
                          width: '50px',
                          height: '50px',
                          borderRadius: '8px',
                          objectFit: 'cover',
                          marginRight: '15px'
                        }}
                      />
                      <div style={{ flex: 1 }}>
                        <div style={{ fontWeight: 'bold', color: '#374151' }}>B: {test.variantB.name}</div>
                        <div style={{ color: '#6b7280', fontSize: '0.9rem' }}>{test.variantB.performance}% Performance</div>
                      </div>
                      {test.winner === 'B' && (
                        <div style={{ color: '#6b8e23', fontWeight: 'bold' }}>{t('socialMediaPerformancePage.abTesting.winnerLabel')}</div>
                      )}
                    </div>
                  </div>

                  {/* Result */}
                  <div style={{
                    background: 'linear-gradient(135deg, #6b8e23, #556b2f)',
                    color: 'white',
                    padding: '15px',
                    borderRadius: '12px',
                    textAlign: 'center',
                    fontWeight: 'bold'
                  }}>
                    {test.improvement}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section style={{ padding: '100px 0', background: 'linear-gradient(135deg, #2d3d1f 0%, #3d4f2a 100%)' }}>
        <div className="container">
          <div className="row align-items-center mb-5">
            <div className="col-lg-6">
              <h2 style={{
                fontSize: '3rem',
                fontWeight: 'bold',
                marginBottom: '30px',
                color: 'white'
              }}>
                {t('socialMediaPerformancePage.processHeading')}
              </h2>
              <div style={{ marginBottom: '30px' }}>
                <h5 style={{ color: '#daa520', fontWeight: 'bold', marginBottom: '10px' }}>
                  {t('socialMediaPerformancePage.processSteps', { returnObjects: true })[0].label}
                </h5>
                <p style={{ color: '#e8f5e8', marginBottom: '20px' }}>
                  {t('socialMediaPerformancePage.processSteps', { returnObjects: true })[0].description}
                </p>
                
                <h5 style={{ color: '#6b8e23', fontWeight: 'bold', marginBottom: '10px' }}>
                  {t('socialMediaPerformancePage.processSteps', { returnObjects: true })[1].label}
                </h5>
                <p style={{ color: '#e8f5e8', marginBottom: '20px' }}>
                  {t('socialMediaPerformancePage.processSteps', { returnObjects: true })[1].description}
                </p>
                
                <h5 style={{ color: '#daa520', fontWeight: 'bold', marginBottom: '10px' }}>
                  {t('socialMediaPerformancePage.processSteps', { returnObjects: true })[2].label}
                </h5>
                <p style={{ color: '#e8f5e8' }}>
                  {t('socialMediaPerformancePage.processSteps', { returnObjects: true })[2].description}
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div style={{ position: 'relative', borderRadius: '15px', overflow: 'hidden' }}>
                {showcaseVideoLoaded && showcaseVideoUrl ? (
                  <video
                    ref={showcaseVideoRef}
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
                    <source src={showcaseVideoUrl} type="video/mp4" />
                  </video>
                ) : (
                  <div style={{
                    width: '100%',
                    height: '400px',
                    background: 'linear-gradient(135deg, #6b8e23, #556b2f)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '1.2rem'
                  }}>
                    {t('socialMediaPerformancePage.loadingShowcase')}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
      `}</style>
    </>
  );
};

export default SocialMediaPerformancePage;