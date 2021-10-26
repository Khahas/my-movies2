import React, { useState } from "react";
import { useQuery } from "react-query";
import axios from "axios";
import Button from "react-bootstrap/Button";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import Col from "react-bootstrap/Col";

function TopMovies() {
  const [movieCast, setMovieCast] = useState([]);

  const getCast = async (id) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=d60745d296221c0d52b06d66535af069`
    );
    const res = await response.json();
    setMovieCast(res.cast);
    console.log(res.cast);
  };
  const { isLoading, error, data } = useQuery("Movies", () =>
    axios(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=d60745d296221c0d52b06d66535af069"
    )
    

  );

  if (error) return <h1> Error: {error.message}, Try again!</h1>;
  if (isLoading) return <h1> Loading...</h1>;
  return (
    <Container>
      {data && data.data && data.data.results && data.data.results.length ? (
        <Row>
          {data.data.results.map((movieItem, index) => (
            <Col xs={3}>
              <div>
                <p>{movieItem.title}</p>
                <img
                  key={index}
                  src={`https://image.tmdb.org/t/p/w200/${movieItem.poster_path}`}
                  alt="poster"
                />
                <div>{movieItem.name}</div>
                {movieCast.length ? <p>{movieItem.overview}</p> : null}
                <div>
                  {" "}
                  <Button onClick={() => getCast(movieItem.id)}>Läs mer</Button>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      ) : null}

      {movieCast.length ? (
        <div className="col-xs-12">
          <h4>Skådespelare</h4>
          {movieCast.map((item, index) => (
            <div className="crew-name" key={index}>
              <ul>
                <li>
                  <a href="#">{item.name}</a>
                  <img
                    className="crew-profile"
                    key={index}
                    src={`https://image.tmdb.org/t/p/w200/${item.profile_path}`}
                    alt="poster"
                  />
                </li>
              </ul>
            </div>
          ))}
        </div>
      ) : null}
    </Container>
  );
}

export default TopMovies;
