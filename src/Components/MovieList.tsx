import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import {
  movieListSelector,
  movieListErrorSelector,
  movieListLoadingSelector,
} from 'Redux/selectors/MovieListSelector';
import styled from 'styled-components';
import Icons from 'Assets/Icons';
import Images from 'Assets/Images';

type movieType = {
  Title: string;
  Poster: string;
  Type: string;
  Year: string;
  imdbID: string;
};

const MovieList = () => {
  const movieList = useSelector(movieListSelector);
  const movieListError = useSelector(movieListErrorSelector);
  const movieListLoading = useSelector(movieListLoadingSelector);
  console.log(movieList.Search);
  return (
    <Container>
      {movieListLoading && <Loader src={Icons.loading} alt="loading" />}
      {movieList.Response === 'True' ? (
        <Description>
          {movieList.totalResults}
          {' '}
          Movie Found
        </Description>
      ) : (
        <Description>Movie not found</Description>
      )}
      {movieListError && <Error>Error. Try again later!</Error>}
      {movieList?.Response === 'True' && (
        <GridContainer>
          {movieList?.Search?.map((movie: movieType, index: number) => (
            <MovieContainer key={index.toString()}>
              <Image
                src={movie.Poster === 'N/A' ? Images.placeholder : movie.Poster}
                alt={movie.Title}
              />
              <MovieDetailItem>
                <Name>
                  Name:
                  {' '}
                  {movie.Title}
                </Name>
                <Year>
                  Year:
                  {' '}
                  {movie.Year}
                </Year>
                <ImdbID>
                  Imdb ID:
                  {' '}
                  {movie.imdbID}
                </ImdbID>
              </MovieDetailItem>
            </MovieContainer>
          ))}
        </GridContainer>
      )}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 21px;
`;

const Loader = styled.img`
  width: 50px;
  align-self: center;
`;

const Description = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: #40526d;
  text-align: center;
  margin-bottom: 21px;
`;

const Error = styled.p`
  font-weight: bold;
  font-size: 26px;
  color: #b71111;
  text-align: center;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-gap: 24px;
  padding: 8px;
  justify-content: space-around;
`;

const MovieContainer = styled.div`
  cursor: pointer;
  width: 300px;
  height: 400px;
  transition: 0.4s ease-out;
  background-color: #1a1f27;
  &:hover {
    background-color: #242b35;
  }
`;

const Image = styled.img`
  width: 300px;
  height: 300px;
`;

const MovieDetailItem = styled.div`
  width: 300px;
  justify-content: space-between;
`;

const Name = styled.div`
  margin-bottom: 4px;
  font-weight: bold;
  font-size: 17px;
`;

const Year = styled.div`
  margin-bottom: 2px;
`;

const ImdbID = styled.div``;

export default memo(MovieList);
