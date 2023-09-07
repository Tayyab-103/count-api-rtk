import { createSlice } from "@reduxjs/toolkit";

 const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0 },
  reducers: {
    increment: (state, action) => {
      state.value += 1;
    },
    decrement: (state, action) => {
      state.value -= 1;
    },
    reset: (state, action) => {
      state.value = 0;
    },
  },
});
//  Action creators are generated for each case reducer function
export const { increment, decrement, reset } = counterSlice.actions;
export default counterSlice.reducer;
