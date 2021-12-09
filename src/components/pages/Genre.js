import React, { useState, useEffect } from "react";
import { Container, Button, Row, Col } from "react-bootstrap";
import { usePaginatedQuery } from "react-query";
import { useHistory, useParams } from "react-router-dom";
import MovieCard from "../cards/MovieCard";

//APT for fetching NowPlayingMovies
const fetchGenreMovies = async () => {
  const res = await fetch(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=d60745d296221c0d52b06d66535af069&language=en-US`
  );
  return res.json();
};

const Genre = () => {
  let history = useHistory();
  let { pageParam } = useParams();
  const [page, setPage] = useState(pageParam ? parseInt(pageParam) : 1);
  useEffect(() => {
    setPage(pageParam ? parseInt(pageParam) : 1);
  }, [pageParam]);
  // Use usePaginatedQuery instead of useQuery, to divide large data into smaller contiguous intervals of data
  const [selectedMovieGenre, setSelectedMovieGenre] = useState({});
  const [movieListGenre, setMovieListGenre] = useState([]);
  const { data, status } = usePaginatedQuery(["Genre", page], fetchGenreMovies);

  const getGenreMovies = async (id) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=d60745d296221c0d52b06d66535af069&with_genres=${id}`
    );
    const res = await response.json();
    setMovieListGenre(res.results);
  };

  const getMovieInfo = (movies) => {
    console.log("123", movies);
  };

  const getInfo = (movies) => {
    setSelectedMovieGenre(movies);
    getGenreMovies(movies.id);
    console.log("123", movies);
  };
  if (selectedMovieGenre && selectedMovieGenre.name) {
    return (
      <Container>
        <h2>{selectedMovieGenre.name}</h2>

        {/* Showing if status is loading or error */}
        {status === "loading" && <div>Loading data</div>}

        {status === "error" && <div>Error fetching data</div>}

        {status === "success" && (
          <>
            <Container>
              <Button onClick={() => setSelectedMovieGenre({})}>
                Gå tillbaka
              </Button>

              {movieListGenre &&
              movieListGenre.length ? (
                <Row>
                  {movieListGenre.map((movieItem) => (
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
      </Container>
    );
  }
  return (
    <Container>
      <h2>Olika Genre</h2>

      {/* Showing if status is loading or error */}
      {status === "loading" && <div>Loading data</div>}

      {status === "error" && <div>Error fetching data</div>}

      {status === "success" && (
        <>
          <Container>
            {data && data.genres && data.genres.length > 0 ? (
              <Row>
                {data.genres.map((genres) => (
                  <Col xs={12} sm={6} md={4}>
                    <div>
                      <div style={{ padding: "10px" }}>
                        {" "}
                        <Button onClick={() => getInfo(genres)}>
                          {genres.name}
                        </Button>
                      </div>
                    </div>
                  </Col>
                ))}
              </Row>
            ) : null}
          </Container>
        </>
      )}
    </Container>
  );
};
export default Genre;
