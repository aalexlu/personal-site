import React from "react";

import Header from "../components/Header/Header";
import Content from "../components/Content/Content";

function TeachingPage(props) {
  return (
    <div>
      <Header title={props.title} subTitle={props.subTitle} text={props.text} />

      <Content>
        <p id="teachid">
          <b>Cubstart Lab Section Sample</b>
        </p>
        <p>
          <a href="https://berkeley.zoom.us/rec/share/o-GkOeoe_9o98j4421FbYN3SOcQ-BgQvnqPiImlXeH0fJ4SAKgp9bRN5gfxrSBv_.F5voj3tc-dUDdzRS" id="linkid-contact">
            Multiple Views Lab Intro Recording
          </a>
        </p>

        <p id="teachid">
          <b>Cubstart Lab Content</b>
        </p>
        <p>
          <a
            href="https://www.notion.so/calhacks/iOS-Lab-3-Bullseye-3394d094003c4f3c981f25684c3429d2"
            id="linkid-contact"
          >
            Spec: Bullseye
          </a>
          <br></br>
          <a
            href="https://docs.google.com/presentation/d/1dg8KC9zlfKFL3idNMiqPyOKcctFOhwyOQqHpeZC1bio/edit?usp=sharing"
            id="linkid-contact"
          >
            Slides: Waitlist Helper
          </a>
          <br></br>
          <a
            href="https://docs.google.com/presentation/d/1eTLCPx7rQeZrNcuXYe8QEZfUrxYUFAvmexKuf2tuz20/edit?usp=sharing"
            id="linkid-contact"
          >
            Slides: Shopping List
          </a>
          <br></br>
          <a
            href="https://github.com/aalexlu/cubstart-junkies"
            id="linkid-contact"
          >
            App: Junkies
          </a>
          <br></br>
          <a
            href="https://github.com/aalexlu/cubstart-bullseye"
            id="linkid-contact"
          >
            App: Bullseye
          </a>
          <br></br>
          <a
            href="https://github.com/aalexlu/cubstart-shoppinglist"
            id="linkid-contact"
          >
            App: Shopping List
          </a>
        </p>

        <p id="teachid">
          <b>Cubstart Video Clips</b>
        </p>
        <p>
          <a href="https://youtu.be/3zqXThFsOGI" id="linkid-contact">
            Simulating Location
          </a>
          <br></br>
          <a href="https://youtu.be/FfRNWiWIQuE" id="linkid-contact">
            Adding Background Image to View Controller
          </a>
          <br></br>
          <a href="https://youtu.be/1ShXtRzHpNQ" id="linkid-contact">
            Counter App Recap
          </a>
          <br></br>
          <a href="https://youtu.be/kEBB1eQ8eUM" id="linkid-contact">
            Multiple Views: Things to Look Out For
          </a>
          <br></br>
          <a href="https://youtu.be/aqWx8bkguPo" id="linkid-contact">
            Stack Views
          </a>
          <br></br>
        </p>

        <p id="teachid">
          <b>Personal Wiki</b>
        </p>
        <p>
          <a href="https://github.com/aalexlu/content" id="linkid-contact">
            Content
          </a>
        </p>
      </Content>
    </div>
  );
}

export default TeachingPage;
