import React, { useState, useRef, useEffect } from "react";
import Slider from "react-slick";
import { storage } from "../firebase/config";
import { ref, getDownloadURL } from 'firebase/storage';

import thumbPos from "../assets/images/testimonails-thumb-pos.svg";
import thumbPos2 from "/Molotov Logo PNG.png";
import thumbPos3 from "../assets/images/testimonails-card.svg";
import icon from "../assets/images/testimonails-slick-icon.svg";
import profileImg from "../assets/images/t-prof-1.svg";
import elioImg from "../assets/imgoftestimonial/elio.jpg"; // Add Elio's image import
import mahdiImg from "/mahdi2.jpg"; // Add Mahdi's image import

const Testimonials = ({ addClass }) => {
  const [videoUrl, setVideoUrl] = useState('');
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);
  const videoRef = useRef(null);
  const sectionRef = useRef(null);

  // Check cache immediately on mount
  useEffect(() => {
    const cacheKey = 'testimonials_video_url';
    const cacheTimeKey = 'testimonials_video_timestamp';
    const cacheExpiration = 24 * 60 * 60 * 1000; // 24 hours
    
    const cachedUrl = localStorage.getItem(cacheKey);
    const cachedTime = localStorage.getItem(cacheTimeKey);
    const now = Date.now();
    
    if (cachedUrl && cachedTime && (now - parseInt(cachedTime)) < cacheExpiration) {
      console.log('Testimonials video loaded instantly from cache');
      setVideoUrl(cachedUrl);
      setVideoLoaded(true);
    }
  }, []);

  // Intersection observer for uncached videos
  useEffect(() => {
    // If video is already loaded from cache, don't set up observer
    if (videoLoaded) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !shouldLoadVideo && !videoLoaded) {
            console.log('Testimonials section in view, loading video');
            setShouldLoadVideo(true);
          }
        });
      },
      { threshold: 0.2, rootMargin: '100px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [videoLoaded, shouldLoadVideo]);

  // Load video only if not cached and section is in view
  useEffect(() => {
    if (!shouldLoadVideo || videoLoaded) return;

    const loadVideo = async () => {
      const cacheKey = 'testimonials_video_url';
      const cacheTimeKey = 'testimonials_video_timestamp';
      const cacheExpiration = 24 * 60 * 60 * 1000; // 24 hours
      
      try {
        console.log('Fetching Testimonials video from Firebase Storage');
        const videoRef = ref(storage, 'servicesvideos/Avant Premier.mp4');
        const url = await getDownloadURL(videoRef);
        
        // Cache the URL and timestamp
        localStorage.setItem(cacheKey, url);
        localStorage.setItem(cacheTimeKey, Date.now().toString());
        
        setVideoUrl(url);
        setVideoLoaded(true);
        console.log('Testimonials video loaded and cached successfully');
        
      } catch (error) {
        console.error('Error loading Testimonials video:', error);
        setVideoError(true);
        setVideoLoaded(false);
        
        // Clear any invalid cached data
        localStorage.removeItem(cacheKey);
        localStorage.removeItem(cacheTimeKey);
      }
    };

    loadVideo();
  }, [shouldLoadVideo, videoLoaded]);

  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    speed: 3000,
    autoplay: false,
    dots: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const testimonials = [
    {
      text: `I walk at the edge where vision becomes form — carrying a spark through shadow and noise until it breathes as light, sound, and movement. My task is to guard the fragile essence of a story, shaping it with patience and fire, guiding every gesture toward a single pulse. Each work becomes more than a film: it is a dream distilled, an echo that lingers long after the screen goes dark.`,
      name: "Elio Zeaiter",
      role: "Producer",
      profileImage: elioImg // Add profile image for Elio
    },
    {
      text: `I am the architect of visual storytelling, transforming raw footage into compelling narratives that captivate and inspire. My craft lies in the delicate balance of pacing, emotion, and technical precision — weaving together moments that create a seamless journey from beginning to end. Each cut, transition, and effect serves the greater story, ensuring that every frame contributes to a powerful and unforgettable experience.`,
      name: "Mahdi Kandyl",
      role: "Artist",
      profileImage: mahdiImg // Add profile image for Mahdi
    },
 
  ];

  return (
    <section ref={sectionRef} className={`testimonails ${addClass || ""}`}>
      {/* Removed <br /><br /> */}
      
      <div className="container">
           <div className="row">
          <div className="col-lg-12 col-xxl-5">
            <h2 className="main_titel">
            Crafted for Every Screen
            </h2>
          </div>

          <div className="col-xxl-6 offset-xxl-1">
            <div className="services_txt">
              <p className="text_lg">
              We build work that cuts through the noise , snackable social content, cinematic shorts, and full-length documentaries. End-to-end production, expert cinematography, precision editing and distribution plans engineered to grow your audience and impact.              </p>
            </div>
          </div>
        </div>
  <br /><br /><br />        
        <div className="row align-items-center">
          
          <div className="col-xxl-6">
            
          <div className="testimonails_thumb_main" style={{ maxWidth: '450px', margin: '0 auto' }}>
              {videoLoaded && videoUrl ? (
                <video
                  ref={videoRef}
                  className="testimonails_thumb"
                  style={{
                    width: '100%',
                    height: '600px', // Reduced from 1000px
                    maxHeight: '600px', // Reduced from 1000px
                    objectFit: 'cover',
                    borderRadius: '15px'
                  }}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  controls={false}
                  onLoadStart={() => console.log('Testimonials video loading started')}
                  onCanPlayThrough={() => console.log('Testimonials video can play through')}
                  onError={(e) => {
                    console.error('Testimonials video playback error:', e);
                    setVideoError(true);
                  }}
                >
                  <source src={videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : videoError ? (
                <div 
                  className="testimonials_thumb"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: '#f0f0f0',
                    borderRadius: '15px',
                    color: '#666',
                    fontSize: '16px',
                    height: '600px', // Reduced from 1000px
                    maxHeight: '600px', // Reduced from 1000px
                    flexDirection: 'column',
                    gap: '10px'
                  }}
                >
                  <div style={{ fontSize: '2rem', marginBottom: '10px' }}>⚠️</div>
                  <div>Video unavailable</div>
                </div>
              ) : shouldLoadVideo || localStorage.getItem('testimonials_video_url') ? (
                <div 
                  className="testimonails_thumb"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    borderRadius: '15px',
                    color: 'white',
                    fontSize: '16px',
                    fontWeight: 'bold',
                    height: '600px', // Reduced from 1000px
                    maxHeight: '600px', // Reduced from 1000px
                    flexDirection: 'column',
                    gap: '10px'
                  }}
                >
                  <div style={{
                    width: '40px',
                    height: '40px',
                    border: '3px solid #ffffff',
                    borderTop: '3px solid transparent',
                    borderRadius: '50%',
                    animation: 'spin 1s linear infinite'
                  }} />
                  <div style={{ fontSize: '14px', opacity: 0.9 }}>
                    Loading video...
                  </div>
                </div>
              ) : (
                <div 
                  className="testimonails_thumb"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'linear-gradient(135deg, #f0f0f0, #e0e0e0)',
                    borderRadius: '15px',
                    color: '#666',
                    fontSize: '16px',
                    fontWeight: 'bold',
                    height: '600px', // Reduced from 1000px
                    maxHeight: '600px', // Reduced from 1000px
                    flexDirection: 'column',
                    gap: '10px'
                  }}
                >
                  <div style={{ fontSize: '2rem', marginBottom: '10px' }}>🎬</div>
                  <div>Video loads when in view</div>
                </div>
              )}
              
              
              <img
                src={thumbPos}
                alt="pos"
                className="testimonails_thumb_pos"
              />
              <img
                src={thumbPos2}
                alt="pos"
                className="testimonails_thumb_pos--2"
              />
              <img
                src={thumbPos3}
                alt="card"
                className="testimonails_thumb_pos--3"
              />
            </div>
          </div>
          

          <div className="col-xxl-6 testimonails_pl">
            <div className="testimonails_head">
              <h2 className="main_titel_two">
              Confident & <span>results-driven</span>
              </h2>
            </div>
            <Slider {...settings} className="testimonails_slick">
              {testimonials.map((item, i) => (
                <div key={i} className="testimonails_slick_item">
                  <span className="testimonails_slick_item_icon">
                    <svg
                      width="60"
                      height="45"
                      viewBox="0 0 60 45"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 45V27.1875C0 12.1875 10.5 0 25.5 0V7.875C17.625 7.875 11.25 14.0625 11.25 21.9375V22.5H25.5V45H0ZM34.5 45V27.1875C34.5 12.1875 45 0 60 0V7.875C52.125 7.875 45.75 14.0625 45.75 21.9375V22.5H60V45H34.5Z"
                        fill="url(#paint0_linear_2489_21992)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_2489_21992"
                          x1="1.70213"
                          y1="38.1818"
                          x2="66.3191"
                          y2="30.9545"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#6427FF" />
                          <stop offset="1" stopColor="#7D51ED" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </span>
                  <div className="text_4xl">
                    <p className="text_lg">
                      {item.text}
                    </p>
                  </div>
                  <div className="testimonails_slick_prof_item">
                    <img
                      src={item.profileImage} // Use the specific profile image for each person
                      alt="profile"
                      className="testimonails_slick_prof_thumb"
                      style={item.name === "Elio Zeaiter" || item.name === "Mahdi Kandyl" ? {
                        borderRadius: '30%',
                        objectFit: 'cover'
                      } : {}}
                    />
                    <div className="testimonails_slick_prof_txt">
                      <a href="#" className="text_2xl">
                        {item.name}
                      </a>
                      <p className="text_lg">{item.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
