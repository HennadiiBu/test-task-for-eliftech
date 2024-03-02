import React, { useState } from "react";
import css from "./ShopingCard.module.css";
import ShopingCardItem from "./ShopingCardItem";
import { useForm } from "react-hook-form";
import { getShopingCard } from "../../../redux/selectors";
import { useSelector } from "react-redux";

import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const ShopingCardList = ({ shopingCard }) => {
  const shopingCards = useSelector(getShopingCard);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  let total = shopingCards.reduce(
    (acc, card) => acc + Number(card.quantity),
    0
  );
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    handleOpen();
    reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className={css.form}>
        <div className={css.dataBox}>
          <div className={css.userDataBox}>
            <label>Name</label>
            <div className={css.inputContainer}>
              <input
                defaultValue=""
                {...register("name", { required: true })}
                className={css.inputData}
              />
              {errors.name && (
                <span className={css.text}>*this field is required</span>
              )}
            </div>

            <label>E-mail</label>
            <div className={css.inputContainer}>
              <input
                defaultValue=""
                {...register("email", { required: true })}
                className={css.inputData}
              />
              {errors.email && (
                <span className={css.text}>*this field is required</span>
              )}
            </div>

            <label>Phone</label>
            <div className={css.inputContainer}>
              <input
                defaultValue=""
                {...register("phone", {
                  required: true,
                })}
                className={css.inputData}
              />
              {errors.phone && (
                <span className={css.text}>*this field is required</span>
              )}
            </div>

            <label>Adress</label>
            <div className={css.inputContainer}>
              <input
                defaultValue=""
                {...register("adress", { required: true })}
                className={css.inputData}
              />
              {errors.adress && (
                <span className={css.text}>*this field is required</span>
              )}
            </div>
          </div>
          <ul className={css.shopingCardcontainer}>
            {shopingCard.map((card) => (
              <ShopingCardItem card={card} key={card.id} />
            ))}
          </ul>
        </div>
        <div className={css.totalBox}>
          <h2>Total Price: {total}</h2>
          <button type="submit" className={css.submitBtn}>
            Submit
          </button>
        </div>
      </form>
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Thank you!
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              The order has been accepted. Our manager will contact you shortly
            </Typography>
          </Box>
        </Modal>
      </div>
    </>
  );
};

export default ShopingCardList;
