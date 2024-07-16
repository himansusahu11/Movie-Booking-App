const BASE_URL = process.env.REACT_APP_BACKEND_URL;
export const getTheatresForMovie = async (id) => {
  const theatresDetailsPromise = await fetch(
    `${BASE_URL}/mba/api/v1/movies/${id}/theatres`
  );
  const theatres = await theatresDetailsPromise.json();
  return theatres;
};
