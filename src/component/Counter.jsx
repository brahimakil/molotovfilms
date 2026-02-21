import React from "react";
import { useTranslation } from 'react-i18next';

const Counter = () => {
  const { t } = useTranslation();
  return (
    <section className="counter">
      <div className="container">
        <div className="row">
          {t('counter.items', { returnObjects: true }).map((item, index) => (
            <div className="col-6 col-xxl-3" key={index}>
              <div className="counter_item">
                <div className="counter_text">
                  <svg
                    width="100%"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <text
                      x="50%"
                      y="50%"
                      textAnchor="middle"
                      dominantBaseline="middle"
                      fontSize="32"
                    >
                      {item.value}
                    </text>
                  </svg>
                  <h5>{item.label}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Counter;
