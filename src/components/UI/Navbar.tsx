import classNames from "classnames";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { navMenu } from "../../data/navMenu";
import { useAppSelector } from "../../hooks/redux";
import logo from "../../images/logo.svg";
import { activeBurgerSlice } from "../../store/reducers/activeBurgerSlice";
import { activePageSlice } from "../../store/reducers/activePageSlice";
import ButtonBurger from "./ButtonBurger";

const Navbar = () => {
  const dispatch = useDispatch();
  const { changeActiveBurger } = activeBurgerSlice.actions;
  const { changeActivePage } = activePageSlice.actions;
  const { activePage } = useAppSelector((state) => state.activePageReducer);
  const { isActive } = useAppSelector((state) => state.activeBurgerReducer);

  const handleBurgerActive = () => {
    dispatch(changeActiveBurger(!isActive));
  };

  const handleItemMenu = (page: string) => {
    dispatch(changeActiveBurger(false));
    dispatch(changeActivePage(page));
  };
  return (
    <header className="header" onClick={handleBurgerActive}>
      <div className="container">
        <div className={classNames("blur", { active: isActive })}></div>
        <div className="header-body" onClick={(e) => e.stopPropagation()}>
          <div className="header-logo">
            <img src={logo} alt="" />
          </div>
          <nav className={classNames("header-menu", { active: isActive })}>
            <ul className="menu-list">
              {navMenu.map(({ title, id, link }) => (
                <li className="menu-item " key={id}>
                  <Link
                    onClick={() => handleItemMenu(id)}
                    className={classNames("nav-link", {
                      active: id === activePage,
                    })}
                    to={link}
                  >
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <ButtonBurger burgerActive={isActive} onClick={handleBurgerActive} />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
