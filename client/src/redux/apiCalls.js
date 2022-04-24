import { publicRequest, userRequest } from "../requestMethods";
import { loginFaliure, loginStart, loginSuccess } from "./slices/login";
import {
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
} from "./slices/user";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFaliure());
  }
};

export const getUsers = async (dispatch, user) => {
  dispatch(getUserStart());
  try {
    const res = await userRequest.get("/users", user);
    dispatch(getUserSuccess(res.data));
  } catch (err) {
    dispatch(getUserFaliure());
  }
};

export const deleteUser = async (id, dispatch) => {
  dispatch(deleteUserStart());
  try {
    // const res = await userRequest.delete(`/users/${id}`);

    dispatch(deleteUserSuccess(id));
  } catch (err) {
    dispatch(deleteUserFaliure());
  }
};

export const updateUser = async (id, user, dispatch) => {
  dispatch(updateUserStart());
  try {
    // update
    const res = await userRequest.put(`/users/${id}`, user);
    // dispatch(updateUserSuccess({ id, user }));
    dispatch(updateUserSuccess(res.data));
  } catch (err) {
    dispatch(updateUserFailure());
  }
};

export const addUser = async (user, dispatch) => {
  dispatch(addUserStart());
  try {
    const res = await userRequest.post(`/auth/register`, user);
    dispatch(addUserSuccess(res.data));
  } catch (err) {
    dispatch(addUserFaliure());
  }
};
