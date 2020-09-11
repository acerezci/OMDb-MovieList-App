import { MovieListActions } from 'Redux/slices/MovieListSlice';
import OMDbConfig from 'Config/OMDbConfig';
import { AppDispatch } from 'Redux/store';

const updateMovieList = (
  searchTerm: string,
  year: string,
  searchTypeTerm: string,
) => (dispatch: AppDispatch) => {
  dispatch(MovieListActions.changeLoading(true));
  fetch(`${OMDbConfig.ApiUrl}&s=${searchTerm}&type=${searchTypeTerm}&y=${year}`)
    .then((response) => response.json())
    .then((response) => dispatch(MovieListActions.setMovieList(response.Search)))
    .catch(() => dispatch(MovieListActions.errorMovieList()));
};

const something = '';

export { updateMovieList, something };
