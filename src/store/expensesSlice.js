import { createSlice } from '@reduxjs/toolkit';

const initialValue = {
  loading: false,
  error: null,
  data: []
};

const expenseSlice = createSlice({
  name: 'expenses',
  initialState: initialValue,
  reducers: {
    getExpensesStart: state => {
      state.loading = true;
      state.error = null;
    },
    getExpensesSuccess: (state, action) => {
      state.loading = false;
      state.error = null;
      state.data = action.payload;
    },
    getExpensesFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    addExpensesStart: state => {
      state.loading = true;
      state.error = null;
    },
    addExpensesSuccess: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    addExpensesFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    }
  }
});

export const {
  getExpensesStart,
  getExpensesSuccess,
  getExpensesFailure,
  addExpensesStart,
  addExpensesSuccess,
  addExpensesFailure
} = expenseSlice.actions;
export default expenseSlice.reducer;
