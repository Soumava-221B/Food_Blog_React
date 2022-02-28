import React from "react";
// import  Image  from "../assets/Chef.jpeg";
import "../styles/About.css";
import Blog1 from "../assets/blog1.jpeg";

function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${Blog1})` }}
      ></div>

      <div className="aboutBottom">
        <br></br>
        <br></br>
        <h1>ABOUT US</h1>
        <br></br>
        <br></br>
        <p>
          This blog is for anyone who loves to cook and for everyone who doesn’t. 
        </p>
        
      </div>
    </div>
  );
}

export default About;
