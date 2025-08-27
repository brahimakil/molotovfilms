import React from "react";
import blogThumb1 from "../assets/images/blog-thumb-1.webp";
import blogThumb2 from "../assets/images/blog-thumb-2.webp";
import blogThumb3 from "../assets/images/blog-thumb-3.webp";
import profileImg from "../assets/images/profile-1.svg";
import { Link } from "react-router-dom";

const blogData = [
  {
    id: 1,
    thumb: blogThumb1,
    title: "3 Ways of Lying to yourself About Your New Relationship",
    author: "Sara",
    date: "August 06, 2024",
    category: "Stories, Media",
    readTime: "5 min read",
  },
  {
    id: 2,
    thumb: blogThumb2,
    title: "3 Ways of Lying to yourself About Your New Relationship",
    author: "Sara",
    date: "August 06, 2024",
    category: "Stories, Media",
    readTime: "5 min read",
  },
  {
    id: 3,
    thumb: blogThumb3,
    title: "3 Ways of Lying to yourself About Your New Relationship",
    author: "Sara",
    date: "August 06, 2024",
    category: "Stories, Media",
    readTime: "5 min read",
  },
];

const BlogTwo = () => {
  return (
    <section className="blog blog_two">
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-xxl-6">
            <div className="blog_head">
              <h2 className="main_titel_two">
                Our Latest <span>News & Blog</span>
              </h2>
            </div>
          </div>
        </div>

        <div className="row mg_top_10px g-4">
          {blogData.map((blog) => (
            <div key={blog.id} className="col-md-6 col-lg-4 col-xxl-4">
              <div className="blog_item">
                <div className="blog_item_thumb">
                  <img src={blog.thumb} alt="thumb" />
                  <div className="blog_item_thumb_over">
                    <div className="blog_item_thumb_over_thumb">
                      <img src={profileImg} alt="profile" />
                    </div>
                    <div className="blog_item_thumb_over_txt">
                      <a href="#">
                        Posted by <span>{blog.author}</span>
                      </a>
                      <p>{blog.date}</p>
                    </div>
                  </div>
                </div>
                <div className="blog_item_inner">
                  <div className="blog_item_inner_item">
                    <h6 className="text_lg">{blog.category}</h6>
                    <span className="dot"></span>
                    <p>{blog.readTime}</p>
                  </div>
                  <h3 className="text_2xl">
                    <Link to="/blog-details">{blog.title}</Link>
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

        {/* Bottom Buttons */}
        <div className="row">
          <div className="col-xxl-12">
            <div className="blog_head_btn_btm">
              <Link
                to="/blog-details"
                className="sara-btn__border sara-btn__border--2"
              >
                Explore all
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogTwo;
