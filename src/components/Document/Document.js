import React from "react";
import Container from "react-bootstrap/container";
import Row from "react-bootstrap/row";

import resume from "../../assets/images/resume.png";
import "./Document.scss";

function Document() {
  return (
    <Container fluid={true}>
      <Row className="justify-content-center py-5">
        {<img className="a-resume" src={resume} alt="resume" />}
      </Row>
    </Container>
  );
}

export default Document;
