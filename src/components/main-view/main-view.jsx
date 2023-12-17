import { useState, useEffect } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";
import { LoginView } from "../login-view/login-view";
import { SignupView } from "../signup-view/signup-view";
import { Row, Col } from "react-bootstrap";
import { Button } from "react-bootstrap";

export const MainView = () => {
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const storedToken = localStorage.getItem("token");
  const [movies, setMovies] = useState([]);

  const [selectedMovie, setSelectedMovie] = useState(null);

  const [user, setUser] = useState(null);

  const [token, setToken] = useState(null);

  useEffect(() => {
    if (!token) return;

    fetch("https://flexlink-11694b6f8913.herokuapp.com/movies", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => response.json())
      .then((movies) => {
        const moviesFromApi = movies.map((movie) => {
          return {
            id: movie.key,
            Title: movie.Title,
            Description: movie.Description,
            Genre: movie.Genre,
            Director: movie.Director,
            ImagePath: movie.ImagePath,
          };
        });

        setMovies(moviesFromApi);
      });
  }, [token]);

  return (
    <Row className="justify-content-md-center">
      {!user ? (
        <>
          <Col md={5}>
            <LoginView
              onLoggedIn={(user, token) => {
                setUser(user);
                setToken(token);
              }}
            />
            <br />
            <p className="fst-italic"> OR </p> <br />
            <br />
            <span style={{ fontWeight: "bold" }}>SIGNUP:</span>
            <br />
            <br />
            <SignupView />
          </Col>
        </>
      ) : selectedMovie ? (
        <Col md={4}>
          <MovieView
            movie={selectedMovie}
            onBackClick={() => setSelectedMovie(null)}
          />
        </Col>
      ) : movies.length === 0 ? (
        <div>There are no movies available here.</div>
      ) : (
        <>
          {movies.map((movie) => (
            <Col className="mb-5" key={movie.id} md={2}>
              <MovieCard
                movie={movie}
                onMovieClick={(newSelectedMovie) => {
                  setSelectedMovie(newSelectedMovie);
                  <Button
                    onClick={() => {
                      setUser(null);
                      setToken(null);
                      localStorage.clear();
                    }}
                  >
                    LOGOUT
                  </Button>;
                }}
              />
            </Col>
          ))}
        </>
      )}
    </Row>
  );
};
/*     )
  }


    )
      )}
  ) */
/* if (!user) {
    return (
      <>
        <LoginView
          onLoggedIn={(user, token) => {
            setUser(user);
            setToken(token);
          }}
        />
        <br />
        <p className="fst-italic"> OR </p> <br />
        <br />
        <span style={{ fontWeight: "bold" }}>SIGNUP:</span>
        <br />
        <br />
        <SignupView />
      </>
    );
  }

  if (selectedMovie) {
    return (
      <MovieView
        movie={selectedMovie}
        onBackClick={() => setSelectedMovie(null)}
      />
    );
  }

  if (movies.length === 0) {
    return <div>There are no movies available here.</div>;
  }

  return (
    <div>
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          onMovieClick={(newSelectedMovie) => {
            setSelectedMovie(newSelectedMovie);
            <button
              onClick={() => {
                setUser(null);
                setToken(null);
                localStorage.clear();
              }}
            >
              LOGOUT
            </button>;
          }}
        />
      ))}
    </div>
  );
}; */
