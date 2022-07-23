import React from "react";

interface ProgressBarProps {
  progress: number;
  title: string;
}
const ProgressBar = ({ progress, title }: ProgressBarProps) => {
  return (
    <>
      <div className="title-skill">
        <span>{title}</span> <span>{progress}%</span>
      </div>
      <div
        className="progressbar"
        style={{ "--width": progress } as React.CSSProperties}
      ></div>
    </>
  );
};

export default ProgressBar;
