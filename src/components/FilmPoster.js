import React from "react";

const FilmPoster = props => {
  const posterUrl = `https://image.tmdb.org/t/p/w780/${
    props.films.poster_path
  }`;
  return <img src={posterUrl} alt="" />;
};

export default FilmPoster;
