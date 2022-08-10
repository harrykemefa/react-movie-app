import { useState, useEffect } from 'react';
import API from '../API';

export const UseMovieFetch = movieId => {
 const [state, setState] = useState({});
 const [isLoading, setIsLoading] = useState(true);
 const [isError, setIsError] = useState(false);

useEffect(() => {
    const fetchMovieData = async () => {
        try {
          setIsLoading(true);
          setIsError(false);
    
          const movie = await API.fetchSingleMovie(movieId);
          setState({
            ...movie,
          }); 
          setIsLoading(false);
        }catch (error) {
        setIsError(true);
      }
     }
  fetchMovieData();
}, [movieId])
 return { state, isLoading, isError }
}