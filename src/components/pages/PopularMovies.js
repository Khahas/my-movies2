import React, { useState, useEffect} from "react";
import { Container, Button, Row, Col } from "react-bootstrap";
import { usePaginatedQuery } from "react-query";
import MovieCard from "../cards/MovieCard";
import { useHistory, useParams  } from "react-router-dom";
import { fetchPopularMovies} from "../../services/API"


function PopularMovies() {
  let history = useHistory();
  let { pageParam } = useParams();
  const [page, setPage] = useState(pageParam ? parseInt(pageParam): 1 );

  useEffect(() => {
    setPage(pageParam ? parseInt(pageParam): 1)
  }, [pageParam])
  // Use usePaginatedQuery instead of useQuery, to divide large data into smaller contiguous intervals of data
  const { resolvedData, status } = usePaginatedQuery(["Movies", page], () =>
    fetchPopularMovies(page)
  );

  const handleIncrese = () => {
    setPage((prevState) => prevState + 1)
    history.push(`/PopularMovies/${page + 1}`);

  }

  const handleDecrese = () => {
    setPage((prevState) => Math.max(prevState - 1, 0))
    history.push(`/PopularMovies/${page - 1}`);

  }
  return (
    <Container>
      <h2>Popular Movies</h2>

      {/* Showing if status is loading or error */}
      
      {status === "loading" && <div>Loading data</div>}

      {status === "error" && <div>Error fetching data</div>}

      {status === "success" && (
        <>
          <Container>
            <Row>
              {resolvedData.results.map((movieItem) => (
                <Col xs={12} sm={6} md={4}>
                  {" "}

                  {/* MovieCard is a custom tag wich creates and populate one card for each movie */}

                  <MovieCard key={movieItem.id} movieItem={movieItem} />
                </Col>
              ))}
            </Row>
             {/* this is a row with to buttons one for previous and one for next page */}
            <Button
              onClick={() => handleDecrese()}
              disabled={page === 1}
            >
              Previous Page
            </Button>
            <span style={{fontSize: "2rem"}}>Page:{page}</span>
            <Button onClick={() => handleIncrese()}>
              Next Page
            </Button>
          </Container>
        </>
      )}
    </Container>
  );
}

export default PopularMovies;
