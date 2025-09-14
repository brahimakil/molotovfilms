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

  // Creative process steps
  const creativeSteps = [
    {
      number: "01",
      title: "Idea Spark",
      description: "The Tiny Betrayal We find the small, oddly human detail that quietly betrays the ordinary. That nick becomes the engine — a misstep, a laugh, a silence that says everything.",
      icon: "💡"
    },
    {
      number: "02", 
      title: "Story Architecture",
      description: "The Skeleton With Costume We dress structural rigor in personality. Three acts with teeth, stakes that pulse, and reversals that feel inevitable and slightly mischievous. ",
      icon: "🏗️"
    },
    {
      number: "03",
      title: "Script Craft",
      description: "   Words That Wear Faces Dialogue that sounds lived-in and slightly uncanny. Scenes that breathe; beats that pinch the heart. We write lines actors want to steal home.               ",
      icon: "✍️"
    },
    {
      number: "04",
      title: "Visual Blueprint",
      description: "Storyboards That Sneer Frames that love composition and disrespect cliché. Shot   ",
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
      background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #1a1a1a 100%)',
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
      background: 'linear-gradient(135deg, #ff6b6b, #4ecdc4, #45b7d1)',
      backgroundClip: 'text',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      lineHeight: '1.2'
    },
    heroSubtitle: {
      fontSize: '1.4rem',
      marginBottom: '2rem',
      opacity: 0.9,
      color: '#e0e0e0'
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
      color: '#4ecdc4',
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
  const isMobile = window.innerWidth <= 768;
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
            background: 'linear-gradient(to bottom, transparent, #ff6b6b, transparent)',
            opacity: 0.6,
            animation: 'float 3s ease-in-out infinite'
          }} />
          <div style={{
            position: 'absolute',
            top: '60%',
            right: '15%',
            width: '2px',
            height: '80px',
            background: 'linear-gradient(to bottom, transparent, #4ecdc4, transparent)',
            opacity: 0.6,
            animation: 'float 4s ease-in-out infinite reverse'
          }} />
          <div style={{
            position: 'absolute',
            bottom: '30%',
            left: '20%',
            width: '1px',
            height: '60px',
            background: 'linear-gradient(to bottom, transparent, #45b7d1, transparent)',
            opacity: 0.4,
            animation: 'float 5s ease-in-out infinite'
          }} />
        </div>

        <div style={heroStyles.heroContent}>
          <h1 style={heroStyles.heroTitle}>
          ONE LOVING LINE
          </h1>
          <p style={heroStyles.heroSubtitle}>
          We don’t sell stories — we spark tiny obsessions. Films people keep, share, and talk about at 2 AM.          </p>
          
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
      <section className="service_details" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-lg-7">
              <div className="service_details_head">
                <h2 className="text_5xl" style={{ marginBottom: '30px' }}>
                  <span style={{
                    background: 'linear-gradient(135deg, #ff6b6b 0%, #4ecdc4 50%, #45b7d1 100%)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    fontWeight: '700'
                  }}>
WRITE. SING. PUNCH.
</span>
                  <br />
                  Stories that flirt with the eye and then refuse to leave.
                  </h2>
              </div>

              {/* Creative Process Steps */}
              <div style={{ marginBottom: '50px' }}>
                <h3 style={{ 
                  fontSize: '2rem', 
                  marginBottom: '30px',
                  color: '#333',
                  fontWeight: '600'
                }}>
THE WEIRDLY LOVABLE PROCESS
  </h3>
                
                <div className="row g-4">
                  {creativeSteps.map((step, index) => (
                    <div key={index} className="col-lg-6">
                      <div style={{
                        background: 'linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)',
                        borderRadius: '20px',
                        padding: '30px',
                        border: '1px solid rgba(0,0,0,0.1)',
                        transition: 'all 0.3s ease',
                        cursor: 'pointer',
                        position: 'relative',
                        overflow: 'hidden'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-5px)';
                        e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.1)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = 'none';
                      }}>
                        {/* Step Number */}
                        <div style={{
                          position: 'absolute',
                          top: '-10px',
                          right: '-10px',
                          width: '60px',
                          height: '60px',
                          background: 'linear-gradient(135deg, #ff6b6b, #4ecdc4)',
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
                          color: '#333',
                          fontWeight: '600'
                        }}>
                          {step.title}
                        </h4>
                        
                        <p style={{ 
                          color: '#666', 
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
                  color: '#555',
                  marginBottom: '25px'
                }}>
                  A strong video begins with a strong idea. We develop creative concepts, write scripts, and design storyboards that ensure your campaign has clarity, originality, and purpose. Our process helps transform raw ideas into compelling narratives that speak directly to your audience.
                </p>

                <p style={{ 
                  fontSize: '1.1rem', 
                  lineHeight: '1.7', 
                  color: '#666',
                  marginBottom: '30px'
                }}>
                  Every great film starts with words on a page. Our scriptwriting team crafts dialogue that feels authentic, creates characters that resonate, and builds stories that engage from the first frame to the last. We don't just write scripts—we architect experiences that move audiences and drive results.
                </p>
              </div>

              {/* Services List */}
              <div style={{ marginBottom: '40px' }}>
                <h3 style={{ 
                  fontSize: '2rem', 
                  marginBottom: '25px',
                  color: '#333',
                  fontWeight: '600'
                }}>
WHAT YOU GET (but warmer)
</h3>
                
                <div className="row">
                  <div className="col-lg-6">
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                      <li style={{ 
                        marginBottom: '15px',
                        display: 'flex',
                        alignItems: 'center',
                        fontSize: '1.1rem'
                      }}>
                        <span style={{
                          width: '8px',
                          height: '8px',
                          background: 'linear-gradient(45deg, #ff6b6b, #4ecdc4)',
                          borderRadius: '50%',
                          marginRight: '15px'
                        }} />
Odd, defendable concept development
</li>
                      <li style={{ 
                        marginBottom: '15px',
                        display: 'flex',
                        alignItems: 'center',
                        fontSize: '1.1rem'
                      }}>
                        <span style={{
                          width: '8px',
                          height: '8px',
                          background: 'linear-gradient(45deg, #4ecdc4, #45b7d1)',
                          borderRadius: '50%',
                          marginRight: '15px'
                        }} />
Scripts: commercial, branded, short, documentary all with personality
</li>
                      <li style={{ 
                        marginBottom: '15px',
                        display: 'flex',
                        alignItems: 'center',
                        fontSize: '1.1rem'
                      }}>
                        <span style={{
                          width: '8px',
                          height: '8px',
                          background: 'linear-gradient(45deg, #45b7d1, #ff6b6b)',
                          borderRadius: '50%',
                          marginRight: '15px'
                        }} />
Character arcs that hold secrets and offers of redemption
</li>
                    </ul>
                  </div>
                  <div className="col-lg-6">
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                      <li style={{ 
                        marginBottom: '15px',
                        display: 'flex',
                        alignItems: 'center',
                        fontSize: '1.1rem'
                      }}>
                        <span style={{
                          width: '8px',
                          height: '8px',
                          background: 'linear-gradient(45deg, #ff6b6b, #45b7d1)',
                          borderRadius: '50%',
                          marginRight: '15px'
                        }} />
Visual treatments, pacing maps, VO notes, and festival-aware tweaks
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
                background: 'linear-gradient(135deg, #ff6b6b 0%, #4ecdc4 100%)',
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
                  background: 'rgba(255,255,255,0.1)',
                  borderRadius: '50%'
                }} />
                
                <div style={{ fontSize: '3rem', marginBottom: '20px', opacity: 0.9 }}>
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
We sketch dreams on napkins, sharpen them into little devices that sing on screen. Think pop-colour ideas with a soft, strange heart — scripts that wink, storyboards that hum, and treatments that make directors smile and audiences fall in love.
</p>
                <div style={{ 
                  fontSize: '1rem',
                  opacity: 0.9,
                  fontWeight: '600'
                }}>
                  — Our Creative Philosophy
                </div>
              </div>

              {/* Categories */}
              <div className="card_item" style={{
                background: '#f8f9fa',
                borderRadius: '20px',
                padding: '30px',
                border: '1px solid rgba(0,0,0,0.1)'
              }}>
                <h3 style={{ 
                  fontSize: '1.5rem',
                  marginBottom: '25px',
                  color: '#333'
                }}>
SCRIPT FLAVOURS (pick a mood)
</h3>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {[
                    "Commercial → sly and magnetic",
                    "Documentary → humane and probing", 
                    "Short film → concentrated charm",
                    "Social → micro-empathy",
                    "Corporate → cultural storytelling",
                    "Educational → playful intelligence",
         
                  ].map((item, index) => (
                    <li key={index} style={{
                      padding: '12px 0',
                      borderBottom: index < 7 ? '1px solid rgba(0,0,0,0.1)' : 'none',
                      fontSize: '1rem',
                      color: '#555',
                      transition: 'color 0.3s ease',
                      cursor: 'pointer'
                    }}
                    onMouseEnter={(e) => e.target.style.color = '#ff6b6b'}
                    onMouseLeave={(e) => e.target.style.color = '#555'}>
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