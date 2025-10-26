import React from "react";
import BannerSlider from "../../components/user/BannerSlider";
import ServiceDivisions from "./ServiceDivisions";
import Stats from "./Stats";
import Why from "./Why";
import Ctc from "./Ctc";
import UserFooter from "../../components/user/UserFooter";
import Testimonials from "./Testimonial";

const Home = () => {
  return (
    <>
      <BannerSlider />
      <Stats />

      <ServiceDivisions />
      <Why/>
     
      <Ctc/>
       <Testimonials/>
     
    </>
  );
};

export default Home;
