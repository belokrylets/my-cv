import React from "react";
import ProgressBar from "./UI/ProgressBar";

const Skills = () => {
  return (
    <div className="skills">
      <div className="skills-content container">
        <div className="experience">
          <h3>
            Мои <span className="gold-color">навыки</span> и
            <span className="gold-color">опыт</span>
          </h3>
          <p className="education">
            8 месяцев работал верстальщиком/Frontend Разработчиком/контент
            менеджером в отделе продвижения интернет ресурсов в СПб ГБУ
            «Городское Туристско-Информационное Бюро». В основном занимался
            версткой лендингов и коррекцией имеющихся страниц, размещал контент
            на сайте и совсем немного фронтендом. Малое присутствие последнего
            сподвигло уйти из компании.
          </p>
          <p className="education">
            В моем профиле в GitHub вы найдете несколько учебных проектов на JS,
            тестовые задания и пэт проект с использованием SPA, React, React
            router dom, Redux, Redux Toolkit, Typescript.
            <a href="https://github.com/belokrylets">Ссылка на GitHub.</a>
          </p>
        </div>

        <div className="list-skills">
          <ProgressBar progress={80} title={"JavaScript"} />
          <ProgressBar progress={80} title={"React"} />
          <ProgressBar progress={70} title={"Redux"} />
          <ProgressBar progress={60} title={"Typescript"} />
          <ProgressBar progress={80} title={"HTML"} />
          <ProgressBar progress={60} title={"SASS/SCSS"} />
          <ProgressBar progress={70} title={"CSS"} />
          <ProgressBar progress={40} title={"NodeJS"} />
        </div>
      </div>
    </div>
  );
};

export default Skills;
