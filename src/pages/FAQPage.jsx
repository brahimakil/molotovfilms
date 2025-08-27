import React from "react";
import PageHeader from "../component/PageHeader";
import Faq from "../component/Faq";
import BlogOne from "../component/BlogOne";

const FAQPage = () => {
  const breadcrumbs = [
    { label: "Home", link: "/" },
    { label: <i className="fa-solid fa-angle-right"></i>, link: null },
    { label: "FAQ", link: null },
  ];
  return (
    <>
      <PageHeader title="FAQ" breadcrumbs={breadcrumbs}></PageHeader>
      <Faq></Faq>
      <BlogOne></BlogOne>
    </>
  );
};

export default FAQPage;
