import React, { useState, useRef, useEffect } from "react";
import Slider from "react-slick";
import { storage } from "../firebase/config";
import { ref, getDownloadURL } from 'firebase/storage';

import thumbPos from "../assets/images/testimonails-thumb-pos.svg";
import thumbPos2 from "../assets/images/hero_two_pos-1.svg";
import thumbPos3 from "../assets/images/testimonails-card.svg";
import icon from "../assets/images/testimonails-slick-icon.svg";
import profileImg from "../assets/images/t-prof-1.svg";

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

  const testimonial = {
    text: `Production that performs.
End-to-end production + strategic thinking. A team that treats every frame like a promise — to audiences and to you.`,
    name: "Martin Jonas",
    role: "Head of marketing, Inter inc.",
  };

  return (
    <section ref={sectionRef} className={`testimonails ${addClass || ""}`}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xxl-6">
            <div className="testimonails_thumb_main">
              {videoLoaded && videoUrl ? (
                <video
                  ref={videoRef}
                  className="testimonails_thumb"
                  style={{
                    width: '100%',
                    height: '1000px',
                    maxHeight: '1000px',
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
                    height: '1000px',
                    maxHeight: '1000px',
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
                    height: '1000px',
                    maxHeight: '1000px',
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
                    height: '1000px',
                    maxHeight: '1000px',
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
              {Array(5)
                .fill(testimonial)
                .map((item, i) => (
                  <div key={i} className="testimonails_slick_item">
                    <span className="icon">
                      <img src={icon} alt="icon" />
                    </span>
                    <h4 className="text_4xl">{item.text}</h4>
                    <div className="testimonails_slick_prof_item">
                      <img
                        src={profileImg}
                        alt="profile"
                        className="testimonails_slick_prof_thumb"
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
