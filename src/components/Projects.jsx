import React from "react";
import ProjectCard from "./ProjectCard";
import { portfolioData } from "../data/portfolioData";

const Projects = () => {
  const { projects } = portfolioData;

  return (
    <div id="projects" className="container">
      <h1 className="section__heading">My Projects</h1>
      <div className="project-cards">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            heading={project.heading}
            description={project.description}
            image={project.image}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
