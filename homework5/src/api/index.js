export async function getUniversitiesByCountry(country) {
  const url = `http://universities.hipolabs.com/search?country=${country}`;
  try {
    const res = await fetch(url);
    if (res.ok) {
      const data = await res.json();

      return data;
    }
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function getUniversityByDomain(domain) {
    const url = `http://universities.hipolabs.com/search?domain=${domain}`;
    try {
      const res = await fetch(url);
      if (res.ok) {
        const data = await res.json();
  
        return data[0];
      }
    } catch (error) {
      throw new Error(error.message);
    }
  }
