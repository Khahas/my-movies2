import React , { useState }from "react";
import { useQuery } from "react-query";
import axios from "axios";




function TopMovies() {
  const [movieCast, setMovieCast] = useState([]);

 

  const getCast = async (id) => {
    const credits = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=d60745d296221c0d52b06d66535af069`
    );
    const cast = await credits.json();
    setMovieCast(cast.cast);
    return (
      movieCast.map((item, index)=>(
<div>{item.nanjme}</div>
    ))
    )
  };
  const { isLoading, error, data } = useQuery("Movies", () =>
  axios(
    "https://api.themoviedb.org/3/movie/top_rated?api_key=d60745d296221c0d52b06d66535af069"
  )
);
  
  if (error) return <h1> Error: {error.message}, Try again!</h1>;
  if (isLoading) return <h1> loading...</h1>;  

    return (
      
    data.data.results.map((movieItem, index) => (
    <div>
    <p>{movieItem.title}</p>
      <img
        key={index}
        src={`https://image.tmdb.org/t/p/w400/${movieItem.poster_path}`}
        alt="poster"
      />
           <div> <button   onClick={() => getCast(movieItem.id)}>Khalws</button></div>
   

  </div>
    ))
   
  );
}

export default TopMovies;
