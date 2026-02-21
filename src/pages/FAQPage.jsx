import React from "react";
import { useTranslation } from 'react-i18next';
import PageHeader from "../component/PageHeader";
import Faq from "../component/Faq";
import BlogOne from "../component/BlogOne";

const FAQPage = () => {
  const { t } = useTranslation();
  const breadcrumbs = [
    { label: t('faqPage.breadcrumbs', { returnObjects: true })[0], link: "/" },
    { label: <i className="fa-solid fa-angle-right"></i>, link: null },
    { label: t('faqPage.breadcrumbs', { returnObjects: true })[1], link: null },
  ];
  return (
    <>
      <PageHeader title={t('faqPage.breadcrumbs', { returnObjects: true })[1]} breadcrumbs={breadcrumbs}></PageHeader>
      <Faq></Faq>
      <BlogOne></BlogOne>
    </>
  );
};

export default FAQPage;
