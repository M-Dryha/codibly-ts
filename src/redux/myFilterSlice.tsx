import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const myFilterSlice = createSlice({
  name: 'myFilter',
  initialState: '',
  reducers: {
    onChangeFilter(state, action:PayloadAction<string>) {
      state = action.payload;
      return state;
    },
  },
});

export const { onChangeFilter } = myFilterSlice.actions;
export default myFilterSlice.reducer;
