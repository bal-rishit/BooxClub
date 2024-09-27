import React from "react";

import ImagesSliderDemo from "../components/ImagesSliderDemo"
import Category from "../components/Category";
// import Slider from "../components/Slider";
import Banner from "../components/Banner";
import Faq from "../components/Faq";
import Contact from "../components/Contact";


function Home() {
  return (
    <div>
      
      <ImagesSliderDemo />
      <Category />
      {/* <Slider/> */}
      <Banner/>
      <Faq />
      <Contact />
    </div>
  );
}

export default Home;
