import { configureStore } from "@reduxjs/toolkit";
import { ticketsDataReducer } from "./ticketDataSlice";
import { usersDataReducer } from "./userDataSlice";
import { userSliceReducer } from "./userSlice";

const store = configureStore({
  reducer: {
    user: userSliceReducer,
    ticketsData: ticketsDataReducer,
    usersData: usersDataReducer,
  },
});

export default store;
