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
          Lorem ipsum is a placeholder text commonly used to demonstrate the
          visual form of a document or a typeface without relying on meaningful
          content. Lorem ipsum may be used as a placeholder before the final
          copy is available.
        </p>
        <p>
          {" "}
          Lorem ipsum is a placeholder text commonly used to demonstrate the
          visual form of a document or a typeface without relying on meaningful
          content. Lorem ipsum may be used as a placeholder before the final
          copy is available.
        </p>
      </div>
    </div>
  );
}

export default About;
