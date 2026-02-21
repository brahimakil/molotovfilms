import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import footerVic1 from "../assets/images/footer_vic-1.svg";
import footerVic2 from "../assets/images/footer_vic-2.svg";
import footerVic3 from "../assets/images/footer_vic-3.svg";
import footerLogo from "../assets/main logo/Molotov Logo PNG.png";
import footerResThumb from "../assets/images/footer_res-thumb.png";

const FooterOne = () => {
  const { t } = useTranslation();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <footer className="molotov-footer">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5">
            <div 
              className="footer-left-content"
              style={{
                textAlign: isMobile ? 'center' : 'left',
                display: 'flex',
                flexDirection: 'column',
                alignItems: isMobile ? 'center' : 'flex-start'
              }}
            >
              <img 
                src={footerLogo} 
                alt="Molotov Films" 
                className="molotov-logo"
                style={{
                  display: 'block',
                  margin: isMobile ? '0 auto 20px auto' : '0 0 20px 0'
                }}
              />
              <p className="get-in-touch">{t('footer.heading')}</p>
              <h2 className="vision-text">{t('footer.subheading')}</h2>
              <div className="contact-column">
                  <div className="contact-label">{t('footer.sectionLabel')}</div>
                  <div className="contact-info inline" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    <p style={{ listStyle: 'none', margin: '8px 0', padding: 0 }}>{t('footer.addresses', { returnObjects: true })[0]}</p>
                    <p style={{ listStyle: 'none', margin: '8px 0', padding: 0 }}>{t('footer.addresses', { returnObjects: true })[1]}</p>
                    <a href="tel:+17866736887" style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none', margin: '8px 0', padding: 0, justifyContent: isMobile ? 'center' : 'flex-start' }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22 16.92V19.92C22.0011 20.1985 21.9441 20.4742 21.8325 20.7293C21.7209 20.9845 21.5573 21.2136 21.3521 21.4019C21.1468 21.5901 20.9046 21.7335 20.6407 21.8227C20.3769 21.9119 20.0974 21.9451 19.82 21.92C16.7428 21.5856 13.787 20.5341 11.19 18.85C8.77382 17.3147 6.72533 15.2662 5.18999 12.85C3.49997 10.2412 2.44824 7.27099 2.11999 4.18C2.095 3.90347 2.12787 3.62476 2.21649 3.36162C2.30512 3.09849 2.44756 2.85669 2.63476 2.65162C2.82196 2.44655 3.0498 2.28271 3.30379 2.17052C3.55777 2.05833 3.83233 2.00026 4.10999 2H7.10999C7.59531 1.99522 8.06579 2.16708 8.43376 2.48353C8.80173 2.79999 9.04207 3.23945 9.10999 3.72C9.23662 4.68007 9.47144 5.62273 9.80999 6.53C9.94454 6.88792 9.97366 7.27691 9.8939 7.65088C9.81415 8.02485 9.62886 8.36811 9.35999 8.64L8.08999 9.91C9.51355 12.4135 11.5865 14.4864 14.09 15.91L15.36 14.64C15.6319 14.3711 15.9751 14.1858 16.3491 14.1061C16.7231 14.0263 17.1121 14.0555 17.47 14.19C18.3773 14.5286 19.3199 14.7634 20.28 14.89C20.7658 14.9585 21.2094 15.2032 21.5265 15.5775C21.8437 15.9518 22.0122 16.4296 22 16.92Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      +1 786 6736887
                    </a>
                    <a href="mailto:info@molotovfilms.be" style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none', margin: '8px 0', padding: 0, justifyContent: isMobile ? 'center' : 'flex-start' }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      info@molotovfilms.be
                    </a>
                  </div>
                </div>
                
                <br />
               
                
                
              <div style={{ display: 'flex', gap: '20px', marginTop: '10px', justifyContent: isMobile ? 'center' : 'flex-start', flexWrap: 'wrap' }}>
                <Link to="/contact" className="contact-btn">{t('footer.contactUs')}</Link>
                
                {/* Meet the Artist Button */}
                <a 
                  href="https://mahdicv.vercel.app/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="contact-btn"
                >
                  {t('footer.meetTheArtist')}
                </a>
              </div>
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
                  <div className="contact-label">{t('footer.socialMediaLabel')}</div>
                  <div className="social-icons" style={{ justifyContent: isMobile ? 'center' : 'flex-start' }}>
                    <a href="https://www.facebook.com/share/1DHWWWBJda/" target="_blank" rel="noopener noreferrer">
                      <i className="fa-brands fa-facebook-f"></i>
                    </a>
                    <a href="https://youtube.com/@molotov-films?si=UK8jqPcwQx9nmbNC" target="_blank" rel="noopener noreferrer">
                      <i className="fa-brands fa-youtube"></i>
                    </a>

                    <a href="https://www.linkedin.com/company/96140376/admin/page-posts/published/" target="_blank" rel="noopener noreferrer">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                    <a href="https://www.instagram.com/molotovfilms.be?igsh=NnpiamRjemRicGNh" target="_blank" rel="noopener noreferrer">
                      <i className="fa-brands fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
  
            </div>
          </div>
        </div>
  
        <div className="footer-copyright">
          <p>{t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterOne;
