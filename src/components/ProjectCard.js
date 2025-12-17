import React from 'react';

const ProjectCard = ({ title, description, technologies, screenshot, github }) => (
  <div className="project-card">
    <img src={screenshot} alt={title} />
    <h3>{title}</h3>
    <p>{description}</p>
    <p><b>Tech Stack:</b> {technologies}</p>
    <a href={github} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
  </div>
);

export default ProjectCard;
