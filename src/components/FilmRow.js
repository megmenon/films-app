import React from "react";
import FilmPoster from "./FilmPoster";

const FilmRow = props => {
  console.log(props.films.release_date);
  const release_date = new Date(`${props.films.release_date}`);
  return (
    <div className="film-row">
      <FilmPoster films={props.films} />
      <div className="film-summary">
        <h1>{props.films.title}</h1>
        <p>{release_date.getFullYear()}</p>
      </div>
    </div>
  );
};

export default FilmRow;
