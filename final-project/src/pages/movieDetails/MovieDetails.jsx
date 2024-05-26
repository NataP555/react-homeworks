import React, { useEffect, useState } from 'react'
import { useParams, useMatch } from 'react-router-dom';
import { getMovie } from '../../api';
import { useNavigate } from 'react-router-dom';
import './MovieDetails.css'

const MovieDetails = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();
  const [ movie, setMovie ] = useState();
 
  const navigate = useNavigate();

  useEffect(() => {
    async function getData () {
      setIsLoading(true);
      getMovie(id)
      .then(setMovie)
      .catch(() => {
        setErrorMessage("Failed");
      })
      .finally(() => {
        setIsLoading(false);
      });
    }

    getData();
  }, []);

  if (!movie || isLoading) {
    return (
      <div style={{ display: "flex" }}>
        <span>Loading..</span>
      </div>
    );
  }

  return (
    <div className="details">
        <h2>{movie.title}</h2>
        <img  className="img" alt="image" src={movie.image}/>
        <br/>
        <span>{movie.genre} {movie.year}</span>
        <p>{movie.description}</p>
        <span className="rank">Movie rank {movie.rank}</span>
        <span className="rating">IBM Rating {movie.rating}</span>
        <br/>
        <p>Director: {movie?.director[0]} </p>
        <iframe
          width="560"
          height="315"
          src={movie.trailer_embed_link}
        />
        <br/>
    
        <button className="btn" onClick={() => navigate(-1)}>go back</button>
        {errorMessage && (
          <div style={{ color: "red" }}>
            <span> {errorMessage} </span>
          </div>
        )}
    </div>
  )
}

export default MovieDetails;
