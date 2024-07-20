// import { useContext, useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

// import { LangContext, ThemeContext } from "../App";
// import { getMovieDetails } from "../api/Movie";
// export default function useMovieDetails() {
//   const params = useParams();
//   const [isLoading, setIsLoading] = useState(true);
//   const [movieData, setMovieData] = useState(null);
//   const movieId = params.movieId;

//   const { theme } = useContext(ThemeContext);
//   const value = useContext(LangContext);

//   const fetchMoviDetails = async () => {
//     const movieDetails = await getMovieDetails(movieId);
//     setIsLoading(false);
//     setMovieData(movieDetails);
//   };
//   useEffect(() => {
//     fetchMoviDetails();
//   }, []);
//   return { isLoading, theme, movieData, movieId };
// }

import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { LangContext, ThemeContext } from "../App";
import { getMovieDetails } from "../api/Movie";

export default function useMovieDetails() {
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [movieData, setMovieData] = useState(null);

  const { theme } = useContext(ThemeContext);
  const value = useContext(LangContext);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const movieDetails = await getMovieDetails(movieId);
        setMovieData(movieDetails);
      } catch (error) {
        console.error("Failed to fetch movie details:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  return { isLoading, theme, movieData, movieId };
}
