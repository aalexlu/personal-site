import React from "react";

import Hero from "../components/Hero";
import Content from "../components/Content";

function ResumePage(props) {
  return (
    <div>
      <Hero title={props.title} />

      <Content>
        <p>Embed the pdf</p>
      </Content>
    </div>
  );
}

export default ResumePage;
