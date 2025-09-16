import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { storage } from "../firebase/config";
import { ref, getDownloadURL } from 'firebase/storage';

// Import movie images
import movie1 from "../assets/movies/56262.jpg";
import movie2 from "../assets/movies/FS2.jpg";
import movie3 from "../assets/movies/FS3.jpg";
import movie4 from "../assets/movies/neww.jpg";
import movie5 from "../assets/movies/1.png";
import movie6 from "../assets/movies/Paris film festival.jpg";
import movie7 from "../assets/movies/POSTER.jpg";
import movie8 from "../assets/movies/4.png";
import movie9 from "../assets/movies/FB_IMG_1757690698527.jpg";
import movie10 from "../assets/movies/2.png";
import movie11 from "../assets/movies/3.jpeg";
import movie12 from "../assets/movies/POSTER..jpg";
import movie13 from "../assets/movies/Poster lbh.jpg";

const FeaturesPage = () => {
  // Movie carousel state
  const [selectedMovieIndex, setSelectedMovieIndex] = useState(0);
  
  // Add state for multiple videos
  const [showcaseVideoUrl, setShowcaseVideoUrl] = useState('');
  const [showcaseVideoLoaded, setShowcaseVideoLoaded] = useState(false);
  const [showcaseVideoError, setShowcaseVideoError] = useState(false);
  const [shouldLoadShowcaseVideo, setShouldLoadShowcaseVideo] = useState(false);

  const [portfolioVideoUrl, setPortfolioVideoUrl] = useState('');
  const [portfolioVideoLoaded, setPortfolioVideoLoaded] = useState(false);
  const [portfolioVideoError, setPortfolioVideoError] = useState(false);
  const [shouldLoadPortfolioVideo, setShouldLoadPortfolioVideo] = useState(false);

  const movies = [
    { id: 1, image: movie1, title: "Film Festival Selection", description: "Award-winning narrative" },
    { id: 2, image: movie2, title: "FS2 Production", description: "Independent feature film" },
    { id: 3, image: movie3, title: "FS3 Project", description: "Documentary series" },
    { id: 4, image: movie4, title: "New Vision", description: "Brand documentary" },
    { id: 5, image: movie5, title: "Corporate Story", description: "Brand narrative film" },
    { id: 6, image: movie6, title: "Paris Film Festival", description: "Festival premiere" },
    { id: 7, image: movie7, title: "Feature Poster", description: "Theatrical release" },
    { id: 8, image: movie8, title: "Production Four", description: "Commercial series" },
    { id: 9, image: movie9, title: "Social Media Film", description: "Viral content piece" },
    { id: 10, image: movie10, title: "Brand Campaign", description: "Multi-platform story" },
    { id: 11, image: movie11, title: "Documentary Short", description: "Real story impact" },
    { id: 12, image: movie12, title: "Poster Campaign", description: "Marketing visuals" },
    { id: 13, image: movie13, title: "LBH Poster", description: "Creative campaign" }
  ];

  const heroRef = useRef(null);
  const carouselRef = useRef(null);
  const showcaseVideoRef = useRef(null);
  const portfolioVideoRef = useRef(null);

  // Touch/swipe support
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const handleTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe && selectedMovieIndex < movies.length - 1) {
      setSelectedMovieIndex(prev => prev + 1);
    }
    if (isRightSwipe && selectedMovieIndex > 0) {
      setSelectedMovieIndex(prev => prev - 1);
    }
  };

  // Wheel scroll support
  const handleWheel = (e) => {
    if (e.deltaX > 0 && selectedMovieIndex < movies.length - 1) {
      setSelectedMovieIndex(prev => prev + 1);
    } else if (e.deltaX < 0 && selectedMovieIndex > 0) {
      setSelectedMovieIndex(prev => prev - 1);
    }
  };

  // Showcase video loading
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

  // Portfolio video loading
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

  const breadcrumbs = [
    { label: "Home", link: "/" },
    { label: <i className="fa-solid fa-angle-right"></i>, link: null },
    { label: "Features & Films", link: null },
  ];

  return (
    <>
      <style>{`
        @keyframes pulse {
          0% { opacity: 0.1; }
          100% { opacity: 0.3; }
        }
        
        @keyframes shimmer {
          0% { left: -100%; }
          100% { left: 100%; }
        }
      `}</style>
      {/* Professional Film Carousel - Horizontal Sliding */}
      <section 
        ref={heroRef} 
        style={{
          position: 'relative',
          height: window.innerWidth <= 768 ? '70vh' : '100vh',
          minHeight: window.innerWidth <= 768 ? '400px' : '600px',
          backgroundColor: '#0a0a0a',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          perspective: '1000px'
        }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onWheel={handleWheel}
      >
        {/* Carousel Container */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
          perspective: '1000px',
          width: '100%',
          height: '100%',
          position: 'relative'
        }}>
          {/* Sliding Track */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: window.innerWidth <= 768 ? '40px' : '80px',
            transform: `translateX(calc(50vw - ${selectedMovieIndex * (window.innerWidth <= 768 ? 280 : 530) + (window.innerWidth <= 768 ? 140 : 265)}px))`,
            transition: 'transform 500ms cubic-bezier(0.25, 0.8, 0.25, 1)',
            willChange: 'transform'
          }}>
            {movies.map((movie, index) => {
              const isActive = index === selectedMovieIndex;
              const distance = Math.abs(index - selectedMovieIndex);
              const isMobile = window.innerWidth <= 768;
              
              return (
                <div
                  key={movie.id}
                  onClick={() => setSelectedMovieIndex(index)}
                  style={{
                    position: 'relative',
                    width: isMobile ? '240px' : '450px',
                    height: isMobile ? '360px' : '650px',
                    borderRadius: '15px',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    flexShrink: 0,
                    backgroundColor: '#1a1a1a',
                    
                    // Active/Inactive states as per specification
                    transform: isActive 
                      ? 'translateX(0) scale(1)' 
                      : 'scale(0.75)',
                    opacity: isActive ? 1 : 0.6,
                    filter: isActive ? 'blur(0px)' : 'blur(3px)',
                    zIndex: isActive ? 10 : 1,
                    
                    // Animation properties as per specification
                    transition: 'transform 500ms cubic-bezier(0.25, 0.8, 0.25, 1), opacity 500ms cubic-bezier(0.25, 0.8, 0.25, 1), filter 500ms cubic-bezier(0.25, 0.8, 0.25, 1)',
                    
                    // Visual styling
                    border: isActive 
                      ? '3px solid rgba(107, 142, 35, 0.8)' 
                      : '1px solid rgba(107, 142, 35, 0.2)',
                    boxShadow: isActive 
                      ? isMobile 
                        ? '0 15px 40px rgba(107, 142, 35, 0.3)'
                        : '0 25px 80px rgba(107, 142, 35, 0.3)'
                      : '0 5px 15px rgba(0, 0, 0, 0.3)',
                  }}
                >
                  <img
                    src={movie.image}
                    alt={movie.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'contain',
                      display: 'block'
                    }}
                  />
                  
                  {/* Item Number Indicator */}
                  <div style={{
                    position: 'absolute',
                    top: isMobile ? '10px' : '20px',
                    left: isMobile ? '10px' : '20px',
                    background: isActive 
                      ? 'rgba(107, 142, 35, 0.9)' 
                      : 'rgba(0, 0, 0, 0.6)',
                    color: 'white',
                    padding: isMobile ? '6px 10px' : '8px 12px',
                    borderRadius: '20px',
                    fontSize: isMobile ? '0.8rem' : '0.9rem',
                    fontWeight: 'bold',
                    backdropFilter: 'blur(10px)',
                    transition: 'all 500ms cubic-bezier(0.25, 0.8, 0.25, 1)'
                  }}>
                    {String(index + 1).padStart(2, '0')}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Navigation Dots */}
        <div style={{
          position: 'absolute',
          bottom: window.innerWidth <= 768 ? '20px' : '40px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: window.innerWidth <= 768 ? '8px' : '12px',
          zIndex: 15,
          background: 'rgba(0, 0, 0, 0.3)',
          padding: window.innerWidth <= 768 ? '10px 20px' : '15px 25px',
          borderRadius: '30px',
          backdropFilter: 'blur(15px)',
          border: '1px solid rgba(255, 255, 255, 0.1)'
        }}>
          {movies.map((_, index) => (
            <div
              key={index}
              onClick={() => setSelectedMovieIndex(index)}
              style={{
                width: selectedMovieIndex === index 
                  ? (window.innerWidth <= 768 ? '30px' : '40px')
                  : (window.innerWidth <= 768 ? '8px' : '12px'),
                height: window.innerWidth <= 768 ? '8px' : '12px',
                borderRadius: window.innerWidth <= 768 ? '4px' : '6px',
                background: selectedMovieIndex === index 
                  ? 'linear-gradient(90deg, rgba(107, 142, 35, 1), rgba(107, 142, 35, 0.7))' 
                  : 'rgba(255, 255, 255, 0.3)',
                cursor: 'pointer',
                transition: 'all 300ms cubic-bezier(0.25, 0.8, 0.25, 1)'
              }}
            />
          ))}
        </div>

        {/* Progress Bar */}
        <div style={{
          position: 'absolute',
          top: window.innerWidth <= 768 ? '20px' : '30px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          alignItems: 'center',
          gap: window.innerWidth <= 768 ? '10px' : '15px',
          color: 'rgba(255, 255, 255, 0.7)',
          fontSize: window.innerWidth <= 768 ? '0.8rem' : '0.9rem',
          fontWeight: '500'
        }}>
          <span>{String(selectedMovieIndex + 1).padStart(2, '0')}</span>
          <div style={{
            width: window.innerWidth <= 768 ? '40px' : '60px',
            height: '2px',
            background: 'rgba(255, 255, 255, 0.2)',
            borderRadius: '1px',
            overflow: 'hidden'
          }}>
            <div style={{
              width: `${((selectedMovieIndex + 1) / movies.length) * 100}%`,
              height: '100%',
              background: 'linear-gradient(90deg, rgba(107, 142, 35, 1), rgba(107, 142, 35, 0.7))',
              transition: 'width 500ms cubic-bezier(0.25, 0.8, 0.25, 1)'
            }} />
          </div>
          <span>{String(movies.length).padStart(2, '0')}</span>
        </div>
      </section>

      {/* Main Content - Normal White Background */}
      <section className="features_content" style={{ padding: '80px 0' }}>
        <div className="container">
          
          {/* Introduction Section */}
          <div className="row mb-5">
            <div className="col-lg-8 mx-auto text-center">
              <h2 style={{
                fontSize: '3rem',
                fontWeight: 'bold',
                background: 'linear-gradient(135deg, #556b2f, #6b8e23)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                marginBottom: '30px'
              }}>
              CINEMA THAT SPARKS, THEN STINGS
              </h2>
              <p style={{ fontSize: '1.2rem', color: '#666', lineHeight: '1.8' }}>
                We build images that jab your memory and refuse to apologize. Not pretty noise — precise disturbances: short, loud, slow-burning. From micro social hymns to full-length curios, we make work that keeps working.
              </p>
            </div>
          </div>

          {/* Video Showcase Section - Side by Side */}
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
                    <div>🎬 Loading showcase...</div>
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
BRAND STORIES THAT BITE
</h3>
              <p style={{ fontSize: '1.1rem', color: '#666', lineHeight: '1.7', marginBottom: '25px' }}>
              Brands have secret rhythms. We listen with weird equipment, then translate them into films that keep echoing. Tiny spots or five-minute pulses — every edit is deliberate, every cut a tiny act of insistence.

              </p>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ marginBottom: '10px', fontSize: '1rem' }}>
                  ✓ <strong>15s-5min Brand Films</strong> — compact detonations with cinematic skin
                </li>
                <li style={{ marginBottom: '10px', fontSize: '1rem' }}>
                  ✓ <strong>Commercial Spots</strong> — broadcast-calibrated, attention-locked
                </li>
                <li style={{ marginBottom: '10px', fontSize: '1rem' }}>
                  ✓ <strong>Product Launches</strong> — staged reveals that feel inevitable
                </li>
              </ul>
            </div>
          </div>

          {/* Categories Grid - Different Layout */}
          <div className="row mb-5">
            <div className="col-12">
              <h3 style={{ 
                fontSize: '2.5rem', 
                textAlign: 'center',
                fontWeight: 'bold',
                color: '#333',
                marginBottom: '50px'
              }}>
                What We Create
              </h3>
            </div>
          </div>

          <div className="row g-4 mb-5">
            {/* Category Cards in Grid */}
            <div className="col-md-4">
              <div style={{
                background: 'linear-gradient(135deg, #556b2f, #6b8e23)',
                borderRadius: '20px',
                padding: '40px 30px',
                color: 'white',
                textAlign: 'center',
                height: '100%'
              }}>
                <div style={{ fontSize: '3rem', marginBottom: '20px' }}>🎬</div>
                <h4 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '15px' }}>
                  Brand Films
                </h4>
                <p style={{ fontSize: '1rem', opacity: 0.9 }}>
                human catalysts that don’t sell so much as insist.                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div style={{
                background: 'linear-gradient(135deg, #8B4513, #D2691E)',
                borderRadius: '20px',
                padding: '40px 30px',
                color: 'white',
                textAlign: 'center',
                height: '100%'
              }}>
                <div style={{ fontSize: '3rem', marginBottom: '20px' }}>📽️</div>
                <h4 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '15px' }}>
                  Documentaries
                </h4>
                <p style={{ fontSize: '1rem', opacity: 0.9 }}>
                true curiosities, interrogative and cinematic.                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div style={{
                background: 'linear-gradient(135deg, #2F4F4F, #708090)',
                borderRadius: '20px',
                padding: '40px 30px',
                color: 'white',
                textAlign: 'center',
                height: '100%'
              }}>
                <div style={{ fontSize: '3rem', marginBottom: '20px' }}>🎭</div>
                <h4 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '15px' }}>
                  Feature Films
                </h4>
                <p style={{ fontSize: '1rem', opacity: 0.9 }}>
                narrative machines tuned for festival life and late-night sharing.                </p>
              </div>
            </div>
          </div>

          {/* Portfolio Video Section - Different Placement */}
          <div className="row align-items-center">
            <div className="col-lg-5">
              <h3 style={{ 
                fontSize: '2.2rem', 
                fontWeight: 'bold', 
                color: '#333',
                marginBottom: '20px'
              }}>
                Our Process
              </h3>
              <div style={{ marginBottom: '30px' }}>
                <h5 style={{ color: '#556b2f', fontWeight: 'bold', marginBottom: '10px' }}>
                Find the Spark
                </h5>
                <p style={{ color: '#666', marginBottom: '20px' }}>
                We hunt the single friction point — the tiny truth that makes people look twice.
                </p>
                
                <h5 style={{ color: '#556b2f', fontWeight: 'bold', marginBottom: '10px' }}>
                Sharpen the Pulse
                </h5>
                <p style={{ color: '#666', marginBottom: '20px' }}>
                Ideas get disciplined into story-architecture: shots, sound, tempo — everything tuned to that spark.
                </p>
                
                <h5 style={{ color: '#556b2f', fontWeight: 'bold', marginBottom: '10px' }}>
                Set It Free
                </h5>
                <p style={{ color: '#666' }}>
                We shoot with care, edit like an argument, and finish the master so it travels — to screens, feeds, festivals.                </p>
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
                    <div>🎬 Loading portfolio...</div>
                  </div>
                )}
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default FeaturesPage;
