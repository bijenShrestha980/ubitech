import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    users: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    // GET ALL
    getUserStart: (state) => {
      state.isFetching = true;
      state.isFetching = false;
    },
    getUserSuccess: (state, action) => {
      state.isFetching = false;
      state.users = action.payload;
    },
    getUserFaliure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    // DELETE
    deleteUserStart: (state) => {
      state.isFetching = true;
      state.isFetching = false;
    },
    deleteUserSuccess: (state, action) => {
      state.isFetching = false;
      state.users.splice(
        state.users.findIndex((item) => item._id === action.payload),
        1
      );
    },
    deleteUserFaliure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    // UPDATE
    updateUserStart: (state) => {
      state.isFetching = true;
      state.isFetching = false;
    },
    updateUserSuccess: (state, action) => {
      state.isFetching = false;
      state.users[
        state.users.findIndex((item) => item._id === action.payload.id)
      ] = action.payload.user;
    },
    updateUserFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    // ADD
    addUserStart: (state) => {
      state.isFetching = true;
      state.isFetching = false;
    },
    addUserSuccess: (state, action) => {
      state.isFetching = false;
      state.users.push(action.payload);
    },
    addUserFaliure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
  getUserStart,
  getUserSuccess,
  getUserFaliure,
  deleteUserStart,
  deleteUserSuccess,
  deleteUserFaliure,
  updateUserStart,
  updateUserSuccess,
  updateUserFailure,
  addUserStart,
  addUserSuccess,
  addUserFaliure,
} = userSlice.actions;
export default userSlice.reducer;
