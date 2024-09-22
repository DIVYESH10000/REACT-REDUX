import { createSlice } from "@reduxjs/toolkit";

// Creating Slice
const counterSlice = createSlice({
  name: 'counter',
  initialState: {counterVal: 0},
  reducers: {
    increment: (state)=> {
      state.counterVal++;
    },
    decrement: (state)=> {
      state.counterVal--;

    },
    add: (state, action)=> {
      state.counterVal += Number(action.payload);
      console.log(state, action);
    },

    subtract: (state, action)=> {
      state.counterVal -= Number(action.payload);
      console.log(state, action);
    },
  }
})

// Step-7: We can export actions also
export const counterActions = counterSlice.actions;

export default counterSlice;
