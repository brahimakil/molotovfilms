import React from "react";
import blogThumb1 from "../assets/images/blog-thumb-1.webp";
import blogThumb2 from "../assets/images/blog-thumb-2.webp";
import blogThumb3 from "../assets/images/blog-thumb-3.webp";
import profileThumb from "../assets/images/profile-1.svg";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    id: 1,
    image: blogThumb1,
    author: "Sara",
    date: "August 06, 2024",
    category: "Stories, Media",
    readTime: "5 min read",
    title: "3 Ways of Lying to yourself About Your New Relationship",
  },
  {
    id: 2,
    image: blogThumb2,
    author: "Sara",
    date: "August 06, 2024",
    category: "Stories, Media",
    readTime: "5 min read",
    title: "3 Ways of Lying to yourself About Your New Relationship",
  },
  {
    id: 3,
    image: blogThumb3,
    author: "Sara",
    date: "August 06, 2024",
    category: "Stories, Media",
    readTime: "5 min read",
    title: "3 Ways of Lying to yourself About Your New Relationship",
  },
];

const BlogThree = () => {
  return (
    <section className="blog blog_three">
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-xxl-6">
            <div className="blog_head">
              <h2 className="main_titel_three">
                Our Latest <span>News & Blog</span>
              </h2>
            </div>
          </div>
        </div>

        <div className="row mg_top_10px g-4">
          {blogPosts.map((post) => (
            <div className="col-md-6 col-lg-4 col-xxl-4" key={post.id}>
              <div className="blog_item">
                <div className="blog_item_thumb">
                  <img src={post.image} alt="thumb" />
                  <div className="blog_item_thumb_over">
                    <div className="blog_item_thumb_over_thumb">
                      <img src={profileThumb} alt="profile" />
                    </div>
                    <div className="blog_item_thumb_over_txt">
                      <a href="#">
                        Posted by <span>{post.author}</span>
                      </a>
                      <p>{post.date}</p>
                    </div>
                  </div>
                </div>

                <div className="blog_item_inner">
                  <div className="blog_item_inner_item">
                    <h6 className="text_lg">{post.category}</h6>
                    <span className="dot"></span>
                    <p>{post.readTime}</p>
                  </div>

                  <h3 className="text_2xl">
                    <Link to="/blog-details">{post.title}</Link>
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

        <div className="row">
          <div className="col-xxl-12">
            <div className="blog_head_btn_btm">
              <Link to="/blog" className="sara-btn__border sara-btn__border--3">
                Explore all
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogThree;
