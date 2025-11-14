import React from "react";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <section className="services" style={{ padding: "80px 0", background: "#ffffff" }}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-lg-5 col-xxl-5 mb-4 mb-lg-0">
                      <h2 
              className="main_titel"
              style={{
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                fontWeight: "700",
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                marginBottom: "0",
                lineHeight: "1.1",
                textAlign: "center",
                background: "linear-gradient(135deg,rgba(215, 167, 8, 1),rgba(113, 117, 0, 1), #ffeb3b)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                position: "relative",
                textShadow: "none",
                filter: "drop-shadow(2px 2px 4px rgba(0,0,0,0.1))"
              }}
            >
              MANIFESTO
            </h2>
          </div>

          <div className="col-12 col-lg-7 col-xxl-6 offset-xxl-1">
            <div className="services_txt">
              <p 
                className="text_lg"
                style={{
                  fontSize: "clamp(1.1rem, 2.5vw, 1.4rem)",
                  lineHeight: "1.7",
                  color: "#333333",
                  fontWeight: "400",
                  letterSpacing: "0.02em",
                  textAlign: "justify",
                  marginBottom: "0",
                  padding: "0 15px",
                  position: "relative"
                }}
              >
                <span style={{ 
                  fontSize: "3em", 
                  lineHeight: "1", 
                  float: "left", 
                  marginRight: "8px", 
                  marginTop: "4px",
                  color: "#ffeb3b",
                  fontWeight: "bold"
                }}>
                  "
                </span>
                We're not an agency that does film. We're a small, hungry studio that crafts unforgettable work — cinema with appetite, ads with soul, shorts that spread like rumor. We treat every project as a public act: precise, fierce, and a little dangerous. If it doesn't haunt you tomorrow, we haven't done our job.
                <span style={{ 
                  fontSize: "3em", 
                  lineHeight: "1", 
                  color: "#ffeb3b",
                  fontWeight: "bold",
                  position: "relative",
                  top: "10px"
                }}>
                  "
                </span>
              </p>
            </div>
          </div>
        </div>
        
        <div className="row" style={{ marginTop: "60px" }}>
          <div className="col-12">
            <div 
              className="ball_main"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "20px",
                flexWrap: "wrap"
              }}
            >
              <div 
                className="ball"
                style={{
                  width: "clamp(60px, 8vw, 100px)",
                  height: "clamp(60px, 8vw, 100px)",
                  background: "linear-gradient(45deg, #ffeb3b, #ffc107)",
                  borderRadius: "50%",
                  animation: "pulse 2s infinite"
                }}
              ></div>
              <div 
                className="ball two"
                style={{
                  width: "clamp(40px, 6vw, 70px)",
                  height: "clamp(40px, 6vw, 70px)",
                  background: "linear-gradient(45deg, #ffc107, #ffeb3b)",
                  borderRadius: "50%",
                  animation: "pulse 2s infinite 0.5s"
                }}
              ></div>
              <div 
                className="ball three"
                style={{
                  width: "clamp(50px, 7vw, 85px)",
                  height: "clamp(50px, 7vw, 85px)",
                  background: "linear-gradient(45deg, #ffeb3b, #ffd54f)",
                  borderRadius: "50%",
                  animation: "pulse 2s infinite 1s"
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 0.8;
          }
          50% {
            transform: scale(1.1);
            opacity: 1;
          }
        }
        
        @media (max-width: 768px) {
          .services_txt p {
            text-align: left !important;
            padding: 0 10px !important;
          }
          
          .main_titel {
            text-align: center !important;
            margin-bottom: 30px !important;
          }
          
          .ball_main {
            margin-top: 40px !important;
          }
        }
        
        @media (max-width: 576px) {
          .services {
            padding: 60px 0 !important;
          }
          
          .services_txt p {
            font-size: 1rem !important;
            line-height: 1.6 !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Services;
