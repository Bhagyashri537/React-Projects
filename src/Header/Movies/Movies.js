import React from "react";
import MovieList from "./MovieList";
import { useState, useEffect } from "react";

const Movies = () => {
  const [movie, setMovies] = useState([]);
  async function fetchMovieHandler() {
    const response = await fetch('https://swapi.dev/api/films/');
      
      const data = await response.json();

      const transformedMovies = data.results.map((movieData) => {
        return {
          id: movieData.episode_id,
          title: movieData.title,
          openingText: movieData.opening_crawl,
          releaseDate: movieData.release_date,
        };
      });
      setMovies(transformedMovies);
    } 

  useEffect(() => {
    fetchMovieHandler()
  }, [fetchMovieHandler]);

  
  
  return (
    <div>
      <section>
        <button onClick={fetchMovieHandler}>btn</button>
      </section>
      <section>
      <MovieList movies={movie}/>
      </section>
    </div>
  );
};
export default Movies;
