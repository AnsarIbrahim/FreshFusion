import { configureStore } from "@reduxjs/toolkit";
import { productsReducer, productDetailsReducer } from "./Redux/Https";

const store = configureStore({
  reducer: {
    products: productsReducer,
    productDetails: productDetailsReducer,
  },
});

export default store;
