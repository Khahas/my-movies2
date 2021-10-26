import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import  Navbar  from "./components/Navbar";
// import HomePage from "./components/HomePage";
import  NowPlayingMovies  from "./components/NowPlayingMovies";
import  PopularMovies  from "./components/PopularMovies";
import  TopMovies  from "./components/TopMovies";



function App() {
  return (
    <Router>
      <Navbar/>

      <Switch>
      {/* <Route exact path="/">
          <HomePage/>
        </Route> */}

        <Route exact path="/NowPlayingMovies">
          <NowPlayingMovies/>
        </Route>

        <Route exact path="/PopularMovies">
          <PopularMovies/>
        </Route>

        <Route exact path="/TopMovies">
          <TopMovies/>
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
