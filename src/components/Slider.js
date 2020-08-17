import React from "react";
import Carousel from "react-bootstrap/Carousel";

import dosage from "../assets/images/dosage-wide.png";
import website from "../assets/images/website-wide.png";
import questions from "../assets/images/questions-wide.png";
// import gitlet from "../asset/images/gitlet-wide.png";

class Slider extends React.Component {
  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={dosage} alt="Dosage" />
          {/* <Carousel.Caption>
            <h3>Dosage</h3>
            <p>regulate & fine-tune dosage</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={website} alt="Website" />
          <Carousel.Caption>
            <a href="https://www.alexandralu.com" id="linkid">
              View
            </a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={questions} alt="Questions" />
          <Carousel.Caption>
            <a href="https://devpost.com/software/questions" id="linkid">
              View
            </a>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default Slider;
