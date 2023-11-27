import { configureStore } from "@reduxjs/toolkit";
import { productsReducer, cartReducer, favoriteReducer } from "./Redux/Https";

const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
    favorite: favoriteReducer,
  },
});

export default store;
