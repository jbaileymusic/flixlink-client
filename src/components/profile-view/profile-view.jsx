import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import "./profile-view.scss";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";

export const ProfileView = ({ user, movies, token, setUser, setToken }) => {
  // Manage new Username input and its value
  const [updatedUser, setUpdatedUser] = useState(user);
  const [password, setPassword] = useState(null);
  const [isUpdating, setIsUpdating] = useState(false);

  const [deleted, setDeleted] = useState(false);

  const [showChangeUsername, setShowChangeUsername] = useState(false);
  const [showChangePassword, setShowChangePassword] = useState(false);
  const [showChangeBirthday, setShowChangeBirthday] = useState(false);
  const [showChangeEmail, setShowChangeEmail] = useState(false);

  // Function to handle change Username
  const handleChangeUser = () => {
    setIsUpdating(true);
    const newUser = {
      Username: updatedUser.Username,
      Email: updatedUser.Email,
      Birthday: updatedUser.Birthday,
    };
    if (password) {
      newUser.Password = password;
    }
    console.log("Changing user:", { user, updatedUser });
    fetch(
      `https://flexlink-11694b6f8913.herokuapp.com/users/${user.Username}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(newUser),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        setShowChangeBirthday(false);
        setShowChangeEmail(false);
        setShowChangePassword(false);
        setShowChangeUsername(false);
        setIsUpdating(false);
      });
  };

  // Function to format the date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toISOString().split("T")[0];
  };

  // Function to DELETE user account
  const handleDeleteUser = () => {
    fetch(
      `https://flexlink-11694b6f8913.herokuapp.com/users/${user.Username}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    )
      .then((response) => {
        if (response.ok) {
          console.log("Deleted User Account Successfully.");
          alert("User account successfully deleted.");
          setUser(null);
          setToken(null);
          localStorage.clear();
          setDeleted(true);
        } else {
          throw new Error("Failed to delete user account");
        }
      })
      .catch((error) => {
        console.error("Error deleting user account:", error);
      });
  };

  if (deleted) {
    return <Navigate to="/login" />;
  }

  // Check for user logged in
  if (!user) {
    return (
      <div>
        <div>User not found</div>
        <br />
        <Link to={`/`}>
          <Button className="back-button" style={{ cursor: "pointer" }}>
            BACK
          </Button>
        </Link>
      </div>
    );
  }

  // Return the results
  return (
    <div>
      <div>
        <span className="profile-header">FlixLink User Profile</span>
        <br />
        <br />
      </div>
      {/* USERNAME */}
      <div>
        <span className="profile-title">Username: </span>
        <span className="profile-text1">{user.Username}</span>
        <br />
        <Button
          className="back-button"
          style={{ fontWeight: "bold", cursor: "pointer" }}
          onClick={() => setShowChangeUsername(true)}
        >
          CHANGE MY USERNAME
        </Button>
        <br />
        {showChangeUsername && (
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Enter new username"
              value={updatedUser.Username}
              onChange={(e) =>
                setUpdatedUser({
                  ...updatedUser,
                  Username: e.target.value,
                })
              }
            />
            <Button onClick={handleChangeUser}>Submit</Button>
          </Form.Group>
        )}
        <br />
      </div>
      {/* PASSWORD */}
      <div>
        <span className="profile-title"></span>
        <Button
          className="back-button"
          style={{ fontWeight: "bold", cursor: "pointer" }}
          onClick={() => setShowChangePassword(true)}
        >
          CHANGE MY PASSWORD
        </Button>
        <br />
        {showChangePassword && (
          <Form.Group>
            <Form.Control
              type="password"
              placeholder="Enter new password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button onClick={handleChangeUser}>Submit</Button>
          </Form.Group>
        )}
        <br />
        <br />
      </div>

      {/* EMAIL */}
      <div>
        <span className="profile-title">Email: </span>
        <span className="profile-text1">{user.Email}</span>
        <br />
        <Button
          className="back-button"
          style={{ fontWeight: "bold", cursor: "pointer" }}
          onClick={() => setShowChangeEmail(true)}
        >
          CHANGE MY EMAIL
        </Button>
        <br />
        {showChangeEmail && (
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Enter new email address"
              value={updatedUser.Email}
              onChange={(e) =>
                setUpdatedUser({
                  ...updatedUser,
                  Email: e.target.value,
                })
              }
            />
            <Button onClick={handleChangeUser}>Submit</Button>
          </Form.Group>
        )}
        <br />
      </div>

      {/* BIRTHDAY */}
      <div>
        <span className="profile-title">Birthday: </span>
        <span className="profile-text1">{formatDate(user.Birthday)}</span>
        <br />
        <Button
          className="back-button"
          style={{ fontWeight: "bold", cursor: "pointer" }}
          onClick={() => setShowChangeBirthday(true)}
        >
          CHANGE MY BIRTHDAY
        </Button>
        <br />
        {showChangeBirthday && (
          <Form.Group>
            <Form.Control
              type="date"
              placeholder="Enter new birthday"
              value={updatedUser.Birthday}
              onChange={(e) =>
                setUpdatedUser({
                  ...updatedUser,
                  Birthday: e.target.value,
                })
              }
            />
            <Button onClick={handleChangeUser}>Submit</Button>
          </Form.Group>
        )}
        <br />
        <br />
      </div>
      {/* FAVORITE MOVIES */}
      <div>
        <span className="profile-title">Favorite Movies: </span>
        {user.FavoriteMovies.length > 0 ? (
          user.FavoriteMovies.map((favMovie) => {
            const movie = movies.find((m) => m.id === favMovie);
            return (
              movie && <MovieCard key={movie._id} movie={movie} showThumbnail />
            );
          })
        ) : (
          <span>You have not yet selected any movies as favorites.</span>
        )}
        <br />
        <br />
      </div>
      <br />
      <br />
      <br />

      {/* DELETE USER ACCOUNT */}
      <Button
        className="back-button"
        style={{
          width: "500px",
          fontWeight: "bold",
          backgroundColor: "red",
          cursor: "pointer",
        }}
        onClick={handleDeleteUser}
      >
        DELETE MY USER ACCOUNT <br />
        &#40;Be careful...this is permanent!&#41;
      </Button>
      <br />
      <br />
      <br />
      <Link to={`/`}>
        <Button
          className="back-button"
          style={{ fontWeight: "bold", cursor: "pointer" }}
        >
          HOME
        </Button>
      </Link>
    </div>
  );
};
