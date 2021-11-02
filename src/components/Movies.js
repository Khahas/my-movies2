import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { usePaginatedQuery } from "react-query";
import MovieCard from "./MovieCard";

const fetchMovies = async (key, page) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=d60745d296221c0d52b06d66535af069&language=en-US&page=${page}`
  );
  return res.json();
};

const MovieCards = () => {
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
      <h2>Movies</h2>

      {status === "loading" && <div>Loading data</div>}

      {status === "error" && <div>Error fetching data</div>}

      {status === "success" && (
        <>
          <button
            onClick={() => setPage((prevState) => Math.max(prevState - 1, 0))}
            disabled={page === 1}
          >
            Previous Page
          </button>
          <span>{page}</span>
          <button onClick={() => setPage((prevState) => prevState + 1)}>
            Next Page
          </button>
          <Container>
            {resolvedData.results.map((movieItem) => (
              <MovieCard key={movieItem.id} movieItem={movieItem} />
            ))}
          </Container>
        </>
      )}
    </Container>
  );
};
export default MovieCards;
