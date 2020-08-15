import React from "react";

import Hero from "../components/Hero";
import Content from "../components/Content";

function CoursesPage(props) {
  return (
    <div>
      <Hero title={props.title} subTitle={props.subTitle} text={props.text} />

      <Content>
        <p>Replace these with small block components</p>
        <p>CS61A: Structure and Interpretation of Computer Programs</p>
        <p>LING100: Introduction to Linguistic Science</p>
        <p>CS61B: Data Structures</p>
        <p>EE16A: Designing Information Devices and Systems I</p>
        <p>UCBUGG: 3D Modeling and Animation Decal</p>
        <p>CS70: Discrete Mathematics and Probability Theory</p>
        <p>CS61C: Machine Structures</p>
      </Content>
    </div>
  );
}

export default CoursesPage;
