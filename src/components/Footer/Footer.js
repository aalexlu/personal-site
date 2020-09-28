import React from "react";
import Container from "react-bootstrap/container";
import Row from "react-bootstrap/row";
import Col from "react-bootstrap/col";
import Emoji from "../../components/Emoji/Emoji";
import Image from "react-bootstrap/image";

import linkedin from "../../assets/logos/linkedin.svg";
import github from "../../assets/logos/github.svg";
import facebook from "../../assets/logos/facebook.svg";
import email from "../../assets/logos/email.svg";
// import calendly from "../../assets/logos/calendly.svg";

import "./Footer.scss";

function Footer() {
  let goodbye = "THANKS FOR STOPPING BY! .";

  return (
    <footer className="a-footer">
      <Container fluid={true}>
        <Row className="border-top justify-content-between p-2">
          <Col className="p-0" md={3} sm={12}>
            <a href="https://linkedin.com/in/aalexlu" className="social">
              <Image src={linkedin} className="icon" />
            </a>
            <a href="https://github.com/aalexlu" className="social">
              <Image src={github} className="icon" />
            </a>
            <a href="https://www.facebook.com/aalexlu/" className="social">
              <Image src={facebook} className="icon" />
            </a>
            <a href="mailto:alu@berkeley.edu" className="social">
              <Image src={email} className="icon" />
            </a>
            {/* <a href="https://calendly.com/alexlu/connect" className="social">
              <Image src={calendly} className="icon" />
            </a> */}
          </Col>
          <Col className="p-1 d-flex justify-content-end" md={3} sm={12}>
            {goodbye} <Emoji symbol="👋" />
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
