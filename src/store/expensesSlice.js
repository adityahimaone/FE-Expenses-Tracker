import { createSlice } from '@reduxjs/toolkit';
// import nextId from 'react-id-generator';
import { v4 as uuidv4 } from 'uuid';

const initialValue = {
  loading: false,
  error: null,
  data: []
};

const expenseSlice = createSlice({
  name: 'expenses',
  initialState: initialValue,
  reducers: {
    addExpense: (state, action) => {
      const newExpense = { id: uuidv4(), ...action.payload };
      state.data = [...state.data, newExpense];
    },
    deleteExpense: (state, action) => {
      const { id } = action.payload;
      delete state.data[id];
    },
    editExpense: (state, action) => {
      const { id, ...rest } = action.payload;
      state.data[id] = { ...state.data[id], ...rest };
    }
  }
});

export const { addExpense, deleteExpense, editExpense } = expenseSlice.actions;
export default expenseSlice.reducer;
