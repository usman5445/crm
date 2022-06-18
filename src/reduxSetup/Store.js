import { configureStore } from "@reduxjs/toolkit";
import { ticketsDataReducer } from "./ticketDataSlice";
import { userSliceReducer } from "./userSlice";

const store = configureStore({
  reducer: {
    user: userSliceReducer,
    ticketsData: ticketsDataReducer,
  },
});

export default store;
