import React from "react";
import { NavLink } from "react-router-dom";
import css from "./Header.module.css";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ImportContactsOutlinedIcon from "@mui/icons-material/ImportContactsOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

import carLogo from "../../assets/logo.jpg";

const Header = () => {
  return (
    <header className={css.header}>
      <img src={carLogo} alt="logo" className={css.logo} />
      <nav className={css.nav}>
        <NavLink
          to="/"
          className={css.navLink}
          style={({ isActive }) => ({
            color: isActive ? "#3470ff" : "#121417",
          })}
        >
          <HomeOutlinedIcon />
          Home
        </NavLink>
        <NavLink
          to="/shop"
          className={css.navLink}
          style={({ isActive }) => ({
            color: isActive ? "#3470ff" : "#121417",
          })}
        >
          <ImportContactsOutlinedIcon />
          Shop
        </NavLink>
        <NavLink
          to="/shopingCard"
          className={css.navLink}
          style={({ isActive }) => ({
            color: isActive ? "#3470ff" : "#121417",
          })}
        >
          <FavoriteBorderOutlinedIcon />
          Shoping Card
        </NavLink>
      </nav>
      <div>
        <a href="tel:+380730000000" className={css.contact}>
          get contact: +380730000000
        </a>
      </div>
    </header>
  );
};

export default Header;
