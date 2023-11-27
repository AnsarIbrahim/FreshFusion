import { configureStore } from "@reduxjs/toolkit";
import { productsReducer, cartReducer } from "./Redux/Https";

const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
  },
});

export default store;
