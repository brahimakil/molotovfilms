import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { storage } from "../firebase/config";
import { ref, getDownloadURL } from 'firebase/storage';

// Import placeholder images
import analyticsImg from "../assets/images/s-1.webp";
import testingImg from "../assets/images/s-2.webp";
import optimizationImg from "../assets/images/s-3.webp";

const SocialMediaPerformancePage = () => {
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

  // Performance metrics data
  const metricsData = {
    ctr: { value: 8.7, label: 'Click-Through Rate', unit: '%', color: '#3B82F6' },
    conversions: { value: 24.3, label: 'Conversion Rate', unit: '%', color: '#10B981' },
    roi: { value: 340, label: 'Return on Investment', unit: '%', color: '#F59E0B' },
    engagement: { value: 92.1, label: 'Engagement Score', unit: '%', color: '#8B5CF6' }
  };

  // Combined service offerings
  const combinedServices = [
    {
      id: 1,
      title: "Strategic Social Intelligence",
      description: "We decode your audience and build the roadmap to victory.",
      icon: "🎯",
      features: ["Deep Audience Intelligence", "Platform-Native Strategy", "Competitive Analysis & Positioning"]
    },
    {
      id: 2,
      title: "High-Performance Content Creation",
      description: "Scroll-stopping content engineered for conversion.",
      icon: "🚀",
      features: ["Viral-Ready Video Content", "A/B Tested Creative Variations", "Data-Driven Design Systems"]
    },
    {
      id: 3,
      title: "Performance Analytics & Optimization",
      description: "Every post, every ad, every interaction is measured and optimized.",
      icon: "📊",
      features: ["Real-Time Performance Tracking", "Advanced A/B Testing", "ROI-Focused Campaign Optimization"]
    },
    {
      id: 4,
      title: "Community & Conversion Management",
      description: "We turn followers into customers and customers into advocates.",
      icon: "💬",
      features: ["Proactive Community Engagement", "Conversion-Focused Campaigns", "Brand Advocacy Programs"]
    }
  ];

  // A/B Testing showcase data
  const abTestResults = [
    {
      id: 1,
      title: "Hook Variation Test",
      variantA: { name: "Question Hook", performance: 6.2, image: analyticsImg },
      variantB: { name: "Statement Hook", performance: 8.7, image: testingImg },
      winner: "B",
      improvement: "40% higher CTR"
    },
    {
      id: 2,
      title: "CTA Button Test",
      variantA: { name: "Learn More", performance: 4.1, image: testingImg },
      variantB: { name: "Get Started", performance: 7.3, image: optimizationImg },
      winner: "B",
      improvement: "78% more conversions"
    },
    {
      id: 3,
      title: "Content Format Test",
      variantA: { name: "Static Post", performance: 5.8, image: optimizationImg },
      variantB: { name: "Video Content", performance: 9.1, image: analyticsImg },
      winner: "B",
      improvement: "57% better engagement"
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
          height: '100vh',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #1e293b 100%)',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center'
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
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          animation: 'gridMove 20s linear infinite'
        }} />

        <div className="container">
          <div className="row align-items-center">
            {/* Left Content */}
            <div className="col-lg-6">
              <div style={{ color: 'white', zIndex: 10, position: 'relative' }}>
                <h1 style={{
                  fontSize: '2.3rem',
                  fontWeight: 'bold',
                  marginBottom: '30px',
                  background: 'linear-gradient(135deg,rgb(16, 17, 113),rgb(54, 13, 151))',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  whiteSpace: 'nowrap'
                }}>
                  SOCIAL MEDIA, SUPERCHARGED.
                </h1>
                <p style={{
                  fontSize: '1.3rem',
                  marginBottom: '40px',
                  color: '#CBD5E1',
                  lineHeight: '1.6'
                }}>
                  Stop posting into the void. We don't just manage social media; we weaponize it for growth. We architect data-driven strategies that capture attention, build cult followings, and drive real-world revenue through ruthless optimization.
                </p>
                
                {/* Real-time Metrics Dashboard */}
                <div style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '20px',
                  padding: '30px',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)'
                }}>
                  <h3 style={{ color: 'white', marginBottom: '20px', fontSize: '1.2rem' }}>Live Performance Metrics</h3>
                  <div className="row g-3">
                    {Object.entries(metricsData).map(([key, data]) => (
                      <div key={key} className="col-6">
                        <div style={{
                          textAlign: 'center',
                          padding: '15px',
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
                            fontSize: '2rem',
                            fontWeight: 'bold',
                            color: data.color,
                            marginBottom: '5px'
                          }}>
                            {animatedValues[key].toFixed(1)}{data.unit}
                          </div>
                          <div style={{ color: '#CBD5E1', fontSize: '0.9rem' }}>
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
                boxShadow: '0 25px 50px rgba(0, 0, 0, 0.3)'
              }}>
                {heroVideoLoaded && heroVideoUrl ? (
                  <video
                    ref={videoRef}
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
                    <source src={heroVideoUrl} type="video/mp4" />
                  </video>
                ) : (
                  <div style={{
                    width: '100%',
                    height: '400px',
                    background: 'linear-gradient(135deg, #3B82F6, #8B5CF6)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '1.2rem'
                  }}>
                    🌐 Loading Social Performance Data...
                  </div>
                )}
                
                {/* Floating Analytics Badge */}
                <div style={{
                  position: 'absolute',
                  top: '20px',
                  right: '20px',
                  background: 'rgba(16, 185, 129, 0.9)',
                  color: 'white',
                  padding: '10px 15px',
                  borderRadius: '25px',
                  fontSize: '0.9rem',
                  fontWeight: 'bold',
                  backdropFilter: 'blur(10px)'
                }}>
                  +340% ROI Achieved
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section style={{ padding: '100px 0', background: '#f8fafc' }}>
        <div className="container">
          <div className="row mb-5">
            <div className="col-lg-8 mx-auto text-center">
              <h2 style={{
                fontSize: '3rem',
                fontWeight: 'bold',
                marginBottom: '30px',
                background: 'linear-gradient(135deg, #1e293b, #3B82F6)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                FROM SCROLLERS TO CUSTOMERS.
              </h2>
              <p style={{ fontSize: '1.2rem', color: '#64748b', lineHeight: '1.8' }}>
                The internet is loud. We're louder. In a world of infinite scroll, attention is the only currency that matters. We don't just make content that gets noticed—we create magnetic experiences that get remembered, shared, and converted into loyal customers.
              </p>
            </div>
          </div>

          {/* Combined Services Grid */}
          <div className="row g-4">
            {combinedServices.map((service, index) => (
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
                background: 'linear-gradient(135deg, #1e293b, #3B82F6)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                Creative Darwinism: Only the Strongest Content Survives.
              </h2>
              <p style={{ fontSize: '1.2rem', color: '#64748b', lineHeight: '1.8' }}>
                We don't guess—we prove. In the battle for attention, every single element matters. The first three seconds, the call-to-action, the music, the message—each is a weapon in your arsenal. We systematically test every variable to forge the most powerful, highest-converting version of your content.
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
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                  height: '100%',
                  border: '1px solid #e2e8f0'
                }}>
                  <h4 style={{
                    fontSize: '1.3rem',
                    fontWeight: 'bold',
                    marginBottom: '25px',
                    color: '#1e293b'
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
                      background: test.winner === 'A' ? '#dcfce7' : '#f1f5f9',
                      borderRadius: '12px',
                      border: test.winner === 'A' ? '2px solid #10b981' : '1px solid #e2e8f0'
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
                        <div style={{ color: '#10b981', fontWeight: 'bold' }}>Winner!</div>
                      )}
                    </div>

                    {/* Variant B */}
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      padding: '15px',
                      background: test.winner === 'B' ? '#dcfce7' : '#f1f5f9',
                      borderRadius: '12px',
                      border: test.winner === 'B' ? '2px solid #10b981' : '1px solid #e2e8f0'
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
                        <div style={{ color: '#10b981', fontWeight: 'bold' }}>Winner!</div>
                      )}
                    </div>
                  </div>

                  {/* Result */}
                  <div style={{
                    background: 'linear-gradient(135deg, #3B82F6, #8B5CF6)',
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
      <section style={{ padding: '100px 0', background: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)' }}>
        <div className="container">
          <div className="row align-items-center mb-5">
            <div className="col-lg-6">
              <h2 style={{
                fontSize: '3rem',
                fontWeight: 'bold',
                marginBottom: '30px',
                color: 'white'
              }}>
                The Intelligence Cycle
              </h2>
              <div style={{ marginBottom: '30px' }}>
                <h5 style={{ color: '#38BDF8', fontWeight: 'bold', marginBottom: '10px' }}>
                  🎯 Strategic Discovery
                </h5>
                <p style={{ color: '#CBD5E1', marginBottom: '20px' }}>
                  We don't just learn your brand; we decode its DNA. We immerse ourselves in your world, your audience, and the competitive landscape to unearth your unique winning advantage.
                </p>
                
                <h5 style={{ color: '#6427FF', fontWeight: 'bold', marginBottom: '10px' }}>
                  🎨 Creative Ignition & Testing
                </h5>
                <p style={{ color: '#CBD5E1', marginBottom: '20px' }}>
                  This is where strategy becomes magic. Our creative team ignites the big ideas, producing multiple variations of thumb-stopping content that's perfectly aligned with your brand voice and strategic goals.
                </p>
                
                <h5 style={{ color: '#38BDF8', fontWeight: 'bold', marginBottom: '10px' }}>
                  📈 Execute, Measure & Amplify
                </h5>
                <p style={{ color: '#CBD5E1' }}>
                  We launch, listen, and learn—fast. We monitor performance in real-time, engage with your community, and continuously optimize based on hard data to turn good results into unbeatable ones.
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
                    background: 'linear-gradient(135deg, #3B82F6, #8B5CF6)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '1.2rem'
                  }}>
                    📱 Loading showcase...
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