import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const InnerServices = () => {
  const { t } = useTranslation();
  const services = t('innerServices.services', { returnObjects: true });
  return (
    <section className="services inner_services">
      <div className="container">
     
        <div className="row">
          <div className="col-xxl-12">
            <div className="ball_main">
              <div className="ball"></div>
              <div className="ball two"></div>
              <div className="ball three"></div>
            </div>
          </div>
        </div>
        <div className="row g-4 mg_top_10px">
          {/* Service 1: Reels & Short-Form Video */}
          <div className="col-sm-6 col-lg-4 col-xxl-4">
            <Link to="/services-details" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="services_item" style={{ cursor: 'pointer' }}>
              <span className="services_item_icon">
                <svg
                  width="60"
                  height="60"
                  viewBox="0 0 60 60"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient id="reelsGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#38BDF8" />
                      <stop offset="100%" stopColor="#6427FF" />
                    </linearGradient>
                  </defs>
                  <rect x="8" y="12" width="44" height="36" rx="6" fill="url(#reelsGrad)" fillOpacity="0.1" stroke="url(#reelsGrad)" strokeWidth="2"/>
                  <circle cx="46" cy="18" r="3" fill="#38BDF8"/>
                  <path d="M24 22L36 30L24 38V22Z" fill="#6427FF"/>
                  <rect x="14" y="52" width="8" height="4" rx="2" fill="#38BDF8"/>
                  <rect x="26" y="52" width="8" height="4" rx="2" fill="#6427FF"/>
                  <rect x="38" y="52" width="8" height="4" rx="2" fill="#38BDF8"/>
                  <path d="M18 4C20.2091 4 22 5.79086 22 8V12H18V8C18 7.44772 17.5523 7 17 7C16.4477 7 16 7.44772 16 8V12H12V8C12 5.79086 13.7909 4 16 4H18Z" fill="#6427FF"/>
                  <path d="M42 4C44.2091 4 46 5.79086 46 8V12H42V8C42 7.44772 41.5523 7 41 7C40.4477 7 40 7.44772 40 8V12H36V8C36 5.79086 37.7909 4 40 4H42Z" fill="#6427FF"/>
                </svg>
              </span>
              <div className="services_item_txt">
                <h3 className="text_2xl">
                  <a href="#">{services[0].title}</a>
                </h3>

                <p className="text_lg">
                  {services[0].description}
                </p>

                <Link
                  to="/services-detais"
                  className="services_item_btm text_lg"
                >
                  {services[0].cta}
                  <span>
                    <svg
                      width="14"
                      height="10"
                      viewBox="0 0 14 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 9L13 5M13 5L9 1M13 5L1 5"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          </Link>
          </div>

          {/* Service 2: Features & Brand & Documentary Films */}
          <div className="col-sm-6 col-lg-4 col-xxl-4">
            <Link to="/features" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="services_item" style={{ cursor: 'pointer' }}>
              <span className="services_item_icon">
                <svg
                  width="60"
                  height="60"
                  viewBox="0 0 60 60"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient id="filmGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#38BDF8" />
                      <stop offset="100%" stopColor="#6427FF" />
                    </linearGradient>
                  </defs>
                  
                  {/* Professional camera body */}
                  <rect x="10" y="22" width="32" height="20" rx="4" fill="url(#filmGrad)" fillOpacity="0.9"/>
                  <rect x="8" y="24" width="36" height="16" rx="3" fill="url(#filmGrad)" fillOpacity="0.1" stroke="url(#filmGrad)" strokeWidth="2"/>
                  
                  {/* Camera lens */}
                  <circle cx="25" cy="32" r="8" fill="none" stroke="#38BDF8" strokeWidth="3"/>
                  <circle cx="25" cy="32" r="5" fill="#6427FF"/>
                  <circle cx="25" cy="32" r="2" fill="white"/>
                  
                  {/* Lens details */}
                  <circle cx="25" cy="32" r="6.5" fill="none" stroke="#38BDF8" strokeWidth="0.5" strokeDasharray="2,2"/>
                  
                  {/* Viewfinder */}
                  <rect x="15" y="18" width="8" height="4" rx="1" fill="#6427FF"/>
                  
                  {/* Film reel */}
                  <circle cx="45" cy="15" r="8" fill="none" stroke="#38BDF8" strokeWidth="2"/>
                  <circle cx="45" cy="15" r="2" fill="#6427FF"/>
                  <path d="M39 15H41M49 15H51M45 9V11M45 19V21" stroke="#38BDF8" strokeWidth="1.5" strokeLinecap="round"/>
                  
                  {/* Director's clapperboard */}
                  <rect x="8" y="45" width="16" height="10" rx="1" fill="#6427FF" transform="rotate(-5 16 50)"/>
                  <rect x="8" y="45" width="16" height="3" fill="white" transform="rotate(-5 16 50)"/>
                  <line x1="10" y1="45" x2="10" y2="55" stroke="white" strokeWidth="1" transform="rotate(-5 16 50)"/>
                  <line x1="14" y1="45" x2="14" y2="55" stroke="white" strokeWidth="1" transform="rotate(-5 16 50)"/>
                  <line x1="18" y1="45" x2="18" y2="55" stroke="white" strokeWidth="1" transform="rotate(-5 16 50)"/>
                  <line x1="22" y1="45" x2="22" y2="55" stroke="white" strokeWidth="1" transform="rotate(-5 16 50)"/>
                  
                  {/* Action lines */}
                  <path d="M50 45L52 43M52 47L54 45M50 49L52 47" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </span>
              <div className="services_item_txt">
                <h3 className="text_2xl">
                  <a href="#">{services[1].title}</a>
                </h3>

                <p className="text_lg">
                  {services[1].description}
                </p>

                <Link
                  to="/social-media-strategy"  // Change from "/features-films" to "/social-media-strategy"
                  className="services_item_btm text_lg"
                >
                  {services[1].cta}
                  <span>
                    <svg
                      width="14"
                      height="10"
                      viewBox="0 0 14 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 9L13 5M13 5L9 1M13 5L1 5"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          </Link>
          </div>

          {/* Service 3: Scriptwriting & Creative Concepts */}
          <div className="col-sm-6 col-lg-4 col-xxl-4">
            <Link to="/scriptwriting" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="services_item" style={{ cursor: 'pointer' }}>
              <span className="services_item_icon">
                <svg
                  width="60"
                  height="60"
                  viewBox="0 0 60 60"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient id="scriptGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#38BDF8" />
                      <stop offset="100%" stopColor="#6427FF" />
                    </linearGradient>
                  </defs>
                  
                  {/* Document/Script */}
                  <path d="M12 8C12 6.89543 12.8954 6 14 6H38L50 18V50C50 51.1046 49.1046 52 48 52H14C12.8954 52 12 51.1046 12 50V8Z" fill="url(#scriptGrad)" fillOpacity="0.1" stroke="url(#scriptGrad)" strokeWidth="2"/>
                  <path d="M38 6L50 18H40C38.8954 18 38 17.1046 38 16V6Z" fill="#38BDF8"/>
                  
                  {/* Script lines */}
                  <line x1="18" y1="24" x2="42" y2="24" stroke="#6427FF" strokeWidth="2" strokeLinecap="round"/>
                  <line x1="18" y1="30" x2="38" y2="30" stroke="#6427FF" strokeWidth="1.5" strokeLinecap="round"/>
                  <line x1="18" y1="36" x2="44" y2="36" stroke="#6427FF" strokeWidth="2" strokeLinecap="round"/>
                  <line x1="18" y1="42" x2="36" y2="42" stroke="#6427FF" strokeWidth="1.5" strokeLinecap="round"/>
                  
                  {/* Lightbulb for creativity */}
                  <circle cx="22" cy="14" r="6" fill="none" stroke="#38BDF8" strokeWidth="2"/>
                  <path d="M19 18H25" stroke="#38BDF8" strokeWidth="1.5" strokeLinecap="round"/>
                  <path d="M20 20H24" stroke="#38BDF8" strokeWidth="1.5" strokeLinecap="round"/>
                  <path d="M20 11L22 9L24 11" stroke="#6427FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                  
                  {/* Pen/Writing tool */}
                  <path d="M46 40L52 34L56 38L50 44H46V40Z" fill="#6427FF"/>
                  <path d="M52 34L48 30L46 32L50 36" fill="#38BDF8"/>
                </svg>
              </span>
              <div className="services_item_txt">
                <h3 className="text_2xl">
                  <a href="#">{services[2].title}</a>
                </h3>

                <p className="text_lg">
                  {services[2].description}
                </p>

                <Link
                  to="/scriptwriting"
                  className="services_item_btm text_lg"
                >
                  {services[2].cta}
                  <span>
                    <svg
                      width="14"
                      height="10"
                      viewBox="0 0 14 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 9L13 5M13 5L9 1M13 5L1 5"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          </Link>
          </div>

          {/* Service 5: Post-Production & Content Repurposing */}
          <div className="col-sm-6 col-lg-4 col-xxl-4">
            <Link to="/post-production" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="services_item" style={{ cursor: 'pointer' }}>
                <span className="services_item_icon">
                  <svg
                    width="60"
                    height="60"
                    viewBox="0 0 60 60"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <linearGradient id="postproductionGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#8B5CF6" />
                        <stop offset="100%" stopColor="#3B82F6" />
                      </linearGradient>
                    </defs>
                    
                    {/* Main editing timeline */}
                    <rect x="6" y="20" width="48" height="20" rx="4" fill="url(#postproductionGrad)" fillOpacity="0.1" stroke="url(#postproductionGrad)" strokeWidth="2"/>
                    
                    {/* Timeline segments */}
                    <rect x="10" y="24" width="8" height="12" fill="#8B5CF6" rx="2"/>
                    <rect x="20" y="24" width="6" height="12" fill="#3B82F6" rx="2"/>
                    <rect x="28" y="24" width="10" height="12" fill="#8B5CF6" rx="2"/>
                    <rect x="40" y="24" width="8" height="12" fill="#3B82F6" rx="2"/>
                    
                    {/* Color grading wheel */}
                    <circle cx="15" cy="10" r="6" fill="none" stroke="#8B5CF6" strokeWidth="2"/>
                    <path d="M9 10A6 6 0 0 1 15 4A6 6 0 0 1 21 10" fill="#FF6B6B" fillOpacity="0.7"/>
                    <path d="M21 10A6 6 0 0 1 15 16A6 6 0 0 1 9 10" fill="#4ECDC4" fillOpacity="0.7"/>
                    
                    {/* Sound waves */}
                    <path d="M25 8C27 6 29 6 31 8M25 12C27 10 29 10 31 12" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round"/>
                    
                    {/* Motion graphics elements */}
                    <path d="M40 8L45 5L50 8L45 11Z" fill="#8B5CF6"/>
                    <circle cx="45" cy="8" r="2" fill="white"/>
                    
                    {/* Content repurposing arrows */}
                    <path d="M30 45L35 42L30 39V41H25V43H30V45Z" fill="#3B82F6"/>
                    <path d="M30 52L25 49L30 46V48H35V50H30V52Z" fill="#8B5CF6"/>
                    
                    {/* Multiple format outputs */}
                    <rect x="45" y="42" width="8" height="6" rx="1" fill="#3B82F6" fillOpacity="0.7"/>
                    <rect x="47" y="50" width="6" height="4" rx="1" fill="#8B5CF6" fillOpacity="0.7"/>
                    <circle cx="52" cy="48" r="2" fill="#3B82F6" fillOpacity="0.7"/>
                  </svg>
                </span>
                <div className="services_item_txt">
                  <h3 className="text_2xl">
                    <a href="#">{services[3].title}</a>
                  </h3>

                  <p className="text_lg">
                    {services[3].description}
                  </p>

                  <Link
                    to="/post-production"
                    className="services_item_btm text_lg"
                  >
                    {services[3].cta}
                    <span>
                      <svg
                        width="14"
                        height="10"
                        viewBox="0 0 14 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9 9L13 5M13 5L9 1M13 5L1 5"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </Link>
                </div>
              </div>
            </Link>
          </div>

          {/* Service 6: Social Media & Performance Marketing */}
          <div className="col-sm-6 col-lg-4 col-xxl-4">
            <Link to="/social-media-performance" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="services_item" style={{ cursor: 'pointer' }}>
              <span className="services_item_icon">
                <svg
                  width="60"
                  height="60"
                  viewBox="0 0 60 60"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient id="socialPerformanceGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#38BDF8" />
                      <stop offset="50%" stopColor="#6427FF" />
                      <stop offset="100%" stopColor="#3B82F6" />
                    </linearGradient>
                  </defs>
                  
                  {/* Central hub/network with performance metrics */}
                  <circle cx="30" cy="30" r="8" fill="url(#socialPerformanceGrad)"/>
                  
                  {/* Connected social nodes */}
                  <circle cx="14" cy="16" r="5" fill="#38BDF8"/>
                  <circle cx="46" cy="16" r="5" fill="#38BDF8"/>
                  <circle cx="14" cy="44" r="5" fill="#38BDF8"/>
                  <circle cx="46" cy="44" r="5" fill="#38BDF8"/>
                  
                  {/* Performance tracking nodes */}
                  <circle cx="30" cy="8" r="4" fill="#6427FF"/>
                  <circle cx="30" cy="52" r="4" fill="#6427FF"/>
                  <circle cx="8" cy="30" r="4" fill="#6427FF"/>
                  <circle cx="52" cy="30" r="4" fill="#6427FF"/>
                  
                  {/* Connection lines */}
                  <line x1="22" y1="30" x2="18" y2="22" stroke="#6427FF" strokeWidth="2" strokeOpacity="0.6"/>
                  <line x1="38" y1="30" x2="42" y2="22" stroke="#6427FF" strokeWidth="2" strokeOpacity="0.6"/>
                  <line x1="22" y1="30" x2="18" y2="38" stroke="#6427FF" strokeWidth="2" strokeOpacity="0.6"/>
                  <line x1="38" y1="30" x2="42" y2="38" stroke="#6427FF" strokeWidth="2" strokeOpacity="0.6"/>
                  <line x1="30" y1="22" x2="30" y2="12" stroke="#38BDF8" strokeWidth="2" strokeOpacity="0.6"/>
                  <line x1="30" y1="38" x2="30" y2="48" stroke="#38BDF8" strokeWidth="2" strokeOpacity="0.6"/>
                  <line x1="22" y1="30" x2="12" y2="30" stroke="#38BDF8" strokeWidth="2" strokeOpacity="0.6"/>
                  <line x1="38" y1="30" x2="48" y2="30" stroke="#38BDF8" strokeWidth="2" strokeOpacity="0.6"/>
                  
                  {/* Analytics chart overlay */}
                  <rect x="24" y="26" width="12" height="8" rx="2" fill="white" fillOpacity="0.9"/>
                  <rect x="26" y="30" width="2" height="3" fill="#3B82F6"/>
                  <rect x="29" y="28" width="2" height="5" fill="#6427FF"/>
                  <rect x="32" y="27" width="2" height="6" fill="#38BDF8"/>
                  
                  {/* A/B Testing symbols */}
                  <text x="12" y="18" textAnchor="middle" fill="white" fontSize="6" fontWeight="bold">A</text>
                  <text x="48" y="18" textAnchor="middle" fill="white" fontSize="6" fontWeight="bold">B</text>
                </svg>
              </span>
              <div className="services_item_txt">
                <h3 className="text_2xl">
                  <a href="#">{services[4].title}</a>
                </h3>

                <p className="text_lg">
                  {services[4].description}
                </p>

                <Link
                  to="/social-media-performance"
                  className="services_item_btm text_lg"
                >
                  {services[4].cta}
                  <span>
                    <svg
                      width="14"
                      height="10"
                      viewBox="0 0 14 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 9L13 5M13 5L9 1M13 5L1 5"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          </Link>
          </div>


          {/* Service 6: Web Development */}
          <div className="col-sm-6 col-lg-4 col-xxl-4">
            <Link to="/web-development" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="services_item" style={{ cursor: 'pointer' }}>
                <span className="services_item_icon">
                  <svg
                    width="60"
                    height="60"
                    viewBox="0 0 60 60"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <linearGradient id="webDevGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#38BDF8" />
                        <stop offset="100%" stopColor="#6427FF" />
                      </linearGradient>
                    </defs>
                    {/* Monitor */}
                    <rect x="8" y="14" width="44" height="32" rx="6" fill="url(#webDevGrad)" fillOpacity="0.1" stroke="url(#webDevGrad)" strokeWidth="2"/>
                    {/* Top bar */}
                    <rect x="12" y="18" width="36" height="6" rx="3" fill="#38BDF8" />
                    {/* Code lines */}
                    <rect x="12" y="27" width="24" height="4" rx="2" fill="#6427FF" />
                    <rect x="12" y="34" width="30" height="4" rx="2" fill="#38BDF8" />
                    {/* Brackets */}
                    <path d="M22 26 L18 30 L22 34" stroke="#6427FF" strokeWidth="2" strokeLinecap="round" />
                    <path d="M38 26 L42 30 L38 34" stroke="#6427FF" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </span>
                <div className="services_item_txt">
                  <h3 className="text_2xl">
                    <a href="#">{services[5].title}</a>
                  </h3>

                  <p className="text_lg">
                    {services[5].description}
                  </p>

                  <Link
                    to="/web-development"
                    className="services_item_btm text_lg"
                  >
                    {services[5].cta}
                    <span>
                      <svg
                        width="14"
                        height="10"
                        viewBox="0 0 14 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9 9L13 5M13 5L9 1M13 5L1 5"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </Link>
                </div>
              </div>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default InnerServices;
