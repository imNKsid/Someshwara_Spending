import { createAsyncThunk } from "@reduxjs/toolkit";

type LoginDataType = {
  email: string;
  password: string;
};
const login = createAsyncThunk(
  "login",
  async (data: LoginDataType, { rejectWithValue, dispatch }) => {
    if (data?.email) {
      return data;
    }
    return {};
  }
);

const logout = createAsyncThunk(
  "logout",
  async (_, { rejectWithValue, dispatch }) => {
    return true;
  }
);

type CategoryItemDataType = {
  title: string;
  price: number;
};
const changeSpent = createAsyncThunk(
  "changeSpent",
  async (item: CategoryItemDataType, { rejectWithValue, dispatch }) => {
    if (item?.title) {
      return item;
    }
    return {};
  }
);

const SpendThunk = { login, logout, changeSpent };

export default SpendThunk;
