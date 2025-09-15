import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { storage } from "../firebase/config";
import { ref, getDownloadURL } from 'firebase/storage';

// Import placeholder images from available assets
import socialImage1 from "../assets/images/s-1.webp"; // Social media placeholder
import socialImage2 from "../assets/images/s-2.webp"; // Content creation placeholder
import socialImage3 from "../assets/images/s-3.webp"; // Engagement placeholder

const SocialMediaPage = () => {
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
      title: "Content Strategy",
      description: "We build the roadmap",
      icon: "📊",
      features: ["Audience Intelligence", "Content Calendars That Convert", "Performance Benchmarking"]
    },
    {
      id: 2,
      title: "Creative Production",
      description: "Scroll-stopping is the bare minimum.",
      icon: "🎨",
      features: ["Disruptive Visual Design", "High-Impact Copywriting", "Viral-Ready Video Content"]
    },
    {
      id: 3,
      title: "Community Management",
      description: "This is where brands are truly built. ",
      icon: "💬",
      features: ["Proactive Real-Time Engagement", "Crisis & Reputation Management", "Tribe & Community Building"]
    },
    {
      id: 4,
      title: "Analytics & Optimization",
      description: "Data is our command center.",
      icon: "📈",
      features: ["Advanced Performance Tracking", "Aggressive A/B Testing", "Crystal-Clear ROI Analysis"]
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
SOCIAL, SUPERCHARGED.
</h1>
              
              <p style={{
                fontSize: '1.3rem',
                marginBottom: '40px',
                opacity: 0.9,
                lineHeight: '1.6'
              }}>
Stop posting into the void. We don't just manage social media; we weaponize it for growth. We architect digital strategies that capture attention, build cult followings, and drive real-world revenue.              </p>
              
              
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
FROM SCROLLERS TO CUSTOMERS.
</h2>
              <p style={{ fontSize: '1.2rem', color: '#666', lineHeight: '1.8' }}>
              The internet is loud. We’re louder. In a world of infinite scroll, attention is the only currency that matters. We don't just make content that gets noticed—we create magnetic experiences that get remembered, shared, and converted into loyal customers.              </p>
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
                    <div>📱 Loading showcase...</div>
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
WE SPEAK FLUENT INTERNET.
</h3>
              <p style={{ fontSize: '1.1rem', color: '#666', lineHeight: '1.7', marginBottom: '25px' }}>
              TikTok isn't LinkedIn. Instagram isn't X. We know. As native speakers on every platform, we craft content that feels right because it is right. We translate your brand's core message into the viral language of today's culture, ensuring you're not just on the platform, but leading the conversation.
              </p>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ marginBottom: '10px', fontSize: '1rem' }}>
                  ✓ <strong>Platform-Native Mastery:</strong> Content meticulously engineered to win on each social ecosystem.
                </li>
                <li style={{ marginBottom: '10px', fontSize: '1rem' }}>
                  ✓ <strong>Real-Time Velocity:</strong>We move at the speed of culture, not corporate calendars.
                </li>
                <li style={{ marginBottom: '10px', fontSize: '1rem' }}>
                  ✓ <strong>Intelligence-Driven Strategy:</strong>Every single move is backed by data, not guesswork.
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
Your Arsenal for Digital Dominance
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
The Blueprint for Victory
</h3>
              <div style={{ marginBottom: '30px' }}>
                <h5 style={{ color: '#38BDF8', fontWeight: 'bold', marginBottom: '10px' }}>
                  🎯 Strategic Discovery
                </h5>
                <p style={{ color: '#666', marginBottom: '20px' }}>
                We don't just learn your brand; we decode its DNA. We immerse ourselves in your world, your audience, and the competitive landscape to unearth your unique winning advantage.                </p>
                
                <h5 style={{ color: '#6427FF', fontWeight: 'bold', marginBottom: '10px' }}>
                  🎨 Creative Ignition
                </h5>
                <p style={{ color: '#666', marginBottom: '20px' }}>
                This is where strategy becomes magic. Our creative team ignites the big ideas, producing thumb-stopping content that’s perfectly aligned with your brand voice and strategic goals.
                </p>
                
                <h5 style={{ color: '#38BDF8', fontWeight: 'bold', marginBottom: '10px' }}>
                📈 Execute & Amplify
                </h5>
                <p style={{ color: '#666' }}>
                We launch, listen, and learn—fast. We monitor performance in real-time, engage with your community, and continuously optimize based on hard data to turn good results into unbeatable ones.                </p>
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
                    <div>📱 Loading portfolio...</div>
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