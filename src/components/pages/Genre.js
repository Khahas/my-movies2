import React, { useState, useEffect } from "react";
import { Container, Button, Row, Col } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useQuery } from "react-query";
import axios from "axios";

const Genre = () => {
  const history = useHistory();

  const { isLoading, error, data } = useQuery("fetchGenreMovies", () =>
    axios(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=d60745d296221c0d52b06d66535af069&language=en-US`
    )
  );

  const goToMovies = (genre) => {
    history.push(`/GenreMovies/${genre.id}`);
  };
  return (
    <Container>
      <h2>Olika Genre</h2>
      <Container>
        {data && data.data.genres && data.data.genres.length > 0 ? (
          <Row>
            {data.data.genres.map((genres) => (
              <Col xs={12} sm={6} md={4}>
                <div>
                  <div style={{ padding: "10px" }}>
                    {" "}
                    <Button onClick={() => goToMovies(genres)}>
                      {genres.name}
                    </Button>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        ) : null}
      </Container>
    </Container>
  );
};
export default Genre;
