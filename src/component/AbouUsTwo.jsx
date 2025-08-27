import React from "react";
// Image imports
import aboutPosOne from "../assets/images/about-pos-two.svg";
import aboutPosTwo from "../assets/images/about-pos-two-2.svg";
import aboutImg1 from "../assets/images in home(about us)/vlcsnap-2025-08-25-09h47m42s678 (1).png";
import aboutImg2 from "../assets/images in home(about us)/vlcsnap-2025-08-25-09h48m17s104 (1).png";
import textPos1 from "../assets/images/about-pos-5.svg";
import textPos2 from "../assets/images/about-pos-6.svg";
import unionImg from "../assets/images/hero-union.png";
import checkIcon from "../assets/images/a-check.svg";
import { Link } from "react-router-dom";

const AbouUsTwo = () => {
  return (
    <section className="about_us about_us--two">
      <div className="container">
        <div className="row align-items-center flex-column-reverse flex-lg-row">
          <div className="col-lg-6 col-xxl-6">
            <div className="about_us_two_thumb_main">
              <div className="about_two-pos-one">
                <img src={aboutPosOne} alt="thumb" />
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
                We are a creative production house specializing in film, branded content, and digital storytelling.
              </h2>

              <p className="text_lg">
                Our team combines cinematic quality with marketing strategy, delivering videos that not only look stunning but also perform. From concept to final cut, we handle the entire journey — scriptwriting, shooting, editing, and social media distribution.
              </p>

              <div className="about_two_item">
                <div className="about_two_item_txt">
                  <h3 className="text_5xl">250+</h3>
                  <p className="text_lg">Videos Produced</p>
                </div>
                <div className="about_two_item_txt">
                  <h3 className="text_5xl">1M+</h3>
                  <p className="text_lg">Campaign Reach</p>
                </div>
              </div>
            </div>

            <ul className="about_list">
              <li>
                <span>
                  <img src={checkIcon} alt="icon" />
                </span>
                High-quality video production with cinematic standards.
              </li>
              <li>
                <span>
                  <img src={checkIcon} alt="icon" />
                </span>
                Content designed for maximum social engagement.
              </li>
              <li>
                <span>
                  <img src={checkIcon} alt="icon" />
                </span>
                Data-driven approach: test, optimize, and repurpose your videos.
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
