import { useState, useEffect } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";
import { LoginView } from "../login-view/login-view";
import { SignupView } from "../signup-view/signup-view";
import { ProfileView } from "../profile-view/profile-view";
import { MainNavbar } from "../navigation-bar/navigation-bar";
import { Row, Col } from "react-bootstrap";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

export const MainView = () => {
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const storedToken = localStorage.getItem("token");
  const [movies, setMovies] = useState([]);
  const [user, setUser] = useState(storedUser);
  const [token, setToken] = useState(storedToken);
  const [searchQuery, setSearchQuery] = useState("");

  const fetchMovies = () =>
    fetch("https://flexlink-11694b6f8913.herokuapp.com/movies", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => response.json())
      .then((movies) => {
        const moviesFromApi = movies.map((movie) => {
          return {
            id: movie._id,
            Title: movie.Title,
            Description: movie.Description,
            Genre: movie.Genre,
            Director: movie.Director,
            ImagePath: movie.ImagePath,
          };
        });

        setMovies(moviesFromApi);
      });

  const filterMoviesBySearch = () => {
    if (searchQuery.trim() === "") {
      return movies;
    }
    return movies.filter((movie) =>
      movie.Title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  useEffect(() => {
    if (!token) return;
    fetchMovies();
  }, []);

  useEffect(() => {
    if (!token) return;
    fetchMovies();
  }, [token]);

  return (
    <BrowserRouter>
      <MainNavbar
        user={user}
        onLoggedOut={() => {
          setUser(null);
          setToken(null);
          localStorage.clear();
        }}
        searchQuery={searchQuery}
        onSearchInputChange={handleSearchInputChange}
      />
      <Row className="justify-content-md-center">
        <Routes>
          {/* Signup route */}
          <Route
            path="/signup"
            element={
              <>
                {user ? (
                  <Navigate to="/" />
                ) : (
                  <Col md={5}>
                    <SignupView />
                  </Col>
                )}
              </>
            }
          />

          {/* Login route */}
          <Route
            path="/login"
            element={
              <>
                {user ? (
                  <Navigate to="/" />
                ) : (
                  <Col md={5}>
                    <LoginView
                      onLoggedIn={(user, token) => {
                        setUser(user);
                        setToken(token);
                      }}
                    />
                  </Col>
                )}
              </>
            }
          />

          {/* Show MovieView for the selected movie */}
          <Route
            path="/movie/:movieId"
            element={
              <>
                {!user ? (
                  <Navigate to="/login" replace />
                ) : movies.length === 0 ? (
                  <Col>
                    There are no movies to show, or no movies can be shown.
                  </Col>
                ) : (
                  <Col md={8}>
                    <MovieView
                      movies={movies}
                      user={user}
                      token={token}
                      setUser={setUser}
                      setToken={setToken}
                    />
                  </Col>
                )}
              </>
            }
          />

          {
            /* This will be the ProfileView route. */
            <Route
              path="/profile"
              element={
                <>
                  {!user ? (
                    <Navigate to="/login" replace />
                  ) : (
                    <Col md={5}>
                      <ProfileView
                        user={user}
                        movies={movies}
                        token={token}
                        setUser={setUser}
                        setToken={setToken}
                      />
                    </Col>
                  )}
                </>
              }
            />
          }
          {/* This route displays all movies in the database. */}
          <Route
            path="/"
            element={
              <>
                {!user ? (
                  <Navigate to="/login" replace />
                ) : movies.length === 0 ? (
                  <Col>
                    There are no movies to show, or no movies can be shown.
                  </Col>
                ) : (
                  <>
                    {filterMoviesBySearch().map((movie) => (
                      <Col className="mb-4" key={movie.id} md={3}>
                        <MovieCard movie={movie} />
                      </Col>
                    ))}
                  </>
                )}
              </>
            }
          />
        </Routes>
      </Row>
    </BrowserRouter>
  );
};
