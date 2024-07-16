// import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NavbarComponent from "../../Components/Navbar/Navbar";
import Spinner from "react-bootstrap/esm/Spinner";
import ReactPlayer from "react-player";
import "./MovieDetails.css";
import Button from "react-bootstrap/esm/Button";
import useMovieDetails from "../../hooks/useMovieDetails";

function MovieDetails(props) {
  const { isLoading, theme, movieData, movieId } = useMovieDetails();
  return (
    <div className="text-center ">
      <NavbarComponent />
      {isLoading ? (
        <Spinner />
      ) : (
        <div className={"box " + (theme === "dark" ? "bg-black" : "bg-light")}>
          <ReactPlayer
            url={movieData.trailerUrl}
            controls={true}
            width="100rem"
            height="50rem"
          />
          <div className="col ">
            <img src={movieData.posterUrl} height={400} width={300} />
          </div>
          <div className="col ">
            <h2 className="fw-bolder"> About The Movie </h2>

            <div>
              <span className="badge rounded-pill text-bg-danger m-1">
                {" "}
                {movieData.description}{" "}
              </span>
              <span className="badge rounded-pill text-bg-secondary m-1">
                {" "}
                {movieData.language}{" "}
              </span>
              <span className="badge rounded-pill text-bg-secondary m-1">
                {" "}
                {movieData.releaseStatus}{" "}
              </span>
            </div>

            <hr />

            <h3> {movieData.name} </h3>
            <h6> {movieData.director} </h6>
            <h6> {movieData.releaseDate} </h6>
            <hr />
          </div>
          <Link to={`/buyTickets/${movieId}`}>
            <Button className="text-white" variant="danger">
              Book Tickets
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default MovieDetails;
