const baseURL = "https://api.themoviedb.org/3/";
const api_key = "d60745d296221c0d52b06d66535af069";
const lang = "en-US";
const region = "TR";

export const fetchTopMovies = async (page) => {
  const res = await fetch(`
      ${baseURL}movie/top_rated?api_key=${api_key}&language=${lang}&page=${page}&region=${region}`);
  return res.json();
};

export const fetchPopularMovies = async (page) => {
  const res = await fetch(`
        ${baseURL}movie/popular?api_key=${api_key}&language=${lang}&page=${page}&region=${region}`);
  return res.json();
};

export const fetchNowPlayingMovies = async (page) => {
  const res = await fetch(`
        ${baseURL}movie/now_playing?api_key=${api_key}&language=${lang}&page=${page}&region=SE`);
  return res.json();
};
export const fetchUpcomingMovies = async (page) => {
  const res = await fetch(`
        ${baseURL}movie/upcoming?api_key=${api_key}&language=${lang}&page=${page}&region=SE`);
  return res.json();
};
export const fetchGenre = async () => {
  const res = await fetch(`
        ${baseURL}genre/movie/list?api_key=${api_key}&language=${lang}`);
  return res.json();
};

export const fetchMovieDetails = async (movieId) => {
  const res = await fetch(`
        ${baseURL}movie/${movieId}?api_key=${api_key}&append_to_response=credits`);
  return res.json();
};
export const fetchMovies = async (movieId) => {
  const res = await fetch(`
        ${baseURL}movie/${movieId}/credits?api_key=${api_key}&append_to_response=credits`);
  return res.json();
};

export const fetchActor = async (actorId) => {
  const res = await fetch(
    `${baseURL}person/${actorId}?api_key=${api_key}&language=${lang}&append_to_response=credits`
  );
  return res.json();
};

export const fetchActorDetails = async (actorId) => {
  const res = await fetch(
   `${baseURL}discover/movie?with_cast=${actorId}&sort_by=release_date.asc&api_key=${api_key}`
    
  );
  return res.json();
};


export const fetchGenreMovies = async (genreId, page) => {
  const res = await fetch(
    `${baseURL}discover/movie?api_key=${api_key}&language=${lang}&with_genres=${genreId}&page=${page}`
  );
  return res.json();
};