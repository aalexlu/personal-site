import React from "react";

import HeroLink from "../components/HeroLink";
import Document from "../components/Document";

function ResumePage(props) {
  return (
    <div className="a-document">
      <HeroLink title={props.title} subTitle={props.subTitle} />
      <Document />
    </div>
  );
}

export default ResumePage;
