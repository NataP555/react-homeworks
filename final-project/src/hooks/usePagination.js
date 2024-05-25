import {useState, useEffect} from 'react'

export function usePagination(data,limit=10) {

  const [page, setPage] = useState(0);
  const pageCount =Math.ceil(data.length / limit)

  const pages = Array.from({ length: pageCount }, (_, i) => i);
   
  return{
    data: data.slice(page*limit, page*limit + limit),
    page,
    pages,
    setPage,
  };
}