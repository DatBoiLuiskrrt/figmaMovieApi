import React, { useState, useEffect } from "react";
import axios from "axios";
import TrendingCard from "./TrendingCard";

function Trending() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=7ef6152a444c38c3338ad6ca46aa51c2&language=en-US&page=1`
      )
      .then((response) => {
        setMovies(response.data.results);
        console.log(movies);
      })
      .catch((error) => {
        console.log("The data was not returned", error);
      });
  }, []);
  return (
    <>
      {movies.map((film) => {
        // return <h1>{film.title}</h1>;
        return <TrendingCard film={film} key={film.id} />;
      })}
    </>
  );
}

export default Trending;
