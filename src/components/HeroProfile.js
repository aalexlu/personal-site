import React from "react";
import Jumbotron from "react-bootstrap/jumbotron";
import Container from "react-bootstrap/container";
import Row from "react-bootstrap/row";
import Col from "react-bootstrap/col";
import Image from "react-bootstrap/image";

import profile from "../assets/images/profile3.png";

function HeroProfile(props) {
  return (
    <Jumbotron className="bg-transparent jumbotron-fluid p-0">
      <Container fluid={true}>
        <Row className="a-profile-entire-hero">
          <Col md={6} sm={9}>
            {props.title && <h1 className="a-hero-title">{props.title}</h1>}
            {props.subTitle && (
              <h3 className="a-hero-quote">{props.subTitle}</h3> //was display-4 font-weight-light
            )}
            {props.text && (
              <h3 className="a-hero-name">{props.text}</h3> //lead font-weight-light
            )}
          </Col>
          <Col md={2} sm={3}>
            <Image src={profile} className="a-profile" />
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
}

export default HeroProfile;
