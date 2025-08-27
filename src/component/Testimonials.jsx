import React from "react";
import Slider from "react-slick";

import thumb from "../assets/images/testimonails-thumb.webp";
import thumbPos from "../assets/images/testimonails-thumb-pos.svg";
import thumbPos2 from "../assets/images/hero_two_pos-1.svg";
import thumbPos3 from "../assets/images/testimonails-card.svg";
import icon from "../assets/images/testimonails-slick-icon.svg";
import profileImg from "../assets/images/t-prof-1.svg";

const Testimonials = ({ addClass }) => {
  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    speed: 3000,
    autoplay: false,
    dots: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const testimonial = {
    text: `Sara's contributions significantly reduced our marketing budget. Our clients expect a partner who consistently excels in delivering high-quality products.`,
    name: "Martin Jonas",
    role: "Head of marketing, Inter inc.",
  };

  return (
    <section className={`testimonails ${addClass || ""}`}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xxl-6">
            <div className="testimonails_thumb_main">
              <img src={thumb} alt="thumb" className="testimonails_thumb" />
              <img
                src={thumbPos}
                alt="pos"
                className="testimonails_thumb_pos"
              />
              <img
                src={thumbPos2}
                alt="pos"
                className="testimonails_thumb_pos--2"
              />
              <img
                src={thumbPos3}
                alt="card"
                className="testimonails_thumb_pos--3"
              />
            </div>
          </div>

          <div className="col-xxl-6 testimonails_pl">
            <div className="testimonails_head">
              <h2 className="main_titel_two">
                Don’t Trust Us, Trust Our <span> What Client Say?</span>
              </h2>
            </div>

            <Slider {...settings} className="testimonails_slick">
              {Array(5)
                .fill(testimonial)
                .map((item, i) => (
                  <div key={i} className="testimonails_slick_item">
                    <span className="icon">
                      <img src={icon} alt="icon" />
                    </span>
                    <h4 className="text_4xl">{item.text}</h4>
                    <div className="testimonails_slick_prof_item">
                      <img
                        src={profileImg}
                        alt="profile"
                        className="testimonails_slick_prof_thumb"
                      />
                      <div className="testimonails_slick_prof_txt">
                        <a href="#" className="text_2xl">
                          {item.name}
                        </a>
                        <p className="text_lg">{item.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
