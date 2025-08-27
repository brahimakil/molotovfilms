import React from "react";
import checkIcon from "../assets/images/a-check.svg";
import checkIcon2 from "../assets/images/check2.svg";
import { Link } from "react-router-dom";

const PricingTwo = () => {
  return (
    <section className="pricing_two">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xxl-5">
            <div className="pricing_two_head">
              <h2 className="main_titel_two">
                No Hidden Cost. Choose <span>Pricing Plan</span>
              </h2>
            </div>

            <div className="bill-type">
              <div className="monthly">Monthly</div>
              <div className="bill-toggle">
                <input type="checkbox" id="bill-toggle" defaultChecked />
                <label htmlFor="bill-toggle"></label>
              </div>
              <div className="annually">Yearly</div>
            </div>
          </div>
        </div>

        <div className="row mg_top_20px g-4">
          <div className="col-md-6 col-lg-4 col-xxl-4">
            <div className="pricing_item">
              <div className="pricing_item_top">
                <h6 className="text_xl">Regular Plan</h6>
                <p>Monthly Package</p>
                <h3 className="text_3xl">
                  $0.96 <del>/$1.96</del>
                </h3>
              </div>
              <ul className="pricing_item_list">
                <li className="text_lg">
                  <span>
                    <img src={checkIcon} alt="icon" />
                  </span>
                  Platform Access
                </li>
                <li className="text_lg">
                  <span>
                    <img src={checkIcon} alt="icon" />
                  </span>
                  Report Analytics
                </li>
                <li className="text_lg">
                  <span>
                    <img src={checkIcon} alt="icon" />
                  </span>
                  Keyword Research
                </li>
                <li className="text_lg">
                  <span>
                    <img src={checkIcon2} alt="icon" />
                  </span>
                  Premium Consulting
                </li>
                <li className="text_lg">
                  <span>
                    <img src={checkIcon2} alt="icon" />
                  </span>
                  24/7 Customer Support
                </li>
                <li className="text_lg">
                  <span>
                    <img src={checkIcon2} alt="icon" />
                  </span>
                  Meeting Access
                </li>
              </ul>
              <Link
                to="/pricing"
                className="sara-btn__border sara-btn__border--2"
              >
                Get Started
              </Link>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 col-xxl-4">
            <div className="pricing_item">
              <div className="pricing_item_top">
                <h6 className="text_xl">Business Plan</h6>
                <p>Monthly Package</p>
                <h3 className="text_3xl">
                  $0.100 <del>/$1.96</del>
                </h3>
              </div>
              <ul className="pricing_item_list">
                <li className="text_lg">
                  <span>
                    <img src={checkIcon} alt="icon" />
                  </span>
                  Platform Access
                </li>
                <li className="text_lg">
                  <span>
                    <img src={checkIcon} alt="icon" />
                  </span>
                  Report Analytics
                </li>
                <li className="text_lg">
                  <span>
                    <img src={checkIcon} alt="icon" />
                  </span>
                  Keyword Research
                </li>
                <li className="text_lg">
                  <span>
                    <img src={checkIcon} alt="icon" />
                  </span>
                  Premium Consulting
                </li>
                <li className="text_lg">
                  <span>
                    <img src={checkIcon} alt="icon" />
                  </span>
                  24/7 Customer Support
                </li>
                <li className="text_lg">
                  <span>
                    <img src={checkIcon} alt="icon" />
                  </span>
                  Meeting Access
                </li>
              </ul>
              <Link to="/pricing" className="sara-btn sara-btn_black">
                Get Started
              </Link>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 col-xxl-4">
            <div className="pricing_item">
              <div className="pricing_item_top">
                <h6 className="text_xl">Agency Plan</h6>
                <p>Monthly Package</p>
                <h3 className="text_3xl">
                  $0.150 <del>/$1.96</del>
                </h3>
              </div>
              <ul className="pricing_item_list">
                <li className="text_lg">
                  <span>
                    <img src={checkIcon} alt="icon" />
                  </span>
                  Platform Access
                </li>
                <li className="text_lg">
                  <span>
                    <img src={checkIcon} alt="icon" />
                  </span>
                  Report Analytics
                </li>
                <li className="text_lg">
                  <span>
                    <img src={checkIcon} alt="icon" />
                  </span>
                  Keyword Research
                </li>
                <li className="text_lg">
                  <span>
                    <img src={checkIcon} alt="icon" />
                  </span>
                  Premium Consulting
                </li>
                <li className="text_lg">
                  <span>
                    <img src={checkIcon2} alt="icon" />
                  </span>
                  24/7 Customer Support
                </li>
                <li className="text_lg">
                  <span>
                    <img src={checkIcon2} alt="icon" />
                  </span>
                  Meeting Access
                </li>
              </ul>
              <Link
                to="/pricing"
                className="sara-btn__border sara-btn__border--2"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-xxl-6">
            <div className="pricing_two_btm_txt">
              <h4>
                If you Need any Custom or others Pricing System. Please,{" "}
                <span>Send message</span>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingTwo;
