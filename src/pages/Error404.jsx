import React from "react";
import { Link } from "react-router-dom";
import error404Image from "../assets/images/404.png";

const Error404 = () => {
  return (
    <div className="error">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7">
            <div className="error_thumb">
              <img src={error404Image} alt="404 Error" />
            </div>

            <div className="error_text">
              <h3>Opps! you’re on the wrong place.</h3>
              <p>
                Can not find what you need? Take a moment and do a search below
                or start from our Homepage.
              </p>

              <div className="error_btn">
                <Link to="/" className="sara-btn">
                  Back to home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error404;
