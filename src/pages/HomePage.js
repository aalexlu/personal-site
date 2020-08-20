import React from "react";
import Image from "react-bootstrap/image";

// import Hero from "../components/Hero";
import HeroProfile from "../components/HeroProfile";
import Content from "../components/Content";

import tomato from "../assets/images/tomato2.png";

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
          Hello! I'm Alex, a developer based in the Bay Area who loves to{" "}
          <a href="/work" id="linkid">
            build.
          </a>{" "}
          I am a sophomore studying Computer Science and Linguistics at UC
          Berkeley, and the possibilities of making a large social impact
          through technology excites me!
          {/* Berkeley, and the intersection between tech, business, and design
          excites me! */}
        </p>
        <p>
          Currently, I am working as a director on the{" "}
          <a href="https://calhacks.io" id="linkid">
            Cal Hacks
          </a>{" "}
          team, where we're striving to form a community that fosters learning
          and helps bring passion projects to life. Check out our
          director-taught{" "}
          <a href="https://calhacks.io/cubstart" id="linkid">
            course,
          </a>{" "}
          along with our Hack Month initiative!
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
          When I am not studying or writing code, chances are that I'm cycling
          around campus, 3D modeling, or spending time with my cat,{" "}
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
