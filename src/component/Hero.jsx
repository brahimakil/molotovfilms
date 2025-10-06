import { Link } from "react-router-dom";
import molotovLogo from "/Molotov Logo PNG.png";
import heroThumbBg from "../assets/images/hero-thumb-bg.png";
import heroThumb from "../assets/images/hero-thumb.webp";
import heroUnion from "../assets/images/hero-union.png";
import heroVic2 from "../assets/images/hero-vic-2.png";
import heroVictor from "../assets/images/hero-victor.png";
import vicArrow from "../assets/images/vic-arrow.png";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-12 col-xxl-7">
            <div className="hero_left_pos_main">
              <div className="hero_left_pos-1">
                <img src={heroVic2} alt="thumb" />
              </div>
              <div className="hero_left_pos-2">
                <img src={vicArrow} alt="thumb" />
              </div>
            </div>

            <div className="hero_txt">
              <h1>
               WE MAKE FILMS PEOPLE REMEMBER.

              </h1>
              <p className="text_lg">
               Studio-grade scale. Art-house nerve. Stories that refuse to vanish.
              </p>
            </div>

            <div className="hero_btn_main">
              <Link to="/contuct-us" className="sara-btn">
                Get in Touch
              </Link>
              <Link to="/" className="sara-btn__border">
                Learn more
              </Link>
            </div>
          </div>

          <div className="col-lg-5">
            <div className="hero_thumb_main">
              <div className="hero_thumb_main_thumb">
                <img src={heroThumbBg} alt="thumb" />
              </div>
              <div className="hero_thumb">
                <img src={heroThumb} alt="thumb" />
              </div>
              <div className="hero_pos_thumb">
                <img 
                  src={molotovLogo} 
                  alt="Molotov Logo" 
                  style={{
                    width: 'auto',
                    height: '100%',
                    maxWidth: '100%',
                    objectFit: 'contain'
                  }}
                />
              </div>
    
              <div className="hero_pos_thumb_three">
                <img src={heroVictor} alt="vic" />
              </div>
              <div className="hero_pos_thumb_four">
                <img src={heroUnion} alt="vic" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
