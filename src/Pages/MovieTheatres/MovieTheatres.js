import { Link } from "react-router-dom";
import NavbarComponent from "../../Components/Navbar/Navbar";
import Spinner from "react-bootstrap/esm/Spinner";

import useMovieTheatresHook from "../../hooks/useMovieThratres";
import { useContext } from "react";

function MovieTheatres(props) {
  // const params = useParams();
  // const movieId = params.movieId;
  // const [isLoading, setIsLoading] = useState(true);
  // const [theatresDetails, setTheatresDetails] = useState(null);
  // const [movieDetails, setMovieDetails] = useState(null);
  // const { theme } = useContext(ThemeContext);

  // const fetchData = async () => {
  //   const [theatres, movieData] = await Promise.all([
  //     getTheatresForMovie(movieId),
  //     getMovieDetails(movieId),
  //   ]);

  //   setTheatresDetails(theatres);
  //   setMovieDetails(movieData); //because we nedd movie name
  //   setIsLoading(false);
  // };
  // useEffect(() => {
  //   fetchData();
  // }, []);
  // const { theme } = useContext(ThemeContext);

  const { isLoading, movieDetails, theatresDetails, movieId, theme } =
    useMovieTheatresHook();
  return (
    <div className="bg-dark">
      <NavbarComponent />
      {isLoading && <Spinner />}
      {!isLoading && (
        <div
          className={
            "vh-100 text-center " + (theme === "dark" ? "bg-black" : "bg-light")
          }
        >
          <div>
            {" "}
            <img src={movieDetails.posterUrl} height={400} width={300} />
          </div>

          <h2 className="text-primary">{movieDetails.name}</h2>

          <div className="text-primary">
            <span>{movieDetails.description}</span>
            <div className="">
              <span className="badge text-bg-danger rounded-pill m-2 p-3 text-white">
                {movieDetails.language}
              </span>
              <span className="badge text-bg-danger rounded-pill m-2 p-3 text-white">
                {movieDetails.releaseStatus}
              </span>
            </div>
          </div>

          <div className="bg-dark">
            {theatresDetails.map((theatre) => {
              return (
                <div>
                  <Link to={`/buyTickets/${movieId}/${theatre._id}`}>
                    <div className="">
                      <h3>{theatre.name}</h3>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default MovieTheatres;
