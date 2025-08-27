import React from "react";
import Slider from "react-slick";

import team1 from "../assets/images/team-1.webp";
import team2 from "../assets/images/team-2.webp";
import team3 from "../assets/images/team-3.webp";
import team4 from "../assets/images/team-4.webp";
import { Link } from "react-router-dom";

const teamMembers = [
  { name: "Osama Sam", role: "UX- UI Designer", image: team1 },
  { name: "Dianne Russell", role: "Nursing Assistant", image: team2 },
  { name: "Courtney Henry", role: "Web Designer", image: team3 },
  { name: "Marvin McKinney", role: "President of Sales", image: team4 },
  { name: "Osama Sam", role: "UX- UI Designer", image: team1 },
];

const Team = () => {
  const settings = {
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    speed: 3000,
    autoplay: true,
    dots: true,
    autoplaySpeed: 2000,
    responsive: [
      { breakpoint: 1199, settings: { slidesToShow: 3 } },
      { breakpoint: 991, settings: { slidesToShow: 2 } },
      { breakpoint: 767, settings: { slidesToShow: 1 } },
    ],
  };
  return (
    <section className="team">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xxl-5">
            <div className="team_head">
              <h2 className="main_titel_two">
                Best of our Special <span>Team Member</span>
              </h2>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-xxl-12">
            <Slider className="team_slick" {...settings}>
              {teamMembers.map((member, index) => (
                <div className="team_item" key={index}>
                  <div className="team_item_thumb_main">
                    <div className="team_item_thumb">
                      <img src={member.image} alt={member.name} />
                    </div>
                    <div className="team-icon_main">
                      <div className="team-icon">
                        <span>
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 14 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M7 1V13M13 7L1 7"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                        <ul className="team_social_icon">
                          <li>
                            <a
                              href="https://x.com"
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
                              href="https://www.tiktok.com"
                              target="_blank"
                              rel="noopener noreferrer"
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
                              rel="noopener noreferrer"
                            >
                              <span>
                                <i className="fa-brands fa-instagram"></i>
                              </span>
                            </a>
                          </li>
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
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="team_item_txt">
                    <Link to="/single-member" className="text_2xl">
                      {member.name}
                    </Link>
                    <p className="text_lg">{member.role}</p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
