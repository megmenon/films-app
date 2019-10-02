import React, { Component } from "react";
import "./App.css";
import FilmListing from "./FilmListing";
import FilmDetails from "./FilmDetails";
import TMDB from "../TMDB";

class App extends Component {
  render() {
    const films = TMDB.films;
    return (
      <div className="film-library">
        <FilmListing filmList={films} />
        <FilmDetails listOfFilms={films} />
      </div>
    );
  }
}

export default App;
