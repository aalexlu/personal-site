import React from "react";
import Container from "react-bootstrap/container";
import Row from "react-bootstrap/Row";

import Card from "../components/Card";

import dosage from "../assets/images/dosage.png";
import website from "../assets/images/website.png";
import questions from "../assets/images/questions.png";

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 0,
          title: "Dosage",
          subTitle: "iOS application to monitor substances", //the usage and effects of medication and substances to provide data to regulate then fine-tune dosage",
          imgSrc: dosage,
          link: "", //TODO insert figma
          selected: false,
        },
        {
          id: 1,
          title: "Personal Website",
          subTitle: "the website you see here!",
          imgSrc: website,
          link: "", //TODO alexandralu.com
          selected: false,
        },
        {
          id: 2,
          title: "Questions?",
          subTitle: "streamline the process of asking questions", //during lecture by allowing attendees to use their smartphones as a microphone",
          imgSrc: questions,
          link: "https://github.com/Stanford-Treehacks-2020",
          selected: false,
        },
      ],
    };
  }

  handleCardClick = (id, card) => {
    let items = [...this.state.items];

    items[id].selected = items[id].selected ? false : true;

    items.forEach((item) => {
      if (item.id !== id) {
        item.selected = false;
      }
    });

    this.setState({
      items,
    });
  };

  makeItems = (items) => {
    return items.map((item) => {
      return (
        <Card
          item={item}
          click={(e) => this.handleCardClick(item.id, e)}
          key={item.id}
        />
      );
    });
  };

  render() {
    return (
      <Container fluid={true}>
        <Row className="justify-content-around">
          {this.makeItems(this.state.items)}
        </Row>
      </Container>
    );
  }
}

export default Carousel;
