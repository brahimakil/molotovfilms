import React from "react";
import PageHeader from "../component/PageHeader";
import { Link } from "react-router-dom";

// Import images
import mainImage from "../assets/images/Image.webp";
import s3Image from "../assets/images/s-3.webp";
import s2Image from "../assets/images/s-2.webp";
import s1Image from "../assets/images/s-1.webp";

const ServiceDetailsPage = () => {
  const breadcrumbs = [
    { label: "Home", link: "/" },
    { label: <i className="fa-solid fa-angle-right"></i>, link: null },
    { label: "Service Details", link: null },
  ];
  return (
    <>
      <PageHeader
        title="Service Details"
        breadcrumbs={breadcrumbs}
      ></PageHeader>
      <section className="service_details">
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-lg-7">
              <div className="service_details_head">
                <h2 className="text_5xl">
                POP. CUT. ROLL. REPEAT.
                Big ideas. Brighter execution. Films that shout.</h2>
              </div>
              <div className="service_details_thumb">
                <img src={mainImage} alt="Digital Transformation" />
              </div>
              <div className="service_details_txt">
                <p className="text_lg">
                We’re a production studio that paints in light and sound  militant about craft, reckless about boring.

                </p>
              </div>

              <div className="row">
                <div className="col-lg-4">
                  <div className="service_details_item">
                    <span className="icon">
                      <svg
                        width="40"
                        height="40"
                        viewBox="0 0 40 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M29.3511 0H10.6667C3.85778 0 0 3.85778 0 10.6667V29.3333C0 36.1422 3.85778 40 10.6667 40H29.3511C36.16 40 40 36.1422 40 29.3333V10.6667C40 3.85778 36.16 0 29.3511 0Z"
                          fill="url(#paint0_linear_2489_22109)"
                        />
                        <path
                          d="M8.5 12C7.67157 12 7 12.6716 7 13.5V26.5C7 27.3284 7.67157 28 8.5 28H31.5C32.3284 28 33 27.3284 33 26.5V13.5C33 12.6716 32.3284 12 31.5 12H8.5ZM12 16H28V18H12V16ZM12 20H24V22H12V20ZM12 24H20V26H12V24Z"
                          fill="white"
                        />
                        <path
                          d="M28 8C29.1046 8 30 8.89543 30 10C30 11.1046 29.1046 12 28 12C26.8954 12 26 11.1046 26 10C26 8.89543 26.8954 8 28 8Z"
                          fill="white"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_2489_22109"
                            x1="1.13475"
                            y1="33.8462"
                            x2="44.4562"
                            y2="28.8605"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#6427FF" />
                            <stop offset="1" stopColor="#7D51ED" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </span>
                    <Link to="#" className="text_xl">
                      Pre-Production
                    </Link>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="service_details_item">
                    <span className="icon">
                      <svg
                        width="37"
                        height="46"
                        viewBox="0 0 37 46"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M29.3265 30.1924H7.99318C1.18425 30.1924 0 31.7507 0 37.984C0 44.2197 1.38979 45.833 7.99318 45.833H29.3265C35.9299 45.833 37.3197 44.277 37.3197 38.0413C37.3197 31.8057 35.9299 30.1924 29.3265 30.1924Z"
                          fill="url(#paint0_linear_production)"
                        />
                        <path
                          d="M8.5 2C5.46243 2 3 4.46243 3 7.5V22.5C3 25.5376 5.46243 28 8.5 28H28.5C31.5376 28 34 25.5376 34 22.5V7.5C34 4.46243 31.5376 2 28.5 2H8.5Z"
                          fill="url(#paint1_linear_production)"
                        />
                        <path
                          d="M12 8L26 15L12 22V8Z"
                          fill="white"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_production"
                            x1="1.0398"
                            y1="43.4268"
                            x2="38.5348"
                            y2="33.3146"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#6427FF" />
                            <stop offset="1" stopColor="#7D51ED" />
                          </linearGradient>
                          <linearGradient
                            id="paint1_linear_production"
                            x1="6.8873"
                            y1="20.5235"
                            x2="33.1563"
                            y2="17.5003"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#6427FF" />
                            <stop offset="1" stopColor="#7D51ED" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </span>
                    <Link to="#" className="text_xl">
                      Production
                    </Link>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="service_details_item">
                    <span className="icon">
                      <svg
                        width="51"
                        height="41"
                        viewBox="0 0 51 41"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2 2C0.895431 2 0 2.89543 0 4V37C0 38.1046 0.895431 39 2 39H49C50.1046 39 51 38.1046 51 37V4C51 2.89543 50.1046 2 49 2H2Z"
                          fill="url(#paint0_linear_postproduction)"
                        />
                        <path
                          d="M6 8H45V33H6V8Z"
                          fill="white"
                        />
                        <path
                          d="M8 10H43V12H8V10ZM8 14H39V16H8V14ZM8 18H35V20H8V18ZM8 22H31V24H8V22ZM8 26H27V28H8V26ZM8 30H23V32H8V30Z"
                          fill="url(#paint1_linear_postproduction)"
                        />
                        <path
                          d="M45 10C46.1046 10 47 10.8954 47 12C47 13.1046 46.1046 14 45 14C43.8954 14 43 13.1046 43 12C43 10.8954 43.8954 10 45 10Z"
                          fill="white"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_postproduction"
                            x1="1.44681"
                            y1="34.5231"
                            x2="56.2784"
                            y2="26.6352"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#6427FF" />
                            <stop offset="1" stopColor="#7D51ED" />
                          </linearGradient>
                          <linearGradient
                            id="paint1_linear_postproduction"
                            x1="19.6373"
                            y1="24.6508"
                            x2="33.0801"
                            y2="23.0943"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#6427FF" />
                            <stop offset="1" stopColor="#7D51ED" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </span>
                    <Link to="#" className="text_xl">
                      Post-Production
                    </Link>
                  </div>
                </div>
              </div>

              <div className="service_details_txt">
                <p className="text_lg">
                Imagine a comic-strip panel where every frame is a film poster. That’s our approach: theatrical boldness, cinematic discipline. We take projects from scribbles on a napkin to festival-ready masters — with scriptsmiths, scouts, crews and mixers who love the weird work as much as the clean one.
                </p>
              </div>

              <div className="row">
                <div className="col-lg-6">
                  <div className="our_goal_item">
                    <h2>Our Goal</h2>
                    <ul>
                      <li>
                        <span>
                          <svg
                            width="14"
                            height="12"
                            viewBox="0 0 14 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1 6.76923L5.8 10.2308L13 1"
                              stroke="url(#paint0_linear_2489_22259)"
                              strokeWidth="2"
                              strokeLinecap="round"
                            />
                            <defs>
                              <linearGradient
                                id="paint0_linear_2489_22259"
                                x1="1.34043"
                                y1="8.81065"
                                x2="14.2207"
                                y2="6.88363"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop stopColor="#6427FF" />
                                <stop offset="1" stopColor="#7D51ED" />
                              </linearGradient>
                            </defs>
                          </svg>
                        </span>
                        Various analysis options.
                      </li>
                      <li>
                        <span>
                          <svg
                            width="14"
                            height="12"
                            viewBox="0 0 14 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1 6.76923L5.8 10.2308L13 1"
                              stroke="url(#paint0_linear_2489_22259)"
                              strokeWidth="2"
                              strokeLinecap="round"
                            />
                            <defs>
                              <linearGradient
                                id="paint0_linear_2489_22259"
                                x1="1.34043"
                                y1="8.81065"
                                x2="14.2207"
                                y2="6.88363"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop stopColor="#6427FF" />
                                <stop offset="1" stopColor="#7D51ED" />
                              </linearGradient>
                            </defs>
                          </svg>
                        </span>
                        Page Load (time, number of requests).
                      </li>
                      <li>
                        <span>
                          <svg
                            width="14"
                            height="12"
                            viewBox="0 0 14 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1 6.76923L5.8 10.2308L13 1"
                              stroke="url(#paint0_linear_2489_22259)"
                              strokeWidth="2"
                              strokeLinecap="round"
                            />
                            <defs>
                              <linearGradient
                                id="paint0_linear_2489_22259"
                                x1="1.34043"
                                y1="8.81065"
                                x2="14.2207"
                                y2="6.88363"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop stopColor="#6427FF" />
                                <stop offset="1" stopColor="#7D51ED" />
                              </linearGradient>
                            </defs>
                          </svg>
                        </span>
                        Big data analysis.
                      </li>
                      <li>
                        <span>
                          <svg
                            width="14"
                            height="12"
                            viewBox="0 0 14 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1 6.76923L5.8 10.2308L13 1"
                              stroke="url(#paint0_linear_2489_22259)"
                              strokeWidth="2"
                              strokeLinecap="round"
                            />
                            <defs>
                              <linearGradient
                                id="paint0_linear_2489_22259"
                                x1="1.34043"
                                y1="8.81065"
                                x2="14.2207"
                                y2="6.88363"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop stopColor="#6427FF" />
                                <stop offset="1" stopColor="#7D51ED" />
                              </linearGradient>
                            </defs>
                          </svg>
                        </span>
                        Lorem analysis somthing
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="our_goal_item">
                    <h2>The Challange</h2>
                    <p>
                      Evernote Web offers a complete lineup of features from any
                      major Maecena quis interdum, orci at euis dapibus, mass
                      ante pharetra tellus done
                    </p>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-6">
                  <div className="ratio_item">
                    <div className="ratio_item_text">
                      <h4 className="text_2xl">Success Ratio</h4>
                      <p>We’re best for our success work ration.</p>
                      <Link to="#"> Details </Link>
                    </div>

                    <div className="ratio_item_inner">
                      <h2 className="text_xl">86%</h2>
                      <span className="circel">
                        <svg
                          width="114"
                          height="114"
                          viewBox="0 0 114 114"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M18.6423 18.991C8.97248 28.7489 3 42.177 3 57C3 86.8234 27.1766 111 57 111C86.8234 111 111 86.8234 111 57C111 27.1766 86.8234 3 57 3"
                            stroke="url(#paint0_linear_2489_22174)"
                            strokeWidth="6"
                            strokeLinecap="round"
                          />
                          <defs>
                            <linearGradient
                              id="paint0_linear_2489_22174"
                              x1="6.06383"
                              y1="94.3846"
                              x2="123.032"
                              y2="80.9234"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stopColor="#6427FF" />
                              <stop offset="1" stopColor="#7D51ED" />
                            </linearGradient>
                          </defs>
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="ratio_item">
                    <div className="ratio_item_text">
                      <h4 className="text_2xl">Failure Ratio</h4>
                      <p>We’ve very low failur ratio in our work history.</p>
                      <Link to="#"> Details </Link>
                    </div>
                    <div className="ratio_item_inner">
                      <h2 className="text_xl">44%</h2>
                      <span className="circel two">
                        <svg
                          width="57"
                          height="109"
                          viewBox="0 0 57 109"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M23.2505 105.752C41.4363 97.0635 54 78.4989 54 57C54 27.1766 29.8234 3 0 3"
                            stroke="url(#paint0_linear_2489_22164)"
                            strokeWidth="6"
                            strokeLinejoin="round"
                          />
                          <defs>
                            <linearGradient
                              id="paint0_linear_2489_22164"
                              x1="-4.5"
                              y1="3"
                              x2="70.6916"
                              y2="31.9186"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stopColor="#FF172E" />
                              <stop offset="1" stopColor="#FF868B" />
                            </linearGradient>
                          </defs>
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row mg_top_40px">
                <div className="col-lg-6 col-md-6">
                  <div className="s_thumb_main">
                    <div className="s_thumb">
                      <img src={s3Image} alt="Service thumbnail 3" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="s_thumb_main">
                    <div className="s-thumb-two">
                      <img src={s2Image} alt="Service thumbnail 2" />
                    </div>
                    <div className="s-thumb-two three">
                      <img src={s1Image} alt="Service thumbnail 1" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-12">
                  <div className="s_text_main">
                    <h2>Easy Process for Service</h2>
                    <p className="text_lg">
                      One touch of a red-hot stove is usually all we need to
                      avoid that kind of discomfort in quis elit future. The
                      same Duis aute irure dolor in reprehenderit .
                    </p>
                    <ul>
                      <li>
                        <span>
                          <svg
                            width="16"
                            height="13"
                            viewBox="0 0 16 13"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1 6.37099L5.57333 11.467L14.72 1.66699"
                              stroke="#111827"
                              strokeWidth="2"
                              strokeLinecap="round"
                            />
                          </svg>
                        </span>
                        Find the problem first
                      </li>
                      <li>
                        <span>
                          <svg
                            width="16"
                            height="13"
                            viewBox="0 0 16 13"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1 6.37099L5.57333 11.467L14.72 1.66699"
                              stroke="#111827"
                              strokeWidth="2"
                              strokeLinecap="round"
                            />
                          </svg>
                        </span>
                        Make research and find out the solution
                      </li>
                      <li>
                        <span>
                          <svg
                            width="16"
                            height="13"
                            viewBox="0 0 16 13"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1 6.37099L5.57333 11.467L14.72 1.66699"
                              stroke="#111827"
                              strokeWidth="2"
                              strokeLinecap="round"
                            />
                          </svg>
                        </span>
                        Finalise the solution & apply.
                      </li>
                    </ul>
                    <p className="text_lg">
                      One touch of a red-hot stove is usually all we need to
                      avoid that kind of discomfort in quis future. The same
                      Duis aute irure dolor in reprehenderit. sunt in culpa qui
                      official deserunt mollit anim id avoid est laborum.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xxl-4 col-lg-5 res_mt">
              <div className="card_item">
                <h3>Categories</h3>
                <ul>
                  <li className="text_2xl">
                  (Concept & Development)
                  </li>
                  <li className="text_2xl">
                  The Sketchboard (Pre-prep & Story)
                  
                  </li>
                  <li className="text_2xl">
                  Cast & Characters (Casting + Talent)
                  
                  </li>
                  <li className="text_2xl">
                  The Location Hunt (Scouting & Permits)
                  
                  </li>
                  <li className="text_2xl">
                  Lights Out (Cinematography & Lighting)
                  
                  </li>
                  <li className="text_2xl">
                  Boom & Breath (Production Sound)
                    
                  </li>
                  <li className="text_2xl">
                  Set Candy (Production Design & Wardrobe)
                  
                  </li>
                  <li className="text_2xl">
                  Shoot Day (Full Production Services)
                  
                  </li>
                  <li className="text_2xl">
                  Cut & Rhythm (Editing & Offline)
                  
                  </li>
                  <li className="text_2xl">
                  Colour Punch (Grading & Finish)
                  
                  </li>
                  <li className="text_2xl">
                  Spark FX (VFX & Motion Graphics)
                     
                  </li>
                  <li className="text_2xl">
                  Ear Candy (Sound Design & Score)
                 
                  </li>  <li className="text_2xl">
                  Rollout Riot (Marketing & Release)
                 
                  </li>  <li className="text_2xl">
                  Festival Kit (DCPs, Deliverables & Distribution)
                  </li>  

                </ul>
              </div>

              <div className="card_item mg_top_30px">
                <h3>Contact Us</h3>
                <p className="text_lg">
                  Collaboratively engineer prospective imperatives with
                  transparent technology.
                </p>

                <form className="card_form">
                  <div className="card_form_item">
                    <label htmlFor="cardFormName" className="sr-only">
                      Enter Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="cardFormName"
                      name="cardFormName"
                      placeholder="Enter Name"
                      autoComplete="name"
                    />
                  </div>
                  <div className="card_form_item">
                    <label htmlFor="cardFormEmail" className="sr-only">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="cardFormEmail"
                      name="cardFormEmail"
                      placeholder="Email"
                      autoComplete="email"
                    />
                  </div>
                  <div className="card_form_item">
                    <label htmlFor="cardFormMessage" className="sr-only">
                      Write Message
                    </label>
                    <textarea
                      className="form-control"
                      id="cardFormMessage"
                      name="cardFormMessage"
                      rows="5"
                      placeholder="Write Message"
                    ></textarea>
                  </div>

                  <button type="submit" className="sara-btn">
                    Contact Now
                  </button>
                </form>
              </div>

              <div className="card_item mg_top_30px">
                <h3>Tags</h3>
                <div className="tag_item">
                  <Link to="#" className="tag_btn">
                    Service System
                  </Link>
                  <Link to="#" className="tag_btn">
                    Digital
                  </Link>
                  <Link to="#" className="tag_btn">
                    Marketing
                  </Link>
                  <Link to="#" className="tag_btn">
                    SEO Ranking
                  </Link>
                  <Link to="#" className="tag_btn">
                    Service Tools
                  </Link>
                  <Link to="#" className="tag_btn">
                    SEO
                  </Link>
                  <Link to="#" className="tag_btn">
                    Service System
                  </Link>
                  <Link to="#" className="tag_btn">
                    Digital
                  </Link>
                  <Link to="#" className="tag_btn">
                    Marketing
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceDetailsPage;
