import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import  Navbar  from "./components/Navbar";
// import HomePage from "./components/HomePage";
import  NowPlayingMovies  from "./components/NowPlayingMovies";
import  PopularMovies  from "./components/PopularMovies";
import  Movies  from "./components/Movies";



function App() {
  return (
    <Router>
      <Navbar/>

      <Switch>
        <Route exact path="/NowPlayingMovies">
          <NowPlayingMovies/>
        </Route>

        <Route exact path="/PopularMovies">
          <PopularMovies/>
        </Route>

        <Route exact path="/Movies">
          <Movies/>
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
