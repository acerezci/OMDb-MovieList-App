import { combineReducers } from '@reduxjs/toolkit';
import MovieListSlice from 'Redux/slices/MovieListSlice';
import CurrentPageSlice from 'Redux/slices/CurrentPageSlice';

const rootReducer = combineReducers({
  MovieListSlice,
  CurrentPageSlice,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
