import React, { memo } from 'react';
import Header from 'Components/Header';
import Movie from 'Components/Movie';
import { useSelector } from 'react-redux';
import {
  movieListSelector,
  movieListErrorSelector,
  movieListLoadingSelector,
} from 'Redux/selectors/MovieListSelector';
import Icons from 'Assets/Icons';
import styled from 'styled-components';
import Space from 'Components/Space';
import Pagination from 'Components/Pagination';

const Home = () => {
  const movieList = useSelector(movieListSelector);
  const movieListError = useSelector(movieListErrorSelector);
  const movieListLoading = useSelector(movieListLoadingSelector);
  const { totalResults, Response, Search } = movieList;

  return (
    <Container>
      <Header />
      <Space value={32} />
      {movieListLoading && <Loader src={Icons.loading} alt="loading" />}
      {Response === 'True' ? (
        <Description>
          {totalResults}
          {' '}
          Movie Found
        </Description>
      ) : (
        <Description>Movie not found</Description>
      )}
      {movieListError && <Error>Error. Try again later!</Error>}
      <Space value={32} />
      {Response === 'True' && (
        <>
          <Pagination />
          <Space value={21} />
          <MovieListContainer>
            {Search?.map((movie, index) => (
              <Movie key={index.toString()} movie={movie} />
            ))}
          </MovieListContainer>
        </>
      )}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const MovieListContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-gap: 24px;
  padding: 8px;
  justify-content: space-around;
  @media (max-width: 1200px){
    grid-template-columns: auto auto auto;
  }
  @media (max-width: 920px){
    grid-template-columns: auto auto;
  }
  @media (max-width: 625px){
    grid-template-columns: auto;
  }
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
`;

const Error = styled.p`
  font-weight: bold;
  font-size: 26px;
  color: #b71111;
  text-align: center;
`;

export default memo(Home);
