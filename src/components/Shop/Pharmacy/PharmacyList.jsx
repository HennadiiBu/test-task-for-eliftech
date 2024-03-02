import React from "react";
import PharmacyItem from "./PharmacyItem";

import css from "./Pharmacy.module.css";

const PharmacyList = ({ drugs }) => {
  const uniqueShops = Array?.from(new Set(drugs?.map((drug) => drug.shop)));
  const newArr = ["All", ...uniqueShops];
  return (
    <>
      <ul className={css.container}>
        {newArr?.map((shop) => (
          <PharmacyItem shop={shop} drugs={drugs} />
        ))}
      </ul>
    </>
  );
};

export default PharmacyList;
