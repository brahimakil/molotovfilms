import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { storage } from "../firebase/config";
import { ref, getDownloadURL } from 'firebase/storage';

// Import placeholder images
import analyticsImg from "../assets/images/s-1.webp";
import testingImg from "../assets/images/s-2.webp";
import optimizationImg from "../assets/images/s-3.webp";

const PerformanceAdsPage = () => {
  // Video loading states
  const [heroVideoUrl, setHeroVideoUrl] = useState('');
  const [heroVideoLoaded, setHeroVideoLoaded] = useState(false);
  const [heroVideoError, setHeroVideoError] = useState(false);
  const [shouldLoadHeroVideo, setShouldLoadHeroVideo] = useState(false);

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

  // Performance metrics data
  const metricsData = {
    ctr: { value: 8.7, label: 'Click-Through Rate', unit: '%', color: '#3B82F6' },
    conversions: { value: 24.3, label: 'Conversion Rate', unit: '%', color: '#10B981' },
    roi: { value: 340, label: 'Return on Investment', unit: '%', color: '#F59E0B' },
    engagement: { value: 92.1, label: 'Engagement Score', unit: '%', color: '#8B5CF6' }
  };

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
      title: "Video Length Test",
      variantA: { name: "30 Second Ad", performance: 5.8, image: optimizationImg },
      variantB: { name: "15 Second Ad", performance: 9.1, image: analyticsImg },
      winner: "B",
      improvement: "57% better completion"
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
      {/* Analytics-Focused Hero Section */}
      <section 
        ref={heroRef}
        style={{
          position: 'relative',
          height: '100vh',
          background: 'linear-gradient(135deg, #1e293b 0%, #334155 50%, #475569 100%)',
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
                  fontSize: '3.5rem',
                  fontWeight: 'bold',
                  marginBottom: '30px',
                  background: 'linear-gradient(135deg, #3B82F6, #8B5CF6)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>
Performance is Not an Opinion.
</h1>
                <p style={{
                  fontSize: '1.3rem',
                  marginBottom: '40px',
                  color: '#CBD5E1',
                  lineHeight: '1.6'
                }}>
Stop gambling with your ad spend. We engineer high-performance video campaigns by transforming creative variables into mathematical certainties. We let the data declare the winner, maximizing your ROI with ruthless efficiency.                </p>
                
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
                    📊 Loading Performance Data...
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

      {/* A/B Testing Showcase Section */}
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
Creative Darwinism: <br></br> Only the Strongest Ad Survives.              </h2>
              <p style={{ fontSize: '1.2rem', color: '#64748b', lineHeight: '1.8' }}>
              We don't guess—we prove. In the battle for attention, every single element matters. The first three seconds, the call-to-action, the music, the message—each is a weapon in your arsenal. We systematically test every variable against the others to forge the most powerful, highest-converting version of your ad. The weak are discarded; the champion scales.              </p>
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
                        <div style={{ color: '#6b7280', fontSize: '0.9rem' }}>{test.variantA.performance}% CTR</div>
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
                        <div style={{ color: '#6b7280', fontSize: '0.9rem' }}>{test.variantB.performance}% CTR</div>
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
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <h2 style={{
                fontSize: '3rem',
                fontWeight: 'bold',
                marginBottom: '50px',
                color: 'white'
              }}>
The Intelligence Cycle
</h2>
            </div>
          </div>

          <div className="row g-4">
            {[
              {
                step: '01',
                title: 'Identify the Battlefield',
                description: 'We start with reconnaissance. By analyzing existing performance data and market intelligence, we form a strategic hypothesis, identifying the key creative variables that hold the most potential for a decisive victory.',
                icon: '🔬'
              },
              {
                step: '02',
                title: 'Assemble the Contenders',
                description: 'Here, creative becomes a science. We produce a slate of compelling ad variations, each meticulously engineered to test a specific element of our hypothesis—different hooks, visuals, copy, and calls-to-action.',
                icon: '🎬'
              },
              {
                step: '03', 
                title: '3. The Live-Fire Test',
                description: "The contenders are deployed. We launch the A/B test in a controlled environment, gathering clean, statistically significant data to ensure the results aren't just a fluke—they are undeniable fact.",
                icon: '📊'
              },
              {
                step: '04',
                title: 'Decode the Results',
                description: "The data comes in, and we translate it into actionable intelligence. We go beyond surface metrics to understand why the winner won, uncovering deep insights into your audience's behavior that will inform every future campaign.",
                icon: '📈'
              },
              {
                step: '05',
                title: '5. Deploy the Champion',
                description: 'The win',
                icon: '🚀'
              }
            ].map((item, index) => (
              <div key={index} className="col-lg-4 col-md-6">
                <div style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '20px',
                  padding: '40px 30px',
                  textAlign: 'center',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  height: '100%'
                }}>
                  <div style={{
                    fontSize: '3rem',
                    marginBottom: '20px'
                  }}>
                    {item.icon}
                  </div>
                  <div style={{
                    fontSize: '1rem',
                    color: '#3B82F6',
                    fontWeight: 'bold',
                    marginBottom: '10px'
                  }}>
                    STEP {item.step}
                  </div>
                  <h4 style={{
                    fontSize: '1.3rem',
                    fontWeight: 'bold',
                    color: 'white',
                    marginBottom: '15px'
                  }}>
                    {item.title}
                  </h4>
                  <p style={{
                    color: '#CBD5E1',
                    lineHeight: '1.6'
                  }}>
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
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

export default PerformanceAdsPage;