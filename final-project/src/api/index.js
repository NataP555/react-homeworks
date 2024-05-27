
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

  try {
    const res = await fetch(url, {
      headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
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

  try {
    const res = await fetch(url, {
      headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
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