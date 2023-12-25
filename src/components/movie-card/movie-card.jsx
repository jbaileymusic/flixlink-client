import React from "react";
import PropTypes from "prop-types";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./movie-card.scss";

export const MovieCard = ({ movie, onMovieClick, showThumbnail = false }) => {
  console.log(movie);
  return (
    <Card
      className="h-100"
      style={{
        width: showThumbnail ? "150px" : "100%",
        height: showThumbnail ? "150px" : "100%",
      }}
    >
      <Card.Img variant="top" src={movie.ImagePath} />
      <Card.Body>
        {!showThumbnail && (
          <div>
            <Link to={`/movie/${encodeURIComponent(movie.id)}`}>
              <Button
                className="open-button"
                style={{
                  cursor: "pointer",
                }}
                variant="link"
              >
                {movie.Title}
              </Button>
            </Link>
          </div>
        )}
      </Card.Body>
    </Card>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.string.isRequired,
    Title: PropTypes.string.isRequired,
  }).isRequired,
};
