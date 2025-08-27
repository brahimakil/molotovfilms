import React from "react";
import workingThumb from "../assets/images/working_thumb.webp";
import workingPos1 from "../assets/images/working-pos-one.svg";
import workingPos2 from "../assets/images/working_pos_thumb-two.svg";
import heroUnion from "../assets/images/hero-union.png";
import scanIcon from "../assets/images/scan.svg";
import graphIcon from "../assets/images/graph.svg";
import paperIcon from "../assets/images/paper.svg";
import arrowLine from "../assets/images/arrow-line.svg";

const Working = () => {
  return (
    <section className="working">
      <div className="container">
        <div className="row">
          <div className="row">
            <div className="col-xxl-6">
              <div className="working_head">
                <h2 className="main_titel">
                  🌟 Why Choose <span>Our Production</span> House?
                </h2>

                <p>
                  We align creativity with your marketing goals, delivering cinematic storytelling that inspires, engages, and converts your audience.
                </p>

                <h6>🚀 Ready to bring your brand story to life?</h6>
              </div>

              <div className="working_btn">
                <a href="/contuct-us" className="sara-btn">
                  👉 Start Your Project
                </a>
              </div>
            </div>

            <div className="col-xxl-6">
              <div className="working_thumb_main">
                <div className="working_thumb">
                  <img src={workingThumb} alt="thumb" />
                </div>
                <div className="working_pos_thumb">
                  <img src={workingPos1} alt="thumb" />
                </div>
                <div className="working_pos_thumb_two">
                  <img src={workingPos2} alt="thumb" />
                </div>
                <div className="working_pos_thumb_three">
                  <img src={heroUnion} alt="thumb" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row working_mt">
          <div className="col-xxl-12">
            <div className="working_icon_item_main">
              <div className="working_icon_item">
                <div className="working_icon_item_df">
                  <div className="working_icon_main">
                    <span className="working_icon">
                      <img src={scanIcon} alt="icon" />
                      <span className="num">🎬</span>
                    </span>
                  </div>
                  <div className="working_icon_item_txt">
                    <p className="text_2xl">Creative Excellence — Every project is designed with cinematic storytelling.</p>
                  </div>
                </div>
                <div className="arrow_img">
                  <img src={arrowLine} alt="arrow" />
                </div>
              </div>

              <div className="working_icon_item">
                <div className="working_icon_item_df">
                  <div className="working_icon_main">
                    <span className="working_icon">
                      <img src={graphIcon} alt="icon" />
                      <span className="num">📈</span>
                    </span>
                  </div>
                  <div className="working_icon_item_txt">
                    <p className="text_2xl">
                      Results-Driven — We align creativity with your marketing goals.
                    </p>
                  </div>
                </div>
                <div className="arrow_img">
                  <img src={arrowLine} alt="arrow" />
                </div>
              </div>

              <div className="working_icon_item">
                <div className="working_icon_item_df">
                  <div className="working_icon_main">
                    <span className="working_icon">
                      <img src={paperIcon} alt="icon" />
                      <span className="num">🤝</span>
                    </span>
                  </div>
                  <div className="working_icon_item_txt">
                    <p className="text_2xl">Full Partnership — From strategy to publishing, we're with you end-to-end.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Working;
