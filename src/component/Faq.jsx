import React, { useState, useRef, useEffect } from "react";
import { storage } from "../firebase/config";
import { ref, getDownloadURL } from 'firebase/storage';
import thumbPos1 from "../assets/images/testimonails-thumb-pos.svg";
import thumbPos3 from "../assets/images/testimonails-card.svg";

const Faq = () => {
  const [videoUrl, setVideoUrl] = useState('');
  const [videoLoading, setVideoLoading] = useState(true);
  const [decorationImageUrl, setDecorationImageUrl] = useState('');
  const [decorationLoading, setDecorationLoading] = useState(true);
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

  useEffect(() => {
    const getDecorationImage = async () => {
      try {
        setDecorationLoading(true);
        const imageRef = ref(storage, 'servicesvideos/2-comp.png');
        const url = await getDownloadURL(imageRef);
        setDecorationImageUrl(url);
        setDecorationLoading(false);
      } catch (error) {
        console.error('Error getting decoration image URL:', error);
        setDecorationLoading(false);
      }
    };

    getDecorationImage();
  }, []);

  // Enhanced autoplay handling with scroll protection - SAME AS SERVICES PAGE
  useEffect(() => {
    if (videoRef.current && videoUrl && !videoLoading) {
      const video = videoRef.current;
      
      const playVideo = async () => {
        try {
          video.muted = true; // Ensure muted for autoplay
          await video.play();
        } catch (error) {
          console.log('Autoplay prevented:', error);
          // Fallback: try to play on user interaction
          const playOnInteraction = () => {
            video?.play().catch(console.error);
            document.removeEventListener('click', playOnInteraction);
            document.removeEventListener('touchstart', playOnInteraction);
          };
          document.addEventListener('click', playOnInteraction);
          document.addEventListener('touchstart', playOnInteraction);
        }
      };

      // Keep video playing on scroll and other events
      const ensureVideoPlays = () => {
        if (video && video.paused && !video.ended) {
          video.play().catch(console.error);
        }
      };

      // Add event listeners to prevent video from stopping
      const handleVisibilityChange = () => {
        if (!document.hidden && video && video.paused) {
          video.play().catch(console.error);
        }
      };

      const handleScroll = () => {
        // Small delay to avoid too frequent calls
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

      // Intersection Observer to keep video playing when in view
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

      // Initial play
      const timer = setTimeout(playVideo, 100);

      // Add all event listeners
      document.addEventListener('visibilitychange', handleVisibilityChange);
      document.addEventListener('scroll', handleScroll, { passive: true });
      window.addEventListener('focus', handleFocus);
      
      // Start observing the video element
      if (video) {
        observer.observe(video);
      }

      // Cleanup function
      return () => {
        clearTimeout(timer);
        document.removeEventListener('visibilitychange', handleVisibilityChange);
        document.removeEventListener('scroll', handleScroll);
        window.removeEventListener('focus', handleFocus);
        observer.disconnect();
      };
    }
  }, [videoUrl, videoLoading]);

  // Additional effect to handle video pause events
  useEffect(() => {
    if (videoRef.current) {
      const video = videoRef.current;
      
      const handlePause = () => {
        // If video pauses unexpectedly, try to resume it
        setTimeout(() => {
          if (video && video.paused && !video.ended) {
            video.play().catch(console.error);
          }
        }, 50);
      };

      const handleEnded = () => {
        // Restart video when it ends (since it should loop)
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

  return (
    <section className="faq">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xxl-6">
            <div className="faq_head">
              <h2>
                Frequently Ask <span>Questions</span>
              </h2>
            </div>

            <div className="accordion" id="accordionExample">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    What industries do you serve?
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    Here you can write answers to the most frequently asked
                    questions. It's better to answer them on your website once
                    than personally more frequently.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    What is your experience in the industry?
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    Here you can write answers to the most frequently asked
                    questions. It's better to answer them on your website once
                    than personally more frequently.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    How do I get the services?
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    Here you can write answers to the most frequently asked
                    questions. It's better to answer them on your website once
                    than personally more frequently.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-6">
            <div className="testimonails_thumb_main">
              <div className="testimonails_thumb">
                {videoLoading ? (
                  <div style={{
                    width: '100%',
                    height: 'auto',
                    aspectRatio: '16/9',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    borderRadius: '15px',
                    color: 'white',
                    fontSize: '18px',
                    fontWeight: 'bold'
                  }}>
                    Loading Video...
                  </div>
                ) : videoUrl ? (
                  <video
                    ref={videoRef}
                    style={{
                      width: '100%',
                      height: 'auto',
                      maxWidth: '100%',
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
                  <div style={{
                    width: '100%',
                    height: 'auto',
                    aspectRatio: '16/9',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: '#f0f0f0',
                    borderRadius: '15px',
                    color: '#666',
                    fontSize: '16px'
                  }}>
                    Failed to load video
                  </div>
                )}
              </div>
              <div className="testimonails_thumb_pos">
                <img src={thumbPos1} alt="thumb decoration 1" />
              </div>
              <div className="testimonails_thumb_pos--2">
                {decorationLoading ? (
                  <div style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'rgba(102, 126, 234, 0.1)',
                    borderRadius: '8px',
                    fontSize: '12px',
                    color: '#666'
                  }}>
                    Loading...
                  </div>
                ) : decorationImageUrl ? (
                  <img src={decorationImageUrl} alt="decoration image" />
                ) : (
                  <div style={{
                    width: '100%',
                    height: '100%',
                    background: '#f0f0f0',
                    borderRadius: '8px'
                  }} />
                )}
              </div>
              <div className="testimonails_thumb_pos--3">
                <img src={thumbPos3} alt="thumb decoration 3" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
