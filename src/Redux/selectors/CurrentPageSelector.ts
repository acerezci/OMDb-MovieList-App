import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'Redux/reducers';

const currentPageSelector = createSelector(
  (state: RootState) => state.CurrentPageSlice.currentPage,
  (currentPage) => currentPage,
);

export default currentPageSelector;
