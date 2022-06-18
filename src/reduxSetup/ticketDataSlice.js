import { fetchTickets } from "../utils/fetchTickets";
import { updateTicket } from "../utils/updateTicket";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
  loading: false,
  data: [],
  error: "",
};

export const fetchTicketsThunk = createAsyncThunk(
  "ticketsData/fetchTickets",
  async () => {
    const resp = await fetchTickets();
    return resp.data;
  }
);
export const updateTicketThunk = createAsyncThunk(
  "ticketsData/updateTicket",
  async (dataObj) => {
    const resp = await updateTicket(dataObj);
    return resp.data;
  }
);
const ticketsDataSlice = createSlice({
  name: "ticketsData",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchTicketsThunk.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchTicketsThunk.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = "";
    });
    builder.addCase(fetchTicketsThunk.rejected, (state, action) => {
      state.loading = false;
      state.data = [];
      console.log(action.error);
      state.error = action.error.message;
    });
    builder.addCase(updateTicketThunk.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(updateTicketThunk.fulfilled, (state, action) => {
      state.loading = false;
      let foundIndex = state.data.findIndex(
        (row) => action.payload.id == row.id
      );
      console.log(foundIndex, action.payload);
      state.data[foundIndex] = { ...state.data[foundIndex], ...action.payload };
      state.error = "";
    });
    builder.addCase(updateTicketThunk.rejected, (state, action) => {
      state.loading = false;
      console.log(action.error);
      state.error = action.error.message;
    });
  },
});

export const ticketsDataReducer = ticketsDataSlice.reducer;
