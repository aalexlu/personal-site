import React from "react";
import Image from "react-bootstrap/image";

import Header from "../components/Header/Header";
import Content from "../components/Content/Content";

import linkedin from "../assets/logos/linkedin.svg";
import github from "../assets/logos/github.svg";
import facebook from "../assets/logos/facebook.svg";
import email from "../assets/logos/email.svg";
// import calendly from "../assets/logos/calendly.svg";

function ContactPage2(props) {
  return (
    <div>
      <Header title={props.title} subTitle={props.subTitle} text={props.text} />

      <Content>
        {/* replace with icons and links and sendgrid */}
        <a href="https://linkedin.com/in/aalexlu">
          <Image src={linkedin} className="icon-contact" />
        </a>
        <a href="https://linkedin.com/in/aalexlu" id="linkid-contact">
          LinkedIn: https://linkedin.com/in/aalexlu
        </a>
        <p> </p>
        <a href="https://github.com/aalexlu">
          <Image src={github} className="icon-contact" />
        </a>
        <a href="https://github.com/aalexlu" id="linkid-contact">
          GitHub: https://github.com/aalexlu
        </a>
        <p> </p>
        <a href="https://facebook.com/aalexlu">
          <Image src={facebook} className="icon-contact" />
        </a>
        <a href="https://facebook.com/aalexlu" id="linkid-contact">
          Facebook: https://facebook.com/aalexlu
        </a>
        <p> </p>
        <a href="mailto:alu@berkeley.edu">
          <Image src={email} className="icon-contact" />
        </a>
        <a href="mailto:name@domain" id="linkid-contact">
          Email: alu@berkeley.edu
        </a>
        {/* <p> </p>
        <a href="https://calendly.com/alexlu/connect">
          <Image src={calendly} className="icon-contact" />
        </a>
        <a href="https://calendly.com/alexlu/connect" id="linkid-contact">
          Calendly: https://calendly.com/alexlu/connect
        </a> */}
      </Content>
    </div>
  );
}

export default ContactPage2;
