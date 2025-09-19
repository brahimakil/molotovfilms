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
                      <Link to="/contuct-us" className="text_base">
                        Contact Us
                  
                      </Link>
                    
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
