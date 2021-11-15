import React, { useState } from "react";
import { useQuery } from "react-query";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel";

//APT for fetching PopularMovies

function HomePage() {
  const { isLoading, error, data } = useQuery("xxx", () =>
    axios(
      "https://api.themoviedb.org/3/movie/upcoming?api_key=d60745d296221c0d52b06d66535af069"
    )
  );
  //poster_path
  if (error) return <h1> Error: {error.message}, Try again!</h1>;
  if (isLoading) return <h1> loading...</h1>;
  console.log(data.data.results);
  return (
    <Container>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={`https://image.tmdb.org/t/p/w200/${data.data.results[0].poster_path}`}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={`https://image.tmdb.org/t/p/w200/${data.data.results[1].poster_path}`}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={`https://image.tmdb.org/t/p/w200/${data.data.results[2].poster_path}`}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}

export default HomePage;
