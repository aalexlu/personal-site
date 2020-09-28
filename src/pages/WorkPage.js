import React from "react";

// import Carousel from "../components/Carousel";
import Header from "../components/Header/Header";
import Slider from "../components/Slider/Slider";

function WorkPage(props) {
  return (
    <div className="a-carousel">
      <Header title={props.title} subTitle={props.subTitle} text={props.text} />

      <Slider />
      {/* <Carousel /> */}
    </div>
  );
}

export default WorkPage;
