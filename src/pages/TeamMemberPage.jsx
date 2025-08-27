import React from "react";
import PageHeader from "../component/PageHeader";
import { Link } from "react-router-dom";

// Import images for team members
import team1Image from "../assets/images/team-1.webp";
import team2Image from "../assets/images/team-2.webp";
import team3Image from "../assets/images/team-3.webp";
import team4Image from "../assets/images/team-4.webp";
import team5Image from "../assets/images/team-5.webp";
import team6Image from "../assets/images/team-6.webp";
import team7Image from "../assets/images/team-7.webp";
import team8Image from "../assets/images/team-8.webp";
import team9Image from "../assets/images/team-9.webp";
import team10Image from "../assets/images/team-10.webp";
import team11Image from "../assets/images/team-11.webp";
import team12Image from "../assets/images/team-12.webp";

const TeamMemberPage = () => {
  const breadcrumbs = [
    { label: "Home", link: "/" },
    { label: <i className="fa-solid fa-angle-right"></i>, link: null },
    { label: "Team Member", link: null },
  ];

  const teamMembersData = [
    {
      id: 1,
      image: team1Image,
      name: "Osama Sam",
      role: "UX- UI Designer",
      social: [
        {
          platform: "twitter",
          url: "https://x.com",
          iconClass: "fa-brands fa-twitter",
        },
        {
          platform: "tiktok",
          url: "https://www.tiktok.com",
          iconClass: "fa-brands fa-tiktok",
        },
        {
          platform: "instagram",
          url: "https://www.instagram.com/",
          iconClass: "fa-brands fa-instagram",
        },
        {
          platform: "facebook",
          url: "https://www.facebook.com/",
          iconClass: "fa-brands fa-facebook-f",
        },
      ],
    },
    {
      id: 2,
      image: team2Image,
      name: "Dianne Russell",
      role: "Nursing Assistant",
      social: [
        {
          platform: "twitter",
          url: "https://x.com",
          iconClass: "fa-brands fa-twitter",
        },
        {
          platform: "tiktok",
          url: "https://www.tiktok.com",
          iconClass: "fa-brands fa-tiktok",
        },
        {
          platform: "instagram",
          url: "https://www.instagram.com/",
          iconClass: "fa-brands fa-instagram",
        },
        {
          platform: "facebook",
          url: "https://www.facebook.com/",
          iconClass: "fa-brands fa-facebook-f",
        },
      ],
    },
    {
      id: 3,
      image: team3Image,
      name: "Courtney Henry",
      role: "Web Designer",
      social: [
        {
          platform: "twitter",
          url: "https://x.com",
          iconClass: "fa-brands fa-twitter",
        },
        {
          platform: "tiktok",
          url: "https://www.tiktok.com",
          iconClass: "fa-brands fa-tiktok",
        },
        {
          platform: "instagram",
          url: "https://www.instagram.com/",
          iconClass: "fa-brands fa-instagram",
        },
        {
          platform: "facebook",
          url: "https://www.facebook.com/",
          iconClass: "fa-brands fa-facebook-f",
        },
      ],
    },
    {
      id: 4,
      image: team4Image,
      name: "Marvin McKinney",
      role: "President of Sales",
      social: [
        {
          platform: "twitter",
          url: "https://x.com",
          iconClass: "fa-brands fa-twitter",
        },
        {
          platform: "tiktok",
          url: "https://www.tiktok.com",
          iconClass: "fa-brands fa-tiktok",
        },
        {
          platform: "instagram",
          url: "https://www.instagram.com/",
          iconClass: "fa-brands fa-instagram",
        },
        {
          platform: "facebook",
          url: "https://www.facebook.com/",
          iconClass: "fa-brands fa-facebook-f",
        },
      ],
    },
    {
      id: 5,
      image: team5Image,
      name: "Osama Sam",
      role: "UX- UI Designer",
      social: [
        {
          platform: "twitter",
          url: "https://x.com",
          iconClass: "fa-brands fa-twitter",
        },
        {
          platform: "tiktok",
          url: "https://www.tiktok.com",
          iconClass: "fa-brands fa-tiktok",
        },
        {
          platform: "instagram",
          url: "https://www.instagram.com/",
          iconClass: "fa-brands fa-instagram",
        },
        {
          platform: "facebook",
          url: "https://www.facebook.com/",
          iconClass: "fa-brands fa-facebook-f",
        },
      ],
    },
    {
      id: 6,
      image: team6Image,
      name: "Dianne Russell",
      role: "Nursing Assistant",
      social: [
        {
          platform: "twitter",
          url: "https://x.com",
          iconClass: "fa-brands fa-twitter",
        },
        {
          platform: "tiktok",
          url: "https://www.tiktok.com",
          iconClass: "fa-brands fa-tiktok",
        },
        {
          platform: "instagram",
          url: "https://www.instagram.com/",
          iconClass: "fa-brands fa-instagram",
        },
        {
          platform: "facebook",
          url: "https://www.facebook.com/",
          iconClass: "fa-brands fa-facebook-f",
        },
      ],
    },
    {
      id: 7,
      image: team7Image,
      name: "Courtney Henry",
      role: "Web Designer",
      social: [
        {
          platform: "twitter",
          url: "https://x.com",
          iconClass: "fa-brands fa-twitter",
        },
        {
          platform: "tiktok",
          url: "https://www.tiktok.com",
          iconClass: "fa-brands fa-tiktok",
        },
        {
          platform: "instagram",
          url: "https://www.instagram.com/",
          iconClass: "fa-brands fa-instagram",
        },
        {
          platform: "facebook",
          url: "https://www.facebook.com/",
          iconClass: "fa-brands fa-facebook-f",
        },
      ],
    },
    {
      id: 8,
      image: team8Image,
      name: "Marvin McKinney",
      role: "President of Sales",
      social: [
        {
          platform: "twitter",
          url: "https://x.com",
          iconClass: "fa-brands fa-twitter",
        },
        {
          platform: "tiktok",
          url: "https://www.tiktok.com",
          iconClass: "fa-brands fa-tiktok",
        },
        {
          platform: "instagram",
          url: "https://www.instagram.com/",
          iconClass: "fa-brands fa-instagram",
        },
        {
          platform: "facebook",
          url: "https://www.facebook.com/",
          iconClass: "fa-brands fa-facebook-f",
        },
      ],
    },
    {
      id: 9,
      image: team9Image,
      name: "Osama Sam",
      role: "UX- UI Designer",
      social: [
        {
          platform: "twitter",
          url: "https://x.com",
          iconClass: "fa-brands fa-twitter",
        },
        {
          platform: "tiktok",
          url: "https://www.tiktok.com",
          iconClass: "fa-brands fa-tiktok",
        },
        {
          platform: "instagram",
          url: "https://www.instagram.com/",
          iconClass: "fa-brands fa-instagram",
        },
        {
          platform: "facebook",
          url: "https://www.facebook.com/",
          iconClass: "fa-brands fa-facebook-f",
        },
      ],
    },
    {
      id: 10,
      image: team10Image,
      name: "Courtney Henry",
      role: "Web Designer",
      social: [
        {
          platform: "twitter",
          url: "https://x.com",
          iconClass: "fa-brands fa-twitter",
        },
        {
          platform: "tiktok",
          url: "https://www.tiktok.com",
          iconClass: "fa-brands fa-tiktok",
        },
        {
          platform: "instagram",
          url: "https://www.instagram.com/",
          iconClass: "fa-brands fa-instagram",
        },
        {
          platform: "facebook",
          url: "https://www.facebook.com/",
          iconClass: "fa-brands fa-facebook-f",
        },
      ],
    },
    {
      id: 11,
      image: team11Image,
      name: "Marvin McKinney",
      role: "President of Sales",
      social: [
        {
          platform: "twitter",
          url: "https://x.com",
          iconClass: "fa-brands fa-twitter",
        },
        {
          platform: "tiktok",
          url: "https://www.tiktok.com",
          iconClass: "fa-brands fa-tiktok",
        },
        {
          platform: "instagram",
          url: "https://www.instagram.com/",
          iconClass: "fa-brands fa-instagram",
        },
        {
          platform: "facebook",
          url: "https://www.facebook.com/",
          iconClass: "fa-brands fa-facebook-f",
        },
      ],
    },
    {
      id: 12,
      image: team12Image,
      name: "Osama Sam",
      role: "UX- UI Designer",
      social: [
        {
          platform: "twitter",
          url: "https://x.com",
          iconClass: "fa-brands fa-twitter",
        },
        {
          platform: "tiktok",
          url: "https://www.tiktok.com",
          iconClass: "fa-brands fa-tiktok",
        },
        {
          platform: "instagram",
          url: "https://www.instagram.com/",
          iconClass: "fa-brands fa-instagram",
        },
        {
          platform: "facebook",
          url: "https://www.facebook.com/",
          iconClass: "fa-brands fa-facebook-f",
        },
      ],
    },
  ];

  return (
    <>
      <PageHeader title="Team Member" breadcrumbs={breadcrumbs}></PageHeader>
      <section className="team_member">
        <div className="container">
          <div className="row g-4">
            {teamMembersData.map((member) => (
              <div className="col-xl-4 col-lg-4 col-md-6" key={member.id}>
                <div className="team_item">
                  <div className="team_item_thumb_main">
                    <div className="team_item_thumb">
                      <img src={member.image} alt="Team Member" />
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
                          {member.social.map((socialLink) => (
                            <li key={socialLink.platform}>
                              <a
                                href={socialLink.url}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <span>
                                  {/* Using Font Awesome classes directly, assuming they are available */}
                                  <i className={socialLink.iconClass}></i>
                                  {/* If using react-icons, you would render the component here, e.g.,
                                {socialLink.platform === 'twitter' && <FaTwitter />}
                                */}
                                </span>
                              </a>
                            </li>
                          ))}
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
              </div>
            ))}
          </div>
          <div className="row">
            <div className="col-lg-12">
              <ul className="pagination">
                <li>
                  <span>
                    <svg
                      width="6"
                      height="12"
                      viewBox="0 0 6 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5 1L1 6L5 11"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </span>
                </li>

                <li className="active">1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>
                  <span>
                    <svg
                      width="6"
                      height="12"
                      viewBox="0 0 6 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 1L5 6L1 11"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TeamMemberPage;
