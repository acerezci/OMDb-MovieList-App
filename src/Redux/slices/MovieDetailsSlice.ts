import { createSlice } from '@reduxjs/toolkit';

type movieDetailsType = {
  Actors: string;
  Title: string;
  Poster: string;
  Country: string;
  Director: string;
  Released: string;
  Runtime: string;
  Year: string;
  imdbRating: string;
};

type movideDetailsSliceType = {
  movieDetailsLoading: boolean;
  movieDetails: movieDetailsType;
  movieDetailsError: boolean;
};

const INITIAL_STATE: movideDetailsSliceType = {
  movieDetailsLoading: false,
  movieDetails: {
    Actors: '',
    Title: '',
    Poster: '',
    Country: '',
    Director: '',
    Released: '',
    Runtime: '',
    Year: '',
    imdbRating: '',
  },
  movieDetailsError: false,
};

const MovieDetailsSlice = createSlice({
  name: 'MovieDetailsSlice',
  initialState: INITIAL_STATE,
  reducers: {
    changeLoading(state, action) {
      state.movieDetailsLoading = action.payload;
    },
    updateMovieDetails(state, action) {
      state.movieDetailsLoading = false;
      state.movieDetails = action.payload;
      state.movieDetailsError = false;
    },
    resetMovieDetails(state) {
      state.movieDetails = INITIAL_STATE.movieDetails;
    },
    errorMovieDetail(state) {
      state.movieDetailsLoading = false;
      state.movieDetails = INITIAL_STATE.movieDetails;
      state.movieDetailsError = true;
    },
  },
});

const {
  changeLoading,
  updateMovieDetails,
  errorMovieDetail,
  resetMovieDetails,
} = MovieDetailsSlice.actions;

export const MovieDetailsActions = {
  changeLoading,
  updateMovieDetails,
  errorMovieDetail,
  resetMovieDetails,
};

export default MovieDetailsSlice.reducer;
