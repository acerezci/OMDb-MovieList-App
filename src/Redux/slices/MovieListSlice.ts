import { createSlice } from '@reduxjs/toolkit';
import { movieListSliceType } from 'Redux/helpers/SliceTypes';

const INITIAL_STATE: movieListSliceType = {
  movieListLoading: false,
  movieList: {
    Response: 'False',
    Search: [],
    totalResults: '',
  },
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
      state.movieList.Search = [];
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
