import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { memo } from "react";

function Movie(props) {
  console.log("Movie component is rendered");
  const { movieDetails, onDelete, isLoggedIn } = props;
  const { posterUrl, name, language, description, director, releaseDate, _id } =
    movieDetails;

  function deletedMovie() {
    onDelete(_id);
  }

  return (
    <div className="movie-item">
      <Link to={`/movie/${_id}`}>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={posterUrl} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{description}</Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>Language {language}</ListGroup.Item>
            <ListGroup.Item>Director {director}</ListGroup.Item>
            <ListGroup.Item>Release Date {releaseDate}</ListGroup.Item>
          </ListGroup>

          <Card.Body>
            {isLoggedIn && (
              <Button className="m-1" onClick={deletedMovie} variant="danger">
                Delete Movie
              </Button>
            )}
            {isLoggedIn && (
              <Button className="m-1" onClick={deletedMovie} variant="danger">
                Add To Cart
              </Button>
            )}
          </Card.Body>
        </Card>
      </Link>
    </div>
  );
}

export default Movie;
