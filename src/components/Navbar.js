import React from "react";
import Container from "react-bootstrap/Container";
import { Navbar, Nav } from "react-bootstrap";

const Navigation = () => {
  return (
    <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">My-Movies</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/NowPlayingMovies">Now Playing movies</Nav.Link>
            <Nav.Link href="/TopMovies">Top Movies</Nav.Link>
            <Nav.Link href="/PopularMovies">Popular Movies</Nav.Link>
            <Nav.Link href="/Genre">Genre</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
