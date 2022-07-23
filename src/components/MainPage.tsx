import React from "react";
import { useNavigate } from "react-router-dom";
import photo from "../images/photo.png";

const MainPage = () => {
  const navigate = useNavigate();

  const buttonClick = () => {
    navigate("contacts");
  };
  return (
    <div className="main-page">
      <div className="main-page-content container">
        <div className="text-main-page">
          <div className="greetings">Привет, меня зовут</div>
          <div className="name">Сергей Белокрылец</div>
          <div className="profession">Я Frontend Разработчик</div>
          <button className="my-button" onClick={buttonClick}>
            Связаться со мной
          </button>
        </div>
        <div className="image-main-page">
          <img src={photo} alt="photo" />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
