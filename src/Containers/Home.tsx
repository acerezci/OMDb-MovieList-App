import React, { memo } from 'react';
import Header from 'Components/Header';
import MovieList from 'Components/MovieList';

const Home = () => (
  <div>
    <Header />
    <MovieList />
  </div>
);

export default memo(Home);
