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
  const videoRef = useRef(null);

  useEffect(() => {
    const getVideoUrl = async () => {
      try {
        setVideoLoading(true);
        const videoRef = ref(storage, 'servicesvideos/Avant Premier.mp4');
        const url = await getDownloadURL(videoRef);
        setVideoUrl(url);
        setVideoLoading(false);
      } catch (error) {
        console.error('Error getting video URL:', error);
        setVideoLoading(false);
      }
    };

    getVideoUrl();
  }, []);

  // Enhanced autoplay handling with scroll protection
  useEffect(() => {
    if (videoRef.current && videoUrl && !videoLoading) {
      const video = videoRef.current;
      
      const playVideo = async () => {
        try {
          video.muted = true;
          await video.play();
        } catch (error) {
          console.log('Autoplay prevented:', error);
          const playOnInteraction = () => {
            video?.play().catch(console.error);
            document.removeEventListener('click', playOnInteraction);
            document.removeEventListener('touchstart', playOnInteraction);
          };
          document.addEventListener('click', playOnInteraction);
          document.addEventListener('touchstart', playOnInteraction);
        }
      };

      const handleVisibilityChange = () => {
        if (!document.hidden && video && video.paused) {
          video.play().catch(console.error);
        }
      };

      const handleScroll = () => {
        setTimeout(() => {
          if (video && video.paused && !video.ended) {
            video.play().catch(console.error);
          }
        }, 100);
      };

      const handleFocus = () => {
        if (video && video.paused && !video.ended) {
          video.play().catch(console.error);
        }
      };

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && video && video.paused && !video.ended) {
              video.play().catch(console.error);
            }
          });
        },
        { threshold: 0.1 }
      );

      const timer = setTimeout(playVideo, 100);

      document.addEventListener('visibilitychange', handleVisibilityChange);
      document.addEventListener('scroll', handleScroll, { passive: true });
      window.addEventListener('focus', handleFocus);
      
      if (video) {
        observer.observe(video);
      }

      return () => {
        clearTimeout(timer);
        document.removeEventListener('visibilitychange', handleVisibilityChange);
        document.removeEventListener('scroll', handleScroll);
        window.removeEventListener('focus', handleFocus);
        observer.disconnect();
      };
    }
  }, [videoUrl, videoLoading]);

  useEffect(() => {
    if (videoRef.current) {
      const video = videoRef.current;
      
      const handlePause = () => {
        setTimeout(() => {
          if (video && video.paused && !video.ended) {
            video.play().catch(console.error);
          }
        }, 50);
      };

      const handleEnded = () => {
        if (video) {
          video.currentTime = 0;
          video.play().catch(console.error);
        }
      };

      video.addEventListener('pause', handlePause);
      video.addEventListener('ended', handleEnded);

      return () => {
        video.removeEventListener('pause', handlePause);
        video.removeEventListener('ended', handleEnded);
      };
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
    text: `Sara's contributions significantly reduced our marketing budget. Our clients expect a partner who consistently excels in delivering high-quality products.`,
    name: "Martin Jonas",
    role: "Head of marketing, Inter inc.",
  };

  return (
    <section className={`testimonails ${addClass || ""}`}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xxl-6">
            <div className="testimonails_thumb_main">
              {videoLoading ? (
                <div 
                  className="testimonails_thumb"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    borderRadius: '15px',
                    color: 'white',
                    fontSize: '18px',
                    fontWeight: 'bold'
                  }}
                >
                  Loading Video...
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
                  preload="auto"
                  controls={false}
                  onLoadedData={() => {
                    if (videoRef.current) {
                      videoRef.current.play().catch(console.error);
                    }
                  }}
                >
                  <source src={videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <div 
                  className="testimonails_thumb"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: '#f0f0f0',
                    borderRadius: '15px',
                    color: '#666',
                    fontSize: '16px'
                  }}
                >
                  Failed to load video
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
                Don't Trust Us, Trust Our <span> What Client Say?</span>
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
