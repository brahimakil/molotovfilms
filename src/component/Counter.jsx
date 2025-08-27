import React from "react";

const Counter = () => {
  return (
    <section className="counter">
      <div className="container">
        <div className="row">
          <div className="col-6 col-xxl-3">
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
                    20
                  </text>
                </svg>
                <h5>Years of Expertise</h5>
              </div>
            </div>
          </div>

          <div className="col-6 col-xxl-3">
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
                    12
                  </text>
                </svg>
                <h5>Total of Services</h5>
              </div>
            </div>
          </div>

          <div className="col-6 col-xxl-3">
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
                    10k
                  </text>
                </svg>
                <h5>Worldwide Clients</h5>
              </div>
            </div>
          </div>

          <div className="col-6 col-xxl-3">
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
                    1k
                  </text>
                </svg>
                <h5>Total of Services</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Counter;
