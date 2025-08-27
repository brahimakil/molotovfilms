import React from "react";
import PageHeader from "../component/PageHeader";
import { Link } from "react-router-dom";
import blogThumb1 from "../assets/images/blog-thumb-1.webp";
import blogThumb2 from "../assets/images/blog-thumb-2.webp";
import blogThumb3 from "../assets/images/blog-thumb-3.webp";
import profile1 from "../assets/images/profile-1.svg";
import b5 from "../assets/images/b-5.webp";

const BlogListViewPage = () => {
  const breadcrumbs = [
    { label: "Home", link: "/" },
    { label: <i className="fa-solid fa-angle-right"></i>, link: null },
    { label: "Blog List View", link: null },
  ];
  return (
    <>
      <PageHeader title="Blog List View" breadcrumbs={breadcrumbs}></PageHeader>
      <section className="blog_list_view">
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-lg-7">
              <div className="row">
                <div className="col-lg-12">
                  <div className="blog_list_view_item">
                    <div className="blog_list_view_thumb">
                      <img src={blogThumb1} alt="Blog post thumbnail" />
                    </div>

                    <div className="blog_list_view_item-inner_main">
                      <div className="blog_list_view_item-inner">
                        <div className="blog_item_thumb_over_thumb">
                          <img src={profile1} alt="Profile thumbnail" />
                        </div>
                        <div className="blog_item_thumb_over_txt">
                          <Link to="#">
                            Posted by <span>Sara Samir</span>
                          </Link>
                        </div>
                      </div>

                      <div className="blog_item_inner_item">
                        <h6 className="text_lg">Stories, Media</h6>

                        <span className="dot"></span>
                        <p>5 min read</p>
                      </div>
                    </div>

                    <Link to="/blog-details" className="text_3xl">
                      3 Ways of Lying to Yourself About Your New Relationship
                    </Link>

                    <p className="text_lg">
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatu. Lorem ipsum
                      dolor sit amet, consectetur adipiscing elit, sed do
                      eiusmod tempor...
                    </p>

                    <Link to="/blog-details" className="sara-btn__border">
                      Read More
                      <span>
                        <svg
                          width="15"
                          height="15"
                          viewBox="0 0 15 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M1 14L14.1628 1" strokeWidth="1.5" />
                          <path
                            d="M4.125 1H14.1538V9.66667"
                            strokeWidth="1.5"
                          />
                        </svg>
                      </span>
                    </Link>
                  </div>
                </div>

                <div className="col-lg-12 mt-60px">
                  <div className="blog_list_view_item">
                    <div className="blog_list_view_thumb">
                      <img src={blogThumb2} alt="Blog post thumbnail" />
                    </div>

                    <div className="blog_list_view_item-inner_main">
                      <div className="blog_list_view_item-inner">
                        <div className="blog_item_thumb_over_thumb">
                          <img src={profile1} alt="Profile thumbnail" />
                        </div>
                        <div className="blog_item_thumb_over_txt">
                          <Link to="#">
                            Posted by <span>Sara Samir</span>
                          </Link>
                        </div>
                      </div>

                      <div className="blog_item_inner_item">
                        <h6 className="text_lg">Stories, Media</h6>

                        <span className="dot"></span>
                        <p>5 min read</p>
                      </div>
                    </div>

                    <Link to="/blog-details" className="text_3xl">
                      3 Ways of Lying to Yourself About Your New Relationship
                    </Link>

                    <p className="text_lg">
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatu. Lorem ipsum
                      dolor sit amet, consectetur adipiscing elit, sed do
                      eiusmod tempor...
                    </p>

                    <Link to="/blog-details" className="sara-btn__border">
                      Read More
                      <span>
                        <svg
                          width="15"
                          height="15"
                          viewBox="0 0 15 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M1 14L14.1628 1" strokeWidth="1.5" />
                          <path
                            d="M4.125 1H14.1538V9.66667"
                            strokeWidth="1.5"
                          />
                        </svg>
                      </span>
                    </Link>
                  </div>
                </div>

                <div className="col-lg-12 mt-60px">
                  <div className="blog_list_view_item">
                    <div className="blog_list_view_thumb">
                      <img src={blogThumb3} alt="Blog post thumbnail" />
                    </div>

                    <div className="blog_list_view_item-inner_main">
                      <div className="blog_list_view_item-inner">
                        <div className="blog_item_thumb_over_thumb">
                          <img src={profile1} alt="Profile thumbnail" />
                        </div>
                        <div className="blog_item_thumb_over_txt">
                          <Link to="#">
                            Posted by <span>Sara Samir</span>
                          </Link>
                        </div>
                      </div>

                      <div className="blog_item_inner_item">
                        <h6 className="text_lg">Stories, Media</h6>

                        <span className="dot"></span>
                        <p>5 min read</p>
                      </div>
                    </div>

                    <Link to="/blog-details" className="text_3xl">
                      3 Ways of Lying to Yourself About Your New Relationship
                    </Link>

                    <p className="text_lg">
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatu. Lorem ipsum
                      dolor sit amet, consectetur adipiscing elit, sed do
                      eiusmod tempor...
                    </p>

                    <Link to="/blog-details" className="sara-btn__border">
                      Read More
                      <span>
                        <svg
                          width="15"
                          height="15"
                          viewBox="0 0 15 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M1 14L14.1628 1" strokeWidth="1.5" />
                          <path
                            d="M4.125 1H14.1538V9.66667"
                            strokeWidth="1.5"
                          />
                        </svg>
                      </span>
                    </Link>
                  </div>
                </div>

                <div className="col-lg-12">
                  <ul className="pagination">
                    <li>
                      <span>
                        <svg
                          width="6"
                          height="12"
                          viewBox="0 0 6 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5 1L1 6L5 11"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </li>

                    <li className="active">1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>
                      <span>
                        <svg
                          width="6"
                          height="12"
                          viewBox="0 0 6 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1 1L5 6L1 11"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-xxl-4 col-lg-5 res_mt res_mt_two">
              <div className="card_item">
                <h3>Search Anything</h3>

                <div className="sarch_item">
                  <label htmlFor="searchAnything" className="sr-only">
                    Search
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="searchAnything"
                    name="searchQuery"
                    placeholder="Enter Name"
                    autoComplete="off" // Added autocomplete for search
                  />

                  <button className="sarch_btn" type="submit">
                    <span>
                      <svg
                        width="18"
                        height="19"
                        viewBox="0 0 18 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M17 17.0125L13.2223 13.2251M15.3158 8.16347C15.3158 10.0633 14.5617 11.8854 13.2193 13.2288C11.8769 14.5722 10.0563 15.3269 8.1579 15.3269C6.2595 15.3269 4.43886 14.5722 3.0965 13.2288C1.75413 11.8854 1 10.0633 1 8.16347C1 6.2636 1.75413 4.44154 3.0965 3.09813C4.43886 1.75472 6.2595 1 8.1579 1C10.0563 1 11.8769 1.75472 13.2193 3.09813C14.5617 4.44154 15.3158 6.2636 15.3158 8.16347Z"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                    </span>
                  </button>
                </div>
              </div>

              <div className="card_item mg_top_30px">
                <h3>Recent Post</h3>

                <div className="card_item_blog">
                  <div className="card_item_thumb">
                    <img src={b5} alt="Blog post thumbnail" />
                  </div>

                  <div className="card_item_blog_inner">
                    <div className="card_item_blog_text">
                      <div className="blog_item_inner_item">
                        <h6 className="text_lg">Stories, Media</h6>

                        <span className="dot"></span>
                        <p>5 min read</p>
                      </div>
                    </div>

                    <Link to="/blog-details" className="text_xl">
                      3 Ways of Lying to yourself About Your New
                    </Link>
                  </div>
                </div>

                <div className="card_item_blog">
                  <div className="card_item_thumb">
                    <img src={blogThumb1} alt="Blog post thumbnail" />
                  </div>

                  <div className="card_item_blog_inner">
                    <div className="card_item_blog_text">
                      <div className="blog_item_inner_item">
                        <h6 className="text_lg">Stories, Media</h6>

                        <span className="dot"></span>
                        <p>5 min read</p>
                      </div>
                    </div>

                    <Link to="/blog-details" className="text_xl">
                      3 Ways of Lying to yourself About Your New
                    </Link>
                  </div>
                </div>

                <div className="card_item_blog">
                  <div className="card_item_thumb">
                    <img src={blogThumb2} alt="Blog post thumbnail" />
                  </div>

                  <div className="card_item_blog_inner">
                    <div className="card_item_blog_text">
                      <div className="blog_item_inner_item">
                        <h6 className="text_lg">Stories, Media</h6>

                        <span className="dot"></span>
                        <p>5 min read</p>
                      </div>
                    </div>

                    <Link to="/blog-details" className="text_xl">
                      3 Ways of Lying to yourself About Your New
                    </Link>
                  </div>
                </div>

                <div className="card_item_blog">
                  <div className="card_item_thumb">
                    <img src={blogThumb3} alt="Blog post thumbnail" />
                  </div>

                  <div className="card_item_blog_inner">
                    <div className="card_item_blog_text">
                      <div className="blog_item_inner_item">
                        <h6 className="text_lg">Stories, Media</h6>

                        <span className="dot"></span>
                        <p>5 min read</p>
                      </div>
                    </div>

                    <Link to="/blog-details" className="text_xl">
                      3 Ways of Lying to yourself About Your New
                    </Link>
                  </div>
                </div>
              </div>

              <div className="card_item mg_top_30px">
                <h3>Categories</h3>

                <ul>
                  <li className="text_2xl">
                    Digital Service <span className="text_lg">(12)</span>
                  </li>
                  <li className="text_2xl">
                    IT Service<span className="text_lg">(20)</span>
                  </li>
                  <li className="text_2xl">
                    SEO Marketing <span className="text_lg">(65)</span>
                  </li>
                  <li className="text_2xl">
                    Digital Service <span className="text_lg">(65)</span>
                  </li>
                  <li className="text_2xl">
                    Digital Service <span className="text_lg">(65)</span>
                  </li>
                </ul>
              </div>

              <div className="card_item mg_top_30px">
                <h3>Contact Us</h3>
                <p className="text_lg">
                  Collaboratively engineer prospective imperatives with
                  transparent technology.
                </p>

                <form className="card_form">
                  <div className="card_form_item">
                    <label htmlFor="contactName" className="sr-only">
                      Enter Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="contactName"
                      name="contactName"
                      placeholder="Enter Name"
                      autoComplete="name"
                    />
                  </div>
                  <div className="card_form_item">
                    <label htmlFor="contactEmail" className="sr-only">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="contactEmail"
                      name="contactEmail"
                      placeholder="Email"
                      autoComplete="email"
                    />
                  </div>
                  <div className="card_form_item">
                    <label htmlFor="contactMessage" className="sr-only">
                      Write Message
                    </label>
                    <textarea
                      className="form-control"
                      id="contactMessage"
                      name="contactMessage"
                      rows="5"
                      placeholder="Write Message"
                    ></textarea>
                  </div>

                  <button type="submit" className="sara-btn">
                    Contact Now
                  </button>
                </form>
              </div>

              <div className="card_item mg_top_30px">
                <h3>Tags</h3>
                <div className="tag_item">
                  <Link to="#" className="tag_btn">
                    Service System
                  </Link>
                  <Link to="#" className="tag_btn">
                    Digital
                  </Link>
                  <Link to="#" className="tag_btn">
                    Marketing
                  </Link>
                  <Link to="#" className="tag_btn">
                    SEO Ranking
                  </Link>
                  <Link to="#" className="tag_btn">
                    Service Tools
                  </Link>
                  <Link to="#" className="tag_btn">
                    SEO
                  </Link>
                  <Link to="#" className="tag_btn">
                    Service System
                  </Link>
                  <Link to="#" className="tag_btn">
                    Digital
                  </Link>
                  <Link to="#" className="tag_btn">
                    Marketing
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogListViewPage;
