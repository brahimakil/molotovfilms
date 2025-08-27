import React from "react";
import PageHeader from "../component/PageHeader";
import { Link } from "react-router-dom";

// Import images
import team1Image from "../assets/images/team-1.webp";
import profile1Svg from "../assets/images/profile-1.svg";

const SingleMemberPage = () => {
  const breadcrumbs = [
    { label: "Home", link: "/" },
    { label: <i className="fa-solid fa-angle-right"></i>, link: null },
    { label: "Single Member", link: null },
  ];
  return (
    <>
      <PageHeader title="Single Member" breadcrumbs={breadcrumbs}></PageHeader>
      <section className="team_single">
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-lg-8">
              <div className="team_frofile">
                <div className="team_frofile_thumb">
                  <img src={team1Image} alt="Team Member" />
                </div>

                <div className="team_frofile_info">
                  <h3>Mathews Firlo.</h3>
                  <p>Sales & Broker</p>

                  <ul>
                    <li>
                      <Link to="#">
                        {" "}
                        Location: <span>Spain, Barcelona </span>{" "}
                      </Link>
                    </li>
                    <li>
                      <a href="tel:+21456987330">
                        Phone: <span>+21 456 987 330</span>
                      </a>
                    </li>
                    <li>
                      <a href="mailto:mathfir@support.com">
                        Email: <span>mathfir@support.com</span>
                      </a>
                    </li>
                    <li>
                      <a href="mailto:mathfir@support.com">
                        Qualification: <span> Master Degree</span>
                      </a>
                    </li>
                  </ul>

                  <ul className="social-icon">
                    <li>
                      <a
                        href="https://www.facebook.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span>
                          <svg
                            width="26"
                            height="26"
                            viewBox="0 0 26 26"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M17.3 11.8443V9.97852C17.3 9.57645 17.411 9.19315 17.6287 8.92145C17.8329 8.66668 18.1649 8.46554 18.7208 8.46554H20.3966H20.8966V7.96554V4.31895V3.8195L20.3972 3.81895L17.873 3.81615H17.8724C15.984 3.81615 14.5217 4.38066 13.5341 5.41305C12.5503 6.44131 12.1 7.86841 12.1 9.47318V11.8429H9.8H9.3V12.3429V15.8075V16.3075H9.8H12.1V25.1064H2.8C1.53593 25.1064 0.5 24.0716 0.5 22.8067V3.20887C0.5 1.94523 1.53609 0.90918 2.8 0.90918H22.4C23.6639 0.90918 24.7 1.94523 24.7 3.20887V22.8067C24.7 24.0716 23.6641 25.1064 22.4 25.1064H17.3V16.3075H19.6H19.9982L20.0873 15.9194L20.8825 12.4562L21.023 11.8443H20.3952H17.3Z"
                              fill="black"
                              stroke="#323B49"
                            ></path>
                          </svg>
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
                          <svg
                            width="25"
                            height="20"
                            viewBox="0 0 25 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M23.6016 1.01787C22.6439 1.69327 21.5837 2.20984 20.4616 2.5477C19.8593 1.85529 19.0589 1.36452 18.1686 1.14178C17.2783 0.919038 16.3411 0.975067 15.4836 1.30229C14.6262 1.62951 13.89 2.21214 13.3745 2.97137C12.8591 3.7306 12.5893 4.6298 12.6016 5.54737V6.54726C10.8442 6.59282 9.10284 6.20311 7.53257 5.41283C5.96231 4.62255 4.61188 3.45623 3.60156 2.01776C3.60156 2.01776 -0.398438 11.0168 8.60156 15.0163C6.54209 16.4141 4.08872 17.115 1.60156 17.0161C10.6016 22.0155 21.6016 17.0161 21.6016 5.51737C21.6006 5.23885 21.5739 4.96103 21.5216 4.68746C22.5422 3.68107 23.2624 2.41043 23.6016 1.01787Z"
                              stroke="#323B49"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                          </svg>
                        </span>
                      </a>
                    </li>

                    <li>
                      <a
                        href="https://www.google.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span>
                          <svg
                            width="23"
                            height="22"
                            viewBox="0 0 23 22"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M16.6016 1.00781H6.60156C3.84014 1.00781 1.60156 3.24614 1.60156 6.00726V16.0062C1.60156 18.7673 3.84014 21.0056 6.60156 21.0056H16.6016C19.363 21.0056 21.6016 18.7673 21.6016 16.0062V6.00726C21.6016 3.24614 19.363 1.00781 16.6016 1.00781Z"
                              stroke="#323B49"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                            <path
                              d="M15.5974 10.3771C15.7208 11.2094 15.5786 12.0594 15.1911 12.8062C14.8036 13.553 14.1905 14.1585 13.439 14.5368C12.6875 14.9151 11.8358 15.0467 11.0051 14.9131C10.1745 14.7794 9.40712 14.3872 8.8122 13.7923C8.21728 13.1974 7.8251 12.43 7.69143 11.5994C7.55777 10.7687 7.68943 9.91703 8.06769 9.16551C8.44595 8.41399 9.05155 7.80088 9.79835 7.41338C10.5451 7.02588 11.3951 6.88373 12.2274 7.00714C13.0763 7.13302 13.8622 7.5286 14.4691 8.13544C15.0759 8.74229 15.4715 9.52821 15.5974 10.3771Z"
                              stroke="#323B49"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                            <path
                              d="M17.1016 5.50684H17.1116"
                              stroke="#323B49"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                          </svg>
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
                          <svg
                            width="27"
                            height="26"
                            viewBox="0 0 27 26"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              x="1.10156"
                              y="0.5"
                              width="25"
                              height="25"
                              stroke="#323B49"
                            ></rect>
                            <path
                              d="M17.9375 8.66699C19.6614 8.66699 21.3147 9.35181 22.5337 10.5708C23.7527 11.7898 24.4375 13.4431 24.4375 15.167V22.7503H20.1042V15.167C20.1042 14.5924 19.8759 14.0413 19.4696 13.6349C19.0632 13.2286 18.5121 13.0003 17.9375 13.0003C17.3629 13.0003 16.8118 13.2286 16.4054 13.6349C15.9991 14.0413 15.7708 14.5924 15.7708 15.167V22.7503H11.4375V15.167C11.4375 13.4431 12.1223 11.7898 13.3413 10.5708C14.5603 9.35181 16.2136 8.66699 17.9375 8.66699Z"
                              stroke="black"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                            <path
                              d="M7.09896 9.75H2.76562V22.75H7.09896V9.75Z"
                              stroke="black"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                            <path
                              d="M4.93229 6.50033C6.12891 6.50033 7.09896 5.53028 7.09896 4.33366C7.09896 3.13704 6.12891 2.16699 4.93229 2.16699C3.73567 2.16699 2.76562 3.13704 2.76562 4.33366C2.76562 5.53028 3.73567 6.50033 4.93229 6.50033Z"
                              stroke="black"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                          </svg>
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="s_text_main">
                <h2>Overview</h2>
                <p className="text_lg">
                  Before establishing Beratung in 2001, Mathew founded Silicon
                  Valley internet companies and later held management roles at
                  Salomon in New York.
                </p>
                <p className="text_lg">
                  Risk management and compliance, when approached strategically,
                  have the potential to go beyond mitigating threats and
                  protecting a company’s operations & reputation.They can
                  actually generate value and create opportunities.
                </p>
              </div>

              <div className="quote_item">
                <span>
                  <svg
                    width="64"
                    height="64"
                    viewBox="0 0 64 64"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="31.9994"
                      cy="31.9564"
                      r="31.9564"
                      fill="url(#paint0_linear_2481_3427)"
                    ></circle>
                    <path
                      d="M33.666 39.9209C36.5067 33.4738 42.4721 34.0344 45.3177 37.5702C48.1633 41.1059 44.6027 45.6672 41.4779 46.2278C38.3532 46.7884 33.382 44.6861 33.3906 37.6552C33.4022 28.2881 43.2645 19.3137 44.3483 18.5256"
                      stroke="white"
                      strokeWidth="3"
                      strokeLinecap="round"
                    ></path>
                    <path
                      d="M16.9942 39.9209C19.8349 33.4738 25.8003 34.0344 28.6459 37.5702C31.4914 41.1059 27.9308 45.6672 24.806 46.2278C21.6813 46.7884 16.7101 44.6861 16.7188 37.6552C16.7303 28.2881 26.5926 19.3137 27.6764 18.5256"
                      stroke="white"
                      strokeWidth="3"
                      strokeLinecap="round"
                    ></path>
                    <defs>
                      <linearGradient
                        id="paint0_linear_2481_3427"
                        x1="-5.2831"
                        y1="-2.33775e-07"
                        x2="61.1333"
                        y2="48.7222"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#FF172E"></stop>
                        <stop offset="1" stopColor="#FF868B"></stop>
                      </linearGradient>
                    </defs>
                  </svg>
                </span>

                <h4>
                  Quick solutions coupled with extraordinary performance—a
                  recommendation that's great.
                </h4>

                <div className="blog_list_view_item-inner">
                  <div className="blog_item_thumb_over_thumb">
                    <img src={profile1Svg} alt="Profile thumbnail" />
                  </div>
                  <div className="blog_item_thumb_over_txt">
                    <Link to="#">
                      {" "}
                      by <span>Sara Samir</span>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="s_text_main">
                <h2>Easy Process for Service</h2>
                <p className="text_lg">
                  One touch of a red-hot stove is usually all we need to avoid
                  that kind of discomfort in quis elit future. The same Duis
                  aute irure dolor in reprehenderit .
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
                        ></path>
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
                        ></path>
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
                        ></path>
                      </svg>
                    </span>
                    Finalise the solution &amp; apply.
                  </li>
                </ul>

                <p className="text_lg">
                  One touch of a red-hot stove is usually all we need to avoid
                  that kind of discomfort in quis future. The same Duis aute
                  irure dolor in reprehenderit. sunt in culpa qui official
                  deserunt mollit anim id avoid est laborum.
                </p>
              </div>
            </div>

            <div className="col-xxl-4 col-lg-4 res_mt res_mt_two">
              <div className="sticky">
                <div className="card_item">
                  <h3>Search Anything</h3>

                  <div className="sarch_item">
                    <label htmlFor="searchAnythingInput" className="sr-only">
                      Search Anything
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="searchAnythingInput"
                      name="searchAnythingInput"
                      placeholder="Enter Name"
                    />

                    <button className="sarch_btn" type="submit">
                      <span>
                        <svg
                          width="18"
                          height="19"
                          viewBox="0 0 18 19"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M17 17.0125L13.2223 13.2251M15.3158 8.16347C15.3158 10.0633 14.5617 11.8854 13.2193 13.2288C11.8769 14.5722 10.0563 15.3269 8.1579 15.3269C6.2595 15.3269 4.43886 14.5722 3.0965 13.2288C1.75413 11.8854 1 10.0633 1 8.16347C1 6.2636 1.75413 4.44154 3.0965 3.09813C4.43886 1.75472 6.2595 1 8.1579 1C10.0563 1 11.8769 1.75472 13.2193 3.09813C14.5617 4.44154 15.3158 6.2636 15.3158 8.16347Z"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                          ></path>
                        </svg>
                      </span>
                    </button>
                  </div>
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
        </div>
      </section>
    </>
  );
};

export default SingleMemberPage;
