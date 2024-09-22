import { createSlice } from "@reduxjs/toolkit";

const bagSlice = createSlice({
  name: "bag",
  initialState: [],
  reducers: {
    addToBag: (state, action) => {
      state.push(action.payload);

      // Whenever we'll use add to bag, we'll need payload, because based on that payload I'll know what to add in initialState: [],
    },
    removeFromBag: (state, action) => {
      return state.filter((itemId) => itemId !== action.payload);
      // can use index.splice
    },
  },
});

export const bagActions = bagSlice.actions;

export default bagSlice;
