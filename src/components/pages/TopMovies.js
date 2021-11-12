import React, { useState } from "react";
import { Container, Button, Row, Col } from "react-bootstrap";
import { usePaginatedQuery } from "react-query";
import MovieCard from "../cards/MovieCard";

//APT for fetching NowPlayingMovies
const fetchMovies = async (key, page) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=d60745d296221c0d52b06d66535af069&language=en-US&page=${page}`
  );
  return res.json();
};

const TopMovie = () => {
  const [page, setPage] = useState(1);
  // Use usePaginatedQuery instead of useQuery, to divide large data into smaller contiguous intervals of data
  const { resolvedData, status } = usePaginatedQuery(
    ["Movies", page],
    fetchMovies
  );

  return (
    <Container>
      <h2>Top Movies</h2>

      {/* Showing if status is loading or error */}
      {status === "loading" && <div>Loading data</div>}

      {status === "error" && <div>Error fetching data</div>}

      {status === "success" && (
        <>
          <Container>
            <Row>
              {resolvedData.results.map((movieItem) => (
                <Col sm={3}>
                  {" "}

                  {/* MovieCard is a custom tag wich creates and populate one card for each movie */}

                  <MovieCard key={movieItem.id} movieItem={movieItem} />
                </Col>
              ))}
            </Row>

             {/* this is a row with to buttons one for previous and one for next page */}

            <Button
              onClick={() => setPage((prevState) => Math.max(prevState - 1, 0))}
              disabled={page === 1}
            >
              Previous Page
            </Button>
            <span style={{fontSize: "2rem"}}>Page:{page}</span>
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
