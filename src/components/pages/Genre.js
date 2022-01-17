import React from "react";
import { Container, Button, Row, Col } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useQuery } from "react-query";
import { fetchGenre } from "../../services/API";

const Genre = () => {
  const history = useHistory();

  const { isError, error, data } = useQuery(["Genre"], () =>
    fetchGenre()
  );

  const goToMovies = (genre) => {
   history.push(`/GenreMovies/${genre.id}`);
  };

  if (isError) {
    return <span>Error: {error.message}</span>;
  }
  return (
    <Container>
      <h2>Olika Genre</h2>
      <Container>
        {data && data.genres && data.genres.length > 0 ? (
          <Row>
            {data.genres.map((genres) => (
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
