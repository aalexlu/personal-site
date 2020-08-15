import React from "react";

import Hero from "../components/Hero";
import Content from "../components/Content";

function CoursesPage(props) {
  return (
    <div>
      <Hero title={props.title} subTitle={props.subTitle} text={props.text} />

      <Content>
        <p>Hi</p>
      </Content>
    </div>
  );
}

export default CoursesPage;
