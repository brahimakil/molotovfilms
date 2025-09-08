import React from "react";
import { Link } from "react-router-dom";
import footerVic1 from "../assets/images/footer_vic-1.svg";
import footerVic2 from "../assets/images/footer_vic-2.svg";
import footerVic3 from "../assets/images/footer_vic-3.svg";
import footerLogo from "../assets/main logo/Molotov Logo PNG.png";
import footerResThumb from "../assets/images/footer_res-thumb.png";

const FooterOne = () => {
  return (
    <footer className="molotov-footer">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5">
            <div className="footer-left-content">
              <img src={footerLogo} alt="Molotov Films" className="molotov-logo" />
              <p className="get-in-touch">Get in touch</p>
              <h2 className="vision-text">Let’s ignite your vision</h2>
              <Link to="/contact" className="contact-btn">Contact us</Link>
            </div>
          </div>
  
          <div className="col-lg-7">
            <div className="contact-details-horizontal">
              <div className="contact-row-horizontal">
              <div className="contact-column">
                  <div className="contact-label">General</div>
                  <div className="contact-info inline">
                    <a href="tel:+17866736887">+1 786 6736887</a>
                    <a href="tel:+96176504207">+961 76 504207</a>
                    <p>Michel Zakkour St. Beirut, Lebanon</p>
                    <p>Shelton St. London, England</p>
                    <a href="mailto:info@molotovfilms.com">info@molotovfilms.com</a>
                  </div>
                </div>
              </div>
  
              <div className="contact-row-horizontal">
                <div className="contact-column">
                  <div className="contact-label">Public Relations</div>
                  <div className="contact-info">
                    <a href="mailto:services@molotovfilms.com">services@molotovfilms.com</a>
                  </div>
                </div>
                <div className="contact-column">
                  <div className="contact-label">Careers</div>
                  <div className="contact-info">
                    <a href="mailto:careers@molotovfilms.com">careers@molotovfilms.com</a>
                  </div>
                </div>
              </div>
  
              <div className="contact-row-horizontal">
                <div className="contact-column">
                  <div className="contact-label">Social Media</div>
                  <div className="social-icons">
                    <a href="https://youtube.com/@molotovfilms" target="_blank" rel="noopener noreferrer">
                      <i className="fa-brands fa-youtube"></i>
                    </a>
                    <a href="https://vimeo.com/molotovfilms" target="_blank" rel="noopener noreferrer">
                      <i className="fa-brands fa-vimeo-v"></i>
                    </a>
                    <a href="https://www.linkedin.com/company/molotov-films/" target="_blank" rel="noopener noreferrer">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                    <a href="https://www.instagram.com/molotovfilms/" target="_blank" rel="noopener noreferrer">
                      <i className="fa-brands fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
  
            </div>
          </div>
        </div>
  
        <div className="footer-copyright">
          <p>© 2025 Molotov Films. Designed by Dprime Solutions.</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterOne;
