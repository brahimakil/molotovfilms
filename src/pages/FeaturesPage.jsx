import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { storage } from "../firebase/config";
import { ref, getDownloadURL } from 'firebase/storage';
import FooterOne from "../component/FooterOne";

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
  const [isOverCarousel, setIsOverCarousel] = useState(false);
  
  // Add state for multiple videos
  const [showcaseVideoUrl, setShowcaseVideoUrl] = useState('');
  const [showcaseVideoLoaded, setShowcaseVideoLoaded] = useState(false);
  const [showcaseVideoError, setShowcaseVideoError] = useState(false);
  const [shouldLoadShowcaseVideo, setShouldLoadShowcaseVideo] = useState(false);

  // Interactive Books Showcase State
  const [activeBookIndex, setActiveBookIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const [showcaseData, setShowcaseData] = useState([
    {
      id: 1,
      title: "The Original Error",
      description: "A poetic documentary that takes viewers on a transformative journey to Nepal, delving into profound themes of life and death through captivating visuals.",
      image: '',
      videoUrl: '',
      imageLoaded: false,
      videoLoaded: false,
      imageError: false,
      videoError: false
    },
    {
      id: 2,
      title: "Tili Tili BOOM",
      description: "An explosive narrative that explores the intricate dynamics of human relationships through stunning cinematography and compelling storytelling.",
      image: '',
      videoUrl: '',
      imageLoaded: false,
      videoLoaded: false,
      imageError: false,
      videoError: false
    },
    {
      id: 3,
      title: "Low Budget Heist",
      description: "A thrilling short film that proves creativity knows no budget constraints, delivering edge-of-your-seat entertainment with innovative filmmaking techniques.",
      image: '',
      videoUrl: '',
      imageLoaded: false,
      videoLoaded: false,
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
  const carouselRef = useRef(null);
  const showcaseVideoRef = useRef(null);
  const activeBookVideoRef = useRef(null);

  // Touch/swipe support
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // Load Interactive Books Content from Firebase
  useEffect(() => {
    const loadInteractiveBooksContent = async () => {
      try {
        // Image and video file mappings
        const imageRefs = [
          'servicesfeaturespage/originalerror.jpg',
          'servicesfeaturespage/tilitiliboom.jpg', 
          'servicesfeaturespage/filmtejere.jpg'
        ];
        
        const videoRefs = [
          'servicesfeaturespage/The Original Error.- traile - webmp4.mp4',
          'servicesfeaturespage/Tili Tili BOOM.mp4',
          'servicesfeaturespage/Trailer 1.20sLow Budget Hiest.mp4'
        ];

        // Load images
        const imagePromises = imageRefs.map(async (imagePath) => {
          try {
            const imageRef = ref(storage, imagePath);
            return await getDownloadURL(imageRef);
          } catch (error) {
            console.error(`Error loading image ${imagePath}:`, error);
            return null;
          }
        });

        // Load videos
        const videoPromises = videoRefs.map(async (videoPath) => {
          try {
            const videoRef = ref(storage, videoPath);
            return await getDownloadURL(videoRef);
          } catch (error) {
            console.error(`Error loading video ${videoPath}:`, error);
            return null;
          }
        });

        const [imageUrls, videoUrls] = await Promise.all([
          Promise.all(imagePromises),
          Promise.all(videoPromises)
        ]);

        // Update showcase data
        setShowcaseData(prevData => 
          prevData.map((item, index) => ({
            ...item,
            image: imageUrls[index] || '',
            videoUrl: videoUrls[index] || '',
            imageLoaded: !!imageUrls[index],
            videoLoaded: !!videoUrls[index],
            imageError: !imageUrls[index],
            videoError: !videoUrls[index]
          }))
        );

      } catch (error) {
        console.error('Error loading interactive books content:', error);
      }
    };

    loadInteractiveBooksContent();
  }, []);

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
        
        // Allow page scroll if:
        // - Scrolling up at first image
        // - Scrolling down at last image
        if ((scrollDirection < 0 && isAtFirstImage) || (scrollDirection > 0 && isAtLastImage)) {
          // Don't prevent - allow page scroll
          return;
        }
        
        // Otherwise prevent page scroll and let carousel handle it
        e.preventDefault();
        e.stopPropagation();
      }
    };

    // Add listener when hovering over carousel
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
    
    // Check boundaries
    const isAtFirstImage = selectedMovieIndex === 0;
    const isAtLastImage = selectedMovieIndex === movies.length - 1;
    
    // If scrolling down at last image, allow page scroll
    if (scrollDirection > 0 && isAtLastImage) {
      // Don't prevent, let the page scroll
      return;
    }
    
    // If scrolling up at first image, allow page scroll
    if (scrollDirection < 0 && isAtFirstImage) {
      // Don't prevent, let the page scroll
      return;
    }
    
    // Otherwise, handle carousel navigation
    e.preventDefault();
    
    if (scrollDirection > 0 && selectedMovieIndex < movies.length - 1) {
      setSelectedMovieIndex(prev => prev + 1);
    } else if (scrollDirection < 0 && selectedMovieIndex > 0) {
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

  // Handle mute/unmute
  const toggleMute = () => {
    setIsMuted(!isMuted);
    if (activeBookVideoRef.current) {
      activeBookVideoRef.current.muted = !isMuted;
    }
  };

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

        .book-card {
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .book-card:hover {
          transform: scale(1.05);
          box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        }

        .book-card.active {
          transform: scale(1.1);
          box-shadow: 0 15px 40px rgba(107, 142, 35, 0.4);
          border: 3px solid rgba(107, 142, 35, 0.8);
        }
      `}</style>

      {/* Professional Film Carousel - Smart Scroll Boundary */}
      <section 
        ref={heroRef} 
        style={{
          position: 'relative',
          height: window.innerWidth <= 768 ? '50vh' : '70vh',
          minHeight: window.innerWidth <= 768 ? '350px' : '500px',
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
            gap: window.innerWidth <= 768 ? '30px' : '60px', // Reduced gap
            transform: `translateX(calc(50vw - ${selectedMovieIndex * (window.innerWidth <= 768 ? 200 : 380) + (window.innerWidth <= 768 ? 100 : 190)}px))`, // Adjusted for smaller books
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
                    width: isMobile ? '170px' : '320px', // Reduced from 240px/450px
                    height: isMobile ? '255px' : '480px', // Reduced from 360px/650px
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
                  
                  {/* Item Number Indicator */}
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

        {/* Navigation Dots - Adjusted for smaller banner */}
        <div style={{
          position: 'absolute',
          bottom: window.innerWidth <= 768 ? '15px' : '30px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: window.innerWidth <= 768 ? '6px' : '10px',
          zIndex: 15,
          background: 'rgba(0, 0, 0, 0.3)',
          padding: window.innerWidth <= 768 ? '8px 16px' : '12px 20px',
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
                  ? (window.innerWidth <= 768 ? '25px' : '35px')
                  : (window.innerWidth <= 768 ? '6px' : '10px'),
                height: window.innerWidth <= 768 ? '6px' : '10px',
                borderRadius: window.innerWidth <= 768 ? '3px' : '5px',
                background: selectedMovieIndex === index 
                  ? 'linear-gradient(90deg, rgba(107, 142, 35, 1), rgba(107, 142, 35, 0.7))' 
                  : 'rgba(255, 255, 255, 0.3)',
                cursor: 'pointer',
                transition: 'all 300ms cubic-bezier(0.25, 0.8, 0.25, 1)'
              }}
            />
          ))}
        </div>

        {/* Progress Bar - Adjusted for smaller banner */}
        <div style={{
          position: 'absolute',
          top: window.innerWidth <= 768 ? '15px' : '25px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          alignItems: 'center',
          gap: window.innerWidth <= 768 ? '8px' : '12px',
          color: 'rgba(255, 255, 255, 0.7)',
          fontSize: window.innerWidth <= 768 ? '0.7rem' : '0.8rem',
          fontWeight: '500'
        }}>
          <span>{String(selectedMovieIndex + 1).padStart(2, '0')}</span>
          <div style={{
            width: window.innerWidth <= 768 ? '35px' : '50px',
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

          {/* INTERACTIVE BOOKS SHOWCASE - REPLACES "OUR PROCESS" */}
          <div className="row align-items-center">
            <div className="col-lg-4">
              <h3 style={{ 
                fontSize: '2.2rem', 
                fontWeight: 'bold', 
                color: '#333',
                marginBottom: '30px',
                textAlign: 'center'
              }}>
                Featured Films
              </h3>
              
              {/* Vertical Book Stack */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '15px', // Reduced from 20px
                alignItems: 'center'
              }}>
                {showcaseData.map((book, index) => (
                  <div
                    key={book.id}
                    onClick={() => setActiveBookIndex(index)}
                    className={`book-card ${activeBookIndex === index ? 'active' : ''}`}
                    style={{
                      width: '140px', // Reduced from 180px
                      height: '210px', // Reduced from 270px
                      borderRadius: '12px', // Slightly smaller radius
                      overflow: 'hidden',
                      position: 'relative',
                      backgroundColor: '#f5f5f5',
                      border: activeBookIndex === index ? '2px solid rgba(107, 142, 35, 0.8)' : '1px solid rgba(0,0,0,0.1)' // Thinner borders
                    }}
                  >
                    {book.imageLoaded && book.image && !book.imageError ? (
                      <img
                        src={book.image}
                        alt={book.title}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'contain',
                          objectPosition: 'center'
                        }}
                        onError={(e) => {
                          console.error(`Failed to load image for ${book.title}`);
                          e.target.style.display = 'none';
                          if (e.target.nextSibling) {
                            e.target.nextSibling.style.display = 'flex';
                          }
                        }}
                      />
                    ) : (
                      <div style={{
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: 'linear-gradient(135deg, #f0f0f0, #e0e0e0)',
                        color: '#666',
                        fontSize: '0.8rem', // Smaller text
                        textAlign: 'center',
                        padding: '15px' // Reduced padding
                      }}>
                        {book.imageError ? '❌ Image Error' : '⏳ Loading...'}
                      </div>
                    )}

                    {/* Book Number */}
                    <div style={{
                      position: 'absolute',
                      top: '8px', // Reduced from 10px
                      right: '8px', // Reduced from 10px
                      background: 'rgba(0,0,0,0.7)',
                      color: 'white',
                      padding: '3px 6px', // Reduced from 4px 8px
                      borderRadius: '8px', // Reduced from 10px
                      fontSize: '0.7rem', // Reduced from 0.8rem
                      fontWeight: 'bold'
                    }}>
                      {String(index + 1).padStart(2, '0')}
                    </div>

                    {/* Active Indicator */}
                    {activeBookIndex === index && (
                      <div style={{
                        position: 'absolute',
                        bottom: '8px', // Reduced from 10px
                        left: '50%',
                        transform: 'translateX(-50%)',
                        background: 'rgba(107, 142, 35, 0.9)',
                        color: 'white',
                        padding: '3px 10px', // Reduced from 4px 12px
                        borderRadius: '12px', // Reduced from 15px
                        fontSize: '0.65rem', // Reduced from 0.7rem
                        fontWeight: 'bold'
                      }}>
                        NOW PLAYING
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="col-lg-8">
              {/* Dynamic Video Player */}
              <div style={{ 
                position: 'relative', 
                borderRadius: '20px', 
                overflow: 'hidden',
                background: '#000',
                minHeight: '500px'
              }}>
                {showcaseData[activeBookIndex]?.videoLoaded && showcaseData[activeBookIndex]?.videoUrl ? (
                  <>
                    <video
                      ref={activeBookVideoRef}
                      key={showcaseData[activeBookIndex].id} // Force re-render when video changes
                      style={{
                        width: '100%',
                        height: '500px',
                        objectFit: 'cover'
                      }}
                      autoPlay
                      muted={isMuted}
                      loop
                      playsInline
                      preload="metadata"
                      controls={false}
                    >
                      <source src={showcaseData[activeBookIndex].videoUrl} type="video/mp4" />
                    </video>

                    {/* Video Controls Overlay */}
                    <div style={{
                      position: 'absolute',
                      top: '20px',
                      right: '20px',
                      display: 'flex',
                      gap: '10px'
                    }}>
                      {/* Fullscreen Button */}
                      <button
                        onClick={() => {
                          if (activeBookVideoRef.current) {
                            if (activeBookVideoRef.current.requestFullscreen) {
                              activeBookVideoRef.current.requestFullscreen();
                            } else if (activeBookVideoRef.current.webkitRequestFullscreen) {
                              activeBookVideoRef.current.webkitRequestFullscreen();
                            } else if (activeBookVideoRef.current.msRequestFullscreen) {
                              activeBookVideoRef.current.msRequestFullscreen();
                            }
                          }
                        }}
                        style={{
                          background: 'rgba(0,0,0,0.7)',
                          border: 'none',
                          borderRadius: '50%',
                          width: '50px',
                          height: '50px',
                          color: 'white',
                          fontSize: '1.2rem',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          transition: 'all 0.3s ease'
                        }}
                        onMouseOver={(e) => e.target.style.background = 'rgba(107, 142, 35, 0.8)'}
                        onMouseOut={(e) => e.target.style.background = 'rgba(0,0,0,0.7)'}
                      >
                        ⛶
                      </button>

                      {/* Mute/Unmute Button */}
                      <button
                        onClick={toggleMute}
                        style={{
                          background: 'rgba(0,0,0,0.7)',
                          border: 'none',
                          borderRadius: '50%',
                          width: '50px',
                          height: '50px',
                          color: 'white',
                          fontSize: '1.2rem',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          transition: 'all 0.3s ease'
                        }}
                        onMouseOver={(e) => e.target.style.background = 'rgba(107, 142, 35, 0.8)'}
                        onMouseOut={(e) => e.target.style.background = 'rgba(0,0,0,0.7)'}
                      >
                        {isMuted ? '🔇' : '🔊'}
                      </button>
                    </div>

                    {/* Video Info Overlay */}
                    <div style={{
                      position: 'absolute',
                      bottom: '0',
                      left: '0',
                      right: '0',
                      background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
                      color: 'white',
                      padding: '40px 30px 30px',
                      textAlign: 'left'
                    }}>
                      <h4 style={{
                        fontSize: '1.8rem',
                        fontWeight: 'bold',
                        marginBottom: '10px',
                        textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
                      }}>
                        {showcaseData[activeBookIndex].title}
                      </h4>
                      <p style={{
                        fontSize: '1rem',
                        opacity: 0.9,
                        lineHeight: '1.5',
                        maxWidth: '80%',
                        textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
                      }}>
                        {showcaseData[activeBookIndex].description}
                      </p>
                    </div>
                  </>
                ) : (
                  <div style={{
                    width: '100%',
                    height: '500px',
                    backgroundColor: '#f0f0f0',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#666',
                    borderRadius: '20px'
                  }}>
                    <div style={{ fontSize: '3rem', marginBottom: '20px' }}>🎬</div>
                    <div style={{ fontSize: '1.2rem', marginBottom: '10px' }}>
                      {showcaseData[activeBookIndex]?.videoError ? 'Video Load Error' : 'Loading Video...'}
                    </div>
                    <div style={{ fontSize: '1rem', opacity: 0.7 }}>
                      {showcaseData[activeBookIndex]?.title || 'Select a film to preview'}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* FOOTER ADDED */}
      <FooterOne />
    </>
  );
};

export default FeaturesPage;