import { createSlice } from "@reduxjs/toolkit";

const feedbackSlice = createSlice({
  name: "feedback",
  initialState: [],
  reducers: {
    addFeedback: (state, action) => {
      state.push(action.payload); // adds new feedback object
    },
  },
});