import React from "react";
import Container from "react-bootstrap/container";
import Row from "react-bootstrap/row";
import Col from "react-bootstrap/col";
import Emoji from "../components/Emoji";

function Footer() {
  let goodbye = "Thanks for stopping by! .";

  return (
    <footer className="a-footer">
      <Container fluid={true}>
        <Row className="border-top justify-content-between p-3">
          <Col className="p-0" md={3} sm={12}>
            icon links
          </Col>
          <Col className="p-0 d-flex justify-content-end" md={3}>
            {goodbye} <Emoji symbol="👋" />
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
