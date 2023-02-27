import React from "react";
import MovieList from "./MovieList";
import { useState, useEffect } from "react";
import Shimmer from "./ShimmerMovie";

const Movies = () => {
  const [movie, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  async function fetchMovieHandler() {
    try {
      const response = await fetch("https://swapi.dev/api/films/");
      if(!response.ok){
        throw new Error("somthing went wrong...")
      }

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
    } catch (err) {
      setError(err.message)
    }
    setIsLoading(false);
  }

  useEffect(() => {
    fetchMovieHandler();
  }, [fetchMovieHandler]);

  let content = <p>Found no movies.</p>;

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  return movie.length === 0 ? (
    <Shimmer />
  ) : (
    <div>
      <section>
        <button onClick={fetchMovieHandler}>Fetch Movies</button>
      </section>
      <section>
        <MovieList movies={movie} />
      </section>
    </div>
  );
};
export default Movies;
