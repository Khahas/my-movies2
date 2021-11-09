import React, { useState } from "react";
import { useQuery } from "react-query";
import axios from "axios";
import { Container, Button, Row, Col } from "react-bootstrap";
import MovieModal from "../Modal";

function NowPlayingMovies() {
  const [movieCast, setMovieCast] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState({});

  const { isLoading, error, data } = useQuery("Movies", () =>
    axios(
      "https://api.themoviedb.org/3/movie/now_playing?api_key=d60745d296221c0d52b06d66535af069"
    )
  );

  const getCast = async (id) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=d60745d296221c0d52b06d66535af069`
    );
    const res = await response.json();
    setMovieCast(res.cast);
    console.log(res.cast);
  };
  const getInfo = (movie) => {
    getCast(movie.id);
    setSelectedMovie(movie);
    setModalShow(true);
  };

  if (error) return <h1> Error: {error.message}, Try again!</h1>;
  if (isLoading) return <h1> Loading...</h1>;
  console.log(data);
  return (
    <Container>
      <h2>Now Playing Movies</h2>
      <MovieModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        movie={selectedMovie}
        movieCast={movieCast}
      />
      {data && data.data && data.data.results && data.data.results.length ? (
        <Row>
          {data.data.results.map((movieItem, index) => (
            <Col xs={3}>
              <div>
                <p>{movieItem.title}</p>
                <img
                  key={index}
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
          ))}
        </Row>
      ) : null}
    </Container>
  );
}

export default NowPlayingMovies;
