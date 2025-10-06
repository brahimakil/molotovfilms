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
              <div className="contact-column">
                  <div className="contact-label">General</div>
                  <div className="contact-info inline">
                    <p>Coupure 88a, 9000 Gent</p>
                    <p>Shelton St. London, England</p>
                    <a href="tel:+17866736887">tel: +1 786 6736887</a>
                    <a href="mailto:info@molotovfilms.com">info@molotovfilms.com</a>
                  </div>
                </div>
                
                <br />
               
                
                
              <Link to="/contact" className="contact-btn">Contact us</Link>
            </div>
          </div>
  
          <div className="col-lg-7">
            <div className="contact-details-horizontal">
              <div className="contact-row-horizontal">
                {/* Google Maps Embed - Gent, Belgium */}
                <div style={{
                  width: '100%',
                  height: '400px',
                  borderRadius: '15px',
                  overflow: 'hidden',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)'
                }}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d40328.84!2d3.7174!3d51.0543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c371099b6d0e5f%3A0x40099ab2f4d5140!2sGhent%2C%20Belgium!5e0!3m2!1sen!2sus!4v1649888888888!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Molotov Films Location - Gent, Belgium"
                  ></iframe>
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
