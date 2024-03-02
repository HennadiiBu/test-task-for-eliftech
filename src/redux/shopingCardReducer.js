import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  shopingCard: [],
};

export const shopingCardSlice = createSlice({
  name: "shopingCard",
  initialState,
  reducers: {
    addShopingCard: (state, { payload }) => {
      state.shopingCard.push(payload);
    },
    removeShopingCard: (state, { payload }) => {
      state.shopingCard = state.shopingCard.filter(
        (card) => card.id !== payload.id
      );
    },
    addQuantity: (state, { payload }) => {
      state.shopingCard = state.shopingCard.map((item) => {
        if (item.id === Object.keys(payload).toString()) {
          return { ...item, quantity: Object.values(payload).toString() };
        }
        return item;
      });
    },
  },
});

// Генератори екшенів
export const { addShopingCard, removeShopingCard, addQuantity } =
  shopingCardSlice.actions;
// Редюсер слайсу
export const shopingCardReducer = shopingCardSlice.reducer;
