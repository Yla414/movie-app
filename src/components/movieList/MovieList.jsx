import React from 'react';
import './movielist.css';

const MovieList = (props) => {
  return (
    <>
      {props.movies.map((movie, index) => (
         <div className='flickbase__movieList-container'>
            <div className='flickbase__movieList-container__image'>
               <img src={movie.Poster} alt="poster" />
            </div>
            <h2>{movie.Title}</h2>
            <p>{movie.Year}</p>
         </div>
      ))}
    </>
  )
}

export default MovieList;
