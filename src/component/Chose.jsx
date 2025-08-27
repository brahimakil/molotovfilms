import React from "react";
import checkIcon from "../assets/images/check.svg";
import choseThumb from "../assets/images/chose_thumb.webp";
import choseCardOne from "../assets/images/choees_card-one.svg";
import choseCardTwo from "../assets/images/choees_card-two.svg";
import pos3 from "../assets/images/about-pos-3.svg";
import pos4 from "../assets/images/about-pos-4.svg";

const Chose = () => {
  return (
    <section className="chose">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="about_head">
              <h2 className="main_titel">
                Target Audience for your <span> Business Solution</span>
              </h2>

              <p className="text_lg">
                This list encompasses a broad range of services that can help
                businesses manage and optimize their IT infrastructure, enhance
                their security posture, support their digital transformation.
              </p>
            </div>

            <ul className="about_list">
              <li>
                <span>
                  <img src={checkIcon} alt="icon" />
                </span>
                Various analysis options.
              </li>
              <li>
                <span>
                  <img src={checkIcon} alt="icon" />
                </span>
                Page Load (time, size, number of requests).
              </li>
              <li>
                <span>
                  <img src={checkIcon} alt="icon" />
                </span>
                Big data analysis.
              </li>
            </ul>

            <div className="about_us_btn">
              <a href="/about" className="sara-btn__border">
                Explore all
              </a>
            </div>
          </div>

          <div className="col-lg-6 col-xxl-6 about_ml">
            <div className="about_us_thumb_main">
              <div className="about_us_thumb">
                <img src={choseThumb} alt="thumb" />
              </div>

              <div className="about_pos_thumb chose_pos_card">
                <img src={choseCardOne} alt="thumb" />
              </div>
              <div className="about_pos_thumb_two chose_pos_card_two">
                <img src={choseCardTwo} alt="thumb" />
              </div>
              <div className="about_pos_thumb_three">
                <img src={pos3} alt="thumb" />
              </div>
              <div className="about_pos_thumb_four">
                <img src={pos4} alt="thumb" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Chose;
