import React from "react";
import { portfolioData } from "../data/portfolioData";

const Footer = () => {
  const { personalInfo } = portfolioData;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p className="center">
        &copy; {currentYear} {personalInfo.name}. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
