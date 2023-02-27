import React, { useRef } from 'react';

const NewMovie = (props) => {

    const titleRef = useRef('');
    const openingTextRef = useRef('');
    const releaseDateRef = useRef('');
  
    function submitHandler(event) {
      event.preventDefault();
  
      
      const movie = {
        title: titleRef.current.value,
        openingText: openingTextRef.current.value,
        releaseDate: releaseDateRef.current.value,
      };
  
      props.onAddMovie(movie);
    }
    return (
        
      <>
      <form onSubmit={submitHandler}>
        <div>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" ref={titleRef}/>
        </div>
        <div>
        <label htmlFor="text">Opening Text</label>
        <input type="text" id="optext" ref={openingTextRef}/>
        </div>
        <div>
        <label htmlFor="date">Release Date</label>
        <input type="number" id="date" ref={releaseDateRef}/>
        </div>
        <button>Add new Movie</button>
      </form>
      </>
    )
}
export default NewMovie;