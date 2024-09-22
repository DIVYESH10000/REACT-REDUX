import { createSlice } from "@reduxjs/toolkit";

// PrivacyToggle Slice
const privacySlice = createSlice({
  name: "privacy",
  initialState: false,
  reducers: {
    toggle:  (state) => {
      return  state = !state;
    }
  }
});


// Step-7: We can export actions also
export const privacyActions = privacySlice.actions;

export default privacySlice;