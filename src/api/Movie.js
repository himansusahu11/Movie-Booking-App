const BASE_URL = process.env.REACT_APP_BACKEND_URL;
export const getAllMovies = async () => {
  const movivesPromise = await fetch(`${BASE_URL}/mba/api/v1/movies`);
  const moviesData = await movivesPromise.json();
  return moviesData;
};

export const getMovieDetails = async (id) => {
  const moviveDetailPromise = await fetch(
    `${BASE_URL}/mba/api/v1/movies/${id}`
  );
  const movieDetails = await moviveDetailPromise.json();
  return movieDetails;
};
