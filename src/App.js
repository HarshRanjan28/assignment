import React, { useEffect, useState } from "react";
import Homepage from "./components/Homepage";
import Description from "./components/Description";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
const API_URL = "https://api.tvmaze.com/search/shows?q=all";

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(async () => {
    const moviesresp = await fetch(API_URL);
    const moviesR = await moviesresp.json();
    setMovies(moviesR);
  }, []);
  return (
    <Router>
      <Routes>
        <Route
          path="/Description"
          element={<Description movies={movies} />}
        ></Route>
        <Route path="/" element={<Homepage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
