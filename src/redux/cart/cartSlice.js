import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.data.find(
        (item) => item.id === action.payload.id,
      );
      itemInCart ? itemInCart.qty++ : state.data.push(action.payload);
    },
    decreaseQty: (state, action) => {
      const itemInCart = state.data.find(
        (item) => item.id === action.payload.id,
      );
      if (itemInCart.qty === 1) {
        state.data = state.data.filter((item) => item.id !== action.payload.id);
      } else {
        itemInCart.qty--;
      }
    },
  },
});

export const { addToCart, decreaseQty } = cartSlice.actions;
export default cartSlice.reducer;
