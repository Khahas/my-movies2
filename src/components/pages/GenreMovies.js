import React, { useState, useEffect } from "react";
import { Container, Button, Row, Col } from "react-bootstrap";
import { usePaginatedQuery } from "react-query";
import { useHistory, useParams } from "react-router-dom";
import MovieCard from "../cards/MovieCard";

function GenreMovies() {
  const history = useHistory();
  const { genre, pageParam } = useParams();

  const [page, setPage] = useState(pageParam ? parseInt(pageParam) : 1);
  useEffect(() => {
    setPage(pageParam ? parseInt(pageParam) : 1);
  }, [pageParam]);

  const getGenreMovies = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=d60745d296221c0d52b06d66535af069&with_genres=${genre}&language=en-US&page=${page}`
    );
    return response.json();
  };

  const { data, status } = usePaginatedQuery(["Genre", page], getGenreMovies);

  const handleIncrese = () => {
    setPage((prevState) => prevState + 1);
    history.push(`/GenreMovies/${genre}/${page + 1}`);
  };

  const handleDecrese = () => {
    setPage((prevState) => Math.max(prevState - 1, 0));
    history.push(`/GenreMovies//${genre}/${page - 1}`);
  };
  return (
    <Container>
      {/* Showing if status is loading or error */}
      {status === "loading" && <div>Loading data</div>}

      {status === "error" && <div>Error fetching data</div>}

      {status === "success" && (
        <>
          <Container>
            <Button onClick={() => history.push(`/Genre`)}>Gå tillbaka</Button>
            {data.results && data.results.length ? (
              <Row>
                {data.results.map((movieItem) => (
                  <Col xs={12} sm={6} md={4}>
                    {" "}
                    {/* MovieCard is a custom tag wich creates and populate one card for each movie */}
                    <MovieCard key={movieItem.id} movieItem={movieItem} />
                  </Col>
                ))}
              </Row>
            ) : null}
          </Container>
        </>
      )}

      <Button onClick={() => handleDecrese()} disabled={page === 1}>
        Previous Page
      </Button>
      <span style={{ fontSize: "2rem" }}>Page:{page}</span>
      <Button onClick={() => handleIncrese()}>Next Page</Button>
    </Container>
  );
}
export default GenreMovies;
