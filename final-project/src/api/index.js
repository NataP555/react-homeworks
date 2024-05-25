import { data } from './testData';

export async function authHandler(action, user){
  const resp = await fetch(`https://academyofdigitalindustriesbackend.onrender.com/api/v1/auth/${action}`, {
    method: "POST",
    body: JSON.stringify(user),
    headers:{ "Content-type": "application/json"},
  });

  const result = await resp.json();

  if (resp.ok){
    return result;
  }

  throw new Error(result.msg);
}

export async function getMovies() {
  const url = `https://imdb-top-100-movies.p.rapidapi.com/`;

  return data;

  try {
    const res = await fetch(url, {
      headers: {
        'X-RapidAPI-Key': '4ed09f667bmsh26d5f3a081b6a7bp1964abjsn8584a1f2b8a9',
        'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com',
      },
    });
    if (res.ok) {
      const data = await res.json();

      return data;
    }
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function getMovie(id) {
  const url = `https://imdb-top-100-movies.p.rapidapi.com/${id}`;

  return data.find(movie => movie.id === id);

  try {
    const res = await fetch(url, {
      headers: {
        'X-RapidAPI-Key': '4ed09f667bmsh26d5f3a081b6a7bp1964abjsn8584a1f2b8a9',
        'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com',
      },
    });

    if (res.ok) {
      const data = await res.json();

      return data;
    }
  } catch (error) {
    throw new Error(error.message);
  }
}