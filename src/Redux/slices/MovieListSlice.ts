import { createSlice } from '@reduxjs/toolkit';

type movieListType = {
  Response: 'True' | 'False';
  Search:[];
  totalResults:string;
}

type SliceStateType = {
  movieListLoading: boolean;
  movieList: movieListType;
  movieListError: boolean;
};

const INITIAL_STATE: SliceStateType = {
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
