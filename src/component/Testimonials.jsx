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
  const [videoLoading, setVideoLoading] = useState(true);
  const [videoError, setVideoError] = useState(false);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);
  const videoRef = useRef(null);
  const sectionRef = useRef(null);

  // Lazy load video when section comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !shouldLoadVideo) {
            setShouldLoadVideo(true);
          }
        });
      },
      { threshold: 0.1, rootMargin: '200px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [shouldLoadVideo]);

  // Load video with caching and timeout handling
  useEffect(() => {
    if (!shouldLoadVideo) return;

    const getVideoUrl = async () => {
      const cacheKey = 'testimonials_video_url';
      const cacheTimeKey = 'testimonials_video_timestamp';
      const cacheExpiration = 24 * 60 * 60 * 1000; // 24 hours

      try {
        setVideoLoading(true);
        setVideoError(false);
        
        // Check if we have a cached URL that's still valid
        const cachedUrl = localStorage.getItem(cacheKey);
        const cachedTime = localStorage.getItem(cacheTimeKey);
        const now = Date.now();
        
        if (cachedUrl && cachedTime && (now - parseInt(cachedTime)) < cacheExpiration) {
          console.log('Loading Testimonials video from cache');
          setVideoUrl(cachedUrl);
          setVideoLoading(false);
          return;
        }

        console.log('Fetching Testimonials video from Firebase Storage');
        
        // Create timeout promise
        const timeout = new Promise((_, reject) =>
          setTimeout(() => reject(new Error('Testimonials video load timeout')), 8000)
        );
        
        const videoPromise = getDownloadURL(ref(storage, 'servicesvideos/Avant Premier.mp4'));
        const url = await Promise.race([videoPromise, timeout]);
        
        // Cache the URL and timestamp
        localStorage.setItem(cacheKey, url);
        localStorage.setItem(cacheTimeKey, now.toString());
        
        setVideoUrl(url);
        setVideoLoading(false);
        console.log('Testimonials video loaded and cached successfully');
        
      } catch (error) {
        console.error('Error getting Testimonials video URL:', error);
        setVideoLoading(false);
        setVideoError(true);
        
        // Clear any invalid cached data
        localStorage.removeItem(cacheKey);
        localStorage.removeItem(cacheTimeKey);
      }
    };

    getVideoUrl();
  }, [shouldLoadVideo]);

  // Simple video play handling
  useEffect(() => {
    if (videoRef.current && videoUrl && !videoLoading) {
      const video = videoRef.current;
      
      const playVideo = async () => {
        try {
          video.muted = true;
          await video.play();
        } catch (error) {
          console.log('Autoplay prevented:', error);
        }
      };

      const timer = setTimeout(playVideo, 300);
      return () => clearTimeout(timer);
    }
  }, [videoUrl, videoLoading]);

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
              {videoLoading && !videoError ? (
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
                    minHeight: '300px',
                    flexDirection: 'column',
                    gap: '10px'
                  }}
                >
                  <div>
                    {localStorage.getItem('testimonials_video_url') ? 'Loading from cache...' : 'Loading Video...'}
                  </div>
                  {localStorage.getItem('testimonials_video_url') && (
                    <div style={{ fontSize: '12px', opacity: 0.8 }}>
                      Using cached version
                    </div>
                  )}
                </div>
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
                    minHeight: '300px'
                  }}
                >
                  Video unavailable
                </div>
              ) : videoUrl ? (
                <video
                  ref={videoRef}
                  className="testimonails_thumb"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: '15px'
                  }}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  controls={false}
                >
                  <source src={videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : null}
              
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
    </section>
  );
};

export default Testimonials;
