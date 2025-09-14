import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { storage } from "../firebase/config";
import { ref, getDownloadURL } from 'firebase/storage';

// Import placeholder images for post-production showcase
import editingImg from "../assets/images/s-1.webp";
import colorGradingImg from "../assets/images/s-2.webp";
import motionGraphicsImg from "../assets/images/s-3.webp";

const PostProductionPage = () => {
  const [showcaseVideoUrl, setShowcaseVideoUrl] = useState('');
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [activeService, setActiveService] = useState('editing');
  const [currentProject, setCurrentProject] = useState(0);
  const heroRef = useRef(null);

  // Post-production services data
  const services = {
    editing: {
      title: 'Advanced Video Editing',
      description: 'Precision cuts, seamless transitions, and storytelling that captivates',
      icon: '✂️',
      color: '#8B5CF6',
      features: ['Multi-cam editing', 'Advanced transitions', 'Narrative flow', 'Pacing optimization']
    },
    color: {
      title: 'Color Grading & Correction',
      description: 'Cinematic color palettes that enhance mood and visual impact',
      icon: '🎨',
      color: '#F59E0B',
      features: ['Color correction', 'Cinematic grading', 'Mood enhancement', 'Brand consistency']
    },
    sound: {
      title: 'Sound Design & Mixing',
      description: 'Immersive audio experiences that complement your visuals',
      icon: '🎵',
      color: '#10B981',
      features: ['Audio cleanup', 'Sound effects', 'Music mixing', 'Voice enhancement']
    },
    motion: {
      title: 'Motion Graphics & VFX',
      description: 'Dynamic animations and visual effects that bring ideas to life',
      icon: '⚡',
      color: '#3B82F6',
      features: ['2D/3D animation', 'Visual effects', 'Title sequences', 'Brand integration']
    }
  };

  // Content repurposing showcase
  const repurposingProjects = [
    {
      original: 'Long-form Documentary',
      outputs: ['Social Media Clips', 'Trailer', 'Behind-the-Scenes', 'Podcast Audio'],
      multiplier: '8x',
      description: 'One documentary becomes 8 pieces of content'
    },
    {
      original: 'Product Launch Video',
      outputs: ['Instagram Stories', 'YouTube Shorts', 'LinkedIn Posts', 'Email Campaigns'],
      multiplier: '12x',
      description: 'Maximum reach across all platforms'
    },
    {
      original: 'Interview Session',
      outputs: ['Highlight Reels', 'Quote Graphics', 'Audio Podcast', 'Blog Content'],
      multiplier: '6x',
      description: 'Every conversation becomes multiple touchpoints'
    }
  ];

  // Load showcase video
  useEffect(() => {
    const loadVideo = async () => {
      try {
        const videoPath = 'servicedetails(reels..)/videoinplaceofimage-optimized.mp4';
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
      {/* Creative Hero Section */}
      <section 
        ref={heroRef}
        style={{
          minHeight: '100vh',
          background: 'linear-gradient(45deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden'
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
            radial-gradient(circle at 20% 30%, rgba(139, 92, 246, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(245, 158, 11, 0.05) 0%, transparent 50%)
          `
        }} />

        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div style={{ position: 'relative', zIndex: 10 }}>
        <br></br>
                <br></br>

        <br></br>

        <br></br>

                
                <h1 style={{
                  fontSize: '4rem',
                  fontWeight: '900',
                  marginBottom: '30px',
                  color: 'white',
                  lineHeight: '1.1'
                }}>
                  Elevate Your Content with
                  <span style={{
                    background: 'linear-gradient(135deg, #8B5CF6, #F59E0B, #3B82F6)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    display: 'block'
                  }}>
                    Cinematic Post-Production
                  </span>
                </h1>
                
                <p style={{
                  fontSize: '1.4rem',
                  color: '#CBD5E1',
                  marginBottom: '50px',
                  lineHeight: '1.7',
                  maxWidth: '600px'
                }}>
                  Transform raw footage into compelling stories through expert editing, color grading, sound design, and motion graphics. Then multiply your content's reach with strategic repurposing.
                </p>

                {/* Service Selector */}
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '15px',
                  marginBottom: '40px'
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
                        padding: '12px 20px',
                        borderRadius: '30px',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        fontSize: '0.9rem',
                        fontWeight: 'bold',
                        backdropFilter: 'blur(10px)'
                      }}
                    >
                      {service.icon} {service.title}
                    </button>
                  ))}
                </div>

                {/* Active Service Details */}
                <div style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: '20px',
                  padding: '30px',
                  backdropFilter: 'blur(15px)',
                  border: `2px solid ${services[activeService].color}33`
                }}>
                  <h3 style={{
                    color: services[activeService].color,
                    fontSize: '1.5rem',
                    marginBottom: '15px',
                    fontWeight: 'bold'
                  }}>
                    {services[activeService].title}
                  </h3>
                  <p style={{
                    color: '#E2E8F0',
                    marginBottom: '20px',
                    fontSize: '1.1rem'
                  }}>
                    {services[activeService].description}
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                    {services[activeService].features.map((feature, index) => (
                      <span key={index} style={{
                        background: `${services[activeService].color}22`,
                        color: services[activeService].color,
                        padding: '6px 12px',
                        borderRadius: '15px',
                        fontSize: '0.9rem',
                        fontWeight: '500'
                      }}>
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-5">
              <div style={{
                position: 'relative',
                borderRadius: '25px',
                overflow: 'hidden',
                boxShadow: '0 30px 60px rgba(0, 0, 0, 0.4)'
              }}>
                {videoLoaded && showcaseVideoUrl ? (
                  <video
                    style={{
                      width: '100%',
                      height: '500px',
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
                    height: '500px',
                    background: `linear-gradient(135deg, ${services[activeService].color}, #1a1a2e)`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '1.3rem'
                  }}>
                    🎬 Loading Showcase...
                  </div>
                )}
                
                {/* Floating Badge */}
                <div style={{
                  position: 'absolute',
                  top: '25px',
                  left: '25px',
                  background: 'rgba(139, 92, 246, 0.9)',
                  color: 'white',
                  padding: '12px 18px',
                  borderRadius: '20px',
                  fontSize: '0.9rem',
                  fontWeight: 'bold',
                  backdropFilter: 'blur(10px)'
                }}>
                  ✨ Award-Winning Quality
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Repurposing Section */}
      <section style={{ padding: '120px 0', background: '#f8fafc' }}>
        <div className="container">
          <div className="row mb-5">
            <div className="col-lg-10 mx-auto text-center">
              <h2 style={{
                fontSize: '3.5rem',
                fontWeight: '900',
                marginBottom: '30px',
                background: 'linear-gradient(135deg, #1e293b, #8B5CF6)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                Content Repurposing That Multiplies Your Reach
              </h2>
              <p style={{ fontSize: '1.3rem', color: '#64748b', lineHeight: '1.8', maxWidth: '800px', margin: '0 auto' }}>
                Don't let great content live in just one place. We transform your videos into multiple formats, maximizing your investment and expanding your audience across all platforms.
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
                  boxShadow: currentProject === index ? '0 20px 40px rgba(139, 92, 246, 0.2)' : '0 10px 30px rgba(0, 0, 0, 0.1)',
                  border: currentProject === index ? '3px solid #8B5CF6' : '1px solid #e2e8f0',
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
                      background: 'linear-gradient(135deg, #8B5CF6, #3B82F6)',
                      borderRadius: '20px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 20px',
                      fontSize: '2rem'
                    }}>
                      🎬
                    </div>
                    <h4 style={{
                      fontSize: '1.3rem',
                      fontWeight: 'bold',
                      color: '#1e293b',
                      marginBottom: '10px'
                    }}>
                      {project.original}
                    </h4>
                  </div>

                  {/* Arrow */}
                  <div style={{
                    textAlign: 'center',
                    marginBottom: '30px'
                  }}>
                    <div style={{
                      fontSize: '2rem',
                      color: '#8B5CF6'
                    }}>⬇️</div>
                    <div style={{
                      background: 'linear-gradient(135deg, #8B5CF6, #3B82F6)',
                      color: 'white',
                      padding: '8px 16px',
                      borderRadius: '20px',
                      fontSize: '1.2rem',
                      fontWeight: 'bold',
                      display: 'inline-block',
                      marginTop: '10px'
                    }}>
                      {project.multiplier} Content
                    </div>
                  </div>

                  {/* Outputs */}
                  <div style={{ marginBottom: '25px' }}>
                    {project.outputs.map((output, idx) => (
                      <div key={idx} style={{
                        background: '#f1f5f9',
                        padding: '12px 16px',
                        borderRadius: '12px',
                        marginBottom: '8px',
                        fontSize: '0.95rem',
                        fontWeight: '500',
                        color: '#374151'
                      }}>
                        📱 {output}
                      </div>
                    ))}
                  </div>

                  <p style={{
                    color: '#6b7280',
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
      <section style={{ padding: '120px 0', background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a2e 100%)' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <h2 style={{
                fontSize: '3.5rem',
                fontWeight: '900',
                marginBottom: '60px',
                color: 'white'
              }}>
                Our Post-Production Workflow
              </h2>
            </div>
          </div>

          <div className="row g-4">
            {[
              {
                phase: 'INTAKE',
                title: 'Project Analysis',
                description: 'We review your raw footage, understand your vision, and create a detailed post-production roadmap.',
                icon: '🔍',
                color: '#8B5CF6'
              },
              {
                phase: 'EDIT',
                title: 'Story Assembly',
                description: 'Expert editors craft your narrative flow, ensuring every cut serves the story and engages your audience.',
                icon: '✂️',
                color: '#3B82F6'
              },
              {
                phase: 'ENHANCE',
                title: 'Visual & Audio Polish',
                description: 'Color grading, sound design, and motion graphics elevate your content to professional standards.',
                icon: '🎨',
                color: '#F59E0B'
              },
              {
                phase: 'REPURPOSE',
                title: 'Multi-Format Creation',
                description: 'We adapt your content for different platforms and audiences, maximizing reach and engagement.',
                icon: '📱',
                color: '#10B981'
              }
            ].map((step, index) => (
              <div key={index} className="col-lg-6">
                <div style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: '25px',
                  padding: '40px',
                  backdropFilter: 'blur(15px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
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
                      fontSize: '1.8rem',
                      marginRight: '20px'
                    }}>
                      {step.icon}
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
                    color: '#CBD5E1',
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

      {/* CTA Section */}
      <section style={{ padding: '100px 0', background: '#f8fafc' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <h2 style={{
                fontSize: '3rem',
                fontWeight: '900',
                marginBottom: '30px',
                color: '#1e293b'
              }}>
                Ready to Transform Your Content?
              </h2>
              <p style={{
                fontSize: '1.2rem',
                color: '#64748b',
                marginBottom: '40px',
                lineHeight: '1.7'
              }}>
                Let's discuss how our post-production expertise can elevate your content and multiply your reach across all platforms.
              </p>
              <Link
                to="/contact"
                style={{
                  background: 'linear-gradient(135deg, #8B5CF6, #3B82F6)',
                  color: 'white',
                  padding: '18px 40px',
                  borderRadius: '30px',
                  textDecoration: 'none',
                  fontSize: '1.1rem',
                  fontWeight: 'bold',
                  display: 'inline-block',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 10px 30px rgba(139, 92, 246, 0.3)'
                }}
                onMouseOver={(e) => {
                  e.target.style.transform = 'translateY(-3px)';
                  e.target.style.boxShadow = '0 15px 40px rgba(139, 92, 246, 0.4)';
                }}
                onMouseOut={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = '0 10px 30px rgba(139, 92, 246, 0.3)';
                }}
              >
                Start Your Project 🚀
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PostProductionPage;