import { Link } from "react-router-dom";
import headerLogImg from "../assets/main logo/Molotove text Final (2).png";
import { useEffect, useState } from "react";
import Select from "react-select";
import MobileMenu from "./MobileMenu";

function NavbarOne() {
  const [isServiceHovered, setIsServiceHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const menuBg = document.querySelector(".menu_bg");

      if (menuBg) {
        if (scrollTop > 50) {
          menuBg.classList.add("nav-bg");
        } else {
          menuBg.classList.remove("nav-bg");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const languageOptions = [
    { value: "Eng", label: "ENG" },
    { value: "Ban", label: "BAN" },
    { value: "Ind", label: "IND" },
  ];

  const addClass = "navbar-1";

  return (
    <>
      <header className="header">
        <div className="menu_bg">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-10 col-xl-10 col-xxl-10">
                <div className="menu_bg_left">
                  <div className="header_logo">
                    <Link to="/">
                      <img src={headerLogImg} alt="logo" />
                    </Link>
                  </div>
                  <ul className="menu">
                    <li>
                      <Link to="/" className="text_base">
                        Home
                        <span>
                        
                        </span>
                      </Link>

                    </li>
                
                        <li>
                          <li>
                            <li 
                              onMouseEnter={() => setIsServiceHovered(true)}
                              onMouseLeave={() => setIsServiceHovered(false)}
                              style={{ position: 'relative' }}
                            >
                              <Link to="/services" className="text_base">
                                Service
                                <span>
                                  <svg
                                    width="14"
                                    height="8"
                                    viewBox="0 0 14 8"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M1 1L7 7L13 1"
                                      stroke="currentColor"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </svg>
                                </span>
                              </Link>
                              <ul style={{
                                position: 'absolute',
                                top: isServiceHovered ? '100%' : 'calc(100% + 20px)',
                                left: '0',
                                width: '500px',
                                background: 'rgba(0, 0, 0, 0.3)',
                                backdropFilter: 'blur(10px)',
                                padding: '20px',
                                borderRadius: '8px',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                transition: 'all 0.3s ease',
                                opacity: isServiceHovered ? '1' : '0',
                                visibility: isServiceHovered ? 'visible' : 'hidden',
                                display: 'grid',
                                gridTemplateColumns: '1fr 1fr',
                                gridTemplateRows: 'repeat(3, 1fr)',
                                gap: '15px',
                                zIndex: '1000',
                                listStyle: 'none',
                                margin: '0',
                                transform: isServiceHovered ? 'translateY(0)' : 'translateY(-10px)'
                              }}>
                                <li style={{ margin: '0', padding: '0' }}>
                                  <Link to="/services-details" style={{
                                    color: '#ffffff',
                                    fontWeight: '500',
                                    transition: 'all 0.3s ease',
                                    lineHeight: '1.4',
                                    padding: '12px 16px',
                                    borderRadius: '6px',
                                    display: 'block',
                                    textAlign: 'left',
                                    fontSize: '14px',
                                    textDecoration: 'none',
                                    border: '1px solid rgba(255, 255, 255, 0.1)',
                                    background: 'rgba(255, 255, 255, 0.05)'
                                  }}
                                  onMouseEnter={(e) => {
                                    e.target.style.background = 'rgba(255, 255, 255, 0.15)';
                                    e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                                    e.target.style.transform = 'translateY(-2px)';
                                  }}
                                  onMouseLeave={(e) => {
                                    e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                                    e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                                    e.target.style.transform = 'translateY(0)';
                                  }}>
                                    Reels & Short-Form Video
                                  </Link>
                                </li>
                                <li style={{ margin: '0', padding: '0' }}>
                                  <Link to="/features" style={{
                                    color: '#ffffff',
                                    fontWeight: '500',
                                    transition: 'all 0.3s ease',
                                    lineHeight: '1.4',
                                    padding: '12px 16px',
                                    borderRadius: '6px',
                                    display: 'block',
                                    textAlign: 'left',
                                    fontSize: '14px',
                                    textDecoration: 'none',
                                    border: '1px solid rgba(255, 255, 255, 0.1)',
                                    background: 'rgba(255, 255, 255, 0.05)'
                                  }}
                                  onMouseEnter={(e) => {
                                    e.target.style.background = 'rgba(255, 255, 255, 0.15)';
                                    e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                                    e.target.style.transform = 'translateY(-2px)';
                                  }}
                                  onMouseLeave={(e) => {
                                    e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                                    e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                                    e.target.style.transform = 'translateY(0)';
                                  }}>
                                    Features & Brand Films
                                  </Link>
                                </li>
                                <li style={{ margin: '0', padding: '0' }}>
                                  <Link to="/scriptwriting" style={{
                                    color: '#ffffff',
                                    fontWeight: '500',
                                    transition: 'all 0.3s ease',
                                    lineHeight: '1.4',
                                    padding: '12px 16px',
                                    borderRadius: '6px',
                                    display: 'block',
                                    textAlign: 'left',
                                    fontSize: '14px',
                                    textDecoration: 'none',
                                    border: '1px solid rgba(255, 255, 255, 0.1)',
                                    background: 'rgba(255, 255, 255, 0.05)'
                                  }}
                                  onMouseEnter={(e) => {
                                    e.target.style.background = 'rgba(255, 255, 255, 0.15)';
                                    e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                                    e.target.style.transform = 'translateY(-2px)';
                                  }}
                                  onMouseLeave={(e) => {
                                    e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                                    e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                                    e.target.style.transform = 'translateY(0)';
                                  }}>
                                    Scriptwriting & Concepts
                                  </Link>
                                </li>
                                <li style={{ margin: '0', padding: '0' }}>
                                 <Link to="/post-production" style={{
                                    color: '#ffffff',
                                    fontWeight: '500',
                                    transition: 'all 0.3s ease',
                                    lineHeight: '1.4',
                                    padding: '12px 16px',
                                    borderRadius: '6px',
                                    display: 'block',
                                    textAlign: 'left',
                                    fontSize: '14px',
                                    textDecoration: 'none',
                                    border: '1px solid rgba(255, 255, 255, 0.1)',
                                    background: 'rgba(255, 255, 255, 0.05)'
                                  }}
                                  onMouseEnter={(e) => {
                                    e.target.style.background = 'rgba(255, 255, 255, 0.15)';
                                    e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                                    e.target.style.transform = 'translateY(-2px)';
                                  }}
                                  onMouseLeave={(e) => {
                                    e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                                    e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                                    e.target.style.transform = 'translateY(0)';
                                  }}>
                                    Post-Production
                                  </Link>
                                </li>
                                <li style={{ margin: '0', padding: '0' }}>
                               
                                   <Link to="/social-media-performance" style={{
                                    color: '#ffffff',
                                    fontWeight: '500',
                                    transition: 'all 0.3s ease',
                                    lineHeight: '1.4',
                                    padding: '12px 16px',
                                    borderRadius: '6px',
                                    display: 'block',
                                    textAlign: 'left',
                                    fontSize: '14px',
                                    textDecoration: 'none',
                                    border: '1px solid rgba(255, 255, 255, 0.1)',
                                    background: 'rgba(255, 255, 255, 0.05)'
                                  }}
                                  onMouseEnter={(e) => {
                                    e.target.style.background = 'rgba(255, 255, 255, 0.15)';
                                    e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                                    e.target.style.transform = 'translateY(-2px)';
                                  }}
                                  onMouseLeave={(e) => {
                                    e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                                    e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                                    e.target.style.transform = 'translateY(0)';
                                  }}>
                                    Social Media & Performance
                                  </Link>
                                </li>
                                <li style={{ margin: '0', padding: '0' }}>
                                  <Link to="/web-development" style={{
                                    color: '#ffffff',
                                    fontWeight: '500',
                                    transition: 'all 0.3s ease',
                                    lineHeight: '1.4',
                                    padding: '12px 16px',
                                    borderRadius: '6px',
                                    display: 'block',
                                    textAlign: 'left',
                                    fontSize: '14px',
                                    textDecoration: 'none',
                                    border: '1px solid rgba(255, 255, 255, 0.1)',
                                    background: 'rgba(255, 255, 255, 0.05)'
                                  }}
                                  onMouseEnter={(e) => {
                                    e.target.style.background = 'rgba(255, 255, 255, 0.15)';
                                    e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                                    e.target.style.transform = 'translateY(-2px)';
                                  }}
                                  onMouseLeave={(e) => {
                                    e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                                    e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                                    e.target.style.transform = 'translateY(0)';
                                  }}>
                                    Web Development
                                  </Link>
                                </li>
                              </ul>
                            </li>
                          </li>
                        </li>
                    <li>
                      <Link to="/about" className="text_base">
                        About Us
                      </Link>
                    </li>
                 
                    <li>
                      <Link to="/contuct-us" className="text_base">
                        Contact Us
                  
                      </Link>
                    
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-xl-2 col-xxl-2">
                <div className="menu_bg_right">
                  {/* Meet the Artist button removed - moved to footer */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      
      {/* Mobile Menu with Molotov Logo */}
      <MobileMenu headerLogImg={headerLogImg} addClass={addClass} />
    </>
  );
};

export default NavbarOne;
