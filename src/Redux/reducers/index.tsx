import { combineReducers } from '@reduxjs/toolkit';
import MovieListSlice from 'Redux/slices/MovieListSlice';
import CurrentPageSlice from 'Redux/slices/CurrentPageSlice';
import MovieDetailsSlice from 'Redux/slices/MovieDetailsSlice';

const rootReducer = combineReducers({
  MovieListSlice,
  CurrentPageSlice,
  MovieDetailsSlice,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
