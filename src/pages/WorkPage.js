import React from "react";

import Hero from "../components/Hero";
import Carousel from "../components/Carousel";

function WorkPage(props) {
  return (
    <div className="a-carousel">
      <Hero title={props.title} subTitle={props.subTitle} text={props.text} />
      <Carousel />
    </div>
  );
}

export default WorkPage;
