import React from "react";
import photo2 from "../images/photo2.jpg";

const AboutMe = () => {
  const buttonViewCV = () => {
    window.open(
      "https://hh.ru/resume/ffb4f185ff0927b5ca0039ed1f7a5466505377",
      "_blank"
    );
  };

  return (
    <div className="about">
      <div className="about-content container">
        <div className="image-about">
          <img src={photo2} alt="phohto2" />
          <div className="frame"></div>
        </div>

        <div className="text-about">
          <h3>Мой путь к программированию</h3>
          <p className="education">
            В 2013 году закончил кафедру Робототехника и автоматизация
            производственных систем в Санкт-Петербургский государственный
            электротехнический университет «ЛЭТИ» им. В.И.Ульянова.
          </p>
          <p className="education">
            После службы в армии по профессии работать не пошел и начал свою
            карьеру в продажах.
          </p>
          <p className="education">
            Не прошло и 6 лет, как программисты отняли у меня всех клиентов, и
            они все начали страховаться в интернете.
          </p>
          <p className="education">
            В середине 2021 года я закончил школу программирования Hexlet.
          </p>
          <p className="education">
            С августа 2021 года и по сей день работаю Frontend разработчиком.
          </p>
          <button className="my-button" onClick={buttonViewCV}>
            Посмотреть резюме
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
