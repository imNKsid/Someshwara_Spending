import { createSlice } from "@reduxjs/toolkit";
import SpendThunk from "./spend-thunk";

const initialState = {
  isLoggedIn: false,
  emailId: "",
  spendingBudget: 30000,
  totalSpent: 1000 + 3000 + 4000 + 3500 + 2000 + 1500,
  categorySpendBudget: 5000,
  grocerySpent: 1000,
  clothSpent: 3000,
  beautySpent: 4000,
  healthSpent: 3500,
  foodSpent: 2000,
  houseSpent: 1500,
};

const SpendSlice = createSlice({
  name: "spend",
  initialState,
  reducers: {
    reset: (state, payload: any) => {},
  },
  extraReducers: (builder) => {
    builder
      .addCase(SpendThunk.login.fulfilled, (state, action) => {
        const { email } = action.payload as any;
        state.isLoggedIn = true;
        state.emailId = email;
      })
      .addCase(SpendThunk.logout.fulfilled, (state, action) => {
        state.isLoggedIn = false;
        state.emailId = "";
        state.spendingBudget = 30000;
        state.totalSpent = 1000 + 3000 + 4000 + 3500 + 2000 + 1500;
        state.categorySpendBudget = 5000;
        state.grocerySpent = 1000;
        state.clothSpent = 3000;
        state.beautySpent = 4000;
        state.healthSpent = 3500;
        state.foodSpent = 2000;
        state.houseSpent = 1500;
      })
      .addCase(SpendThunk.changeSpent.fulfilled, (state, action) => {
        const { title, price } = action.payload as any;
        switch (title) {
          case "Beauty":
            state.beautySpent = price;
            break;
          case "Clothing":
            state.clothSpent = price;
            break;
          case "Groceries":
            state.grocerySpent = price;
            break;
          case "Health & Fitness":
            state.healthSpent = price;
            break;
          case "Food":
            state.foodSpent = price;
            break;
          case "Housing":
            state.houseSpent = price;
            break;
          default:
            break;
        }

        state.totalSpent =
          state.beautySpent +
          state.clothSpent +
          state.grocerySpent +
          state.healthSpent +
          state.foodSpent +
          state.houseSpent;
      });
  },
});

export default SpendSlice;
