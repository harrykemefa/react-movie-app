import { useState, useEffect } from 'react';
import API from '../API';

const defaultState = {
    page: 0,
    results: [],
    totalPages: 0,
    totalResults: 0,
}

export const UseFetchMovies = () => {
    // States
const [state, setState] = useState(defaultState);
const [isLoading, setIsLoading] = useState(false);
const [isError, setIsError] = useState(false);
const [searchValue, setSearchValue] = useState('');
const [isLoadMore, setIsLoadMore] = useState(false);

const fetchMovies = async (page, searchValue = '') => {
    try {
        setIsError(false);
        setIsLoading(true);

        const movies = await API.fetchPopularMovies(page, searchValue);
        setState(prev => ({
            ...movies,
            results:
            page > 1 ? [...prev.results, ...movies.results] : [...movies.results]
        }));
        setIsLoading(false);
    } catch (error) {
        setIsError(true);
        setIsLoading(false);
        
    }
}

useEffect(() => {
  setState(defaultState);
 fetchMovies(1, searchValue);
}, [searchValue]);

useEffect(() => {
    if(!isLoadMore) return;
    fetchMovies(state.page + 1, searchValue);
    setIsLoadMore(false)
}, [isLoadMore, searchValue, state.page])
return { isError, isLoading, state, setSearchValue, searchValue, setIsLoadMore };

}