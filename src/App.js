import React from 'react';
import './App.css';
import { HashRouter, Redirect, Switch, Route } from 'react-router-dom';

import Movies from './components/Movies/Movies';
import Search from "./components/Search/Search";
import VerticalNav from "./components/VerticalNav/VerticalNav";
import Loading from "./components/Loader/Loading";
import MovieDetails from "./components/Movies/MovieDetails";
import Tv from "./components/TV/Tv";
import TvDetails from "./components/TV/TvDetails";



function App() {
  return (
    <HashRouter basename='/Mov-Flex'>
      <React.Fragment>
        <VerticalNav />
        <Loading />
        <Switch>
          <Route exact path="/" component={() => <Redirect to="/movies" />} />
          <Route exact path="/movies" component={Movies} />
          <Route exact path="/tvshows" component={Tv} />
          <Route path="/search" component={Search} />
          <Route path="/movies/details/:id" component={MovieDetails} />
          <Route path="/tvshows/details/:id" component={TvDetails} />
        </Switch>
      </React.Fragment>
    </HashRouter>
  );
}

export default App;
