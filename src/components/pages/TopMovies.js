import React, { useState } from "react";
import { Container, Button, Row, Col } from "react-bootstrap";
import { usePaginatedQuery } from "react-query";
import MovieCard from "../MovieCard";

const fetchMovies = async (key, page) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=d60745d296221c0d52b06d66535af069&language=en-US&page=${page}`
  );
  return res.json();
};

const TopMovie = () => {
  const [page, setPage] = useState(1);
  const { resolvedData, latestData, status } = usePaginatedQuery(
    ["Movies", page],
    fetchMovies
  );

  console.log(latestData);
  console.log(resolvedData);
  console.log(status);

  return (
    <Container>
      <h2>Top Movies</h2>

      {status === "loading" && <div>Loading data</div>}

      {status === "error" && <div>Error fetching data</div>}

      {status === "success" && (
        <>
          <Container>
            <Row>
            {resolvedData.results.map((movieItem) => (
             <Col xs={3}> <MovieCard key={movieItem.id} movieItem={movieItem} /></Col>
            ))}
            </Row>
            <Button
              onClick={() => setPage((prevState) => Math.max(prevState - 1, 0))}
              disabled={page === 1}
            >
              Previous Page
            </Button>
            <span>{page}</span>
            <Button onClick={() => setPage((prevState) => prevState + 1)}>
              Next Page
            </Button>
          </Container>
        </>
      )}
    </Container>
  );
};
export default TopMovie;
