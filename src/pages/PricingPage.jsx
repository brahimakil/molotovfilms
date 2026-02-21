import React from "react";
import { useTranslation } from 'react-i18next';
import PageHeader from "../component/PageHeader";
import Pricing from "../component/Pricing";
import Testimonials from "../component/Testimonials";
import BlogOne from "../component/BlogOne";

const PricingPage = () => {
  const { t } = useTranslation();
  const breadcrumbs = [
    { label: t('pricingPage.breadcrumbs', { returnObjects: true })[0], link: "/" },
    { label: <i className="fa-solid fa-angle-right"></i>, link: null },
    { label: t('pricingPage.breadcrumbs', { returnObjects: true })[1], link: null },
  ];
  return (
    <>
      <PageHeader title={t('pricingPage.breadcrumbs', { returnObjects: true })[1]} breadcrumbs={breadcrumbs}></PageHeader>
      <Pricing></Pricing>
      <Testimonials addClass="inner_testimonails"></Testimonials>
      <BlogOne></BlogOne>
    </>
  );
};

export default PricingPage;
