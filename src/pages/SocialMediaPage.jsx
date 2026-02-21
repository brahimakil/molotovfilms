import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { storage } from "../firebase/config";
import { ref, getDownloadURL } from 'firebase/storage';
import { useTranslation } from 'react-i18next';

// Import placeholder images from available assets
import socialImage1 from "../assets/images/s-1.webp"; // Social media placeholder
import socialImage2 from "../assets/images/s-2.webp"; // Content creation placeholder
import socialImage3 from "../assets/images/s-3.webp"; // Engagement placeholder

const SocialMediaPage = () => {
  const { t } = useTranslation();

  // Video loading states
  const [showcaseVideoUrl, setShowcaseVideoUrl] = useState('');
  const [showcaseVideoLoaded, setShowcaseVideoLoaded] = useState(false);
  const [showcaseVideoError, setShowcaseVideoError] = useState(false);
  const [shouldLoadShowcaseVideo, setShouldLoadShowcaseVideo] = useState(false);

  const [portfolioVideoUrl, setPortfolioVideoUrl] = useState('');
  const [portfolioVideoLoaded, setPortfolioVideoLoaded] = useState(false);
  const [portfolioVideoError, setPortfolioVideoError] = useState(false);
  const [shouldLoadPortfolioVideo, setShouldLoadPortfolioVideo] = useState(false);

  // Service showcase data
  const socialServices = [
    {
      id: 1,
      title: t('socialMediaPage.services', { returnObjects: true })[0].title,
      description: t('socialMediaPage.services', { returnObjects: true })[0].description,
      icon: "📊",
      features: t('socialMediaPage.services', { returnObjects: true })[0].features
    },
    {
      id: 2,
      title: t('socialMediaPage.services', { returnObjects: true })[1].title,
      description: t('socialMediaPage.services', { returnObjects: true })[1].description,
      icon: "🎨",
      features: t('socialMediaPage.services', { returnObjects: true })[1].features
    },
    {
      id: 3,
      title: t('socialMediaPage.services', { returnObjects: true })[2].title,
      description: t('socialMediaPage.services', { returnObjects: true })[2].description,
      icon: "💬",
      features: t('socialMediaPage.services', { returnObjects: true })[2].features
    },
    {
      id: 4,
      title: t('socialMediaPage.services', { returnObjects: true })[3].title,
      description: t('socialMediaPage.services', { returnObjects: true })[3].description,
      icon: "📈",
      features: t('socialMediaPage.services', { returnObjects: true })[3].features
    }
  ];

  const heroRef = useRef(null);
  const showcaseVideoRef = useRef(null);
  const portfolioVideoRef = useRef(null);

  // Load showcase video
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

  // Load portfolio video
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

  return (
    <>
      {/* Hero Section with Social Media Network Visual */}
      <section 
        ref={heroRef} 
        style={{
          position: 'relative',
          height: '80vh',
          minHeight: '600px',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        {/* Animated Network Background */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.1,
          background: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E") repeat`
        }} />
        
        {/* Hero Content */}
        <div className="container text-center text-white" style={{ zIndex: 5 }}>
          <div className="row">
            <div className="col-lg-8 mx-auto">
              {/* Large Social Media Icon */}
              <div style={{
                fontSize: '6rem',
                marginBottom: '30px',
                background: 'linear-gradient(135deg, #38BDF8, #6427FF)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                filter: 'drop-shadow(0 0 20px rgba(255,255,255,0.3))'
              }}>
                🌐
              </div>
              
              <h1 style={{
                fontSize: '3.5rem',
                fontWeight: 'bold',
                marginBottom: '30px',
                textShadow: '0 0 30px rgba(255,255,255,0.3)'
              }}>
{t('socialMediaPage.heroHeading')}
</h1>
              
              <p style={{
                fontSize: '1.3rem',
                marginBottom: '40px',
                opacity: 0.9,
                lineHeight: '1.6'
              }}>
{t('socialMediaPage.heroDescription')}              </p>
              
              
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="social_media_content" style={{ padding: '80px 0' }}>
        <div className="container">
          
          {/* Introduction Section */}
          <div className="row mb-5">
            <div className="col-lg-8 mx-auto text-center">
              <h2 style={{
                fontSize: '3rem',
                fontWeight: 'bold',
                background: 'linear-gradient(135deg, #38BDF8, #6427FF)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                marginBottom: '30px'
              }}>
{t('socialMediaPage.ctaHeading')}
</h2>
              <p style={{ fontSize: '1.2rem', color: '#666', lineHeight: '1.8' }}>
              {t('socialMediaPage.ctaDescription')}              </p>
            </div>
          </div>

          {/* Video Showcase Section */}
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
                    <div>{t('socialMediaPage.loadingShowcase')}</div>
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
{t('socialMediaPage.platformHeading')}
</h3>
              <p style={{ fontSize: '1.1rem', color: '#666', lineHeight: '1.7', marginBottom: '25px' }}>
              {t('socialMediaPage.platformDescription')}
              </p>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ marginBottom: '10px', fontSize: '1rem' }}>
                  ✓ <span dangerouslySetInnerHTML={{ __html: t('socialMediaPage.checklist', { returnObjects: true })[0] }} />
                </li>
                <li style={{ marginBottom: '10px', fontSize: '1rem' }}>
                  ✓ <span dangerouslySetInnerHTML={{ __html: t('socialMediaPage.checklist', { returnObjects: true })[1] }} />
                </li>
                <li style={{ marginBottom: '10px', fontSize: '1rem' }}>
                  ✓ <span dangerouslySetInnerHTML={{ __html: t('socialMediaPage.checklist', { returnObjects: true })[2] }} />
                </li>
              </ul>
            </div>
          </div>

          {/* Services Grid */}
          <div className="row mb-5">
            <div className="col-12">
              <h3 style={{ 
                fontSize: '2.5rem', 
                textAlign: 'center',
                fontWeight: 'bold',
                color: '#333',
                marginBottom: '50px'
              }}>
{t('socialMediaPage.arsenalHeading')}
</h3>
            </div>
          </div>

          <div className="row g-4 mb-5">
            {socialServices.map((service, index) => (
              <div key={service.id} className="col-md-6 col-lg-3">
                <div style={{
                  background: index % 2 === 0 
                    ? 'linear-gradient(135deg, #38BDF8, #6427FF)' 
                    : 'linear-gradient(135deg, #667eea, #764ba2)',
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
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.2)';
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

          {/* Process Section */}
          <div className="row align-items-center">
            <div className="col-lg-5">
              <h3 style={{ 
                fontSize: '2.2rem', 
                fontWeight: 'bold', 
                color: '#333',
                marginBottom: '20px'
              }}>
{t('socialMediaPage.processHeading')}
</h3>
              <div style={{ marginBottom: '30px' }}>
                <h5 style={{ color: '#38BDF8', fontWeight: 'bold', marginBottom: '10px' }}>
                  {t('socialMediaPage.processSteps', { returnObjects: true })[0].title}
                </h5>
                <p style={{ color: '#666', marginBottom: '20px' }}>
                {t('socialMediaPage.processSteps', { returnObjects: true })[0].description}                </p>
                
                <h5 style={{ color: '#6427FF', fontWeight: 'bold', marginBottom: '10px' }}>
                  {t('socialMediaPage.processSteps', { returnObjects: true })[1].title}
                </h5>
                <p style={{ color: '#666', marginBottom: '20px' }}>
                {t('socialMediaPage.processSteps', { returnObjects: true })[1].description}
                </p>
                
                <h5 style={{ color: '#38BDF8', fontWeight: 'bold', marginBottom: '10px' }}>
                {t('socialMediaPage.processSteps', { returnObjects: true })[2].title}
                </h5>
                <p style={{ color: '#666' }}>
                {t('socialMediaPage.processSteps', { returnObjects: true })[2].description}                </p>
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
                    <div>{t('socialMediaPage.loadingPortfolio')}</div>
                  </div>
                )}
              </div>
            </div>
          </div>



        </div>
      </section>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
      `}</style>
    </>
  );
};

export default SocialMediaPage;