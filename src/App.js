import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Container from "react-bootstrap/container";
import Navbar from "react-bootstrap/navbar";
import Nav from "react-bootstrap/nav";
// import "./App.css";

import Footer from "./components/Footer/Footer";
import HomePage from "./pages/HomePage";
import WorkPage from "./pages/WorkPage";
import CoursesPage from "./pages/CoursesPage";
import ResumePage from "./pages/ResumePage";
import ContactPage2 from "./pages/ContactPage2";

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
        text: "-THEODORE ROOSEVELT",
      },
      work: {
        title: "projects",
        subTitle: "“Nothing will work unless you do.”",
        text: "-MAYA ANGELOU",
      },
      courses: {
        title: "courses",
        subTitle: "“The important thing is to not stop questioning.”",
        text: "-ALBERT EINSTEIN",
      },
      resume: {
        title: "resume",
        subTitle: "Download Here",
      },
      contact: {
        title: "get in touch~",
      },
    };
  }

  render() {
    return (
      <div className="a-page">
        <Router>
          <Container className="p-0" fluid={true}>
            <Navbar expand="lg">
              <Navbar.Brand></Navbar.Brand>
              {/* previously alexandra lu */}
              <Navbar.Toggle
                className="border-0"
                aria-controls="navbar-toggle"
              />
              <Navbar.Collapse id="navbar-toggle">
                <Nav className="ml-auto">
                  <Link className="nav-link" id="nav-link" to="/">
                    ABOUT
                  </Link>
                  <Link className="nav-link" id="nav-link" to="/work">
                    WORK
                  </Link>
                  <Link className="nav-link" id="nav-link" to="/courses">
                    COURSES
                  </Link>
                  <Link className="nav-link" id="nav-link" to="/resume">
                    RESUME
                  </Link>
                  <Link className="nav-link" id="nav-link" to="/contact">
                    CONTACT
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
              render={() => (
                <ResumePage
                  title={this.state.resume.title}
                  subTitle={this.state.resume.subTitle}
                />
              )}
            />
            <Route
              path="/contact"
              render={() => (
                <ContactPage2
                  title={this.state.contact.title}
                  subTitle={this.state.contact.subTitle}
                />
              )}
            />

            <Footer className="a-footer" />
          </Container>
        </Router>
      </div>
    );
  }
}

export default App;
