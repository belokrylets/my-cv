import classNames from "classnames";
import React from "react";

interface ProjectCardProps {
  size: string;
  project: {
    title: string;
    description: string;
    stack: string[];
    GitHub: string;
  };
  position: string;
  CardNumber: number;
  stateActive: number;
  setActiveCard: React.Dispatch<React.SetStateAction<number>>;
}
const ProjectCard = ({
  CardNumber,
  position,
  project,
  setActiveCard,
  size,
  stateActive,
}: ProjectCardProps) => {
  const { title, description, stack, GitHub } = project;
  return (
    <div
      className={classNames(`card-item-${position}`, `card-${size}`, {
        active: stateActive === CardNumber,
      })}
    >
      <div className="details">
        <h4>{title}</h4>

        <div className="description">
          {description}
          <div className="stack">
            Stack:
            <ul>
              {stack.map((item) => (
                <li>{item}</li>
              ))}
            </ul>
          </div>
          <div className="source">
            <a href={GitHub}>Исходный код</a>
          </div>
        </div>
      </div>
      {stateActive === 0 ? (
        <button
          onClick={() => setActiveCard(CardNumber)}
          className="buttonProject"
        >
          {"Подробнее"}
        </button>
      ) : (
        <button onClick={() => setActiveCard(0)} className="buttonProject">
          {stateActive === CardNumber ? "Скрыть" : "Подробнее"}
        </button>
      )}
    </div>
  );
};

export default ProjectCard;
