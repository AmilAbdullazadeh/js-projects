import { createSlice } from "@reduxjs/toolkit";

export const expenseSlice = createSlice({
  name: "expense",
  initialState: {
    expenseList: [{name: "Laptop",price: 3500}]
  },
  reducers: {
    addExpense: (state, action) => {
      state.expenseList.push(action.payload);
    }
  }
});

export const { addExpense } = expenseSlice.actions;

export default expenseSlice.reducer;
