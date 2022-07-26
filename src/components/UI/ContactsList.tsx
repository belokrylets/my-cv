import { Icon } from "@iconify/react";
import React from "react";

const ContactsList = () => {
  return (
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
        <a href="tel:+79959969772">
          <i>
            <Icon
              icon="fa:phone-square"
              color="#f4fa1a"
              width="30"
              height="30"
            />
          </i>
          +7 (995) 996 97-72
        </a>
      </div>
      <div className="item-contacts">
        <i>
          <Icon icon="el:map-marker" color="#f4fa1a" width="30" height="30" />
        </i>
        Россия, Санкт-Петербург
      </div>
      <div className="item-contacts">
        <a href="mailto:s.belokrylets@gmail.com">
          <i>
            <Icon icon="entypo:email" color="#f4fa1a" width="30" height="30" />
          </i>
          s.belokrylets@gmail.com
        </a>
      </div>
      <div className="item-contacts">
        <a
          href="https://github.com/belokrylets"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i>
            <Icon icon="cib:github" color="#f4fa1a" width="30" height="30" />
          </i>
          Мой GitHub
        </a>
      </div>
      <div className="item-contacts">
        <a
          href="https://hh.ru/resume/ffb4f185ff0927b5ca0039ed1f7a5466505377"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i>
            <Icon icon="pepicons:cv" color="#f4fa1a" width="30" height="30" />
          </i>
          Резюме
        </a>
      </div>
      {/* <div className="item-contacts">

            <a href="https://hh.ru/resume/ffb4f185ff0927b5ca0039ed1f7a5466505377">
                        <i>
              <Icon icon="el:linkedin" color="#f4fa1a" width="30" height="30" />
            </i>
              Профиль LinkedIn
            </a>
          </div> */}
      <div className="item-contacts">
        <a
          href="https://career.habr.com/belokrylets1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i>
            <Icon icon="cib:habr" color="#f4fa1a" width="30" height="30" />
          </i>
          Профиль Habr
        </a>
      </div>
    </div>
  );
};

export default ContactsList;
