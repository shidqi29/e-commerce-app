import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: {
    cart: [],
  },
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.data.cart.find(
        (item) => item.id === action.payload.id,
      );
      itemInCart ? itemInCart.qty++ : state.data.cart.push(action.payload);
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
