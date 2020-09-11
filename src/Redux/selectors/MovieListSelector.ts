import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'Redux/reducers';

export const movieListLoadingSelector = createSelector(
  (state: RootState) => state.MovieListSlice.movieListLoading,
  (movieListLoading) => movieListLoading,
);

export const movieListSelector = createSelector(
  (state: RootState) => state.MovieListSlice.movieList,
  (movieList) => movieList,
);

export const movieListErrorSelector = createSelector(
  (state: any) => state.MovieListSlice.movieListError,
  (movieListError) => movieListError,
);
