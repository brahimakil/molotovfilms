import React from "react";
import bannerShape from "../assets/images/banner-three-shep.svg";
import starIcon from "../assets/images/star-icon.svg";
import ratingImg from "../assets/images/reting.svg";
import heroMainImg from "../assets/images/hero-3pos.webp";
import heroPosImg from "../assets/images/hero_thumb.webp";
import circle1 from "../assets/images/circle-1.svg";
import circle2 from "../assets/images/circle-2.svg";
import aboutPos1 from "../assets/images/about-pos-1.svg";
import heroPos3 from "../assets/images/hero-3pos-3.svg";

const HeroThree = () => {
  return (
    <section className="hero_three">
      <div className="container">
        <div className="col-xxl-12">
          <div className="banner_shap_three">
            <img src={bannerShape} alt="banner shape" />
          </div>
        </div>
        <div className="row">
          <div className="col-xl-6">
            <div className="hero_three_head">
              <h1>
                Enhance Website <span>SEO Rankings</span> to New Heights
              </h1>
            </div>
            <div className="hero_txt">
              <p className="text_lg">
                Leverage cutting-edge IT solutions tailored to your business
                needs. Embrace a future where technology fuels your success.
              </p>
            </div>
            <div className="hreo_three_sarch_main">
              <div className="hreo_three_sarch_item">
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Enter your email"
                />
                <button type="submit" className="sara-btn sara-btn_green">
                  Subscribe
                </button>
              </div>
            </div>
            <div className="hreo_three_btm_text_item">
              <span>
                <img src={starIcon} alt="icon" />
              </span>
              <div className="retting_item">
                <div className="reting_thumb">
                  <img src={ratingImg} alt="rating icon" />
                </div>
                <p className="text_lg">
                  13k rating <span>(4.7 Rating)</span>
                </p>
              </div>
            </div>
          </div>

          <div className="col-xxl-6">
            <div className="hero_three_thumb_main">
              <div className="hero_three_thumb">
                <img src={heroMainImg} alt="hero main" />
              </div>
              <div className="hero_three_thumb_pos">
                <img src={heroPosImg} alt="hero position" />
              </div>

              <div className="circle_thumb_main">
                <div className="circle_thumb">
                  <img src={circle2} alt="circle 2" />
                </div>

                <div className="circle_thumb_two">
                  <img src={circle1} alt="circle 1" />
                </div>
              </div>

              <div className="hero_three_thumb_pos--2">
                <img src={aboutPos1} alt="position 2" />
              </div>
              <div className="hero_three_thumb_pos--3">
                <img src={heroPos3} alt="position 3" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroThree;
