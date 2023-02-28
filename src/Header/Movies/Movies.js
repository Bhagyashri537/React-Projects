import React from "react";
import MovieList from "./MovieList";
import { useState, useEffect, useCallback } from "react";
import AddMovie from "./AddMovie";


function Movies() {
  const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
  
    const fetchMoviesHandler = useCallback(async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch('https://react-project-57057-default-rtdb.firebaseio.com/movies.json');
        if (!response.ok) {
          throw new Error('Something went wrong!');
        }
  
        const data = await response.json();

        const lodedMovies = []
        for(const key in data ) {
          lodedMovies.push({
            id:key,
            title : data[key].title,
            openingText: data[key].openingText,
            releaseDate: data[key].releaseDate,
          })
        }
  
      
        setMovies(lodedMovies);
      } catch (error) {
        setError(error.message);
      }
      setIsLoading(false);
    }, []);
  
    useEffect(() => {
      fetchMoviesHandler();
    }, [fetchMoviesHandler]);
  
    async function addMovieHandler(movie) {
      const response = fetch('https://react-project-57057-default-rtdb.firebaseio.com/movies.json', {
        method: 'POST',
        body: JSON.stringify(movie),
        headers:{
          'Content-Type' : 'application/json'
        }
      })
      const data = await response.json()
      console.log(data)
    }

    async function deleteMovieHandler (id) {
      const res = fetch(`https://react-project-57057-default-rtdb.firebaseio.com/movies/${id}.json`,{
        method: 'DELETE',
        body: JSON.stringify(id),
        'Content-Type' : 'application/json'
      })
      // const data = await (await res).json()
      // console.log(data)
     

    }
  
    let content = <p>Found no movies.</p>;
  
    // if (movies.length > 0) {
    //   content = <MovieList movies={movies} />;
    // }
  
    if (error) {
      content = <p>{error}</p>;
    }
  
    if (isLoading) {
      content = <p>Loading...</p>;
    }
  
    return (
      <React.Fragment>
        <section>
          <AddMovie onAddMovie={addMovieHandler} />
          <MovieList onDeleteMovie = {deleteMovieHandler}  movies={movies}/>
        </section>
        <section>
          <button onClick={fetchMoviesHandler}>Fetch Movies</button>
        </section>
        <section>
          
        </section>
        <section>{content}</section>
      </React.Fragment>
    );
  }
export default Movies;