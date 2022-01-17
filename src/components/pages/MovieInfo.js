import { fetchMovies } from "../../services/API";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";

const MovieInfo = () => {
  const params = useParams();
  const movieId = params.movieId;

  const { isLoading, isError, data, error } = useQuery(
    ["movies", movieId],
    () => fetchMovies(movieId)
  );

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return <div>{data && <MovieInfo data={data} />}</div>;
};

export default MovieInfo;
