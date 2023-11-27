import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import BaseURL from "../BaseURL";

export const fetchProducts = createAsyncThunk("products/fetch", async () => {
  const response = await axios.get(BaseURL);
  return response.data;
});

const productsSlice = createSlice({
  name: "products",
  initialState: { products: [] },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.products = action.payload;
    });
  },
});

const cartSlice = createSlice({
  name: "cart",
  initialState: { cart: [] },
  reducers: {
    addToCart: (state, action) => {
      const index = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index !== -1) {
        if (typeof state.cart[index].quantity !== "number") {
          state.cart[index].quantity = 1;
        } else {
          state.cart[index].quantity++;
        }
        return;
      }
      state.cart.push({ ...action.payload, quantity: 1 });
    },
    addTobuy: (state, action) => {
      const index = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index !== -1) {
        state.cart[index].quantity = 1;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
    },
    increaseQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload);
      if (item) {
        item.quantity += 1;
      }
    },
    decreaseQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },
  },
});

const favoriteSlice = createSlice({
  name: "favorite",
  initialState: {
    products: [],
  },
  reducers: {
    add: (state, action) => {
      const isAlreadyFavorite = state.products.some(
        (product) => product.id === action.payload.id
      );

      if (!isAlreadyFavorite) {
        state.products.push(action.payload);
      }
    },
    remove: (state, action) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload.id
      );
    },
  },
});

export const productsReducer = productsSlice.reducer;
export const cartReducer = cartSlice.reducer;
export const favoriteReducer = favoriteSlice.reducer;

export const {
  addToCart,
  addTobuy,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} = cartSlice.actions;
export const { add, remove } = favoriteSlice.actions;
