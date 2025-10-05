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
      creativeTitle: 'The 8x Narrative Engine',
      outputs: ['Official Trailer', 'Social Media Cuts', 'Quote Graphics', 'Podcast Audio Rip'],
      multiplier: '8x',
      description: 'One documentary becomes 8 pieces of content'
    },
    {
      original: 'Product Launch Video',
      creativeTitle: 'The 12x Omnichannel Blitz',
      outputs: ['Instagram Stories Teasers', 'Hypnotic YouTube Shorts', 'LinkedIn Thought-Leadership Clips', 'High-Impact Email Campaign GIFs', 'Behind-the-Scenes Reels'],
      multiplier: '12x',
      description: 'Maximum reach across all platforms'
    },
    {
      original: 'Interview Session',
      creativeTitle: 'The 6x Authority Builder',
      outputs: ['Highlight Reels', '"Mic Drop" Quote Cards', 'Full Audio Podcast Episode', 'Blog Content'],
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
                  fontSize: '3rem',
                  fontWeight: '900',
                  marginBottom: '30px',
                  color: 'white',
                  lineHeight: '1.1'
                }}>
MAKE EVERY FRAME COUNT.
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
                  fontSize: '1.2rem',
                  color: '#CBD5E1',
                  marginBottom: '50px',
                  lineHeight: '1.7',
                  maxWidth: '600px'
                }}>
Your raw footage is potential. We're the alchemists who turn it into cinematic gold. Through razor-sharp editing, breathtaking color, immersive sound, and hypnotic motion graphics, we don't just finish your video—we ignite it.                </p>

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
ONE SHOOT. AN ENTIRE CAMPAIGN.
</h2>
              <p style={{ fontSize: '1.3rem', color: '#64748b', lineHeight: '1.8', maxWidth: '800px', margin: '0 auto' }}>
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
                      margin: '0 auto 20px'
                    }}>
                      {index === 0 && (
                        // Documentary Film Icon
                        <svg width="50" height="50" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect x="4" y="8" width="32" height="24" rx="3" fill="white" stroke="white" strokeWidth="2"/>
                          <rect x="6" y="10" width="28" height="20" rx="2" fill="none" stroke="#6366F1" strokeWidth="1.5"/>
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
                          <circle cx="20" cy="20" r="6" fill="none" stroke="#6366F1" strokeWidth="2"/>
                          <circle cx="20" cy="20" r="3" fill="#8B5CF6"/>
                        </svg>
                      )}
                      {index === 2 && (
                        // Interview/Microphone Icon
                        <svg width="50" height="50" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect x="16" y="6" width="8" height="16" rx="4" fill="white" stroke="white" strokeWidth="2"/>
                          <rect x="17" y="7" width="6" height="14" rx="3" fill="none" stroke="#6366F1" strokeWidth="1.5"/>
                          <path d="M12 18 C12 22.4 15.6 26 20 26 C24.4 26 28 22.4 28 18" stroke="white" strokeWidth="2" fill="none"/>
                          <line x1="20" y1="26" x2="20" y2="32" stroke="white" strokeWidth="2"/>
                          <line x1="16" y1="32" x2="24" y2="32" stroke="white" strokeWidth="2"/>
                          <circle cx="20" cy="14" r="1.5" fill="#8B5CF6"/>
                        </svg>
                      )}
                    </div>
                    <h4 style={{
                      fontSize: '1.3rem',
                      fontWeight: 'bold',
                      color: '#1e293b',
                      marginBottom: '10px'
                    }}>
                      {project.original}
                    </h4>
                    <div style={{
                      fontSize: '1rem',
                      color: '#8B5CF6',
                      fontWeight: '600',
                      marginBottom: '5px'
                    }}>
                      ⬇️
                    </div>
                    <div style={{
                      fontSize: '1.1rem',
                      color: '#3B82F6',
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
Our Strategic Protocol
</h2>
            </div>
          </div>

          <div className="row g-4">
            {[
              {
                phase: 'INTAKE',
                title: 'The Mission Blueprint',
                description: 'Every successful project begins with intelligence. We perform a deep analysis of your raw footage, aligning with your strategic objectives to architect a precise post-production blueprint. This is the master plan for achieving maximum impact..',
                icon: '🔍',
                color: '#8B5CF6'
              },
              {
                phase: 'EDIT',
                title: 'Tactical Assembly',
                description: 'Execution begins. Our editors assemble the narrative with tactical precision. Every cut, transition, and sequence is purposefully crafted to engage the audience, drive the story forward, and achieve the core mission objective. There is no wasted motion.',
                icon: '✂️',
                color: '#3B82F6'
              },
              {
                phase: 'The Force Multiplier',
                title: 'Visual & Audio Polish',
                description: 'This is where we apply the force multiplier. We add a layer of advanced polish that dramatically elevates the final product. Through cinematic color grading, immersive sound design, and sharp motion graphics, we transform a great video into an undeniable asset with commanding presence.',
                icon: '🎨',
                color: '#F59E0B'
              },
              {
                phase: 'REPURPOSE',
                title: 'Strategic Deployment',
                description: 'The primary asset is complete. Now, we deploy the campaign. We strategically repurpose the core content',
                color: '#10B981',
                icon: '📱'
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
                          <circle cx="12" cy="22" r="2" fill="#8B5CF6"/>
                          <circle cx="20" cy="20" r="2" fill="#3B82F6"/>
                          <circle cx="28" cy="22" r="2" fill="#F59E0B"/>
                          <circle cx="16" cy="28" r="1.5" fill="#10B981"/>
                          <circle cx="24" cy="28" r="1.5" fill="#EF4444"/>
                          <path d="M25 8 L30 15 L22 18 Z" fill="white"/>
                          <line x1="25" y1="8" x2="22" y2="18" stroke="white" strokeWidth="2"/>
                        </svg>
                      )}
                      {index === 3 && (
                        // REPURPOSE - Strategic Deployment (Mobile/Multi-platform)
                        <svg width="35" height="35" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect x="15" y="6" width="10" height="16" rx="2" fill="white"/>
                          <rect x="16" y="7" width="8" height="12" rx="1" fill="none" stroke="#10B981" strokeWidth="1.5"/>
                          <circle cx="20" cy="20.5" r="0.5" fill="#10B981"/>
                          <rect x="8" y="12" width="6" height="8" rx="1" fill="white" opacity="0.8"/>
                          <rect x="26" y="12" width="6" height="8" rx="1" fill="white" opacity="0.8"/>
                          <circle cx="11" cy="16" r="1" fill="#10B981"/>
                          <circle cx="29" cy="16" r="1" fill="#10B981"/>
                          <path d="M20 25 L15 30 L20 35 L25 30 Z" fill="white" opacity="0.7"/>
                          <circle cx="20" cy="30" r="1" fill="#10B981"/>
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