import React from "react";

const ProjectCard = ({ heading, description, image, link }) => {
  return (
    <a
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
    </a>
  );
};

export default ProjectCard;
