import { Link } from "react-router-dom";
import { useEffect } from "react";
import headerLogImg from "../assets/main logo/Molotove text Final (2).png";
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from "./LanguageSwitcher";
import MobileMenu from "./MobileMenu";

const NavbarTwo = () => {
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

  const { t } = useTranslation();

  const addClass = "navbar-2";

  return (
    <>
      <header className="header header--two">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-3 col-xl-3 col-xxl-3">
              <ul className="header_contact">
                <li>
                  <a href="tel:+17077970462" className="text_base">
                    <span>{t('navbarTwo.callUs')} </span>{t('navbarTwo.phone')}
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-lg-6 col-xl-6 col-xxl-6">
              <div className="header_offer_main">
                <div className="header_txt">
                  <p>
                    <span>Offer</span> {t('navbarTwo.offer')}
                  </p>
                </div>
                <span className="header_txt_btn">
                  <i className="fa-solid fa-angle-right"></i>
                </span>
              </div>
            </div>

            <div className="col-lg-3 col-xl-3 col-xxl-3">
              <div className="header_right">
                <div className="header_luang_btn">
                  <LanguageSwitcher />
                </div>
                <ul className="header_right_social_icon">
                  <li>
                    <a
                      href="https://www.tiktok.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span>
                        <i className="fa-brands fa-tiktok"></i>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span>
                        <i className="fa-brands fa-instagram fa-fw"></i>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://x.com/?lang=en"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span>
                        <i className="fa-brands fa-twitter fa-fw"></i>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.pinterest.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span>
                        <i className="fa-brands fa-pinterest fa-fw"></i>
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

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
                      <Link to="#" className="text_base">
                        {t('nav.home')}
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
                              stroke="#28303F"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                      </Link>
                      <ul>
                        <li>
                          <Link to="/" className="text_base">
                            {t('nav.homeVariants.home01')}
                          </Link>
                        </li>
                        <li>
                          <Link to="/home-two" className="text_base">
                            {t('nav.homeVariants.home02')}
                          </Link>
                        </li>
                        <li>
                          <Link to="/home-three" className="text_base">
                            {t('nav.homeVariants.home03')}
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to="/services" className="text_base">
                        {t('nav.service')}
                      </Link>
                    </li>
                    <li>
                      <Link to="/about" className="text_base">
                        {t('nav.aboutUs')}
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="text_base">
                        {t('nav.pages')}
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
                              stroke="#28303F"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                      </Link>
                      <ul>
                        <li>
                          <Link to="/blog-details" className="text_base">
                            {t('nav.pagesDropdown.blogDetails')}
                          </Link>
                        </li>
                        <li>
                          <Link to="/blog-list-view" className="text_base">
                            {t('nav.pagesDropdown.blogListView')}
                          </Link>
                        </li>
                        <li>
                          <Link to="/contact-us" className="text_base">
                            {t('nav.pagesDropdown.contactUs')}
                          </Link>
                        </li>
                        <li>
                          <Link to="/faq" className="text_base">
                            {t('nav.pagesDropdown.faq')}
                          </Link>
                        </li>
                        <li>
                          <Link to="/pricing" className="text_base">
                            {t('nav.pagesDropdown.pricing')}
                          </Link>
                        </li>
                        <li>
                          <Link to="/services-details" className="text_base">
                            {t('nav.pagesDropdown.serviceDetails')}
                          </Link>
                        </li>
                        <li>
                          <Link to="/single-member" className="text_base">
                            {t('nav.pagesDropdown.singleMember')}
                          </Link>
                        </li>
                        <li>
                          <Link to="/team" className="text_base">
                            {t('nav.pagesDropdown.teamMember')}
                          </Link>
                        </li>
                        <li>
                          <Link to="/testimonial" className="text_base">
                            {t('nav.pagesDropdown.testimonial')}
                          </Link>
                        </li>
                        <li>
                          <Link to="/404" className="text_base">
                            {t('nav.pagesDropdown.error404')}
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to="/blog-grid" className="text_base">
                        {t('nav.blog')}
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-xl-2 col-xxl-2">
                <div className="menu_btn">
                  <Link className="sara-btn sara-btn_blue" to="/contact-us">
                    {t('nav.contactUs')}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <MobileMenu headerLogImg={headerLogImg} addClass={addClass}></MobileMenu>
    </>
  );
};

export default NavbarTwo;
