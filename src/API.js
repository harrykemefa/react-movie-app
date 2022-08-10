import {
    API_URL,
    API_KEY,
    POPULAR_MOVIES_URL,
    SEARCH_BASE_URL,
  } from './config';

  const API = {
    fetchPopularMovies: async (page, searchValue) => {
      const endpoint =  searchValue ? `${SEARCH_BASE_URL}${searchValue}&page=${page}` :
      `${POPULAR_MOVIES_URL}&page=${page}`;
      return await (await fetch(endpoint)).json();
    },
    fetchSingleMovie: async movieId => {
      const endpoint = `${API_URL}/movie/${movieId}?api_key=${API_KEY}`;
      return await (await fetch(endpoint)).json();
    },

  };

  export default API;