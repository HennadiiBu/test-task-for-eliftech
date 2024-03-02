import React from "react";
import css from "./Pharmacy.module.css";
import { useDispatch } from "react-redux";
import { applyFilter } from "../../../redux/drugsReducer";

const PharmacyItem = ({ shop, drugs }) => {
  const dispatch = useDispatch();

  const handleClick = (e) => {
    const data = drugs.filter((elem) => elem.shop === e.target.innerText);
    dispatch(applyFilter(data));
    console.log(data)
  };

  return (
    <li  key={drugs.id}>
      <button className={css.shopBtn} onClick={handleClick}>
        {shop}
      </button>
    </li>
  );
};

export default PharmacyItem;
