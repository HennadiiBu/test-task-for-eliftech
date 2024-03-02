import React from "react";
import { NavLink } from "react-router-dom";
import css from "./Home.module.css";

const Home = () => {
  return (
    <div className={css.homeContainer}>
      <h1 className={css.title}>Welcome to Pharmacy!</h1>
      <p className={css.text}>
        Welcome to our website, where you can easily and conveniently order
        medications from various pharmacies. We have collected a wide range of
        medicines for you to help you quickly find and buy the drugs you need.
      </p>
      <NavLink to="/shop" className={css.startButton}>
        Get started
      </NavLink>
    </div>
  );
};

export default Home;
