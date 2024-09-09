import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../features/product/productSlice";

const store = configureStore({
  reducer: {
    [productSlice.reducerPath]: productSlice.reducer,
  },
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares().concat(productSlice.middleware),
  devTools: true,
});
export default store;
