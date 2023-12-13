import { useState } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";
import { LoginView } from "../login-view/login-view";
import { SignupView } from "../signup-view/signup-view";

export const MainView = () => {
<<<<<<< Updated upstream
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "Psycho",
      image:
        "https://lh3.googleusercontent.com/pw/ADCreHeuAA_XUxxCdntedFyobUDzrB3V69REX6zE73ttDO4vCP1ZG5zj0k1lNll7SSLA5njQZJ2LcilJ6iyoW7rjdSzFGnILL19i2JPvW4DdvtfvF7xgUPJo3oAFstSYgmbumA3lLs2MG3ye0D_qPXIX0QBN=w621-h931-s-no-gm?authuser=0",
      genre: "Horror",
      director: "Alfred Hitchcock",
      description: "A secretary embezzles money and checks into a secluded motel run by a disturbed innkeeper, setting off a chain of events that lead to suspense, terror, and a shocking revelation.",
    },
    {
      id: 2,
      title: "Raiders of the Lost Ark",
      image:
        "https://lh3.googleusercontent.com/pw/ADCreHc9UFefMeds-xC4d6ZnYI8IK_6uugqXqUo7QthEmPr7UcSF3xhhP768u14vpKyueH9x_cbsHxjNlfIEKwUG8sEnbwW1P_7OvO7QY4IG-Vv6Da5vwt9W-_VyGREiUbjWEigN6K4BENNGXT-qvZAq4rF6yh71zBhckoO2shKTL9cXs7DN-WJQlDBxrEUxBpa17aWtDlqeT3I6Azl1h-iNhAhq21Q6DFoA08NZAJKpCwlFxwSzQYy4f0zMZtrspOhA8oN-JLD0hiK_c1mEDD3AwLS7dmC0mqXGZxDsxlQUxBxLIzV8SiYWeSgCpiJPWaM9vcBhfsSXKYeoqlGWyMmDimrqriZy6eeu1OccsjULd2rg6QwLSRdloBpBSwFgAjqLtKTFujYC7W5OhElvQzUCAoCcBTFtw0keI9sq7ZwY-IM2nlKJIol455ElwDVlCNGT5YifrbScreHPVrPBJQBjZ33iFejaRRIR1qUN8qFkbKdTCpUpwDzj5bjGNqA9Yp_Qjzvnjr-wasoJlfbmWaH3lP1S1oFKDOtWNYmqU1_E7yNg7TzFALaoV-WOAGVJ7BlhC9PeSrZEMXPA6tn9-7kGv89tklBW4aMpP8TAGpXe7uAUA77BeOAAbMfLzDFcIdsM9-03jW0CZSZ4toV1sEDojbbHUFkCyN53j1dQRsrWQAsE-dx40wR-O2VOnNhUhST-LWuW02saw-L6-FzFTif_tZLVmRmkxmNGaeu0Yv4hgZnk4GV6Jj4farOLL7BbPL-uvMjMap4MlbsqXY4OmmvC1bX8N5NLN84f2XAmANgXrZtAQByLMe22s10fEMN05mTzsVzRxEALjEIunVhnC26DOvaiCu--xES87EAOsbiCxhQxcuodqW8DKs58607_YuURh7nyoA=w617-h925-s-no?authuser=0",
      genre: "Adventure",
      director: "Steven Spielberg",
      description: "'Raiders of the Lost Ark' is a classic adventure film directed by Steven Spielberg and released in 1981. It follows the iconic archaeologist Indiana Jones as he embarks on a perilous quest to find the Ark of the Covenant before the Nazis can harness its power for world domination, blending action-packed sequences, memorable characters, and a gripping storyline in an unforgettable cinematic experience.",
    },
    {
      id: 3,
      title: "Star Wars: A New Hope",
      image:
        "https://lh3.googleusercontent.com/pw/ADCreHfiJUfP-5JJqFVNyYimvk0RvMyVeb1vqJ7Mmbw_vWc6nhhEk-dTlihrLh3l2SpqQUnp62RRYZfyj-PlYp1vQbjJmJnRkVe8IxrXQQEhn-8kOIpMifwXuKU-QTr5Kpg6T2Q3sXuItx3B0AtwHa5X0y9HWrUwWjUJ5sWDNtwIcV743b3pDcICdGWjfK60N7aAiM0miInxY0S7gDzIT5Es1ddpBTavTVKkla6cIA5blMHZHv7ZIum9hzWgJH2PiqAmgR9GyzzfpzY568hp7T5RbeKKQ2-J_Xf6M6En3ljGCzf26kxkppU16y-mMwfd8v-AbHu9Bp4zU0rO1LZnmZTS5bZWv4eU_Hamb530wsGQA3OTK2bqxj_k3nRZX3bM-SqldmrfQPPE0Zror0WeCbLgUWnG1IVWbtXqne3w5vNHMYelRZuzX4t_lKQI3DAGaTf4s3KsgwDKTb3gEVaWOio_D98mK34ZyF0Ulmnzn7NAYaAVfdYMX6UEq8w2CJg9CXyxQae6bab62VgGg5av6mOlM8c_9iEDwV5vKaJ0i3vuzrvWCPE6mkV9W92uRq70nqLF-WlCYQ7ubMZf06XsbvgdXVNVAKBBafipE3Uwd-F5cKFPFhvIv7Cc9RB7qG5k9XXXlCuZbPZBVy0_ODAcB0Qve9WMd5wf7wmEuA3_sLm8CDq41Zy0yec-nfnL8s8W1cNzvSZJDXtMJGJ5sKbu_-E24tHgvEx3Lk2LBNFQ9PQHG2gXvq-aJX_1VJ0UTvocAseNiVF2w90ganRmgsJZ11i_XsM2jdPFxwjp62TWKutzofKaD8HF5li0SVpAyXzID25yIXi99qBBIO0gI8k5fu-qsUK_5LB1W0azSHg12dMN8ZWAMuD8V_feEnfotb9q1O-vXlpXsw=w617-h925-s-no?authuser=0",
      genre: "Sci-Fi",
      director: "George Lucas",
      description: "In a galaxy far, far away, a young farm boy, a princess, and a smuggler join forces to combat the evil Galactic Empire.",
    },
  ]);

  const [selectedMovie, setSelectedMovie] = useState(null);

=======

  const storedUser = JSON.parse(localStorage.getItem("user"));
  const storedToken = localStorage.getItem("token");
  const [movies, setMovies] = useState([]);

  const [selectedMovie, setSelectedMovie] = useState(null);

  const [user, setUser] = useState(null);

  const [token, setToken] = useState(null);

  useEffect(() => {
    if (!token) return;

    fetch("https://flexlink-11694b6f8913.herokuapp.com/movies", {
      headers: { Authorization: `Bearer ${token}` }
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

  
  if (!user) {
    return (
      <>
        <LoginView onLoggedIn={(user, token) => {
          setUser(user);
          setToken(token);
        }} />
        or
        <SignupView />          
        </>
    );
  }

>>>>>>> Stashed changes
  if (selectedMovie) {
    return (
      <MovieView movie={selectedMovie} onBackClick={() => setSelectedMovie(null)} />
    );
  }

  if (movies.length === 0) {
    return <div>The list is empty!</div>;
  }

  return (
    <div>
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          onMovieClick={(newSelectedMovie) => {
            setSelectedMovie(newSelectedMovie);
          <button onClick={() => { setUser(null); setToken(null); localStorage.clear() }}>LOGOUT</button>
          }}
        />
      ))}
    </div>
  );
};
