import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useToggle from "./useToggle";
import { getTheatresForMovie } from "../api/Theatres";
import { getMovieDetails } from "../api/Movie";
import { ThemeContext } from "../App";

export default function useMovieTheatresHook() {
  const params = useParams();
  const movieId = params.movieId;
  const [isLoading, setIsLoading] = useToggle(true);
  const [theatresDetails, setTheatresDetails] = useState(null);
  const [movieDetails, setMovieDetails] = useState(null);
  const { theme } = useContext(ThemeContext);

  const fetchData = async () => {
    const [theatres, movieData] = await Promise.all([
      getTheatresForMovie(movieId),
      getMovieDetails(movieId),
    ]);

    setTheatresDetails(theatres);
    setMovieDetails(movieData); //because we nedd movie name
    setIsLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return { isLoading, movieDetails, theatresDetails, movieId, theme };
}
