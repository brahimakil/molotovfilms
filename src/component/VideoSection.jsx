import React, { useState } from "react";
import prof from "../assets/images/prof.svg";
import videoThumb from "../assets/images/vedio-thumb.webp";
import videoIcon from "../assets/images/vedio.svg";
import playIcon from "../assets/images/play.svg";

const VideoSection = () => {
  const [videoActive, setVideoActive] = useState(false);

  return (
    <section className="vedio">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-xxl-6">
            <h2 className="main_titel_three">
              We're here Help to you Find your <span>Service</span>
            </h2>
          </div>

          <div className="col-lg-6 col-xxl-6">
            <div className="vedio_txt">
              <p className="text_xl">
                “Complete implement cross platform human capital after
                compelling materials.”
              </p>
            </div>

            <div className="vedio_prof_item">
              <div className="vedio_prof_thumb">
                <img src={prof} alt="thumb" />
              </div>
              <div className="vedio_prof-txt">
                <a href="#" className="text_xl">
                  Onam Sarker
                </a>
                <p className="text_base">Apple Inc.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-xxl-12">
            <div className="vedio_thumb_main">
              <div className="vedio_thumb">
                <img src={videoThumb} alt="thumb" />
              </div>
              <div className="vedio_pos_thumb_main">
                <div className="vedio_pos_thumb">
                  <img src={videoIcon} alt="thumb" />
                </div>
                <button
                  onClick={() => setVideoActive(true)}
                  className="vedio_box border-0 bg-transparent"
                  data-lity
                >
                  <span>
                    <img src={playIcon} alt="icon" />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={(videoActive ? " video-zoom-in" : " ") + " video-backdrop"}
        onClick={() => setVideoActive(false)}
      >
        <div className="video-inner">
          <div className="video-container" onClick={(e) => e.stopPropagation()}>
            {videoActive && (
              <iframe
                className="video"
                src="https://www.youtube.com/embed/6h6b4LPq1Vw?si=P_6tEgXC_uNFw9g4"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            )}
            <button
              aria-label="close video popup"
              className="close-video-popup"
              onClick={() => setVideoActive(false)}
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
