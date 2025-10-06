import React, { useState, useEffect, useRef } from "react";
// Image imports
import aboutPosTwo from "../assets/images/about-pos-two-2.svg";
import aboutImg1 from "../assets/images in home(about us)/vlcsnap-2025-08-25-09h47m42s678 (1).png";
import aboutImg2 from "../assets/images in home(about us)/vlcsnap-2025-08-25-09h48m17s104 (1).png";
import textPos1 from "../assets/images/about-pos-5.svg";
import textPos2 from "../assets/images/about-pos-6.svg";
import unionImg from "../assets/images/hero-union.png";
import checkIcon from "../assets/images/a-check.svg";
import { Link } from "react-router-dom";

const AbouUsTwo = () => {
  const [videosCount, setVideosCount] = useState(0);
  const [reachCount, setReachCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  // Add missing state at the top
  const [artisticProgress, setArtisticProgress] = useState(0);
  const [storytellingProgress, setStorytellingProgress] = useState(0);
  const [engagementProgress, setEngagementProgress] = useState(0);

  // Add missing animation function
  const animateCount = (start, end, duration, setter, suffix) => {
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

  // Fix the useEffect - remove localStorage
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            
            // Animate counts
            animateCount(0, 250, 2000, setVideosCount);
            animateCount(0, 10, 2500, setReachCount);
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
    <section className="about_us about_us--two" ref={sectionRef}>
      <div className="container">
        <div className="row align-items-center flex-column-reverse flex-lg-row">
          <div className="col-lg-6 col-xxl-6">
            <div className="about_us_two_thumb_main">
              <div className="about_two-pos-one">
                <img src="/Molotov Logo PNG.png" alt="Molotov Logo" />
              </div>
              <div className="about_two-pos-two">
                <img src={aboutPosTwo} alt="thumb" />
              </div>

              <div className="about_us_two_thumb">
                <img src={aboutImg1} alt="thumb" />
              </div>
              <div className="about_us_two_thumb_two">
                <img src={aboutImg2} alt="thumb" />
              </div>
            </div>
          </div>

          <div className="col-lg-6 about_pl">
            <div className="text_pos_thumb_main">
              <div className="text_pos_thumb_one">
                <img src={textPos1} alt="thumb" />
              </div>
              <div className="text_pos_thumb_two">
                <img src={textPos2} alt="thumb" />
              </div>
              <div className="text_pos_thumb_three">
                <img src={unionImg} alt="thumb" />
              </div>
            </div>

            <div className="about_head">
              <h2 className="main_titel_two">
              Social-First & <span>Punchy</span> 
              </h2>

              <p className="text_lg">
              Beautifully shot. Sharply edited. Designed to win attention and action on social.
              </p>

              <div className="about_two_item">
                <div className="about_two_item_txt">
                  <h3 
                    className="text_5xl" 
                    style={{
                      transition: 'transform 0.3s ease',
                      transform: hasAnimated ? 'scale(1.05)' : 'scale(1)',
                      color: '#6B7A47'
                    }}
                  >
                    {videosCount}
                  </h3>
                  <p className="text_lg">Videos Produced</p>
                </div>
                <div className="about_two_item_txt">
                  <h3 
                    className="text_5xl"
                    style={{
                      transition: 'transform 0.3s ease',
                      transform: hasAnimated ? 'scale(1.05)' : 'scale(1)',
                      color: '#6B7A47'
                    }}
                  >
                    {reachCount}
                  </h3>
                  <p className="text_lg">Campaign Reach</p>
                </div>
              </div>
            </div>

            <ul className="about_list">
              <li>
                <span>
                  <img src={checkIcon} alt="icon" />
                </span>
                High-quality visuals with a storyteller’s touch.
              </li>
              <li>
                <span>
                  <img src={checkIcon} alt="icon" />
                </span>
                Formats made to stop the scroll and drive engagement.
              </li>
              <li>
                <span>
                  <img src={checkIcon} alt="icon" />
                </span>
                Data-led process: iterate fast, amplify what works.
              </li>
            </ul>

            <div className="about_us_btn">
              <Link
                to="/about"
                className="sara-btn__border sara-btn__border--2"
              >
                ✨ Want to know more? Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AbouUsTwo;