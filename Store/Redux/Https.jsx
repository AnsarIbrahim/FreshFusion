import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import BaseURL from "../BaseURL";

export const fetchProducts = createAsyncThunk("products/fetch", async () => {
  const response = await axios.get(BaseURL);
  return response.data;
});

export const fetchProductDetails = createAsyncThunk(
  "productDetails/fetch",
  async (id) => {
    const response = await axios.get(`${BaseURL}/${id}`);
    return response.data;
  }
);

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

const productDetailsSlice = createSlice({
  name: "productDetails",
  initialState: {},
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProductDetails.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const productsReducer = productsSlice.reducer;
export const productDetailsReducer = productDetailsSlice.reducer;
