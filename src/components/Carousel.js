import React from "react";
import Container from "react-bootstrap/container";
import Row from "react-bootstrap/row";

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
          subTitle: "regulate & fine-tune dosage", //the usage and effects of medication and substances to provide data to regulate then fine-tune dosage",
          imgSrc: dosage,
          link: "", //TODO insert figma
          selected: false,
        },
        {
          id: 1,
          title: "Personal Website",
          subTitle: "the website you see here!",
          imgSrc: website,
          link: "https://alexandralu.com", //TODO alexandralu.com
          selected: false,
        },
        {
          id: 2,
          title: "Gitlet",
          subTitle: "version control system",
          imgSrc: website,
          link: "", //TODO alexandralu.com
          selected: false,
        },
        {
          id: 3,
          title: "Enigma Machine",
          subTitle: "an encryption simulator",
          imgSrc: website,
          link: "", //TODO alexandralu.com
          selected: false,
        },
        {
          id: 4,
          title: "Questions?",
          subTitle: "streamline question asking", //during lecture by allowing attendees to use their smartphones as a microphone",
          imgSrc: questions,
          link: "https://devpost.com/software/questions",
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
