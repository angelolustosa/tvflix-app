import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./MovieDetail.css";

export const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  const formatDate = (date) => {
    if (!date) return "";
    return new Date(date).toLocaleDateString("pt-BR");
  };

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}?language=pt-BR`,
          {
            headers: {
              Authorization: "Bearer SUA_TOKEN_AQUI",
            },
          },
        );

        setMovie(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMovie();
  }, [id]);

  if (!movie) return <div className="loading">Carregando...</div>;

  const genres = movie.genres?.map((g) => g.name).join(", ");
  const year = movie.release_date?.split("-")[0];

  return (
    <>
      <nav className="navbar navbar-dark bg-dark fixed-top">
        <div className="container">
          <a className="navbar-brand" href="/">
            TV Flix
          </a>
        </div>
      </nav>

      <div
        className="movie-banner"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
        }}
      >
        <div className="movie-content container">
          <div className="row align-items-center">
            <div className="col-md-4">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                className="poster"
                alt={movie.title}
              />
            </div>

            <div className="col-md-8">
              <h1>
                {movie.title} <span>({year})</span>
              </h1>

              <p className="movie-meta">
                {formatDate(movie.release_date)} • {genres} • {movie.runtime}{" "}
                min
              </p>

              <div class="d-flex align-items-center gap-3 my-3">
                <div class="rating-circle">
                  {Math.round(movie.vote_average * 10)}%
                </div>
                <span class="movieTitle">Avaliação dos usuários</span>
              </div>

              <h5 className="tagline">{movie.tagline}</h5>

              <h4 className="mt-4">Sinopse</h4>
              <p>{movie.overview}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
