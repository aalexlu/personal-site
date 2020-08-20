import React from "react";
import Carousel from "react-bootstrap/Carousel";

import dosage from "../assets/images-work/dosage-wide.png";
import website from "../assets/images-work/website-wide.png";
import questions from "../assets/images-work/questions-wide.png";
import gitlet from "../assets/images-work/gitlet-wide.png";
import enigma from "../assets/images-work/enigma-wide.png";
import loa from "../assets/images-work/loa-wide.png";
import research from "../assets/images-work/research-wide.png";

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

        <Carousel.Item>
          <img className="d-block w-100" src={gitlet} alt="Gitlet" />
          <Carousel.Caption>
            <a href="mailto:alu@berkeley.edu" id="linkid">
              Request code
            </a>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={enigma} alt="Enigma" />
          <Carousel.Caption>
            <a href="mailto:alu@berkeley.edu" id="linkid">
              Request code
            </a>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={loa} alt="Line of Action" />
          <Carousel.Caption>
            <a href="mailto:alu@berkeley.edu" id="linkid">
              Request code
            </a>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={research} alt="Research" />
          <Carousel.Caption>
            <a
              href="https://docs.google.com/presentation/d/1bfr-lj3QLMPfgIgx4km2juJcVLteT20_Qqr_beIpyYU/edit?usp=sharing"
              id="linkid"
            >
              View
            </a>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default Slider;
