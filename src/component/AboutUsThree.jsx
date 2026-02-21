import React from "react";
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";

import aboutThumb from "../assets/images/about-3thumb.webp";
import pos1 from "../assets/images/about-pos-1.svg";
import pos2 from "../assets/images/aboout-3-pod-1.svg";
import pos3 from "../assets/images/about-pos-3.svg";
import pos4 from "../assets/images/about-3-vic.svg";

import textPos1 from "../assets/images/about-pos-5.svg";
import textPos2 from "../assets/images/about-pos-6.svg";
import textPos3 from "../assets/images/hero-union.png";

import checkIcon from "../assets/images/check-3.svg";

const AboutUsThree = () => {
  const { t } = useTranslation();
  return (
    <section className="about_us about_us--3">
      <div className="container">
        <div className="row align-items-center flex-column-reverse flex-lg-row">
          <div className="col-lg-6 col-xxl-6">
            <div className="about_us_thumb_main">
              <div className="about_us_thumb">
                <img src={aboutThumb} alt="thumb" />
              </div>
              <div className="about_pos_thumb">
                <img src={pos1} alt="thumb" />
              </div>
              <div className="about_pos_thumb_two">
                <img src={pos2} alt="thumb" />
              </div>
              <div className="about_pos_thumb_three">
                <img src={pos3} alt="thumb" />
              </div>
              <div className="about_pos_thumb_four">
                <img src={pos4} alt="thumb" />
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
                <img src={textPos3} alt="thumb" />
              </div>
            </div>

            <div className="about_head">
              <h2 className="main_titel_three">
                {t('aboutUs.heading')}
              </h2>

              <p className="text_lg">
                This list encompasses a broad range of services that can help
                businesses manage and optimize their IT infrastructure, enhance
                their security posture, support their digital transformation.
              </p>
            </div>

            <ul className="about_list">
              {t('aboutUs.listItems', { returnObjects: true }).map((item, index) => (
                <li key={index}>
                  <span>
                    <img src={checkIcon} alt="icon" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="about_us_btn">
              <Link
                to="/about"
                className="sara-btn__border sara-btn__border--3"
              >
                {t('aboutUs.button')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsThree;
