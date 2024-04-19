import { createAsyncThunk } from "@reduxjs/toolkit";

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

const SpendThunk = { changeSpent };

export default SpendThunk;
