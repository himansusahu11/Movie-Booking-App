// import { useContext, useEffect, useState } from "react";
// import { getAllMovies } from "../api/Movie";
// import { ThemeContext } from "../App";
// import useToggle from "./useToggle";

// // import useToggle from "../../hooks/useToggle";
// var allMovieData = [];
// export default function useMovieLlist() {
//   console.log("component rendred again");
//   const [movieDetails, setMovieDetails] = useState([]);
//   //controlled form

//   const [isLoading, setIsLoading] = useToggle(true);
//   const [isLoggedIn, setIsLoggedIn] = useState(true);
//   const { theme } = useContext(ThemeContext);

//   /**
//    * useEffectIsTriggered: ComponentDidMount + ComponentDidUpdate
//    * if we pass an empty array:-= No dependency :-=- it will work on ComponentDidMount
//    */
//   const fetchMoviesData = async () => {
//     const movieData = await getAllMovies();
//     allMovieData = movieData;
//     setIsLoading(false);
//     setMovieDetails(movieData);
//   };
//   useEffect(async () => {
//     fetchMoviesData();
//   }, []);

//   /*
//        ComponentDidMount + Every time searchValue is updated
//     */

//   const onLanguageChange = (languageSelected) => {
//     if (languageSelected === "all") {
//       setMovieDetails(allMovieData);
//       return;
//     }
//     const filteredMovies = allMovieData.filter((movie) => {
//       return movie.language.toLowerCase() === languageSelected;
//     });
//     setMovieDetails(filteredMovies);
//   };

//   function onMovieDelete(id) {
//     const removeDeletedMovie = movieDetails.filter((movie) => {
//       return movie._id !== id;
//     });
//     setMovieDetails(removeDeletedMovie);
//   }
//   // useEffect(() => {
//   //   console.log("useEffect with dependency on searchValue triggered");
//   //   //filter movies every time when a searchValue state is changed
//   //   const filteredMovies = allMovieData.filter((movie) => {
//   //     return movie.name.toLowerCase().startsWith(searchValue);
//   //   });
//   //   setMovieDetails(filteredMovies);
//   // }, [searchValue]);

//   const filterResult = (searchValue) => {
//     const filteredMovies = allMovieData.filter((movie) => {
//       return movie.name.toLowerCase().startsWith(searchValue);
//     });
//     setMovieDetails(filteredMovies);
//   };
//   return {
//     theme,
//     isLoading,
//     filterResult,
//     onLanguageChange,
//     movieDetails,
//     onMovieDelete,
//     isLoggedIn,
//   };
// }

import { useContext, useEffect, useState } from "react";
import { getAllMovies } from "../api/Movie";
import { ThemeContext } from "../App";
import useToggle from "./useToggle";

// import useToggle from "../../hooks/useToggle";
let allMovieData = [];

export default function useMovieList() {
  console.log("component rendered again");
  const [movieDetails, setMovieDetails] = useState([]);
  const [isLoading, toggleIsLoading] = useToggle(true);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const { theme } = useContext(ThemeContext);

  /**
   * useEffectIsTriggered: ComponentDidMount + ComponentDidUpdate
   * if we pass an empty array:-= No dependency :-=- it will work on ComponentDidMount
   */
  useEffect(() => {
    const fetchMoviesData = async () => {
      try {
        const movieData = await getAllMovies();
        allMovieData = movieData;
        setMovieDetails(movieData);
      } catch (error) {
        console.error("Failed to fetch movie data:", error);
      } finally {
        toggleIsLoading(false);
      }
    };

    fetchMoviesData();
  }, [toggleIsLoading]);

  const onLanguageChange = (languageSelected) => {
    if (languageSelected === "all") {
      setMovieDetails(allMovieData);
      return;
    }
    const filteredMovies = allMovieData.filter((movie) => {
      return movie.language.toLowerCase() === languageSelected;
    });
    setMovieDetails(filteredMovies);
  };

  const onMovieDelete = (id) => {
    const removeDeletedMovie = movieDetails.filter((movie) => {
      return movie._id !== id;
    });
    setMovieDetails(removeDeletedMovie);
  };

  const filterResult = (searchValue) => {
    const filteredMovies = allMovieData.filter((movie) => {
      return movie.name.toLowerCase().startsWith(searchValue);
    });
    setMovieDetails(filteredMovies);
  };

  return {
    theme,
    isLoading,
    filterResult,
    onLanguageChange,
    movieDetails,
    onMovieDelete,
    isLoggedIn,
  };
}
