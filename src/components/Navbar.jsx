"use client";

import React from "react";
import { portfolioData } from "../data/portfolioData";
import Link from "next/link";

const Navbar = () => {
  const { personalInfo } = portfolioData;

  return (
    <div className="navbar-options-wrapper">
      <div className="navbar-options-container">
        <div className="logo" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          {personalInfo.name.split(" ")[0]}
        </div>
        <div className="navbar-options">
          <Link href="#home" className="navbar-option">home</Link>
          <Link href="#about" className="navbar-option">about</Link>
          <Link href="#projects" className="navbar-option">projects</Link>
          <Link href="#contact" className="navbar-option">contact</Link>
          <Link
            href={personalInfo.resumeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="uppercase see__my__work ml-m button primary-button"
          >
            Resume
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
