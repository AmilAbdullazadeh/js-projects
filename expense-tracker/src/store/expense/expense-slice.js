import { createSlice } from "@reduxjs/toolkit";

export const expenseSlice = createSlice({
  name: "expense",
  initialState: {
    income: 1000,
    expenseList: [],
  },
  reducers: {
    addExpense: (state, action) => {
      state.expenseList.push(action.payload);
    },
    setIncome: (state, action) => {
      state.income = action.payload
    }
  },
});

export const { addExpense, setIncome } = expenseSlice.actions;

export default expenseSlice.reducer;
