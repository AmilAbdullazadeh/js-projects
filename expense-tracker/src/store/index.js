import { configureStore } from "@reduxjs/toolkit";
import expenseReducer from "./expense/expense-slice";

export const store = configureStore({
    reducer: {
      EXPENSE: expenseReducer
  },
});
