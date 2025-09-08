import React from "react";
import { Link } from "react-router-dom";

const InnerServices = () => {
  return (
    <section className="services inner_services">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-xxl-5">
            <h2 className="main_titel">
            Crafted for Every Screen
            </h2>
          </div>

          <div className="col-xxl-6 offset-xxl-1">
            <div className="services_txt">
              <p className="text_lg">
              We build work that cuts through the noise , snackable social content, cinematic shorts, and full-length documentaries. End-to-end production, expert cinematography, precision editing and distribution plans engineered to grow your audience and impact.              </p>
            </div>
          </div>
        </div>
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
            <div className="services_item">
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
                  <a href="#">Reels & Short-Form Video</a>
                </h3>

                <p className="text_lg">
                  We produce engaging Reels and short-form videos tailored for Instagram, TikTok, and YouTube. Each piece is shot, edited, and optimized for maximum engagement, turning casual viewers into loyal followers.
                </p>

                <Link
                  to="/services-detais"
                  className="services_item_btm text_lg"
                >
                  Read More
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
          </div>

          {/* Service 2: Features & Brand & Documentary Films */}
          <div className="col-sm-6 col-lg-4 col-xxl-4">
            <div className="services_item">
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
                  <a href="#">Features & Brand & Documentary Films</a>
                </h3>

                <p className="text_lg">
                  From 15-second ads to full-length films, we bring your message to life with cinematic storytelling and professional production. Every project is customized to match your brand's voice and deliver measurable results.
                </p>

                <Link
                  to="/services-detais"
                  className="services_item_btm text_lg"
                >
                  Read More
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
          </div>

          {/* Service 3: Scriptwriting & Creative Concepts */}
          <div className="col-sm-6 col-lg-4 col-xxl-4">
            <div className="services_item">
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
                  <a href="#">Scriptwriting & Creative Concepts</a>
                </h3>

                <p className="text_lg">
                  A strong video begins with a strong idea. We develop creative concepts, write scripts, and design storyboards that ensure your campaign has clarity, originality, and purpose.
                </p>

                <Link
                  to="/services-detais"
                  className="services_item_btm text_lg"
                >
                  Read More
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
          </div>

          {/* Service 4: Social Media Strategy & Management */}
          <div className="col-sm-6 col-lg-4 col-xxl-4">
            <div className="services_item">
              <span className="services_item_icon">
                <svg
                  width="60"
                  height="60"
                  viewBox="0 0 60 60"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient id="socialGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#38BDF8" />
                      <stop offset="100%" stopColor="#6427FF" />
                    </linearGradient>
                  </defs>
                  
                  {/* Central hub/network */}
                  <circle cx="30" cy="30" r="8" fill="url(#socialGrad)"/>
                  
                  {/* Connected nodes */}
                  <circle cx="14" cy="16" r="5" fill="#38BDF8"/>
                  <circle cx="46" cy="16" r="5" fill="#38BDF8"/>
                  <circle cx="14" cy="44" r="5" fill="#38BDF8"/>
                  <circle cx="46" cy="44" r="5" fill="#38BDF8"/>
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
                  
                  {/* Social media icons in nodes */}
                  <path d="M12 14H16V18H12V14Z" fill="white" rx="1"/>
                  <path d="M44 14H48V18H44V14Z" fill="white" rx="1"/>
                  <path d="M28 6H32V10H28V6Z" fill="white" rx="1"/>
                </svg>
              </span>
              <div className="services_item_txt">
                <h3 className="text_2xl">
                  <a href="#">Social Media Strategy & Management</a>
                </h3>

                <p className="text_lg">
                  We don't just create content—we manage the entire ecosystem. From content calendars and scheduling to publishing and engagement, we ensure your brand has a consistent presence across all platforms.
                </p>

                <Link
                  to="/services-detais"
                  className="services_item_btm text_lg"
                >
                  Read More
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
          </div>

          {/* Service 5: Performance Video Ads & A/B Testing */}
          <div className="col-sm-6 col-lg-4 col-xxl-4">
            <div className="services_item">
              <span className="services_item_icon">
                <svg
                  width="60"
                  height="60"
                  viewBox="0 0 60 60"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient id="performanceGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#38BDF8" />
                      <stop offset="100%" stopColor="#6427FF" />
                    </linearGradient>
                  </defs>
                  
                  {/* Analytics chart background */}
                  <rect x="8" y="12" width="44" height="36" rx="4" fill="url(#performanceGrad)" fillOpacity="0.1" stroke="url(#performanceGrad)" strokeWidth="2"/>
                  
                  {/* Chart bars */}
                  <rect x="14" y="32" width="4" height="12" fill="#38BDF8" rx="2"/>
                  <rect x="22" y="28" width="4" height="16" fill="#6427FF" rx="2"/>
                  <rect x="30" y="24" width="4" height="20" fill="#38BDF8" rx="2"/>
                  <rect x="38" y="20" width="4" height="24" fill="#6427FF" rx="2"/>
                  <rect x="46" y="16" width="4" height="28" fill="#38BDF8" rx="2"/>
                  
                  {/* A/B Testing symbols */}
                  <circle cx="16" cy="8" r="6" fill="none" stroke="#6427FF" strokeWidth="2"/>
                  <text x="16" y="12" textAnchor="middle" fill="#6427FF" fontSize="8" fontWeight="bold">A</text>
                  
                  <circle cx="44" cy="8" r="6" fill="none" stroke="#38BDF8" strokeWidth="2"/>
                  <text x="44" y="12" textAnchor="middle" fill="#38BDF8" fontSize="8" fontWeight="bold">B</text>
                  
                  {/* Performance arrow */}
                  <path d="M30 52L36 48L30 44V47H24V49H30V52Z" fill="#6427FF"/>
                  
                  {/* Target/Goal icon */}
                  <circle cx="52" cy="20" r="4" fill="none" stroke="#38BDF8" strokeWidth="1.5"/>
                  <circle cx="52" cy="20" r="2" fill="#6427FF"/>
                </svg>
              </span>
              <div className="services_item_txt">
                <h3 className="text_2xl">
                  <a href="#">Performance Video Ads & A/B Testing</a>
                </h3>

                <p className="text_lg">
                  We create multiple variations of your video ads to test which visuals, hooks, and calls-to-action deliver the best results. By analyzing performance data, we continuously refine your campaigns to maximize ROI.
                </p>

                <Link
                  to="/services-detais"
                  className="services_item_btm text_lg"
                >
                  Read More
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
          </div>

          {/* Service 6: Post-Production & Content Repurposing */}
          <div className="col-sm-6 col-lg-4 col-xxl-4">
            <div className="services_item">
              <span className="services_item_icon">
                <svg
                  width="60"
                  height="60"
                  viewBox="0 0 60 60"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient id="postGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#38BDF8" />
                      <stop offset="100%" stopColor="#6427FF" />
                    </linearGradient>
                  </defs>
                  
                  {/* Editing timeline */}
                  <rect x="6" y="24" width="48" height="12" rx="2" fill="url(#postGrad)" fillOpacity="0.1" stroke="url(#postGrad)" strokeWidth="2"/>
                  
                  {/* Timeline segments */}
                  <rect x="8" y="26" width="8" height="8" fill="#6427FF" rx="1"/>
                  <rect x="18" y="26" width="12" height="8" fill="#38BDF8" rx="1"/>
                  <rect x="32" y="26" width="6" height="8" fill="#6427FF" rx="1"/>
                  <rect x="40" y="26" width="10" height="8" fill="#38BDF8" rx="1"/>
                  
                  {/* Playhead */}
                  <line x1="26" y1="20" x2="26" y2="40" stroke="#6427FF" strokeWidth="3" strokeLinecap="round"/>
                  <circle cx="26" cy="18" r="3" fill="#6427FF"/>
                  
                  {/* Content repurposing arrows */}
                  <path d="M30 8L34 12H32V16H28V12H26L30 8Z" fill="#38BDF8"/>
                  <path d="M30 52L26 48H28V44H32V48H34L30 52Z" fill="#38BDF8"/>
                  <path d="M8 30L12 26V28H16V32H12V34L8 30Z" fill="#6427FF"/>
                  <path d="M52 30L48 34V32H44V28H48V26L52 30Z" fill="#6427FF"/>
                  
                  {/* Editing tools */}
                  <rect x="48" y="8" width="8" height="2" fill="#38BDF8" rx="1"/>
                  <rect x="48" y="12" width="6" height="2" fill="#6427FF" rx="1"/>
                  <rect x="48" y="16" width="10" height="2" fill="#38BDF8" rx="1"/>
                  
                  {/* Color correction circles */}
                  <circle cx="14" cy="46" r="3" fill="#ff6b6b" fillOpacity="0.7"/>
                  <circle cx="22" cy="46" r="3" fill="#4ecdc4" fillOpacity="0.7"/>
                  <circle cx="30" cy="46" r="3" fill="#45b7d1" fillOpacity="0.7"/>
                  <circle cx="38" cy="46" r="3" fill="#96ceb4" fillOpacity="0.7"/>
                </svg>
              </span>
              <div className="services_item_txt">
                <h3 className="text_2xl">
                  <a href="#">Post-Production & Content Repurposing</a>
                </h3>

                <p className="text_lg">
                  Our post-production team elevates your footage with advanced editing, sound design, color grading, and motion graphics. We also repurpose your content into multiple formats for maximum reach.
                </p>

                <Link
                  to="/services-detais"
                  className="services_item_btm text_lg"
                >
                  Read More
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default InnerServices;