import React from "react";
import PageHeader from "../component/PageHeader";
import InnerServices from "../component/InnerServices";
import Faq from "../component/Faq";
import Testimonials from "../component/Testimonials";
import Blog from "../component/BlogOne";

const ServicesPage = () => {
  const breadcrumbs = [
    { label: "Home", link: "/" },
    { label: <i className="fa-solid fa-angle-right"></i>, link: null },
    { label: "Services", link: null },
  ];
  return (
    <>
      <PageHeader title="Services" breadcrumbs={breadcrumbs}></PageHeader>
      <InnerServices></InnerServices>
      <Faq></Faq>
      <Testimonials addClass="inner_testimonails"></Testimonials>
      <Blog></Blog>
    </>
  );
};

export default ServicesPage;
