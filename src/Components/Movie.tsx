import React, { memo } from 'react';
import styled from 'styled-components';
import Images from 'Assets/Images';
import { Link } from 'react-router-dom';

type movieType = {
  Title: string;
  Poster: string;
  Type: string;
  Year: string;
  imdbID: string;
};

interface PropTypes {
  movie: movieType;
}

const MovieList = ({ movie }: PropTypes) => (
  <MovieContainer>
    <Link to={`/movie-detail/${movie.imdbID}`}>
      <Image
        src={movie.Poster === 'N/A' ? Images.placeholder : movie.Poster}
        alt={movie.Title}
      />
      <MovieDetailItem>
        <Name>
          {movie.Title !== 'N/A' && `Name: ${movie.Title}`}
        </Name>
        <Year>
          {movie.Year !== 'N/A' && `Year: ${movie.Year}`}
        </Year>
        <ImdbID>
          {movie.imdbID !== 'N/A' && `Imdb ID: ${movie.imdbID}`}
        </ImdbID>
      </MovieDetailItem>
    </Link>
  </MovieContainer>
);

const MovieContainer = styled.div`
  cursor: pointer;
  width: 300px;
  height: 400px;
  transition: 0.4s ease-out;
  background-color: #15171b;
  -webkit-box-shadow: 1px 1px 5px 0px rgba(26, 34, 46, 1);
  -moz-box-shadow: 1px 1px 5px 0px rgba(26, 34, 46, 1);
  box-shadow: 1px 1px 5px 0px rgba(26, 34, 46, 1);
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
  padding:5px;
  justify-content: space-between;
`;

const Name = styled.div`
  margin-bottom: 4px;
  font-weight: bold;
  font-size: 17px;
`;

const Year = styled.div`
  margin-bottom: 4px;
  font-weight: bold;
`;

const ImdbID = styled.div`
  font-weight: bold;
`;

export default memo(MovieList);
