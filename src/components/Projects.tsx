import React from "react";
import ProjectCardList from "./UI/ProjectCardList";

const Projects = () => {
  return (
    <div className="projects">
      <div className="projects-content container">
        <div className="cards-projects">
          <ProjectCardList />
        </div>
      </div>
    </div>
  );
};

export default Projects;
