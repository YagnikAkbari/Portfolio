import Link from "next/link";
import React from "react";

const ProjectCard = ({ heading, description, image, link }) => {
  return (
    <Link
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="project-card"
    >
      <img src={image} alt={heading} className="project-image" />
      <div className="hover-content">
        <h2>{heading}</h2>
        <div>{description}</div>
      </div>
    </Link>
  );
};

export default ProjectCard;
