import React, { useState, useEffect  } from "react";
import { Container, Button, Row, Col } from "react-bootstrap";
import { usePaginatedQuery } from "react-query";
import { useHistory, useParams  } from "react-router-dom";
import MovieCard from "../cards/MovieCard";

import { fetchNowPlayingMovies } from "../../services/API";

//APT for fetching NowPlayingMovies
// const fetchNowPlayingMovies = async (key, page) => {
//   const res = await fetch(
//     `https://api.themoviedb.org/3/movie/now_playing?api_key=d60745d296221c0d52b06d66535af069&language=en-US&page=${page}`
//   );
//   return res.json();
// };


const NowPlayingMovies = () => {
  let history = useHistory();
  let { pageParam } = useParams();
  const [page, setPage] = useState(pageParam ? parseInt(pageParam): 1 );
  useEffect(() => {
    setPage(pageParam ? parseInt(pageParam): 1)
  }, [pageParam])

  // Use usePaginatedQuery instead of useQuery, to divide large data into smaller contiguous intervals of data
  const { resolvedData, status } = usePaginatedQuery(
    ["Movies", page], ()=> 
    fetchNowPlayingMovies(page)
  );

  const handleIncrese = () => {
    setPage((prevState) => prevState + 1)
    history.push(`/NowPlayingMovies/${page + 1}`);

  }

  const handleDecrese = () => {
    setPage((prevState) => Math.max(prevState - 1, 0))
    history.push(`/NowPlayingMovies/${page - 1}`);

  }

  return (
    <Container>
      <h2>Now Playing Movies</h2>

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
};

export default NowPlayingMovies;
