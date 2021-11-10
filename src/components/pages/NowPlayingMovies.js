import React, { useState } from "react";
import { Container, Button, Row, Col } from "react-bootstrap";
import { usePaginatedQuery } from "react-query";
import MovieCard from "../cards/MovieCard";

const fetchMovies = async (key, page) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/now_playing?api_key=d60745d296221c0d52b06d66535af069&language=en-US&page=${page}`
  );
  return res.json();
};

const NowPlayingMovies = () => {
  const [page, setPage] = useState(1);
  const { resolvedData, status } = usePaginatedQuery(
    ["Movies", page],
    fetchMovies
  );
  return (
    <Container>
      <h2>Now Playing Movies</h2>

      {status === "loading" && <div>Loading data</div>}

      {status === "error" && <div>Error fetching data</div>}

      {status === "success" && (
        <>
          <Container>
            <Row>
              {resolvedData.results.map((movieItem) => (
                <Col xs={3}>
                  {" "}
                  <MovieCard key={movieItem.id} movieItem={movieItem} />
                </Col>
              ))}
            </Row>
            <Button
              onClick={() => setPage((prevState) => Math.max(prevState - 1, 0))}
              disabled={page === 1}
            >
              Previous Page
            </Button>
            <span>Current Page:{ page }</span>
            <Button onClick={() => setPage((prevState) => prevState + 1)}>
              Next Page
            </Button>
          </Container>
        </>
      )}
    </Container>
  );
};

export default NowPlayingMovies;
