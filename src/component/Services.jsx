import React from "react";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <section className="services">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-xxl-5">
            <h2 className="main_titel">
MANIFESTO
            </h2>
          </div>

          <div className="col-xxl-6 offset-xxl-1">
            <div className="services_txt">
              <p className="text_lg">
                We’re not an agency that does film. We’re a small, hungry studio that crafts unforgettable work — cinema with appetite, ads with soul, shorts that spread like rumor. We treat every project as a public act: precise, fierce, and a little dangerous. If it doesn’t haunt you tomorrow, we haven’t done our job.

              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xxl-12">
            <div className="ball_main">
              <div className="ball"></div>
              <div className="ball two"></div>
              <div className="ball three"></div>
            </div>
          </div>
        </div>
      
      </div>
    </section>
  );
};

export default Services;
