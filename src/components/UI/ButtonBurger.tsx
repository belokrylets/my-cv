import { Icon } from "@iconify/react";
import classNames from "classnames";
import React from "react";

interface ButtonBurgerProps {
  onClick: () => void;
  burgerActive: boolean;
}
const ButtonBurger = ({ burgerActive, onClick }: ButtonBurgerProps) => {
  return (
    <button
      onClick={onClick}
      className={classNames("burger-btn", { active: burgerActive })}
    >
      <i className="burger-button">
        {!burgerActive ? (
          <Icon icon="charm:menu-hamburger" />
        ) : (
          <Icon icon="eva:close-fill" />
        )}
      </i>
    </button>
  );
};

export default ButtonBurger;
