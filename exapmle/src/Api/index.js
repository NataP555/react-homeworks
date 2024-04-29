export async function getData(limit=10) {
    const url = `https://dummyjson.com/products?limit=${limit}`;
    try {
      const res = await fetch(url);
      if (res.ok) {
        const result = await res.json();

        return result;
      }
    } catch (error) {
      throw new Error(error.message);
    }
  }