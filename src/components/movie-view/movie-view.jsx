import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
/* import PropTypes from "prop-types"; */
import "./movie-view.scss";

export const MovieView = ({ user, token, movies }) => {
  const { movieId } = useParams();
  const [isFavorite, setIsFavorite] = useState(false);
  const movie = movies.find((m) => m.id === movieId);

  //Updates the isFavorite state (true/false)
  useEffect(() => {
    if (user && movie) {
      setIsFavorite(user.FavoriteMovies.includes(movie.id));
    }
  }, [user, movie, movieId]);

  // Function to handle toggling of favorite status
  const handleToggleFavorite = async () => {
    try {
      console.log(123);
      console.log(user);
      console.log(token);
      console.log(movie);
      // Check for necessary data (user, token, and movie)
      if (!user || !token || !movie) {
        return;
      }

      // Define the URL for the API endpoint to handle adding/removing movies from favorites
      const url = `https://flexlink-11694b6f8913.herokuapp.com/users/${user.Username}/movies/${movie.id}`;

      // Determine the HTTP method based on the current favorite status (isFavorite)
      const method = isFavorite ? "DELETE" : "POST";

      // Make a fetch request to the API
      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ movieId: movie.id }),
      });

      // Check if the request was successful
      if (response.ok) {
        // If successful, update the favorite status locally by toggling isFavorite
        setIsFavorite(!isFavorite);
      } else {
        // Log an error message if adding/removing the movie from favorites failed
        console.error(`Failed to ${isFavorite ? "remove" : "add"} movie`);
      }
    } catch (error) {
      // Handle any errors that occur during the fetch request
      console.error("Error toggling movie favorite status:", error);
    }
  };

  if (!movie) {
    return (
      <div>
        <div>Movie not found.</div>
        <br />
        <Link to={`/`}>
          <Button className="back-button" style={{ cursor: "pointer" }}>
            BACK
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div>
      <div>
        <img className="w-150px" src={movie.ImagePath} />
      </div>
      <div>
        {/*         <span>Title: </span> */}
        <span className="movie-title">{movie.Title}</span>
        <br />
        <br />
      </div>
      <Button onClick={handleToggleFavorite}>
        {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
      </Button>
      <div>
        <span>Genre: </span>
        <span>{movie.Genre.Name}</span>
      </div>
      <div>
        <span>Director: </span>
        <span>{movie.Director.Name}</span>
        <br />
        <br />
      </div>
      <div>
        {/*         <span>Description: </span> */}
        <span className="movie-description">{movie.Description}</span>
      </div>
      <br></br>
      <Link to={`/`}>
        <Button className="back-button" style={{ cursor: "pointer" }}>
          BACK
        </Button>
      </Link>
    </div>
  );
};
