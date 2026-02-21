import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import error404Image from "../assets/images/404.png";

const Error404 = () => {
  const { t } = useTranslation();
  return (
    <div className="error">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7">
            <div className="error_thumb">
              <img src={error404Image} alt="404 Error" />
            </div>

            <div className="error_text">
              <h3>{t('error404.heading')}</h3>
              <p>
                {t('error404.description')}
              </p>

              <div className="error_btn">
                <Link to="/" className="sara-btn">
                  {t('error404.button')}
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
