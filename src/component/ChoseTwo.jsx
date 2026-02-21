import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from 'react-i18next';
import { ref, getDownloadURL } from "firebase/storage";
import { storage } from "../firebase/config";
import choseThumb1 from "../assets/images/chose-two-thumb-1.webp";
import choseThumb2 from "../assets/images/chose-two-thumb-2.webp";
import circle2 from "../assets/images/circle-2.svg";
import circle1 from "../assets/images/circle-1.svg";
import revenue from "../assets/images/revenue.svg";
import vic from "../assets/images/about-3-vic.svg";
import shape from "../assets/images/shape.svg";
import innerCC from "../assets/images/inner-c-c.svg";
import innerCC2 from "../assets/images/inner-c-c-2.svg";
import innerCC3 from "../assets/images/inner-c-c-3.svg";
import innerC1 from "../assets/images/inner-c-1.svg";
import heroPos1 from "../assets/images/hero-pos-1.png";

const ChoseTwo = ({ addClass }) => {
  const { t } = useTranslation();
  const [artisticProgress, setArtisticProgress] = useState(0);
  const [storytellingProgress, setStorytellingProgress] = useState(0);
  const [engagementProgress, setEngagementProgress] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  
  // Main video (reel making off)
  const [videoUrl, setVideoUrl] = useState('');
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  
  // Story board video (new)
  const [storyBoardUrl, setStoryBoardUrl] = useState('');
  const [storyBoardLoaded, setStoryBoardLoaded] = useState(false);
  const [storyBoardError, setStoryBoardError] = useState(false);
  
  const sectionRef = useRef(null);

  // Add missing animation function before useEffect
  const animateProgress = (start, end, duration, setter) => {
    const startTime = Date.now();
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const current = start + (end - start) * progress;
      setter(Math.round(current));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    animate();
  };

  // Load main video from Firebase with caching
  useEffect(() => {
    const loadVideo = async () => {
      const cacheKey = 'molotov_chosetwo_video_url';
      const cacheTimeKey = 'molotov_chosetwo_video_timestamp';
      const cacheExpiration = 24 * 60 * 60 * 1000; // 24 hours
      
      try {
        // Check if we have a cached URL that's still valid
        const cachedUrl = localStorage.getItem(cacheKey);
        const cachedTime = localStorage.getItem(cacheTimeKey);
        const now = Date.now();
        
        if (cachedUrl && cachedTime && (now - parseInt(cachedTime)) < cacheExpiration) {
          console.log('Loading ChoseTwo main video from cache');
          setVideoUrl(cachedUrl);
          setVideoLoaded(true);
          return;
        }
        
        console.log('Fetching ChoseTwo main video from Firebase Storage');
        const videoRef = ref(storage, 'chosetwo/reel making offf new.mp4');
        const url = await getDownloadURL(videoRef);
        
        // Cache the URL and timestamp
        localStorage.setItem(cacheKey, url);
        localStorage.setItem(cacheTimeKey, now.toString());
        
        setVideoUrl(url);
        setVideoLoaded(true);
        console.log('ChoseTwo main video loaded and cached successfully');
        
      } catch (error) {
        console.error('Error loading ChoseTwo main video:', error);
        setVideoError(true);
        setVideoLoaded(false);
        
        // Clear any invalid cached data
        localStorage.removeItem(cacheKey);
        localStorage.removeItem(cacheTimeKey);
      }
    };

    loadVideo();
  }, []);

  // Load story board video from Firebase with caching
  useEffect(() => {
    const loadStoryBoardVideo = async () => {
      const cacheKey = 'molotov_chosetwo_storyboard_url';
      const cacheTimeKey = 'molotov_chosetwo_storyboard_timestamp';
      const cacheExpiration = 24 * 60 * 60 * 1000; // 24 hours
      
      try {
        // Check if we have a cached URL that's still valid
        const cachedUrl = localStorage.getItem(cacheKey);
        const cachedTime = localStorage.getItem(cacheTimeKey);
        const now = Date.now();
        
        if (cachedUrl && cachedTime && (now - parseInt(cachedTime)) < cacheExpiration) {
          console.log('Loading ChoseTwo story board video from cache');
          setStoryBoardUrl(cachedUrl);
          setStoryBoardLoaded(true);
          return;
        }
        
        console.log('Fetching ChoseTwo story board video from Firebase Storage');
        const videoRef = ref(storage, 'chosetwo/story bord.mp4');
        const url = await getDownloadURL(videoRef);
        
        // Cache the URL and timestamp
        localStorage.setItem(cacheKey, url);
        localStorage.setItem(cacheTimeKey, now.toString());
        
        setStoryBoardUrl(url);
        setStoryBoardLoaded(true);
        console.log('ChoseTwo story board video loaded and cached successfully');
        
      } catch (error) {
        console.error('Error loading ChoseTwo story board video:', error);
        setStoryBoardError(true);
        setStoryBoardLoaded(false);
        
        // Clear any invalid cached data
        localStorage.removeItem(cacheKey);
        localStorage.removeItem(cacheTimeKey);
      }
    };

    loadStoryBoardVideo();
  }, []);

  // Fix the useEffect - remove localStorage, keep it simple
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            
            // Animate progress bars with staggered timing
            setTimeout(() => animateProgress(0, 95, 1500, setArtisticProgress), 300);
            setTimeout(() => animateProgress(0, 90, 1500, setStorytellingProgress), 600);
            setTimeout(() => animateProgress(0, 85, 1500, setEngagementProgress), 900);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  return (
    <section className={`chose_two ${addClass || ""}`} ref={sectionRef}>
      <div className="container">
        <div className="container">
          <div className="row align-items-center flex-column-reverse flex-lg-row">
            <div className="col-lg-6 col-xxl-6">
              <div className="chose_two_head">
                <h2 className="main_titel_three">
                  {t('choseTwo.heading')}
                </h2>
                <p className="text_lg">
                  A comprehensive solution for directors and brands seeking a truly premium look, from masterful cinematography and lighting to world-class color grading and finishing.
                </p>
              </div>

              <div className="chose_renge_main">
                {(() => {
                  const progressBars = t('choseTwo.progressBars', { returnObjects: true });
                  const progressValues = [artisticProgress, storytellingProgress, engagementProgress];
                  return progressBars.map((bar, index) => (
                    <div className="chose_renge_item" key={index}>
                      <h6>
                        {bar.label} <span>{Math.round(progressValues[index])}%</span>
                      </h6>
                      <div className="chose_renge_ber" style={{ position: 'relative', overflow: 'hidden' }}>
                        <div 
                          style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            height: '100%',
                            width: `${progressValues[index]}%`,
                            background: 'linear-gradient(135deg, #6B7A47, #8B9A5A)',
                            transition: 'width 0.3s ease',
                            borderRadius: 'inherit'
                          }}
                        />
                      </div>
                    </div>
                  ));
                })()}
              </div>
            </div>

            <div className="col-lg-6 col-xxl-6">
              <div className="chose_two_thumb_main">
                <div className="chose_two_thumb_item">
                  <div className="chose_two_thumb">
                    {storyBoardLoaded && storyBoardUrl ? (
                      <video
                        src={storyBoardUrl}
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="metadata"
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          borderRadius: 'inherit'
                        }}
                        onLoadStart={() => console.log('ChoseTwo story board video loading started')}
                        onCanPlayThrough={() => console.log('ChoseTwo story board video can play through')}
                        onError={(e) => {
                          console.error('ChoseTwo story board video playback error:', e);
                          setStoryBoardError(true);
                        }}
                      />
                    ) : storyBoardError ? (
                      <img src={choseThumb1} alt="thumb" />
                    ) : (
                      <div style={{
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: 'linear-gradient(135deg, #f0f0f0, #e0e0e0)',
                        borderRadius: 'inherit'
                      }}>
                        <div style={{
                          width: '40px',
                          height: '40px',
                          border: '3px solid #6B7A47',
                          borderTop: '3px solid transparent',
                          borderRadius: '50%',
                          animation: 'spin 1s linear infinite'
                        }} />
                      </div>
                    )}
                  </div>

                  <div className="chose_two_thumb_two">
                    {videoLoaded && videoUrl ? (
                      <video
                        src={videoUrl}
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="metadata"
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          borderRadius: 'inherit'
                        }}
                        onLoadStart={() => console.log('ChoseTwo main video loading started')}
                        onCanPlayThrough={() => console.log('ChoseTwo main video can play through')}
                        onError={(e) => {
                          console.error('ChoseTwo main video playback error:', e);
                          setVideoError(true);
                        }}
                      />
                    ) : videoError ? (
                      <img src={choseThumb2} alt="thumb" />
                    ) : (
                      <div style={{
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: 'linear-gradient(135deg, #f0f0f0, #e0e0e0)',
                        borderRadius: 'inherit'
                      }}>
                        <div style={{
                          width: '40px',
                          height: '40px',
                          border: '3px solid #6B7A47',
                          borderTop: '3px solid transparent',
                          borderRadius: '50%',
                          animation: 'spin 1s linear infinite'
                        }} />
                      </div>
                    )}
                    <div className="chose_circle_thumb_main">
                      <div className="chose_circle_thumb">
                        {addClass == "inner_chose" ? (
                          <img src={innerCC} alt="thumb" />
                        ) : (
                          <img src={circle2} alt="thumb" />
                        )}
                      </div>
                      <div className="chose_circle_thumb_two">
                        {addClass == "inner_chose" ? (
                          <img src={innerCC2} alt="thumb" />
                        ) : (
                          <img src={circle1} alt="thumb" />
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="revenue-pos">
                    {addClass == "inner_chose" ? (
                      <img src={heroPos1} alt="thumb" />
                    ) : (
                      <img src={revenue} alt="revenue" />
                    )}
                  </div>

                  <div className="chose_pos_thumb_three">
                    {addClass == "inner_chose" ? (
                      <img src={innerCC3} alt="thumb" />
                    ) : (
                      <img src={vic} alt="thumb" />
                    )}
                  </div>

                  <div className="chose_pos_sheap">
                    {addClass == "inner_chose" ? (
                      <img src={innerC1} alt="thumb" />
                    ) : (
                      <img src={shape} alt="thumb" />
                    )}
                  </div>
                </div>
              </div>
            </div>
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

export default ChoseTwo;