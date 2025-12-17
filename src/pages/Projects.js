import React from 'react';
import ProjectCard from '../components/ProjectCard';
import projectsData from '../data/projectsData';

const Projects = () => (
  <div className="projects-page">
    {projectsData.map((project, index) => (
      <ProjectCard key={index} {...project} />
    ))}
  </div>
);

export default Projects;
