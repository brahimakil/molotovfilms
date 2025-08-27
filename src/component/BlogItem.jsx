import React from "react";
import { Link } from "react-router-dom";
import profile from "../assets/images/profile-1.svg";

const BlogItem = ({ blogData, title }) => {
  return (
    <section className={`blog ${title === "blog-grid" ? "pb-0" : ""}`}>
      <div className="container">
        <div className="row g-4 ">
          {title == "blog-details" && (
            <div className="row align-items-center mg_bottom_10px">
              <div className="col-8 col-md-8 col-xxl-6">
                <div className="blog_head">
                  <h2 className="main_titel">Related Blog</h2>
                </div>
              </div>
            </div>
          )}
          {blogData.map((blog) => (
            <div key={blog?.id} className="col-md-6 col-lg-4 col-xxl-4">
              <div className="blog_item">
                <div className="blog_item_thumb">
                  <img src={blog?.img} alt="blog thumbnail" />
                  <div className="blog_item_thumb_over">
                    <div className="blog_item_thumb_over_thumb">
                      <img src={profile} alt="profile" />
                    </div>
                    <div className="blog_item_thumb_over_txt">
                      <Link to="#">
                        Posted by <span>Sara</span>
                      </Link>
                      <p>August 06, 2024</p>
                    </div>
                  </div>
                </div>
                <div className="blog_item_inner">
                  <div className="blog_item_inner_item">
                    <h6 className="text_lg">Stories, Media</h6>
                    <span className="dot"></span>
                    <p>5 min read</p>
                  </div>
                  <h3 className="text_2xl">
                    <Link to="/blog-details">
                      3 Ways of Lying to yourself About Your New Relationship
                    </Link>
                  </h3>
                  <div className="blog_btn_main">
                    <Link to="/blog-details" className="blog_btn">
                      Read More
                      <span>
                        <svg
                          width="14"
                          height="10"
                          viewBox="0 0 14 10"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9 9.02832L13 5.02832M13 5.02832L9 1.02832M13 5.02832L1 5.02832"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogItem;
