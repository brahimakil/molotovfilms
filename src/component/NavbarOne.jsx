import { Link } from "react-router-dom";
import headerLogImg from "../assets/main logo/Molotove text Final (2).png";
import { useEffect } from "react";
import Select from "react-select";
import MobileMenu from "./MobileMenu";

const NavbarOne = () => {
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
                      <Link to="/services" className="text_base">
                        Service
                      </Link>
                    </li>
                    <li>
                      <Link to="/about" className="text_base">
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="text_base">
                        Pages
                        <span>
                          <svg
                            width="12"
                            height="6"
                            viewBox="0 0 12 6"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1.00391 1L6.00391 5L11.0039 1"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                      </Link>
                      <ul>
                        <li>
                          <Link to="/services" className="text_base">
                            Services
                          </Link>
                        </li>
                        <li>
                          <Link to="/services-detais" className="text_base">
                            Services Details
                          </Link>
                        </li>
                        <li>
                          <Link to="/team" className="text_base">
                            Team
                          </Link>
                        </li>
                        <li>
                          <Link to="/single-member" className="text_base">
                            Team Details
                          </Link>
                        </li>
                        <li>
                          <Link to="/pricing" className="text_base">
                            Pricing
                          </Link>
                        </li>
                        <li>
                          <Link to="/faq" className="text_base">
                            FAQ
                          </Link>
                        </li>
                        <li>
                          <Link to="/testimonial" className="text_base">
                            Testimonial
                          </Link>
                        </li>
                        <li>
                          <Link to="/contuct-us" className="text_base">
                            Contact Us
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to="#" className="text_base">
                        Blog
                        <span>
                          <svg
                            width="12"
                            height="6"
                            viewBox="0 0 12 6"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1.00391 1L6.00391 5L11.0039 1"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                      </Link>
                      <ul>
                        <li>
                          <Link to="/blog-grid" className="text_base">
                            Blog Grid
                          </Link>
                        </li>
                        <li>
                          <Link to="/blog-list-view" className="text_base">
                            Blog List View
                          </Link>
                        </li>
                        <li>
                          <Link to="/blog-details" className="text_base">
                            Blog Details
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-xl-2 col-xxl-2">
                <div className="menu_bg_right">
                  <Link to="/contuct-us" className="sara-btn">
                    Contact us
                  </Link>
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
