import React from "react";

import HeaderResume from "../components/HeaderResume/HeaderResume";
import Document from "../components/Document/Document";

function ResumePage(props) {
  return (
    <div className="a-document">
      <HeaderResume title={props.title} subTitle={props.subTitle} />
      <Document />
    </div>
  );
}

export default ResumePage;
