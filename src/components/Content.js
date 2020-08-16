import React from "react";
import Container from "react-bootstrap/container";
import Row from "react-bootstrap/row";
import Col from "react-bootstrap/col";

function Content(props) {
  return (
    <Container className="a-content" fluid={true}>
      <Row className="justify-content-center">
        <Col md={8}>{props.children}</Col>
      </Row>
    </Container>
  );
}

export default Content;
