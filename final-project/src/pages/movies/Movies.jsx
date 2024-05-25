import React, { useEffect, useState } from 'react'
import { getMovies } from '../../api';
import Card from './Card';
import { usePagination } from '../../hooks/usePagination';
import Pagination from '../../components/pagination/Pagination';


const Movies = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [ movies, setMovies ] = useState([]);

  const { data, page, pages, setPage } = usePagination(movies);

  useEffect(() => {
    async function getData () {
      getMovies()
        .then((data) => {
          setMovies(data);
        })
        .catch(() => {
          setErrorMessage("Failed");
        })
        .finally(() => {
          setIsLoading(false);
        });
    }

    getData();
  }, []);

  return (
    <div>
      <h1>Movies</h1>
      {data.map(movie => 
        <Card key={movie.id} movie={movie}/>
      )}
      <Pagination page={page} pages={pages} setPage={setPage}/>
      {errorMessage && (
        <div style={{ color: "red" }}>
          <span> {errorMessage} </span>
        </div>
      )}
      {isLoading && (
        <div style={{ display: "flex" }}>
          <span>Loading..</span>
        </div>
      )}
    </div>
  )
}

export default Movies
