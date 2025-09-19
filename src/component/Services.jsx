import React from "react";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <section className="services">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-xxl-5">
            <h2 className="main_titel">
              Services We Provide with <span>Get Benefited.</span>
            </h2>
          </div>

          <div className="col-xxl-6 offset-xxl-1">
            <div className="services_txt">
              <p className="text_lg">
                This list encompasses a broad range of services that can help
                businesses manage and optimize their IT infrastructure, enhance
                their security posture, support their digital transformation.
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
