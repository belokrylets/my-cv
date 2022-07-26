import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import photo from "../images/photo.png";
import { activePageSlice } from "../store/reducers/activePageSlice";

const MainPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { changeActivePage } = activePageSlice.actions;

  const buttonClick = () => {
    dispatch(changeActivePage("contacts"));
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
          <img src={photo} alt="img-main-page" />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
