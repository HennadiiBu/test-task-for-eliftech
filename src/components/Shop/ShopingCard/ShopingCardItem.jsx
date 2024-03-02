import React, { useEffect, useState } from "react";

import css from "./ShopingCard.module.css";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import Notiflix from "notiflix";
import { useDispatch } from "react-redux";
import {
  addQuantity,
  removeShopingCard,
} from "../../../redux/shopingCardReducer";

const ShopingCardItem = ({ card }) => {
  const dispatch = useDispatch();

  const [quantities, setQuantities] = useState({ [card.id]: 1 });
  const [amountPerPosition, setAmountPerPosition] = useState({
    [card.id]: card.price * quantities[card.id],
  });

  useEffect(() => {
    dispatch(addQuantity(amountPerPosition));
  }, [amountPerPosition, dispatch]);

  const handleDeleteFromShopingCard = () => {
    dispatch(removeShopingCard(card));
    Notiflix.Notify.success("Product successfully removed from shopping card");
  };

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value);
    const newAmountPerPosition = {
      ...amountPerPosition,
      [card.id]: card.price * newQuantity,
    };
    setQuantities({ ...quantities, [card.id]: newQuantity });
    setAmountPerPosition(newAmountPerPosition);
    dispatch(addQuantity(amountPerPosition));
  };

  return (
    <>
      <li key={card.id} className={css.shopingCarditem}>
        <div className={css.shopingCardfakeImg}></div>
        <div className={css.drugBox}>
          <h2 className={css.shopingCardtitle}>{card.name}</h2>
          <p>Price: {card.price}</p>
          <input
            type="number"
            className={css.quantityInput}
            value={quantities[card.id]}
            onChange={handleQuantityChange}
          />
        </div>
        <button
          className={css.shopingCardshopBtn}
          onClick={handleDeleteFromShopingCard}
        >
          <DeleteForeverOutlinedIcon className={css.removeIcon} />
        </button>
      </li>
    </>
  );
};

export default ShopingCardItem;
