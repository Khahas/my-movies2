import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import NowPlayingMovies from "./components/pages/NowPlayingMovies";
import PopularMovies from "./components/pages/PopularMovies";
import TopMovies from "./components/pages/TopMovies";
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

        <Route exact path="/NowPlayingMovies">
          <NowPlayingMovies />
        </Route>

        <Route exact path="/PopularMovies">
          <PopularMovies />
        </Route>

        <Route exact path="/TopMovies">
          <TopMovies />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
