export const fetchMovies = () => {
  return fetch(
    "https://api.themoviedb.org/3/discover/movie?api_key=571da57303345f5f0911e883540343d4&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1"
  ).then((data) => data.json());
};
