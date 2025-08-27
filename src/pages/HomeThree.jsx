import React from "react";
import HeroThree from "../component/HeroThree";
import ServicesThree from "../component/ServicesThree";
import AboutUsThree from "../component/AboutUsThree";
import ChoseTwo from "../component/ChoseTwo";
import VideoSection from "../component/VideoSection";
import Counter from "../component/Counter";
import PricingThree from "../component/PricingThree";
import Faq from "../component/Faq";
import BlogThree from "../component/BlogThree";
import Customers from "../component/Customers";

const HomeThree = () => {
  return (
    <>
      <HeroThree></HeroThree>
      <ServicesThree></ServicesThree>
      <AboutUsThree></AboutUsThree>
      <ChoseTwo></ChoseTwo>
      <VideoSection></VideoSection>
      <Counter></Counter>
      <PricingThree></PricingThree>
      <Faq></Faq>
      <BlogThree></BlogThree>
      <Customers addClass="style-2"></Customers>
    </>
  );
};

export default HomeThree;
