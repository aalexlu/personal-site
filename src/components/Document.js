import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import resume from "../assets/images/resume.png";

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
