import { configureStore } from "@reduxjs/toolkit";
import countReducer from "./slices/counterSlice";
import productReducer from './slices/productSlice'

export default configureStore({
  reducer: {
    counter: countReducer,
    product: productReducer,
  },
});
