import React from "react";
import { useTranslation } from 'react-i18next';
import thumbPos1 from "../assets/images/testimonails-thumb-pos.svg";
import thumbPos3 from "../assets/images/testimonails-card.svg";

const Faq = () => {
  const { t } = useTranslation();
  return (
    <section className="faq">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xxl-6">
            <div className="faq_head">
              <h2>
                {t('faq.heading')}
              </h2>
            </div>

            <div className="accordion" id="accordionExample">
              {t('faq.questions', { returnObjects: true }).map((item, index) => (
                <div className="accordion-item" key={index}>
                  <h2 className="accordion-header" id={`heading${index}`}>
                    <button
                      className={`accordion-button${index === 0 ? '' : ' collapsed'}`}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#collapse${index}`}
                      aria-expanded={index === 0 ? "true" : "false"}
                      aria-controls={`collapse${index}`}
                    >
                      {item.question}
                    </button>
                  </h2>
                  <div
                    id={`collapse${index}`}
                    className={`accordion-collapse collapse${index === 0 ? ' show' : ''}`}
                    aria-labelledby={`heading${index}`}
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      {item.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-xxl-6">
            <div className="testimonails_thumb_main">
              <div className="testimonails_thumb">
                {/* Placeholder for FAQ section visual content */}
                <div style={{
                  width: '100%',
                  height: 'auto',
                  aspectRatio: '16/9',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  borderRadius: '15px',
                  color: 'white',
                  fontSize: '18px',
                  fontWeight: 'bold'
                }}>
                  FAQ Section
                </div>
              </div>
              <div className="testimonails_thumb_pos">
                <img src={thumbPos1} alt="thumb decoration 1" />
              </div>
              <div className="testimonails_thumb_pos--2">
                <div style={{
                  width: '100%',
                  height: '100%',
                  background: '#f0f0f0',
                  borderRadius: '8px'
                }} />
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
