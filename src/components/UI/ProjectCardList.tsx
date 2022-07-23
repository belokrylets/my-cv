import React, { useState } from "react";
import { myProjects } from "../../data/myProjects";
import ProjectCard from "./ProjectCard";

const ProjectCardList = () => {
  const projects = myProjects;
  const [activeCard, setActiveCard] = useState(0);
  return (
    <>
      <div className="project-column">
        <ProjectCard
          size={"average"}
          project={projects.fitnessAssistant}
          position={"up"}
          CardNumber={1}
          stateActive={activeCard}
          setActiveCard={setActiveCard}
        />
        <ProjectCard
          size={"average"}
          project={projects.presentation}
          position={"down"}
          CardNumber={2}
          stateActive={activeCard}
          setActiveCard={setActiveCard}
        />
      </div>
      <div className="project-column">
        <ProjectCard
          size={"big"}
          project={projects.testFutureGroup}
          position={"up"}
          CardNumber={3}
          stateActive={activeCard}
          setActiveCard={setActiveCard}
        />
        <ProjectCard
          size={"small"}
          project={projects.testSkDesign}
          position={"down"}
          CardNumber={4}
          stateActive={activeCard}
          setActiveCard={setActiveCard}
        />
      </div>
      <div className="project-column">
        <ProjectCard
          size={"average"}
          project={projects.dataTable}
          position={"up"}
          CardNumber={5}
          stateActive={activeCard}
          setActiveCard={setActiveCard}
        />
        <ProjectCard
          size={"average"}
          project={projects.testing}
          position={"down"}
          CardNumber={6}
          stateActive={activeCard}
          setActiveCard={setActiveCard}
        />
      </div>
      <div className="project-column">
        <ProjectCard
          size={"small"}
          project={projects.brainGames}
          position={"up"}
          CardNumber={7}
          stateActive={activeCard}
          setActiveCard={setActiveCard}
        />
        <ProjectCard
          size={"big"}
          project={projects.currencyConverter}
          position={"down"}
          CardNumber={8}
          stateActive={activeCard}
          setActiveCard={setActiveCard}
        />
      </div>
      <div className="project-column">
        <ProjectCard
          size={"average"}
          project={projects.contactList}
          position={"up"}
          CardNumber={9}
          stateActive={activeCard}
          setActiveCard={setActiveCard}
        />
        <ProjectCard
          size={"average"}
          project={projects.calculator}
          position={"down"}
          CardNumber={10}
          stateActive={activeCard}
          setActiveCard={setActiveCard}
        />
      </div>
    </>
  );
};

export default ProjectCardList;
