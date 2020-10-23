import React from "react";

import Header from "../components/Header/Header";
import Content from "../components/Content/Content";

function TeachingPage(props) {
  return (
    <div>
      <Header title={props.title} subTitle={props.subTitle} text={props.text} />

      <Content>
        <p id="teachid">
          <b>Cubstart iOS Labs</b>
        </p>
        <p>
          <a
            href="https://www.notion.so/calhacks/iOS-Lab-3-Bullseye-3394d094003c4f3c981f25684c3429d2"
            id="linkid-contact"
          >
            Bullseye Spec
          </a>
          <br></br>
          <a
            href="https://github.com/aalexlu/cubstart-junkies"
            id="linkid-contact"
          >
            Junkies App
          </a>
          <br></br>
          <a
            href="https://github.com/aalexlu/cubstart-bullseye"
            id="linkid-contact"
          >
            Bullseye App
          </a>
          <br></br>
          <a
            href="https://github.com/aalexlu/cubstart-shoppinglist"
            id="linkid-contact"
          >
            Shopping List App
          </a>
        </p>

        <p id="teachid">
          <b>Cubstart iOS Videos</b>
        </p>
        <p>
          <a href="https://youtu.be/FfRNWiWIQuE" id="linkid-contact">
            Adding Background Image to View Controller
          </a>
          <br></br>
          <a href="https://youtu.be/1ShXtRzHpNQ" id="linkid-contact">
            Counter App Recap
          </a>
          <br></br>
          <a href="https://youtu.be/kEBB1eQ8eUM" id="linkid-contact">
            Multiple Views: Common Mistakes
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
