import React, { useState } from "react";
import { Container, Button, Row, Col, Alert } from "react-bootstrap";
import MovieModal from "../Modal";
import { useQuery } from "react-query";
import { fetchMovies } from "../../services/API";

const MovieCard = ({ movieItem }) => {
  const [movieCast, setMovieCast] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState({});

  const { isLoading, isError, data } = useQuery(["Movies"], () =>
    fetchMovies()
  );
  
  

  //getInfois a function to populate getCast, movieCast,setSelectedMovie and then open the modal
  const getInfo = (movie) => {
    setMovieCast(data.cast);
    setSelectedMovie(movie);
    setModalShow(true);
  };
  // this function fetch the cast for the indiviual movies and then set it to movieCast const

  return (
    <Container className="display-flex">
      {isLoading && <p className="my-3">Loading...</p>}

      {isError && (
        <Alert variant="warning" className="my-3">
          <strong>Error:</strong> {isError.message}
        </Alert>
      )}
      <MovieModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        movie={selectedMovie}
        movieCast={movieCast}
      />

      <Row>
        <Col xs={3}>
          <div>
            <p style={{ width: "200px" }}>{movieItem.title}</p>
            {/* here do we fetch the img poster from the API */}
            <img
              src={`https://image.tmdb.org/t/p/w200/${movieItem.poster_path}`}
              alt="poster"
            />
            <div>{movieItem.name}</div>
            <div style={{ width: "200px", padding: "10px" }}>
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
