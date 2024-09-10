import { createSlice } from "@reduxjs/toolkit";

const initialState = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : { cartItems: [] };
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existItem = state.cartItems.find((x) => x._id === item._id);
      if (existItem) {
        state.cartItems = state.cartItems.map((x) =>
          x._id === existItem._id ? item : x
        );
      } else {
        state.cartItems = [...state.cartItems, item];
      }
      // note: total price
      state.totalPrice = state.cartItems.reduce(
        (total, item) => total + item.price * item.qty,
        0
      );
      localStorage.setItem("cart", JSON.stringify(state));
    },
  },
});
export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
