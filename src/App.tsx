import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Home from 'Containers/Home';
import MovieDetail from 'Containers/MovieDetail';
import NotFound from 'Containers/NotFound';

const App = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/movie-detail/:imdbId" component={MovieDetail} />
      <Route component={NotFound} />
    </Switch>
  </Router>

);

export default App;
