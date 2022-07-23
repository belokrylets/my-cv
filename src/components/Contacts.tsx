import React from "react";
import SmallInput from "./UI/SmallInput";
import MessageInput from "./UI/MessageInput";
import BigInput from "./UI/BigInput";
import { Icon } from "@iconify/react";

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
            <i>
              <Icon
                icon="mdi:account-cowboy-hat"
                color="#f4fa1a"
                width="30"
                height="30"
              />
            </i>
            Сергей Белокрылец
          </div>
          <div className="item-contacts">
            <i>
              <Icon
                icon="fa:phone-square"
                color="#f4fa1a"
                width="30"
                height="30"
              />
            </i>
            <a href="tel:+79959969772">+7 (995) 996 97-72</a>
          </div>
          <div className="item-contacts">
            <i>
              <Icon
                icon="el:map-marker"
                color="#f4fa1a"
                width="30"
                height="30"
              />
            </i>
            Россия, Санкт-Петербург
          </div>
          <div className="item-contacts">
            <i>
              <Icon
                icon="entypo:email"
                color="#f4fa1a"
                width="30"
                height="30"
              />
            </i>
            <a href="mailto:s.belokrylets@gmail.com">s.belokrylets@gmail.com</a>
          </div>
          <div className="item-contacts">
            <i>
              <Icon icon="cib:github" color="#f4fa1a" width="30" height="30" />
            </i>
            <a href="https://github.com/belokrylets"> Мой GitHub</a>
          </div>
          <div className="item-contacts">
            <i>
              <Icon icon="pepicons:cv" color="#f4fa1a" width="30" height="30" />
            </i>
            <a href="https://hh.ru/resume/ffb4f185ff0927b5ca0039ed1f7a5466505377">
              Резюме
            </a>
          </div>
          {/* <div className="item-contacts">
            <i>
              <Icon icon="el:linkedin" color="#f4fa1a" width="30" height="30" />
            </i>
            <a href="https://hh.ru/resume/ffb4f185ff0927b5ca0039ed1f7a5466505377">
              Прфиль LinkedIn
            </a>
          </div> */}
          <div className="item-contacts">
            <i>
              <Icon icon="cib:habr" color="#f4fa1a" width="30" height="30" />
            </i>
            <a href="https://career.habr.com/belokrylets1">Прфиль Habr</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
