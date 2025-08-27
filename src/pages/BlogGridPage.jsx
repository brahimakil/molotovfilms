import React from "react";
import PageHeader from "../component/PageHeader";
import BlogItem from "../component/BlogItem";
import thumb1 from "../assets/images/blog-thumb-1.webp";
import thumb2 from "../assets/images/blog-thumb-2.webp";
import thumb3 from "../assets/images/blog-thumb-3.webp";
import b4 from "../assets/images/b-4.webp";
import b5 from "../assets/images/b-5.webp";
import b6 from "../assets/images/b-6.webp";
import b7 from "../assets/images/b-7.webp";
import b8 from "../assets/images/b-8.webp";
import b9 from "../assets/images/b-9.webp";
import Pagination from "../component/Pagination";

const BlogGridPage = () => {
  const breadcrumbs = [
    { label: "Home", link: "/" },
    { label: <i className="fa-solid fa-angle-right"></i>, link: null },
    { label: "Blog Grid", link: null },
  ];

  const blogData = [
    { id: 1, img: thumb1 },
    { id: 2, img: thumb2 },
    { id: 3, img: thumb3 },
    { id: 4, img: b4 },
    { id: 5, img: b5 },
    { id: 6, img: b6 },
    { id: 7, img: b7 },
    { id: 8, img: b8 },
    { id: 9, img: b9 },
  ];

  return (
    <>
      <PageHeader title="Blog Grid" breadcrumbs={breadcrumbs}></PageHeader>
      <BlogItem blogData={blogData} title="blog-grid"></BlogItem>
      <Pagination></Pagination>
    </>
  );
};

export default BlogGridPage;
