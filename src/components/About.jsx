import React from "react";
import { portfolioData } from "../data/portfolioData";

const About = () => {
  const { personalInfo } = portfolioData;

  return (
    <div id="about" className="container">
      <h1 className="section__heading">About Me</h1>
      <p className="about">
        {personalInfo.bio}
      </p>
    </div>
  );
};

export default About;
