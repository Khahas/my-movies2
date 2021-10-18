import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

const Navigation = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="md">
      <Container>
        <Link to="/NowPlayingMovies" className="navbar-brand">
          <span role="img" aria-label="A library card">
            💳
          </span>{" "}
          Now Playing Movies
        </Link>

        <Link to="/LatestMovies" className="nav-link">
          <span role="img" aria-label="a pile of books">
            📚
          </span>{" "}
          Latest
        </Link>

        <Link to="/topMovies" className="nav-link">
          <span role="img" aria-label="a pile of books">
            📚
          </span>{" "}
          TopMovies
        </Link>
      </Container>
    </Navbar>
  );
};

export default Navigation;
