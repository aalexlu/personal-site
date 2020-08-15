import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./App.css";

import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import WorkPage from "./pages/WorkPage";
import CoursesPage from "./pages/CoursesPage";
import ResumePage from "./pages/ResumePage";
import ContactPage from "./pages/ContactPage";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "alexandra lu",
      headerLinks: [
        { title: "Home", path: "/" }, //About
        { title: "Work", path: "/work" },
        { title: "Courses", path: "/courses" },
        { title: "Resume", path: "/resume" },
        { title: "Contact", path: "/contact" },
      ],
      home: {
        title: "alexandra lu",
        subTitle: "hmm",
        text: "welcome to my website! feel free to look around",
      },
      work: {
        title: "projects",
      },
      courses: {
        title: "coursework",
      },
      resume: {
        title: "resume",
      },
      contact: {
        title: "let's talk",
      },
    };
  }

  render() {
    return (
      <Router>
        <Container className="p-0" fluid={true}>
          <Navbar className="border-bottom" bg="transparent" expand="lg">
            <Navbar.Brand>alexandra lu</Navbar.Brand>

            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">
                  Home
                </Link>
                <Link className="nav-link" to="/work">
                  Work
                </Link>
                <Link className="nav-link" to="/courses">
                  Courses
                </Link>
                <Link className="nav-link" to="/resume">
                  Resume
                </Link>
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Route
            path="/"
            exact
            render={() => <HomePage title={this.state.home.title} />}
          />
          <Route
            path="/work"
            exact
            render={() => <WorkPage title={this.state.work.title} />}
          />
          <Route
            path="/courses"
            exact
            render={() => <CoursesPage title={this.state.courses.title} />}
          />
          <Route
            path="/resume"
            exact
            render={() => <ResumePage title={this.state.resume.title} />}
          />
          <Route
            path="/contact"
            exact
            render={() => <ContactPage title={this.state.contact.title} />}
          />

          <Footer />
        </Container>
      </Router>
    );
  }
}

export default App;
