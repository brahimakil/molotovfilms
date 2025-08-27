import React from "react";
import { Link } from "react-router-dom";

const PageHeader = ({ title, breadcrumbs = [] }) => {
  return (
    <section className="inner_bg">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xxl-5">
            <div className="inner_bg_head">
              <h1>{title}</h1>
            </div>
            <ul className="breadcrumb">
              {breadcrumbs.length > 0 &&
                breadcrumbs.map((item, index) => (
                  <li key={index}>
                    {item.link ? (
                      <Link to={item.link}>{item.label}</Link>
                    ) : (
                      <span>{item.label}</span>
                    )}
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageHeader;
