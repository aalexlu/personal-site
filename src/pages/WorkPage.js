import React from "react";

// import Carousel from "../components/Carousel";
import Hero from "../components/Hero";
import Slider from "../components/Slider";

function WorkPage(props) {
  return (
    <div className="a-carousel">
      <Hero title={props.title} subTitle={props.subTitle} text={props.text} />

      <Slider />
      {/* <Carousel /> */}
    </div>
  );
}

export default WorkPage;
