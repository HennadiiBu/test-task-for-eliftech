import React from "react";


import Notiflix from "notiflix";

import css from "./Drugs.module.css";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

import { useDispatch, useSelector } from "react-redux";

import { addShopingCard } from "../../../redux/shopingCardReducer";
import { getShopingCard } from "../../../redux/selectors";

const DrugsItem = ({ drug }) => {
  const dispatch = useDispatch();
  const shopingCard = useSelector(getShopingCard);

  const handleToShopingCard = () => {
    if (shopingCard?.some((card) => card.id === drug.id)) {
      Notiflix.Notify.failure("This item has already been added to cart");
    } else {
      dispatch(addShopingCard(drug));
      Notiflix.Notify.success("Product successfully added to shopping card");
    }
  };



  return (
    <>

      <li key={drug.id} className={css.item}>
        <div className={css.fakeImg}></div>
        <h2 className={css.title}>{drug.name}</h2>
        <p>{drug.price}</p>

        <button className={css.shopBtn} onClick={handleToShopingCard}>
          <ShoppingCartOutlinedIcon className={css.buyIcon} />
        </button>
      </li>
    </>
  );
};

export default DrugsItem;
