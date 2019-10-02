import React from "react";
import FilmRow from "./FilmRow";
const FilmListing = props => {
  const allFilms = props.filmList.map((film, i) => {
    return <FilmRow key={film.id} films={film} />;
  });
  return (
    <div className="film-list">
      <h1 className="section-title">FILMS</h1>
      {allFilms}
    </div>
  );
};

export default FilmListing;
