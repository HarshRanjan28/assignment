import React, { useEffect, useState } from "react";

const API_URL = "https://api.tvmaze.com/search/shows?q=all";

function Homepage() {
  const [movies, setMovies] = useState([]);

  const handleSubmit = (name) => {
    const filterMovie = movies.filter((currmovie) => {
      return currmovie.show.name === name;
    });
    console.log(filterMovie[0].show.image.medium);
    console.log(filterMovie[0].show.summary);
  };

  useEffect(async () => {
    const moviesresp = await fetch(API_URL);
    const moviesR = await moviesresp.json();
    setMovies(moviesR);
  }, []);

  return (
    <>
      <div className="movie-container">
        {movies.map((movie) => {
          return (
            <div
              className="movie"
              onClick={() => handleSubmit(movie.show.name)}
            >
              <img src={movie.show.image.medium} alt="" />
              <div className="movie-info">
                <h3> {movie.show.name} </h3>
                <span> {movie.show.rating.average} </span>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Homepage;
