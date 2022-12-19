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
            9 месяцев работал Frontend Разработчиком в отделе продвижения
            интернет ресурсов в СПб ГБУ «Городское Туристско-Информационное
            Бюро».
            <ul>
              {" "}
              Функционал:
              <li>- Верстка лендигов, с использованием React;</li>
              <li>
                - Разработана UI библиотека, в составе которой адаптивный
                НавБар, модальное окно, инпуты, формы, кнопки, для использования
                в разработке лендингов.
              </li>
              <li>
                - Разработан вариант приложения «Тестирование гидов
                переводчиков». SPA с использованием Typescript и React/Redux.
              </li>
            </ul>
          </p>
          <p className="education">
            5 месяцев работал FullStack Разработчиком (React + nest.js) на ИП
            Памазан.
            <ul>
              {" "}
              Разработал:
              <li>- Интернет магазин кожаных изделий.</li>
              <li>
                - Серверная часть разработана на Nest.js, реализована страница
                администратора с CRUD: товары, категории товаров, гендерная
                принадлежность, цвет, пользователи. Авторизация/регистрация с
                помощью JWT токенов.
              </li>
            </ul>
          </p>
          <p className="education">
            С 24 октября 2023 года работаю Frontend разработчиком в компании SK
            Design.
            <ul>
              {" "}
              Функционал:
              <li>
                - Работа над проектом "Администрирование интернет магазина";
              </li>
              <li>- Переделана архитектура всего приложения;</li>
              <li>- Перевел проект на TypeScript;</li>
              <li>- Разработка новых разделов для в проекте.</li>
            </ul>
          </p>
        </div>

        <div className="list-skills">
          <ProgressBar progress={80} title={"JavaScript"} />
          <ProgressBar progress={80} title={"React"} />
          <ProgressBar progress={70} title={"Redux/Redux Toolkit"} />
          <ProgressBar progress={60} title={"Typescript"} />
          <ProgressBar progress={80} title={"HTML"} />
          <ProgressBar progress={60} title={"SASS/SCSS"} />
          <ProgressBar progress={70} title={"CSS"} />
          <ProgressBar progress={40} title={"NodeJS/Express/Nest"} />
        </div>
      </div>
    </div>
  );
};

export default Skills;
