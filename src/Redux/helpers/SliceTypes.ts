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

export type movieDetailsSliceType = {
  movieDetailsLoading: boolean;
  movieDetails: movieDetailsType;
  movieDetailsError: boolean;
};

type movieListType = {
  Response: 'True' | 'False';
  Search: [];
  totalResults: string;
};

export type movieListSliceType = {
  movieListLoading: boolean;
  movieList: movieListType;
  movieListError: boolean;
};
