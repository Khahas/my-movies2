import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MovieModal from "./Modal";

const MovieCard = ({ movieItem }) => {
  const [movieCast, setMovieCast] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState({});

  const getInfo = (movie) => {
    getCast(movie.id);
    setSelectedMovie(movie);
    setModalShow(true);
  };
  const getCast = async (id) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=d60745d296221c0d52b06d66535af069`
    );
    const res = await response.json();
    setMovieCast(res.cast);
    console.log(res.cast);
  };

  
  return (
    <Container className="display-flex">
      <MovieModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        movie={selectedMovie}
        movieCast={movieCast}
      />

      <Row>
        <Col xs={3}>
          <div>
            <p>{movieItem.title}</p>
            <img
              src={`https://image.tmdb.org/t/p/w200/${movieItem.poster_path}`}
              alt="poster"
            />
            <div>{movieItem.name}</div>
            <div>
              {" "}
              <Button onClick={() => getInfo(movieItem)}>Läs mer</Button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default MovieCard;
