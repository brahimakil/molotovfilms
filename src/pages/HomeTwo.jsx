import React from "react";
import HeroTwo from "../component/HeroTwo";
import ServicesTwo from "../component/ServicesTwo";
import AbouUsTwo from "../component/AbouUsTwo";
import Testimonials from "../component/Testimonials";
import PricingTwo from "../component/PricingTwo";
import Team from "../component/Team";
import BlogTwo from "../component/BlogTwo";
import Customers from "../component/Customers";

const HomeTwo = () => {
  return (
    <>
      <HeroTwo></HeroTwo>
      <ServicesTwo></ServicesTwo>
      <AbouUsTwo></AbouUsTwo>
      <Testimonials></Testimonials>
      <PricingTwo></PricingTwo>
      <Team></Team>
      <BlogTwo></BlogTwo>
      <Customers addClass="style-2"></Customers>
    </>
  );
};

export default HomeTwo;
