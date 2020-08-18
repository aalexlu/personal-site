import React from "react";

import Hero from "../components/Hero";
import Content from "../components/Content";

function HomePage(props) {
  return (
    <div>
      <Hero title={props.title} subTitle={props.subTitle} text={props.text} />

      <Content>
        <p>
          {" "}
          Hello! I'm Alex, a web and mobile developer based in the Bay Area who
          simply loves{" "}
          <a href="/work" id="linkid">
            building.
          </a>{" "}
          I am a sophomore studying Computer Science at UC Berkeley, and the
          intersection between tech, business, and design excites me!
          {/* mention linguistics? */}
        </p>
        <p>
          Currently, I am working as a director on the{" "}
          <a href="https://calhacks.io" id="linkid">
            Cal Hacks
          </a>{" "}
          team, working on side projects, & looking for future internships.
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
          cycling, 3D modeling, or spending time with my cat, Tomato.{" "}
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
