import React from 'react'
import { useNavigate } from 'react-router-dom';
import routes from '../../constants/routes';
import './Card.css';

const Card = ({ movie }) => {
  const navigate = useNavigate();

  return (
    <div className='root'>
      <img className="image" alt="image" src={movie.thumbnail}/>
      <div className="title">
       <h4>{movie.title}</h4>
       <p className="description">{movie.description}</p>
       <p className="description">rank: {movie.rank}</p>
      </div>
      <button className="btn" onClick={() => {
        navigate(`${routes.movies}/${movie.id}`);
      }}>
        details...
      </button>
      <br></br>
    </div>
  )
}

export default Card;
