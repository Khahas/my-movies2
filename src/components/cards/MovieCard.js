import React, { useState } from "react";
import { Container, Button, Row, Col } from "react-bootstrap";
import MovieModal from "../Modal";
import { useQuery } from "react-query";
import axios from "axios";

const MovieCard = ({ movieItem }) => {
  const [movieCast, setMovieCast] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState({});

  const { isLoading, error, data } = useQuery("getCast", () =>
    axios(
      `https://api.themoviedb.org/3/movie/${movieItem.id}/credits?api_key=d60745d296221c0d52b06d66535af069`
    )
  );

  //getInfois a function to populate getCast, movieCast,setSelectedMovie and then open the modal
  const getInfo = (movie) => {
    setMovieCast(data.data.cast);
    setSelectedMovie(movie);
    setModalShow(true);
  };
  // this function fetch the cast for the indiviual movies and then set it to movieCast const

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
