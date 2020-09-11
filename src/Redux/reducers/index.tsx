import { combineReducers } from '@reduxjs/toolkit';
import MovieListSlice from 'Redux/slices/MovieListSlice';

const rootReducer = combineReducers({
  MovieListSlice,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
