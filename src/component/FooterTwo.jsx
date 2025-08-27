import React from "react";
import { Link } from "react-router-dom";
import logo2 from "../assets/images/logo-2.svg";

const FooterTwo = () => {
  return (
    <footer className="footer footer--two">
      <div className="container">
        <div className="row">
          <div className="col-xxl-4 pd-left">
            <div className="footer_logo">
              <Link to="/">
                <img src={logo2} alt="logo" />
              </Link>
            </div>

            <div className="footer_txt">
              <p>Want to Create Something Great Together?</p>
            </div>

            <div className="footer_txt_two">
              <Link to="#" className="text_lg">
                Get in Touch..
              </Link>

              <ul>
                <li>
                  <a href="mailto:hello@infosara.com">hello@infosara.com</a>
                </li>
                <li>
                  <a href="tel:+17077970462">+1 707 797 0462</a>
                </li>
              </ul>
            </div>

            <ul className="footer_social_icon">
              <li>
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>
                    <i className="fa-brands fa-facebook-f"></i>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="https://bd.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>
                    <i className="fa-brands fa-linkedin-in"></i>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>
                    <i className="fa-brands fa-twitter"></i>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>
                    <i className="fa-brands fa-instagram"></i>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.tiktok.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>
                    <i className="fa-brands fa-tiktok"></i>
                  </span>
                </a>
              </li>
            </ul>
          </div>

          <div className="col-xxl-8">
            <div className="row">
              <div className="col-lg-6">
                <div className="footer_head">
                  <h2 className="main_titel_two">
                    Join Our <span>Newsletter</span>
                  </h2>
                  <p className="text_lg">
                    Join over <span>68,000</span> people getting our emails
                  </p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="fotter_sub_main">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your email"
                  />
                  <button type="submit" className="sara-btn sara-btn_blue">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>

            <div className="row footer_mt_two">
              <div className="col-xxl-12">
                <div className="row">
                  <div className="col-6 col-md-4 col-lg-3">
                    <div className="footer_item">
                      <h3 className="text_2xl">Quick Link</h3>
                      <ul className="footer_link">
                        <li>
                          <Link to="/" className="text_lg">
                            Home
                          </Link>
                        </li>
                        <li>
                          <Link to="/pricing" className="text_lg">
                            Pricing
                          </Link>
                        </li>
                        <li>
                          <Link to="/about" className="text_lg">
                            About us
                          </Link>
                        </li>
                        <li>
                          <Link to="/services" className="text_lg">
                            Service
                          </Link>
                        </li>
                        <li>
                          <Link to="/blog-grid" className="text_lg">
                            Blog
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="col-6 col-md-4 col-lg-3 ml_10px res-ml">
                    <div className="footer_item">
                      <h3 className="text_2xl">Support</h3>
                      <ul className="footer_link">
                        <li>
                          <Link to="/blog-details" className="text_lg">
                            Item Support
                          </Link>
                        </li>
                        <li>
                          <Link to="/blog-details" className="text_lg">
                            Forum
                          </Link>
                        </li>
                        <li>
                          <Link to="/blog-details" className="text_lg">
                            Report Abuse
                          </Link>
                        </li>
                        <li>
                          <Link to="/blog-details" className="text_lg">
                            Live
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="col-6 col-md-4 col-lg-3 ml_10px res-mt">
                    <div className="footer_item">
                      <h3 className="text_2xl">Products</h3>
                      <ul className="footer_link">
                        <li>
                          <Link to="/blog-details" className="text_lg">
                            Take the tour
                          </Link>
                        </li>
                        <li>
                          <Link to="/contuct-us" className="text_lg">
                            Live chat
                          </Link>
                        </li>
                        <li>
                          <Link to="/services" className="text_lg">
                            Self-service
                          </Link>
                        </li>
                        <li>
                          <Link to="/blog-grid" className="text_lg">
                            Social
                          </Link>
                        </li>
                        <li>
                          <Link to="/blog-details" className="text_lg">
                            Jano Reviews
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="copy_write">
        <div className="container">
          <div className="row copy_write_border_top">
            <div className="col-md-6 col-xxl-6">
              <div className="copy_write_txt">
                <h4 className="text_lg">
                  2024 © All rights reserved by
                  <span>
                    <Link to="/">Sara.</Link>
                  </span>
                </h4>
              </div>
            </div>

            <div className="col-md-6 col-xxl-6">
              <ul className="copy_write_link">
                <li>
                  <Link to="/blog-details" className="text_lg">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/blog-details" className="text_lg">
                    Terms & Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterTwo;
