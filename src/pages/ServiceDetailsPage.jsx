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
                  Digital Transformation with Artificial Intelligent
                </h2>
              </div>
              <div className="service_details_thumb">
                <img src={mainImage} alt="Digital Transformation" />
              </div>
              <div className="service_details_txt">
                <p className="text_lg">
                  Seamlessly negotiate multifunctional solutions after
                  high-payoff internal or "organic" sources. Phosfluorescently
                  incentivize customized web services via superior services.
                  Synergistically empower progressive imperatives with wireless
                  metrics. Monotonectally formulate high-payoff meta-services
                  through business innovation. Compellingly empower dynamic
                  initiatives through enterprise deliverables.
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
                          d="M10.7393 14.738C9.8326 14.738 9.08594 15.4847 9.08594 16.4091V30.1514C9.08594 31.058 9.8326 31.8047 10.7393 31.8047C11.6637 31.8047 12.4104 31.058 12.4104 30.1514V16.4091C12.4104 15.4847 11.6637 14.738 10.7393 14.738Z"
                          fill="white"
                        />
                        <path
                          d="M20.0713 8.17798C19.1646 8.17798 18.418 8.92465 18.418 9.84909V30.1513C18.418 31.058 19.1646 31.8046 20.0713 31.8046C20.9957 31.8046 21.7424 31.058 21.7424 30.1513V9.84909C21.7424 8.92465 20.9957 8.17798 20.0713 8.17798Z"
                          fill="white"
                        />
                        <path
                          d="M29.2805 21.9912C28.356 21.9912 27.6094 22.7379 27.6094 23.6623V30.1512C27.6094 31.0579 28.356 31.8045 29.2627 31.8045C30.1872 31.8045 30.9338 31.0579 30.9338 30.1512V23.6623C30.9338 22.7379 30.1872 21.9912 29.2805 21.9912Z"
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
                      {" "}
                      C++ Coding{" "}
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
                          d="M18.3265 30.1924C8.4425 30.1924 0 31.7507 0 37.984C0 44.2197 8.38979 45.833 18.3265 45.833C28.2104 45.833 36.6529 44.277 36.6529 38.0413C36.6529 31.8057 28.2654 30.1924 18.3265 30.1924Z"
                          fill="url(#paint0_linear_2489_22120)"
                        />
                        <path
                          opacity="0.4"
                          d="M18.3267 24.255C25.0596 24.255 30.4542 18.8581 30.4542 12.1275C30.4542 5.39687 25.0596 0 18.3267 0C11.5961 0 6.19922 5.39687 6.19922 12.1275C6.19922 18.8581 11.5961 24.255 18.3267 24.255Z"
                          fill="url(#paint1_linear_2489_22120)"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_2489_22120"
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
                            id="paint1_linear_2489_22120"
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
                      {" "}
                      AI Technology{" "}
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
                          opacity="0.4"
                          d="M25.5 0C30.7741 0 35.7746 1.82982 40.1283 5.21745C44.482 8.57789 48.1888 13.5011 50.8507 19.6582C51.0498 20.1255 51.0498 20.672 50.8507 21.1171C45.5268 33.4313 36.0483 40.8 25.5 40.8H25.4751C14.9517 40.8 5.47317 33.4313 0.149268 21.1171C-0.0497561 20.672 -0.0497561 20.1255 0.149268 19.6582C5.47317 7.34153 14.9517 0 25.4751 0H25.5ZM25.5 10.5091C20.002 10.5091 15.5488 14.9353 15.5488 20.4C15.5488 25.84 20.002 30.2662 25.5 30.2662C30.9732 30.2662 35.4263 25.84 35.4263 20.4C35.4263 14.9353 30.9732 10.5091 25.5 10.5091Z"
                          fill="url(#paint0_linear_2489_22130)"
                        />
                        <path
                          d="M31.6993 20.392C31.6993 23.7797 28.913 26.5491 25.5047 26.5491C22.0715 26.5491 19.2852 23.7797 19.2852 20.392C19.2852 19.9717 19.3349 19.5785 19.4095 19.1829H19.5339C22.2954 19.1829 24.5344 17.0069 24.6339 14.2844C24.9076 14.2374 25.2061 14.2102 25.5047 14.2102C28.913 14.2102 31.6993 16.9797 31.6993 20.392Z"
                          fill="url(#paint1_linear_2489_22130)"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_2489_22130"
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
                            id="paint1_linear_2489_22130"
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
                      {" "}
                      Auto Algorithm{" "}
                    </Link>
                  </div>
                </div>
              </div>

              <div className="service_details_txt">
                <p className="text_lg">
                  Assertively synergize emerging e-business through dynamic
                  expertise. Objectively pursue vertical e-markets rather than
                  multifunctional e-markets. Intrinsicly seize enterprise-wide
                  growth strategies rather than 24/365 deliverables.
                  Conveniently integrate revolutionary internal.
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
                    Digital Service <span className="text_lg">(12)</span>
                  </li>
                  <li className="text_2xl">
                    IT Service<span className="text_lg">(20)</span>
                  </li>
                  <li className="text_2xl">
                    SEO Marketing <span className="text_lg">(65)</span>
                  </li>
                  <li className="text_2xl">
                    Digital Service <span className="text_lg">(65)</span>
                  </li>
                  <li className="text_2xl">
                    Digital Service <span className="text_lg">(65)</span>
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
