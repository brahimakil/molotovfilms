import React from "react";
import { Link } from "react-router-dom";

import vicArrow from "../assets/images/vic-arrow.png";
import heroVic from "../assets/images/hero-two-vic.svg";
import heroVic1 from "../assets/images/hero-two-vic-1.svg";
import heroUnion from "../assets/images/hero-union.png";
import heroPos2 from "../assets/images/hero_two_pos-2.svg";
import heroPos1 from "../assets/images/hero_two_pos-1.svg";
import heroThumb from "../assets/images/hero-two-thumb.webp";

const HeroTwo = () => {
  return (
    <section className="hero_two">
      <div className="container">
        <div className="row">
          <div className="col-xxl-12">
            <div className="hero_two_pos_1">
              <img src={vicArrow} alt="vic" />
            </div>
            <div className="hero_two_pos_2">
              <img src={heroVic} alt="vic" />
            </div>
            <div className="hero_two_pos_3">
              <img src={heroVic1} alt="vic" />
            </div>
            <div className="hero_two_pos_4">
              <img src={heroUnion} alt="vic" />
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-xxl-8">
            <div className="hero_two_head">
              <h1>
                Innovate for a
                <span>
                  Better <br />
                  Grow
                </span>
                your Future Business
              </h1>

              <p className="text_lg">
                Leverage cutting-edge IT solutions tailored to your business
                needs. Embrace a future where technology fuels your success.
              </p>
            </div>

            <div className="hero_two_btn">
              <Link to="/contact-us" className="sara-btn sara-btn_gredinet">
                Get in Touch
              </Link>
              <Link
                to="/about"
                className="sara-btn__border sara-btn__border--2"
              >
                Learn more
              </Link>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-xxl-10">
            <div className="hero_two_thumb_main">
              <div className="hero_two_thumb_pos">
                <img src={heroPos2} alt="thumb" />
              </div>
              <div className="hero_two_thumb_pos_2">
                <img src={heroPos1} alt="thumb" />
              </div>
              <div className="hero_two_thumb">
                <img src={heroThumb} className="w-100" alt="thumb" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroTwo;
