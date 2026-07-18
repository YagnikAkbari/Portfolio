"use client";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import Navbar from "./Navbar";
import { portfolioData } from "../data/portfolioData";

const Hero = () => {
  const { personalInfo } = portfolioData;

  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="header-wrapper">
      <Navbar />
      <div className="showcase-info-container">
        <p className="showcase-tag">{personalInfo.helloTag}</p>
        <h1 className="main-heading">{personalInfo.title}</h1>
        <div className="showcase-description">{personalInfo.subTitle}</div>
        <button
          className="uppercase button secondary-button"
          onClick={scrollToProjects}
        >
          <span className="mr-s mt-s">
            <FontAwesomeIcon icon={faCaretRight} className="medium-icon" />
          </span>
          see my work
        </button>
      </div>
    </div>
  );
};

export default Hero;
