import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../features/product/productSlice";
import cartReducer from "../features/cart/cartSlice";

const store = configureStore({
  reducer: {
    [productSlice.reducerPath]: productSlice.reducer,
    cart: cartReducer,
  },
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares().concat(productSlice.middleware),
  devTools: true,
});
export default store;
