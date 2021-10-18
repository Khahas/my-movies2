import React from "react";
// import {ReactQueryDevtools} from 'react-query-devtools';
import { useQuery } from "react-query";
import axios from "axios";

//

// const NowPlayingMovies = () => {
//     return <>
//   <NowPlayingMovies />
//   <ReactQueryDevtools initialIsOpen={false}/>
//   </>
// }
function NowPlayingMovies() {
  const { isLoading, error, data } = useQuery("Movies", () =>
    axios(
      "https://api.themoviedb.org/3/movie/now_playing?api_key=d60745d296221c0d52b06d66535af069&language=en-US&page=1"
    )
  );

  if (error) return <h1> Error: {error.message}, Try again!</h1>;
  if (isLoading) return <h1> loading...</h1>;
  console.log(data);
  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default NowPlayingMovies;
