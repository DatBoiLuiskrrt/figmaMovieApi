/* eslint-disable jsx-a11y/alt-text */
import React from "react";

function TrendingCard({ film }) {
  return (
    <div className="container">
      <img
        src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${film.backdrop_path}`}
        alt="film poster"
      />
      <h2>{film.title}</h2>
      <p>{film.overview}</p>
      {console.log(film)}
    </div>
  );
}

export default TrendingCard;
