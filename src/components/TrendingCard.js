import React from "react";

function TrendingCard({ film }) {
  return (
    <div className="card-container">
      <h2>{film.title}</h2>
      <img
        src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${film.backdrop_path}`}
        alt="film poster"
      />
      <p>{film.overview}</p>
    </div>
  );
}

export default TrendingCard;
