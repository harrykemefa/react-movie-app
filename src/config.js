// Config for TMDB API
// Read the docs https://developers.themoviedb.org/
/// Had to directly add my api key for easy project setup
// const API_KEY = 'process.env.REACT_APP_API_KEY';
const API_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '065e24a41a1daecc57e94f64e77c1043';

const POPULAR_MOVIES_URL = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US`;
const SEARCH_BASE_URL = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=`;

const IMG_BASE_URL = 'http://image.tmdb.org/t/p/';
const BACKDROP_WIDTH = 'w1280';
const BANNER_WIDTH = 'w780';


export {
    API_URL,
    API_KEY,
    POPULAR_MOVIES_URL,
    IMG_BASE_URL,
    BACKDROP_WIDTH,
    BANNER_WIDTH,
    SEARCH_BASE_URL,
}; 