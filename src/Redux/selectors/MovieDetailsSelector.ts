import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'Redux/reducers';

export const movieDetailsLoadingSelector = createSelector(
  (state: RootState) => state.MovieDetailsSlice.movieDetailsLoading,
  (movieDetailLoading) => movieDetailLoading,
);

export const movieDetailsSelector = createSelector(
  (state: RootState) => state.MovieDetailsSlice.movieDetails,
  (movieDetail) => movieDetail,
);

export const movieDetailsErrorSelector = createSelector(
  (state: any) => state.MovieDetailsSlice.movieDetailsError,
  (movieDetailsError) => movieDetailsError,
);
