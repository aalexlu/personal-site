import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function HeroLink(props) {
  return (
    <Jumbotron className="bg-transparent jumbotron-fluid p-0">
      <Container fluid={true}>
        <Row className="a-entire-hero">
          <Col md={8} sm={12}>
            {props.title && <h1 className="a-hero-title">{props.title}</h1>}
            {props.subTitle && (
              <a
                className="a-hero-quote"
                href={
                  "https://drive.google.com/file/d/1zbjOJx9RpUpHXV8d-mFLPLq4zpAIRQEQ/view?usp=sharing"
                }
              >
                {props.subTitle}
              </a> //was display-4 font-weight-light
            )}
            {props.text && (
              <h3 className="a-hero-name">{props.text}</h3> //lead font-weight-light
            )}
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
}

export default HeroLink;
