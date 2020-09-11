import React, { memo, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
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
import Images from 'Assets/Images';

const MovieDetail = () => {
  const { imdbId } = useParams();
  const history = useHistory();
  const dispatch = useAppDispatch();
  const movieDetailsLoading = useSelector(movieDetailsLoadingSelector);
  const movieDetailsError = useSelector(movieDetailsErrorSelector);
  const movieDetails = useSelector(movieDetailsSelector);

  useEffect(() => {
    dispatch(MovieDetailsAction.updateMovieDetails(imdbId));
    return () => dispatch(MovieDetailsAction.resetMovieDetails());
  }, [imdbId, dispatch]);

  return (
    <div>
      <BackgroundImage image={movieDetails.Poster !== 'N/A' ? movieDetails.Poster : ''} />
      <BackArrowContainer onClick={() => history.goBack()}>
        <BackArrow src={Images.backarrow} alt="back-arrow" />
      </BackArrowContainer>
      <Container>
        {movieDetailsLoading && <Loader src={Icons.loading} />}
        {movieDetailsError && <Error>Error. Try again later!</Error>}
        {movieDetails && (
        <MovieDetailContainer>
          {movieDetails.Poster !== 'N/A' && (
          <img src={movieDetails.Poster} alt="poster" />
          )}
          <DescriptionContainer>
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
          </DescriptionContainer>
        </MovieDetailContainer>
        )}
      </Container>
    </div>

  );
};

const BackgroundImage = styled('div')<{image:string}>`
  background-image:url(${({ image }) => image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  filter: blur(8px);
  -webkit-filter: blur(8px);
  height:100vh;
`;

const BackArrowContainer = styled.div`
  z-index:2;
  position:absolute;
  top:25px;
  left:25px;
  cursor:pointer;
`;

const BackArrow = styled.img`
  width:75px;
`;

const Container = styled.div`
  position:absolute;
  top:50%;
  left:50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  width: 80%;
  padding: 20px;
  background-color: rgb(0,0,0); 
  background-color: rgba(0,0,0, 0.4); 
  color: white;
  font-weight: bold;
  border: 3px solid #f1f1f1;
  width: 80%;
  padding: 20px;
  
`;

const Loader = styled.img`
  position:absolute;
  top:50%;
  left:50%; 
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

const DescriptionContainer = styled.div`
  margin-left:16px;
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
