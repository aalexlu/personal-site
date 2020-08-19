import React from "react";
import Image from "react-bootstrap/image";

// import Hero from "../components/Hero";
import HeroProfile from "../components/HeroProfile";
import Content from "../components/Content";

import tomato from "../assets/images/tomato.png";

function HomePage(props) {
  return (
    <div>
      <HeroProfile
        title={props.title}
        subTitle={props.subTitle}
        text={props.text}
      />

      <Content>
        <p>
          {" "}
          Hello! I'm Alex, a developer based in the Bay Area who simply loves{" "}
          <a href="/work" id="linkid">
            building.
          </a>{" "}
          I am a sophomore studying Computer Science and Linguistics at UC
          Berkeley, and the intersection between tech, business, and design
          excites me!
          {/* mention linguistics? */}
        </p>
        <p>
          Currently, I am working as a director on the{" "}
          <a href="https://calhacks.io" id="linkid">
            Cal Hacks
          </a>{" "}
          team, exploring through side projects, and looking for future
          internships.
          {/* usually
          running the world's largest collegiate hackathon. With COVID-19 we are
          redirecting our efforts toward other initiatives so be on the lookout! */}
        </p>
        {/* <p>
          My latest project, Dosage, is an iOS application to monitor the usage
          of medication and substances to provide the user with data to
          regulate, then fine-tune dosage. You can check out the base concept
          here.
        </p> */}
        <p>
          If I'm not studying or working my computer, chances are that I'm
          cycling, 3D modeling, or spending time with my cat,{" "}
          <a href="/" id="linkid-tomatotext">
            Tomato.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
            <Image src={tomato} className="a-tomato" id="linkid-tomatoimage" />
          </a>
          {/* it would be cool to pop in images for each word clicked on! */}
        </p>
        <p>Welcome to my website ~ feel free to take a look around! </p>
        <div>
          <p> </p>
        </div>
      </Content>
    </div>
  );
}

export default HomePage;
