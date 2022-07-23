import React from "react";
import SmallInput from "./UI/SmallInput";
import account from "../images/Account.svg";
import address from "../images/Address.svg";
import mail from "../images/mail.svg";
import github from "../images/github.svg";
import resume from "../images/resume.svg";
import phone from "../images/phone.svg";
import MessageInput from "./UI/MessageInput";
import BigInput from "./UI/BigInput";

const Contacts = () => {
  return (
    <div className="contacts">
      <div className="contacts-content container">
        <div className="form">
          <h3>Написать мне</h3>
          <form>
            <SmallInput placeholder={"Имя..."} name={"name"} />
            <SmallInput placeholder={"Эл. почта..."} name={"mail"} />
            <BigInput />
            <MessageInput />
            <button disabled={true} className="my-button">
              Отправить
            </button>
          </form>
        </div>

        <div className="list-contacts">
          <div className="item-contacts">
            <img src={account} alt="" />
            Сергей Белокрылец
          </div>
          <div className="item-contacts">
            <img src={phone} alt="" />
            <a href="tel:+79959969772">+7 (995) 996 97-72</a>
          </div>
          <div className="item-contacts">
            <img src={address} alt="" />
            Россия, Санкт-Петербург
          </div>
          <div className="item-contacts">
            <img src={mail} alt="" />
            <a href="mailto:s.belokrylets@gmail.com">s.belokrylets@gmail.com</a>
          </div>
          <div className="item-contacts">
            <img src={github} alt="" />
            <a href="https://github.com/belokrylets"> Мой GitHub</a>
          </div>
          <div className="item-contacts">
            <img src={resume} alt="" />
            <a href="https://hh.ru/resume/ffb4f185ff0927b5ca0039ed1f7a5466505377">
              Резюме
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
