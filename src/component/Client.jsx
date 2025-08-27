import React from "react";
import Slider from "react-slick";
import clients1 from "../assets/images/clients-1.png";
import clients2 from "../assets/images/clients-2.png";
import clients3 from "../assets/images/clients-3.png";
import { Link } from "react-router-dom";

const clientsData = [
  {
    name: "Kathryn Murphy",
    location: "Palestine, State of",
    image: clients1,
    quote:
      "Efficient and friendly service, guided us perfectly. Satisfied with our new home. Thank you!",
  },
  {
    name: "Onam Sarker",
    location: "Pembroke Pines",
    image: clients2,
    quote:
      "Efficient and friendly service, guided us perfectly. Satisfied with our new home. Thank you!",
  },
  {
    name: "Esther Howard",
    location: "8080 Railroad St.",
    image: clients3,
    quote:
      "Efficient and friendly service, guided us perfectly. Satisfied with our new home. Thank you!",
  },
  {
    name: "Kathryn Murphy",
    location: "Palestine, State of",
    image: clients1,
    quote:
      "Efficient and friendly service, guided us perfectly. Satisfied with our new home. Thank you!",
  },
  {
    name: "Onam Sarker",
    location: "Pembroke Pines",
    image: clients2,
    quote:
      "Efficient and friendly service, guided us perfectly. Satisfied with our new home. Thank you!",
  },
  {
    name: "Esther Howard",
    location: "8080 Railroad St.",
    image: clients3,
    quote:
      "Efficient and friendly service, guided us perfectly. Satisfied with our new home. Thank you!",
  },
];

const Client = () => {
  const settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    speed: 3000,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="clients">
      <div className="container">
        <div className="row">
          <div className="col-9 col-xxl-4">
            <h2 className="main_titel">Don’t Trust Us, Trust our clients</h2>
          </div>
        </div>

        <div className="row clients_slick mg_top_40px">
          <Slider {...settings}>
            {clientsData.map((client, index) => (
              <div key={index} className="col-xxl-4">
                <div className="clients_item_main">
                  <div className="clients_profile">
                    <div className="clients_profile_thumb">
                      <img
                        src={client.image}
                        alt={`${client.name}'s profile`}
                      />
                    </div>
                    <div className="clients_profile_txt">
                      <a href="#" className="text_xl">
                        {client.name}
                      </a>
                      <p className="text_base">{client.location}</p>
                    </div>
                  </div>

                  <p className="text_lg">"{client.quote}"</p>

                  <div className="clients_item_btm">
                    <ul className="clients_reting">
                      {[...Array(5)].map((_, i) => (
                        <li key={i}>
                          <span>
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M8.03281 1.27141C8.8375 -0.423802 11.1625 -0.423805 11.9672 1.27141L13.3579 4.20118C13.6774 4.87435 14.2951 5.34094 15.0096 5.44888L18.1193 5.91869C19.9187 6.19053 20.6371 8.48954 19.3351 9.80908L17.0849 12.0896C16.5679 12.6136 16.332 13.3685 16.454 14.1084L16.9852 17.3285C17.2926 19.1918 15.4116 20.6126 13.8022 19.7329L11.0208 18.2126C10.3817 17.8633 9.61825 17.8633 8.97917 18.2126L6.19776 19.7329C4.58839 20.6126 2.70742 19.1918 3.01479 17.3286L3.54599 14.1084C3.66804 13.3685 3.43211 12.6136 2.91508 12.0896L0.664875 9.80908C-0.637134 8.48954 0.0813282 6.19053 1.88066 5.91869L4.99037 5.44888C5.70489 5.34094 6.32257 4.87435 6.64211 4.20118L8.03281 1.27141Z"></path>
                            </svg>
                          </span>
                        </li>
                      ))}
                    </ul>

                    <span className="clients_icon">
                      <svg
                        width="26"
                        height="26"
                        viewBox="0 0 26 26"
                        fill="none"
                      >
                        <path
                          d="M10.9386 6.52139C8.71441 12.0896 4.04351 11.6054 1.81543 8.55164C-0.412643 5.49791 2.37534 1.55845 4.822 1.07426C7.26866 0.590074 11.1611 2.40578 11.1543 8.47823C11.1453 16.5683 3.42309 24.3193 2.57452 24.9999"
                          stroke="#CBD5E0"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                        <path
                          d="M24.7843 6.52144C22.5601 12.0896 17.8892 11.6054 15.6611 8.5517C13.4331 5.49796 16.221 1.55851 18.6677 1.07432C21.1144 0.590128 25.0068 2.40584 25 8.47828C24.991 16.5684 17.2688 24.3194 16.4202 25"
                          stroke="#CBD5E0"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        <div className="row">
          <div className="col-xxl-12">
            <div className="clients_btn_main">
              <Link to="/testimonial" className="clients_btn">
                See all Feedback
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Client;
