import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// jab bi ya fetchProducts action dispatch ho ga ya particular function run hony wala hy
//Action:
export const fetchProducts = createAsyncThunk("fetchProducts", async () => {
  try {
    const response = await axios.get("https://dummyjson.com/products");
    return response?.data; // Assuming your API response contains data field
  } catch (error) {
    throw error;
  }
});
const productSlice = createSlice({
  name: "product",
  initialState: {
    isLoading: false,
    data: null,
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.isError = true;
    });
  },
});
export default productSlice.reducer;
