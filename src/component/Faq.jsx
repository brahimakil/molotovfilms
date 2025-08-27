import React from "react";
import faqThumb from "../assets/images/faq-thumb.webp";
import thumbPos1 from "../assets/images/testimonails-thumb-pos.svg";
import thumbPos2 from "../assets/images/hero_two_pos-1.svg";
import thumbPos3 from "../assets/images/testimonails-card.svg";

const Faq = () => {
  return (
    <section className="faq">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xxl-6">
            <div className="faq_head">
              <h2>
                Frequently Ask <span>Questions</span>
              </h2>
            </div>

            <div className="accordion" id="accordionExample">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    What industries do you serve?
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    Here you can write answers to the most frequently asked
                    questions. It’s better to answer them on your website once
                    than personally more frequently.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    What is your experience in the industry?
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    Here you can write answers to the most frequently asked
                    questions. It’s better to answer them on your website once
                    than personally more frequently.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    How do I get the services?
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    Here you can write answers to the most frequently asked
                    questions. It’s better to answer them on your website once
                    than personally more frequently.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-6">
            <div className="testimonails_thumb_main">
              <div className="testimonails_thumb">
                <img src={faqThumb} alt="thumb" />
              </div>
              <div className="testimonails_thumb_pos">
                <img src={thumbPos1} alt="thumb decoration 1" />
              </div>
              <div className="testimonails_thumb_pos--2">
                <img src={thumbPos2} alt="thumb decoration 2" />
              </div>
              <div className="testimonails_thumb_pos--3">
                <img src={thumbPos3} alt="thumb decoration 3" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
