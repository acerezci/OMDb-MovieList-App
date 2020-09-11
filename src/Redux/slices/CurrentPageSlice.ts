import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  currentPage: 1,
};

const CurrentPageSlice = createSlice({
  name: 'CurrentPageSlice',
  initialState: INITIAL_STATE,
  reducers: {
    changeCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
  },
});

const { changeCurrentPage } = CurrentPageSlice.actions;

export {
  changeCurrentPage,
};

export default CurrentPageSlice.reducer;
