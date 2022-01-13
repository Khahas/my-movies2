import { useQuery } from "react-query";
import { fetchUpcomingMovies } from "../../services/API";
import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel";

//APT for fetching PopularMovies

function HomePage() {
   const { isLoading, isError, error, data } = useQuery(["Homepage"], () =>
     fetchUpcomingMovies()
   );
  
   if (isLoading) {
     return <span>Loading...</span>;
   }

   if (isError) {
     return <span>Error: {error.message}</span>;
   }

  return (
    <Container>
      <div className="home">
        <Carousel>
          <Carousel.Item>
            <img
              className="slide-image"
              src={`https://image.tmdb.org/t/p/w200/${data.results[0].poster_path}`}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="slide-image"
              src={`https://image.tmdb.org/t/p/w200/${data.results[1].poster_path}`}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="slide-image"
              src={`https://image.tmdb.org/t/p/w200/${data.results[2].poster_path}`}
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </Container>
  );
}

export default HomePage;
