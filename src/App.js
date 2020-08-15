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
        { title: "About", path: "/" }, //About
        { title: "Work", path: "/work" },
        { title: "Courses", path: "/courses" },
        { title: "Resume", path: "/resume" },
        { title: "Contact", path: "/contact" },
      ],
      home: {
        title: "alexandra lu",
        subTitle: "“Do what you can, with what you have, where you are.”",
        text: "-Theodore Roosevelt",
      },
      work: {
        title: "projects",
        subTitle: '"You can do anything you set your mind to."',
        text: "-Benjamin Franklin",
      },
      courses: {
        title: "courses",
        subTitle: '"Learn as if you were to live forever."',
        text: "-Mahatma Gandhi",
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
            <Navbar.Brand> </Navbar.Brand>
            {/* previously alexandra lu */}
            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">
                  About
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
            render={() => (
              <HomePage
                title={this.state.home.title}
                subTitle={this.state.home.subTitle}
                text={this.state.home.text}
              />
            )}
          />
          <Route
            path="/work"
            render={() => (
              <WorkPage
                title={this.state.work.title}
                subTitle={this.state.work.subTitle}
                text={this.state.work.text}
              />
            )}
          />
          <Route
            path="/courses"
            render={() => (
              <CoursesPage
                title={this.state.courses.title}
                subTitle={this.state.courses.subTitle}
                text={this.state.courses.text}
              />
            )}
          />
          <Route
            path="/resume"
            render={() => <ResumePage title={this.state.resume.title} />}
          />
          <Route
            path="/contact"
            render={() => <ContactPage title={this.state.contact.title} />}
          />

          <Footer />
        </Container>
      </Router>
    );
  }
}

export default App;
