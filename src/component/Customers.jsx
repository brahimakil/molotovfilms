import cusLogo1 from "../assets/images/cus-logo-1.svg";
import cusLogo2 from "../assets/images/cus-logo-2.svg";
import cusLogo3 from "../assets/images/cus-logo-3.svg";
import cusLogo4 from "../assets/images/cus-logo-4.svg";
import cusLogo5 from "../assets/images/cus-logo-5.svg";

import Slider from "react-slick";

const Customers = ({ addClass }) => {
  const settings = {
    slidesToShow: 5,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    speed: 1000,
    infinite: true,
    responsive: [{ breakpoint: 991, settings: { slidesToShow: 3 } }],
  };

  const logos = [
    cusLogo1,
    cusLogo2,
    cusLogo3,
    cusLogo4,
    cusLogo5,
    cusLogo1,
    cusLogo2,
    cusLogo3,
    cusLogo4,
    cusLogo5,
  ];

  return (
    <section className={`customers ${addClass || ""}`}>
      <div className="container">
        <div className="row">
          <div className="col-xxl-12">
            <div className="customers_titel">
              <h2>
                Trusted by <span>15,000+</span> Customers
              </h2>
            </div>
          </div>
        </div>

        <div className="col-xxl-12">
          <Slider {...settings} className="customers_slick">
            {logos.map((logo, index) => (
              <div className="customers_slick_thumb" key={index}>
                <a href="#">
                  <img src={logo} alt={`Customer logo ${index + 1}`} />
                </a>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Customers;
