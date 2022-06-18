import { fetchUsers } from "../utils/fetchUsers";
import { updateUsers } from "../utils/updateUser";
const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
  loading: false,
  data: [],
  error: "",
};

export const fetchUsersThunk = createAsyncThunk(
  "usersData/fetchUsers",
  async () => {
    const resp = await fetchUsers();
    return resp.data;
  }
);

export const updateUsersThunk = createAsyncThunk(
  "usersData/updateUsers",
  async (dataObj) => {
    const resp = await updateUsers(dataObj);
    return resp.data;
  }
);

const usersDataSlice = createSlice({
  name: "usersData",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchUsersThunk.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUsersThunk.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = "";
    });
    builder.addCase(fetchUsersThunk.rejected, (state, action) => {
      state.loading = false;
      state.data = [];
      state.error = action.error.message;
      console.log(action.error);
    });
    builder.addCase(updateUsersThunk.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(updateUsersThunk.fulfilled, (state, action) => {
      state.loading = false;
      const findIndex = state.data.findIndex(
        (row) => row.userId == action.meta.arg.userId
      );
      state.data[findIndex] = {
        ...state.data[findIndex],
        name: action.meta.arg.userName,
        userId: action.meta.arg.userId,
        userTypes: action.meta.arg.userType,
        userStatus: action.meta.arg.userStatus,
      };
      console.log(findIndex, action.meta.arg);
    });
    builder.addCase(updateUsersThunk.rejected, (state, action) => {
      state.loading = false;
      state.data = [];
      state.error = action.error.message;
      console.log(action.error);
    });
  },
});

export const usersDataReducer = usersDataSlice.reducer;
