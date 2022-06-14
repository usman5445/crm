import { createSlice } from "@reduxjs/toolkit";

const initialState = { user: null };
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    saveUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const userSliceReducer = userSlice.reducer;
export const userSliceAction = userSlice.actions;
