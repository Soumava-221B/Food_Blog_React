import React from "react";
import "../styles/About.css";
import Background from "../assets/BackGround.jpeg";
function About() {
  return (
    <div className="about">
      <div className="aboutTop" style={{ backgroundImage: `url(${Background})` }}>
       <h1>ABOUT US</h1>
      </div>
      </div>
  );
}

export default About;
