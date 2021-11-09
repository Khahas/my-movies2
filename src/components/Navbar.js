import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

const Navigation = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="md">
      <Container>
        <Link to="/NowPlayingMovies" className="navbar-brand">
          Now Playing Movies
        </Link>

        <Link to="/PopularMovies" className="navbar-brand">
          Popular
        </Link>

        <Link to="/TopMovies" className="navbar-brand">
          TopMovies
        </Link>
      </Container>
    </Navbar>
  );
};

export default Navigation;
