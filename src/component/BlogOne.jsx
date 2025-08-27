import React from "react";
import blogThumb1 from "../assets/images/blog-thumb-1.webp";
import blogThumb2 from "../assets/images/blog-thumb-2.webp";
import blogThumb3 from "../assets/images/blog-thumb-3.webp";
import profile1 from "../assets/images/profile-1.svg";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    id: 1,
    thumb: blogThumb1,
    authorProfile: profile1,
    authorName: "Sara",
    date: "August 06, 2024",
    categories: "Stories, Media",
    readTime: "5 min read",
    title: "3 Ways of Lying to yourself About Your New Relationship",
    link: "blog-details",
  },
  {
    id: 2,
    thumb: blogThumb2,
    authorProfile: profile1,
    authorName: "Sara",
    date: "August 06, 2024",
    categories: "Stories, Media",
    readTime: "5 min read",
    title: "3 Ways of Lying to yourself About Your New Relationship",
    link: "blog-details",
  },
  {
    id: 3,
    thumb: blogThumb3,
    authorProfile: profile1,
    authorName: "Sara",
    date: "August 06, 2024",
    categories: "Stories, Media",
    readTime: "5 min read",
    title: "3 Ways of Lying to yourself About Your New Relationship",
    link: "blog-details",
  },
];

const BlogOne = () => {
  return (
    <section className="blog">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-8 col-md-8 col-xxl-6">
            <div className="blog_head">
              <h2 className="main_titel">
                Our Latest <span>News & Blog</span>
              </h2>
            </div>
          </div>
          <div className="col-md-4 col-xxl-6">
            <div className="blog_head_btn">
              <Link to="/blog-details" className="sara-btn__border">
                Explore all
              </Link>
            </div>
          </div>
        </div>
        <div className="row mg_top_10px g-4">
          {blogPosts.map((post) => (
            <div className="col-md-6 col-lg-4 col-xxl-4" key={post.id}>
              <div className="blog_item">
                <div className="blog_item_thumb">
                  <img src={post.thumb} alt="thumb" />
                  <div className="blog_item_thumb_over">
                    <div className="blog_item_thumb_over_thumb">
                      <img src={post.authorProfile} alt="thumb" />
                    </div>
                    <div className="blog_item_thumb_over_txt">
                      <a href="#">
                        Posted by <span>{post.authorName}</span>
                      </a>
                      <p>{post.date}</p>
                    </div>
                  </div>
                </div>
                <div className="blog_item_inner">
                  <div className="blog_item_inner_item">
                    <h6 className="text_lg">{post.categories}</h6>
                    <span className="dot"></span>
                    <p>{post.readTime}</p>
                  </div>
                  <h3 className="text_2xl">
                    <Link to={post.link}>{post.title}</Link>
                  </h3>
                  <div className="blog_btn_main">
                    <Link to={post.link} className="blog_btn">
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
            <div className="blog_head_btn_two">
              <Link to="/blog-details" className="sara-btn__border">
                Explore all
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogOne;
