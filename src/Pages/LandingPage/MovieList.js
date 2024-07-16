// import { useContext, useEffect, useState } from "react";
import Movie from "../../Components/Movie/Movie";
import "./MovieList.css";
import Spinner from "react-bootstrap/esm/Spinner";
import NavbarComponent from "../../Components/Navbar/Navbar";
import DropDown from "../../Components/Dropdown/DropDown";
import SearchInput from "../../Components/SearchInput/SearchInput";
import useMovieLlist from "../../hooks/useMovieList";

function MovieList(props) {
  const {
    theme,
    isLoading,
    filterResult,
    onLanguageChange,
    movieDetails,
    onMovieDelete,
    isLoggedIn,
  } = useMovieLlist();
  return (
    <div
      className={
        "movieListContainer text-center " +
        (theme === "dark" ? "bg-dark" : "bg-light")
      }
    >
      <NavbarComponent />

      {/* if isLoding is true then Spinner will show otherwise content will show */}
      {isLoading ? (
        <Spinner />
      ) : (
        <div>
          <SearchInput onSearchResults={filterResult} />
          <DropDown onLanguageChange={onLanguageChange} />
          <div className="movieList">
            {movieDetails.map((movie) => {
              return (
                <Movie
                  key={movie._id}
                  onDelete={onMovieDelete}
                  movieDetails={movie}
                  isLoggedIn={isLoggedIn}
                />
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default MovieList;
