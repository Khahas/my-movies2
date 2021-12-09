import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import NowPlayingMovies from "./components/pages/NowPlayingMovies";
import PopularMovies from "./components/pages/PopularMovies";
import TopMovies from "./components/pages/TopMovies";
import Genre from "./components/pages/Genre";
import HomePage from "./components/pages/HomePage";

function App() {
  //här är våra huvud meny där man kan klicka sig igenom beroende på vad man vill se.
  return (
    <Router>
      <Navbar />

      <Switch>
        <Route exact path="/">
          <HomePage />
          </Route>

          <Route path="/NowPlayingMovies/:pageParam">
          <NowPlayingMovies />
        </Route>

        <Route path="/NowPlayingMovies">
          <NowPlayingMovies />
        </Route>

        <Route  path="/PopularMovies/:pageParam">
          <PopularMovies />
        </Route>

        <Route  path="/PopularMovies">
          <PopularMovies />
        </Route>

        <Route  path="/TopMovies/:pageParam">
          <TopMovies />
        </Route>

        <Route  path="/TopMovies">
          <TopMovies />
        </Route>

        <Route  path="/Genre/:pageParam">
          <Genre />
        </Route>

        <Route  path="/Genre">
          <Genre />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
