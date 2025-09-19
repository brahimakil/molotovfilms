import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { storage } from "../firebase/config";
import { ref, getDownloadURL } from 'firebase/storage';
import FooterOne from "../component/FooterOne"; // Import the footer

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
  // Responsive state management
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Movie carousel state
  const [selectedMovieIndex, setSelectedMovieIndex] = useState(0);
  const [isOverCarousel, setIsOverCarousel] = useState(false);
  
  // Interactive showcase state with error handling
  const [activeShowcaseIndex, setActiveShowcaseIndex] = useState(0);
  const [showcaseItems, setShowcaseItems] = useState([
    {
      id: 1,
      title: "The Original Error",
      description: "A poetic documentary that takes viewers on a transformative journey to Nepal, delving into profound themes of life and death through captivating visuals.",
      category: "Documentary",
      image: null,
      videoUrl: null,
      videoLoaded: false,
      imageLoaded: false,
      imageError: false,
      videoError: false
    },
    {
      id: 2,
      title: "Tili Tili BOOM",
      description: "An explosive narrative piece that challenges conventional storytelling with its bold visual approach and compelling character development.",
      category: "Narrative",
      image: null,
      videoUrl: null,
      videoLoaded: false,
      imageLoaded: false,
      imageError: false,
      videoError: false
    },
    {
      id: 3,
      title: "Low Budget Heist",
      description: "A masterclass in creative filmmaking, proving that compelling stories don't require massive budgets, just innovative vision and precise execution.",
      category: "Short Film",
      image: null,
      videoUrl: null,
      videoLoaded: false,
      imageLoaded: false,
      imageError: false,
      videoError: false
    }
  ]);

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
  const immersiveVideoRef = useRef(null);
  const carouselTrackRef = useRef(null);
  const cardRefs = useRef([]);

  // Dynamic carousel calculations
  const [carouselConfig, setCarouselConfig] = useState({
    cardWidth: isMobile ? 200 : 380,
    cardGap: isMobile ? 30 : 60,
    offset: isMobile ? 100 : 190
  });

  useEffect(() => {
    // Calculate dynamic card dimensions
    if (cardRefs.current[0]) {
      const cardWidth = cardRefs.current[0].offsetWidth;
      const cardGap = isMobile ? 30 : 60;
      const offset = cardWidth / 2;
      
      setCarouselConfig({ cardWidth, cardGap, offset });
    }
  }, [isMobile]);

  // Touch/swipe support for banner
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

  // Prevent page scroll only when over carousel AND not at boundaries
  useEffect(() => {
    const preventPageScroll = (e) => {
      if (isOverCarousel) {
        const scrollDirection = e.deltaY;
        const isAtFirstImage = selectedMovieIndex === 0;
        const isAtLastImage = selectedMovieIndex === movies.length - 1;
        
        if ((scrollDirection < 0 && isAtFirstImage) || (scrollDirection > 0 && isAtLastImage)) {
          return;
        }
        
        e.preventDefault();
        e.stopPropagation();
      }
    };

    if (isOverCarousel) {
      window.addEventListener('wheel', preventPageScroll, { passive: false });
    }

    return () => {
      window.removeEventListener('wheel', preventPageScroll);
    };
  }, [isOverCarousel, selectedMovieIndex]);

  // Enhanced wheel scroll support
  const handleWheel = (e) => {
    const scrollDirection = e.deltaY;
    
    const isAtFirstImage = selectedMovieIndex === 0;
    const isAtLastImage = selectedMovieIndex === movies.length - 1;
    
    if (scrollDirection > 0 && isAtLastImage) {
      return;
    }
    
    if (scrollDirection < 0 && isAtFirstImage) {
      return;
    }
    
    e.preventDefault();
    
    if (scrollDirection > 0 && selectedMovieIndex < movies.length - 1) {
      setSelectedMovieIndex(prev => prev + 1);
    } else if (scrollDirection < 0 && selectedMovieIndex > 0) {
      setSelectedMovieIndex(prev => prev - 1);
    }
  };

  // Improved Firebase loading with Promise.all - FIXED ORDER
  useEffect(() => {
    const loadShowcaseContent = async () => {
      try {
        // CORRECTED IMAGE ORDER to match your files
        const imageRefs = [
          'servicesfeaturespage/originalerror.jpg',    // First image - The Original Error
          'servicesfeaturespage/tilitiliboom.jpg',     // Second image - Tili Tili BOOM  
          'servicesfeaturespage/filmtejere.jpg'        // Third image - Low Budget Heist
        ];
        
        const videoRefs = [
          'servicesfeaturespage/The Original Error.- traile - webmp4.mp4',
          'servicesfeaturespage/Tili Tili BOOM.mp4',
          'servicesfeaturespage/Trailer 1.20sLow Budget Hiest.mp4'
        ];

        // Load all images concurrently
        const imagePromises = imageRefs.map(async (imagePath, index) => {
          try {
            console.log(`Loading image ${index}: ${imagePath}`); // Debug log
            const imageRef = ref(storage, imagePath);
            const imageUrl = await getDownloadURL(imageRef);
            console.log(`✅ Successfully loaded image ${index}: ${imagePath}`); // Success log
            return { index, imageUrl, success: true };
          } catch (error) {
            console.error(`❌ Error loading image ${index} (${imagePath}):`, error);
            return { index, error, success: false };
          }
        });

        // Load all videos concurrently
        const videoPromises = videoRefs.map(async (videoPath, index) => {
          try {
            console.log(`Loading video ${index}: ${videoPath}`); // Debug log
            const videoRef = ref(storage, videoPath);
            const videoUrl = await getDownloadURL(videoRef);
            console.log(`✅ Successfully loaded video ${index}: ${videoPath}`); // Success log
            return { index, videoUrl, success: true };
          } catch (error) {
            console.error(`❌ Error loading video ${index} (${videoPath}):`, error);
            return { index, error, success: false };
          }
        });

        // Wait for all to complete
        const [imageResults, videoResults] = await Promise.all([
          Promise.all(imagePromises),
          Promise.all(videoPromises)
        ]);

        // Update state safely
        setShowcaseItems(prevItems => {
          const updatedItems = [...prevItems];
          
          imageResults.forEach(result => {
            if (result.success) {
              updatedItems[result.index].image = result.imageUrl;
              updatedItems[result.index].imageLoaded = true;
              updatedItems[result.index].imageError = false;
              console.log(`✅ Updated item ${result.index} with image`); // Debug log
            } else {
              updatedItems[result.index].imageError = true;
              updatedItems[result.index].imageLoaded = false;
              console.log(`❌ Failed to load image for item ${result.index}`); // Debug log
            }
          });

          videoResults.forEach(result => {
            if (result.success) {
              updatedItems[result.index].videoUrl = result.videoUrl;
              updatedItems[result.index].videoLoaded = true;
              updatedItems[result.index].videoError = false;
              console.log(`✅ Updated item ${result.index} with video`); // Debug log
            } else {
              updatedItems[result.index].videoError = true;
              updatedItems[result.index].videoLoaded = false;
              console.log(`❌ Failed to load video for item ${result.index}`); // Debug log
            }
          });

          return updatedItems;
        });

      } catch (error) {
        console.error('❌ Error loading showcase content:', error);
      }
    };

    loadShowcaseContent();
  }, []);

  // Function to handle active showcase selection
  const setActiveIndex = (index) => {
    setActiveShowcaseIndex(index);
  };

  // Calculate carousel transform
  const getCarouselTransform = () => {
    const { cardWidth, cardGap, offset } = carouselConfig;
    const translateX = `calc(50vw - ${selectedMovieIndex * (cardWidth + cardGap) + offset}px)`;
    return `translateX(${translateX})`;
  };

  const breadcrumbs = [
    { label: "Home", link: "/" },
    { label: <i className="fa-solid fa-angle-right"></i>, link: null },
    { label: "Features & Films", link: null },
  ];

  return (
    <>
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes spotlightEffect {
          0% {
            box-shadow: 0 0 0 rgba(107, 142, 35, 0);
          }
          50% {
            box-shadow: 0 0 30px rgba(107, 142, 35, 0.6);
          }
          100% {
            box-shadow: 0 0 20px rgba(107, 142, 35, 0.4);
          }
        }

        .immersive-showcase {
          animation: fadeInUp 0.8s ease-out;
          overflow: hidden;
        }

        .video-transition {
          transition: opacity 0.8s cubic-bezier(0.25, 0.8, 0.25, 1);
        }

        .book-card {
          transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
          will-change: transform, opacity;
        }

        .book-card:hover {
          transform: translateY(-10px) scale(1.05);
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.4);
        }

        .book-card.active {
          animation: spotlightEffect 1s ease-out;
        }

        .sidebar-panel {
          animation: slideInRight 1s ease-out;
          backdrop-filter: blur(15px);
          -webkit-backdrop-filter: blur(15px);
          will-change: transform;
        }

        .bottom-anchor-bar {
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
        }

        .carousel-container {
          overflow: hidden;
        }

        .mobile-carousel {
          display: flex;
          gap: 15px;
          overflow-x: auto;
          padding: 20px;
          scroll-snap-type: x mandatory;
        }
        
        .mobile-carousel::-webkit-scrollbar {
          display: none;
        }
        
        .mobile-card {
          scroll-snap-align: center;
          flex-shrink: 0;
        }
      `}</style>

      {/* Professional Film Carousel Banner */}
      <section 
        ref={heroRef} 
        style={{
          position: 'relative',
          height: isMobile ? '50vh' : '70vh',
          minHeight: isMobile ? '350px' : '500px',
          backgroundColor: '#0a0a0a',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          perspective: '1000px'
        }}
        onMouseEnter={() => setIsOverCarousel(true)}
        onMouseLeave={() => setIsOverCarousel(false)}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onWheel={handleWheel}
      >
        {/* Carousel Container */}
        <div className="carousel-container" style={{
          display: 'flex',
          alignItems: 'center',
          perspective: '1000px',
          width: '100%',
          height: '100%',
          position: 'relative'
        }}>
          {/* Sliding Track with Dynamic Transform */}
          <div 
            ref={carouselTrackRef}
            style={{
            display: 'flex',
            alignItems: 'center',
              gap: `${carouselConfig.cardGap}px`,
              transform: getCarouselTransform(),
            transition: 'transform 500ms cubic-bezier(0.25, 0.8, 0.25, 1)',
            willChange: 'transform'
            }}
          >
            {movies.map((movie, index) => {
              const isActive = index === selectedMovieIndex;
              
              return (
                <div
                  key={movie.id}
                  ref={el => cardRefs.current[index] = el}
                  onClick={() => setSelectedMovieIndex(index)}
                  style={{
                    position: 'relative',
                    width: isMobile ? '170px' : '320px',
                    height: isMobile ? '255px' : '480px',
                    borderRadius: '15px',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    flexShrink: 0,
                    backgroundColor: '#1a1a1a',
                    
                    transform: isActive 
                      ? 'translateX(0) scale(1)' 
                      : 'scale(0.75)',
                    opacity: isActive ? 1 : 0.6,
                    filter: isActive ? 'blur(0px)' : 'blur(3px)',
                    zIndex: isActive ? 10 : 1,
                    
                    transition: 'transform 500ms cubic-bezier(0.25, 0.8, 0.25, 1), opacity 500ms cubic-bezier(0.25, 0.8, 0.25, 1), filter 500ms cubic-bezier(0.25, 0.8, 0.25, 1)',
                    
                    border: isActive 
                      ? '3px solid rgba(107, 142, 35, 0.8)' 
                      : '1px solid rgba(107, 142, 35, 0.2)',
                    boxShadow: isActive 
                      ? isMobile 
                        ? '0 10px 30px rgba(107, 142, 35, 0.3)'
                        : '0 20px 60px rgba(107, 142, 35, 0.3)'
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
                  
                  <div style={{
                    position: 'absolute',
                    top: isMobile ? '8px' : '15px',
                    left: isMobile ? '8px' : '15px',
                    background: isActive 
                      ? 'rgba(107, 142, 35, 0.9)' 
                      : 'rgba(0, 0, 0, 0.6)',
                    color: 'white',
                    padding: isMobile ? '4px 8px' : '6px 10px',
                    borderRadius: '15px',
                    fontSize: isMobile ? '0.7rem' : '0.8rem',
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
          bottom: isMobile ? '15px' : '30px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: isMobile ? '6px' : '10px',
          zIndex: 15,
          background: 'rgba(0, 0, 0, 0.3)',
          padding: isMobile ? '8px 16px' : '12px 20px',
          borderRadius: '25px',
          backdropFilter: 'blur(15px)',
          border: '1px solid rgba(255, 255, 255, 0.1)'
        }}>
          {movies.map((_, index) => (
            <div
              key={index}
              onClick={() => setSelectedMovieIndex(index)}
              style={{
                width: selectedMovieIndex === index 
                  ? (isMobile ? '25px' : '35px')
                  : (isMobile ? '6px' : '10px'),
                height: isMobile ? '6px' : '10px',
                borderRadius: isMobile ? '3px' : '5px',
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
          top: isMobile ? '15px' : '25px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          alignItems: 'center',
          gap: isMobile ? '8px' : '12px',
          color: 'rgba(255, 255, 255, 0.7)',
          fontSize: isMobile ? '0.7rem' : '0.8rem',
          fontWeight: '500'
        }}>
          <span>{String(selectedMovieIndex + 1).padStart(2, '0')}</span>
          <div style={{
            width: isMobile ? '35px' : '50px',
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

      {/* ENHANCED PROFESSIONAL IMMERSIVE VIDEO SHOWCASE - STRAIGHT EDGES */}
      <section 
        className="immersive-showcase"
        style={{
          position: 'relative',
          width: '100vw',
          height: '80vh',
          minHeight: '600px',
          marginTop: '0',
          marginBottom: '40px', // Add small spacing before footer
          zIndex: 5,
          background: '#000'
        }}
      >
        {/* REMOVED - Angled Section Framing - Top */}
        {/* <div className="angled-divider-top" /> */}

        {/* Parallax Video Background with Enhanced Masking */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 1
        }}>
          {showcaseItems[activeShowcaseIndex]?.videoLoaded && showcaseItems[activeShowcaseIndex]?.videoUrl ? (
                  <video
              key={activeShowcaseIndex}
              ref={immersiveVideoRef}
              className="video-transition"
                    style={{
                width: '110%',
                height: '110%',
                objectFit: 'cover',
                transform: 'translate(-5%, -5%)', // Parallax effect
                filter: 'brightness(0.7) contrast(1.1) saturate(1.1)'
                    }}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    controls={false}
                  >
              <source src={showcaseItems[activeShowcaseIndex].videoUrl} type="video/mp4" />
                  </video>
                ) : (
                  <div style={{
                    width: '100%',
              height: '100%',
              background: 'linear-gradient(135deg, #0a0a0a, #1a1a1a)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
              color: '#666',
              fontSize: '1.5rem'
                  }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '4rem', marginBottom: '20px', color: 'rgba(107, 142, 35, 0.6)' }}>🎬</div>
                <div>Loading cinematic experience...</div>
              </div>
                  </div>
                )}
              </div>

        {/* Enhanced Layered Gradient Overlay */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: `
            linear-gradient(
              180deg,
              rgba(0, 0, 0, 0.2) 0%,
              rgba(107, 142, 35, 0.05) 30%,
              rgba(0, 0, 0, 0.1) 60%,
              rgba(0, 0, 0, 0.8) 95%,
              rgba(0, 0, 0, 0.95) 100%
            )
          `,
          backdropFilter: 'blur(1px)',
          WebkitBackdropFilter: 'blur(1px)',
          zIndex: 2
        }} />

        {/* ENHANCED PROFESSIONAL TEXT OVERLAY - MIDDLE LEFT */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50px',
          transform: 'translateY(-50%)', // Centers it vertically
          color: 'white',
          maxWidth: '45%',
          pointerEvents: 'none',
          zIndex: 15
        }}>
          {/* Enhanced Category Badge */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(107, 142, 35, 0.8), rgba(107, 142, 35, 0.6))',
            padding: '8px 20px',
            borderRadius: '25px',
            fontSize: '0.8rem',
            fontWeight: '600',
            textTransform: 'uppercase',
            letterSpacing: '2px',
            marginBottom: '20px',
            display: 'inline-block',
            backdropFilter: 'blur(15px)',
            WebkitBackdropFilter: 'blur(15px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            boxShadow: '0 8px 32px rgba(107, 142, 35, 0.3)'
          }}>
            {showcaseItems[activeShowcaseIndex]?.category || 'Loading...'}
            </div>

          {/* Enhanced Film Title */}
          <h1 style={{ 
            fontWeight: '700',
            margin: '0 0 15px 0',
            fontSize: '2.5rem',
            lineHeight: '1.1',
            background: 'linear-gradient(135deg, #ffffff, #e0e0e0)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textShadow: '0 2px 20px rgba(0, 0, 0, 0.8)',
            letterSpacing: '-0.5px'
          }}>
            {showcaseItems[activeShowcaseIndex]?.title || 'Loading Film...'}
          </h1>
          
          {/* Enhanced Description with Glass Effect */}
          <div style={{
            background: 'rgba(0, 0, 0, 0.4)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            padding: '20px 25px',
            borderRadius: '16px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
          }}>
            <p style={{ 
              fontWeight: '400',
              margin: 0,
              fontSize: '1.1rem',
              lineHeight: '1.6',
              color: 'rgba(255, 255, 255, 0.9)'
            }}>
              {showcaseItems[activeShowcaseIndex]?.description || 'Preparing cinematic experience...'}
            </p>
            </div>
          </div>

        {/* Desktop: Enhanced Frosted Glass Sidebar */}
        {!isMobile ? (
          <div 
            className="sidebar-panel"
            style={{
              position: 'absolute',
              right: '40px',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'rgba(10, 10, 10, 0.8)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              borderRadius: '20px',
              padding: '30px 25px',
              zIndex: 15,
              boxShadow: '0 25px 80px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.05)'
            }}
          >
            {/* Sidebar Header */}
            <div style={{
                textAlign: 'center',
              marginBottom: '25px',
              color: 'white'
            }}>
              <h3 style={{ 
                fontSize: '0.9rem',
                fontWeight: 'bold',
                textTransform: 'uppercase',
                letterSpacing: '2px',
                opacity: 0.9,
                marginBottom: '8px',
                margin: 0
              }}>
                Showcase Films
              </h3>
              <div style={{
                width: '60px',
                height: '2px',
                background: 'linear-gradient(90deg, rgba(107, 142, 35, 1), transparent)',
                margin: '8px auto 0'
              }} />
          </div>

            {/* Enhanced Book Cards with Better Error Handling */}
              <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
              maxHeight: '400px',
              overflowY: 'visible'
            }}>
              {showcaseItems.map((item, index) => (
                <div
                  key={item.id}
                  onClick={() => setActiveIndex(index)}
                  className={`book-card ${activeShowcaseIndex === index ? 'active' : ''}`}
                  style={{
                    width: '120px', // Slightly smaller width
                    height: '180px', // Taller to match book proportions
                    borderRadius: '12px',
                    overflow: 'visible', // Changed from 'hidden' to show full image
                    cursor: 'pointer',
                    border: activeShowcaseIndex === index 
                      ? '3px solid rgba(107, 142, 35, 1)' 
                      : '2px solid rgba(255, 255, 255, 0.2)',
                    boxShadow: activeShowcaseIndex === index 
                      ? '0 25px 50px rgba(107, 142, 35, 0.5)' 
                      : '0 15px 35px rgba(0, 0, 0, 0.6)',
                    transform: activeShowcaseIndex === index ? 'scale(1.08)' : 'scale(1)',
                    background: 'rgba(20, 20, 20, 0.9)',
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '10px' // Add padding inside container
                  }}
                >
                  {/* Cinematic Numbering */}
              <div style={{
                    position: 'absolute',
                    top: '8px',
                    left: '8px',
                    background: activeShowcaseIndex === index 
                      ? 'rgba(107, 142, 35, 0.95)' 
                      : 'rgba(0, 0, 0, 0.8)',
                color: 'white',
                    width: '24px',
                    height: '24px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.7rem',
                    fontWeight: 'bold',
                    zIndex: 5,
                    backdropFilter: 'blur(10px)'
                  }}>
                    {String(index + 1).padStart(2, '0')}
            </div>

                  {/* Image that shows full proportions */}
                  {item.imageLoaded && item.image && !item.imageError ? (
                    <img
                      src={item.image}
                      alt={item.title}
                      style={{
                        maxWidth: '100%', // Fits within container width
                        maxHeight: '100%', // Fits within container height
                        width: 'auto', // Maintains aspect ratio
                        height: 'auto', // Maintains aspect ratio
                        objectFit: 'contain', // Shows full image without cropping
                        display: 'block',
                        borderRadius: '8px',
                        filter: activeShowcaseIndex === index 
                          ? 'brightness(1.1) contrast(1.1) saturate(1.1)' 
                          : 'brightness(0.85) contrast(1) saturate(0.9)'
                      }}
                      onError={() => {
                        setShowcaseItems(prev => {
                          const updated = [...prev];
                          updated[index].imageError = true;
                          return updated;
                        });
                      }}
                    />
                  ) : (
                    /* Fallback placeholder */
                    <div style={{
                      width: '80%',
                      height: '80%',
                      background: 'linear-gradient(135deg, #2a2a2a, #1a1a1a)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'rgba(107, 142, 35, 0.6)',
                      fontSize: '2rem',
                      borderRadius: '8px'
                    }}>
                      {item.imageError ? '❌' : '🎭'}
                    </div>
                  )}

                  {/* Enhanced Active Indicator */}
                  {activeShowcaseIndex === index && (
              <div style={{
                      position: 'absolute',
                      bottom: '8px',
                      right: '8px',
                      width: '28px',
                      height: '28px',
                      borderRadius: '50%',
                      background: 'rgba(107, 142, 35, 0.95)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                color: 'white',
                      fontSize: '1rem',
                      fontWeight: 'bold',
                      backdropFilter: 'blur(10px)',
                      border: '2px solid rgba(255, 255, 255, 0.2)'
                    }}>
                      ▶
              </div>
                  )}

                  {/* Enhanced Film Strip Effect */}
                  <div style={{
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    width: '6px',
                    height: '100%',
                    background: activeShowcaseIndex === index 
                      ? 'linear-gradient(180deg, #ffd700, #ffed4e, #e6c200)'
                      : 'linear-gradient(180deg, #666, #444, #333)',
                    borderRadius: '0 4px 4px 0',
                    boxShadow: 'inset 1px 0 0 rgba(255, 255, 255, 0.1)'
                  }} />

                  {/* Category Badge */}
              <div style={{
                    position: 'absolute',
                    bottom: '8px',
                    left: '12px',
                    background: activeShowcaseIndex === index 
                      ? 'rgba(107, 142, 35, 0.9)' 
                      : 'rgba(0, 0, 0, 0.8)',
                color: 'white',
                    padding: '3px 8px',
                    borderRadius: '10px',
                    fontSize: '0.6rem',
                    fontWeight: 'bold',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    maxWidth: '80px',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis'
                  }}>
                    {item.category}
              </div>
            </div>
              ))}
              </div>
            </div>
        ) : (
          /* Mobile: Horizontal Swipeable Carousel - Fixed */
          <div style={{
            position: 'absolute',
            bottom: '160px',
            left: '0',
            right: '0',
            zIndex: 10
          }}>
            <div className="mobile-carousel">
              {showcaseItems.map((item, index) => (
                <div
                  key={item.id}
                  onClick={() => setActiveIndex(index)}
                  className="mobile-card"
                    style={{
                    width: '90px',
                    height: '135px',
                    borderRadius: '10px',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    border: activeShowcaseIndex === index 
                      ? '3px solid rgba(107, 142, 35, 1)' 
                      : '2px solid rgba(255, 255, 255, 0.3)',
                    boxShadow: activeShowcaseIndex === index 
                      ? '0 15px 30px rgba(107, 142, 35, 0.6)' 
                      : '0 8px 20px rgba(0, 0, 0, 0.5)',
                    transform: activeShowcaseIndex === index ? 'scale(1.1)' : 'scale(1)',
                    transition: 'all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)',
                    background: '#1a1a1a',
                    position: 'relative'
                  }}
                >
                  {item.imageLoaded && item.image && !item.imageError ? (
                    <img
                      src={item.image}
                      alt={item.title}
                    style={{
                      width: '100%',
                        height: '100%',
                        objectFit: 'contain', // Changed from 'cover' to 'contain'
                        objectPosition: 'center',
                        display: 'block'
                      }}
                      onError={() => {
                        setShowcaseItems(prev => {
                          const updated = [...prev];
                          updated[index].imageError = true;
                          return updated;
                        });
                      }}
                    />
                ) : (
                  <div style={{
                    width: '100%',
                      height: '100%',
                      background: 'linear-gradient(135deg, #2a2a2a, #1a1a1a)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                      color: '#666',
                      fontSize: '1.8rem'
                  }}>
                      {item.imageError ? '❌' : '📖'}
                  </div>
                )}
              </div>
              ))}
            </div>
          </div>
        )}

        {/* REMOVED - No more navigation arrows at the bottom */}

        {/* REMOVED - Angled Section Framing - Bottom */}
        {/* <div className="angled-divider-bottom" /> */}
      </section>

      {/* FOOTER WITH SPACING */}
      <FooterOne />
    </>
  );
};

export default FeaturesPage;
