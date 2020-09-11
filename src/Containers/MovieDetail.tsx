import React, { memo, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch } from 'Redux/store';
import MovieDetailsAction from 'Redux/actions/MovieDetailsAction';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import {
  movieDetailsSelector,
  movieDetailsLoadingSelector,
  movieDetailsErrorSelector,
} from 'Redux/selectors/MovieDetailsSelector';
import Icons from 'Assets/Icons';

const MovieDetail = () => {
  const { imdbId } = useParams();
  const dispatch = useAppDispatch();
  const movieDetailsLoading = useSelector(movieDetailsLoadingSelector);
  const movieDetailsError = useSelector(movieDetailsErrorSelector);
  const movieDetails = useSelector(movieDetailsSelector);

  useEffect(() => {
    dispatch(MovieDetailsAction.updateMovieDetails(imdbId));
    return () => dispatch(MovieDetailsAction.resetMovieDetails());
  }, [imdbId]);

  return (
    <Container>
      {movieDetailsLoading && <Loader src={Icons.loading} />}
      {movieDetailsError && <Error>Error. Try again later!</Error>}
      {movieDetails && (
        <MovieDetailContainer>
            {movieDetails.Poster !== 'N/A' && (
            <img src={movieDetails.Poster} alt="poster" />
            )}
          <div>

            <Title>
              {movieDetails.Title !== 'N/A' && movieDetails.Title}
            </Title>
            <Text>
              {movieDetails.Year !== 'N/A' && `Year: ${movieDetails.Year}` }
            </Text>
            <Text>
              {movieDetails.Runtime !== 'N/A' && `Run Time: ${movieDetails.Runtime}`}
            </Text>
            <Text>
              {movieDetails.Released !== 'N/A' && `Released Date: ${movieDetails.Released}`}
            </Text>
            <Text>
              {movieDetails.Country !== 'N/A' && `Country: ${movieDetails.Country}` }
            </Text>
            <Text>
              {movieDetails.Actors !== 'N/A' && `Actors: ${movieDetails.Actors}`}
            </Text>
            <Text>
              {movieDetails.Director !== 'N/A' && `Director: ${movieDetails.Director}`}
            </Text>
            <Text>
              {movieDetails.imdbRating !== 'N/A' && `Imdb Rating: ${movieDetails.imdbRating}/10` }
            </Text>
          </div>
        </MovieDetailContainer>
      )}
    </Container>
  );
};

const Container = styled.div``;

const Loader = styled.img`
  width: 50px;
  align-self: center;
`;

const Error = styled.p`
  font-weight: bold;
  font-size: 26px;
  color: #b71111;
  text-align: center;
`;

const MovieDetailContainer = styled.div`
  display:flex;
`;

const Title = styled.p`
  font-size:27px;
  font-weight:bold;
  margin-bottom:16px;
`;

const Text = styled.p`
  font-size:18px;
  margin-bottom:8px;
`;

export default memo(MovieDetail);
