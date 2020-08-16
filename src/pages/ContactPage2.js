import React from "react";

import Hero from "../components/Hero";
import Content from "../components/Content";

function ContactPage2(props) {
  return (
    <div>
      <Hero title={props.title} subTitle={props.subTitle} text={props.text} />

      <Content>
        <p>(replace with icons and links and sendgrid??)</p>
        <p>email form</p>
        <p>linkedin.com/in/aalexlu</p>
        <p>github.com/aalexlu</p>
      </Content>
    </div>
  );
}

export default ContactPage2;
