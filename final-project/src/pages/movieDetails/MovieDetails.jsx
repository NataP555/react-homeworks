import React, { useEffect, useState } from 'react'
import { useParams, useMatch } from 'react-router-dom';
import { getMovie } from '../../api';
import { useNavigate } from 'react-router-dom';
import './MovieDetails.css'

const MovieDetails = () => {
  const { id } = useParams();
  const [ movie, setMovie ] = useState({});
 
  const navigate = useNavigate();

  useEffect(() => {
    async function getData () {
      const movie = await getMovie(id);
      setMovie(movie);
    }

    getData();
  }, []);

  return (
    <div className="details">
        <h2>{movie.title}</h2>
        <img  className="img" alt="image" src={movie.image}/>
        <br/>
        <span>{movie.genre} {movie.year}</span>
        <p>{movie.description}</p>
        <span className="rating">IBM Rating {movie.rating}</span>
        <br/>
        <button className="btn" onClick={() => navigate(-1)}>go back</button>
    </div>
  )
}

export default MovieDetails;
