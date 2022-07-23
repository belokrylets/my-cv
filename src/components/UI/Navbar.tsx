import classNames from "classnames";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { navMenu } from "../../data/navMenu";
import logo from "../../images/logo.svg";
import ButtonBurger from "./ButtonBurger";

const Navbar = () => {
  const [burgerActive, setBurgerActive] = useState(false);
  const [currentPage, setCurrentPage] = useState("Главная"); //menuActive
  const handleBurgerActive = () => {
    setBurgerActive(!burgerActive);
  };
  const handleItemMenu = (page: string) => {
    setBurgerActive(!burgerActive);
    setCurrentPage(page);
  };
  return (
    <header className="header" onClick={handleBurgerActive}>
      <div className="container">
        <div className={classNames("blur", { active: burgerActive })}></div>
        <div className="header-body" onClick={(e) => e.stopPropagation()}>
          <div className="header-logo">
            <img src={logo} alt="" />
          </div>
          <nav className={classNames("header-menu", { active: burgerActive })}>
            <ul className="menu-list">
              {navMenu.map((item) => (
                <li className="menu-item " key={item.title}>
                  <Link
                    onClick={() => handleItemMenu(item.title)}
                    className={classNames("nav-link", {
                      active: item.title === currentPage,
                    })}
                    to={item.link}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <ButtonBurger
            burgerActive={burgerActive}
            onClick={handleBurgerActive}
          />{" "}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
