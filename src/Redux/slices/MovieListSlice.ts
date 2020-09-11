import { createSlice } from '@reduxjs/toolkit';

type SliceStateType = {
  movieListLoading: boolean;
  movieList: [];
  movieListError: boolean;
};

const INITIAL_STATE: SliceStateType = {
  movieListLoading: false,
  movieList: [],
  movieListError: false,
};

const MovieListSlice = createSlice({
  name: 'MovieListSlice',
  initialState: INITIAL_STATE,
  reducers: {
    changeLoading(state, action) {
      state.movieListLoading = action.payload;
    },
    setMovieList(state, action) {
      state.movieListLoading = false;
      state.movieList = action.payload;
      state.movieListError = false;
    },
    errorMovieList(state) {
      state.movieListLoading = false;
      state.movieList = [];
      state.movieListError = true;
    },
  },
});

const { changeLoading, setMovieList, errorMovieList } = MovieListSlice.actions;

export const MovieListActions = {
  changeLoading,
  setMovieList,
  errorMovieList,
};

export default MovieListSlice.reducer;
