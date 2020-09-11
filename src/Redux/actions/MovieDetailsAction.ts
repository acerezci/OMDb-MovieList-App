import OMDbConfig from 'Config/OMDbConfig';
import { AppDispatch } from 'Redux/store';
import { MovieDetailsActions } from 'Redux/slices/MovieDetailsSlice';

const updateMovieDetails = (imdbId: string) => (dispatch: AppDispatch) => {
  dispatch(MovieDetailsActions.changeLoading(true));
  fetch(`${OMDbConfig.ApiUrl}&i=${imdbId}`)
    .then((response) => response.json())
    .then((response) => dispatch(MovieDetailsActions.updateMovieDetails(response)))
    .catch(() => dispatch(MovieDetailsActions.errorMovieDetail()));
};

const resetMovieDetails = () => (dispatch:AppDispatch) => {
  dispatch(MovieDetailsActions.resetMovieDetails());
};

export default {
  updateMovieDetails,
  resetMovieDetails,
};
