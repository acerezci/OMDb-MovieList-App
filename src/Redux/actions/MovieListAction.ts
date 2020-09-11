import { MovieListActions } from 'Redux/slices/MovieListSlice';
import OMDbConfig from 'Config/OMDbConfig';
import { AppDispatch } from 'Redux/store';

const updateMovieList = (
  searchTerm: string,
  year: string,
  searchTypeTerm: string,
  page:number,
) => (dispatch: AppDispatch) => {
  dispatch(MovieListActions.changeLoading(true));
  fetch(`${OMDbConfig.ApiUrl}&s=${searchTerm}&type=${searchTypeTerm}&y=${year}&page=${page}`)
    .then((response) => response.json())
    .then((response) => dispatch(MovieListActions.setMovieList(response)))
    .catch(() => dispatch(MovieListActions.errorMovieList()));
};

const something = '';

export { updateMovieList, something };
