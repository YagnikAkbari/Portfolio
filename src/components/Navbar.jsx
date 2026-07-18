"use client";

import React from "react";
import { portfolioData } from "../data/portfolioData";

const Navbar = () => {
  const { personalInfo } = portfolioData;

  return (
    <div className="navbar-options-wrapper">
      <div className="navbar-options-container">
        <div className="logo" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          {personalInfo.name.split(" ")[0]} {/* Renders "Yagnik" as logo */}
        </div>
        <div className="navbar-options">
          <a href="#home" className="navbar-option">home</a>
          <a href="#about" className="navbar-option">about</a>
          <a href="#projects" className="navbar-option">projects</a>
          <a href="#contact" className="navbar-option">contact</a>
          <a
            href={personalInfo.resumeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="uppercase see__my__work ml-m button primary-button"
          >
            Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
