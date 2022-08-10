// Imports from config
import { IMG_BASE_URL, BACKDROP_WIDTH } from '../config';

//Hooks

import { UseFetchMovies } from '../hooks/UseFetchMovies';

// Import Components
import ImgBanner from './ImgBanner';
import SearchBar from './SearchBar';
import MovieGrid from './MovieGrid';
import MovieThumbnail from './MovieThumbnail';
import Preloader from './PreLoader';
import NotFound from './NotFound';
import Button from './Button';

// Import IMG
import NoImage from '../images/illustrations/no-cover.jpeg';

const Home = () => {
 // destructure custom Hook
 const { state, isLoading, setSearchValue, searchValue, setIsLoadMore } = UseFetchMovies();

 //Get Random Movie for Banner 
 const rand = Math.floor(Math.random() * 20);
 const movieBanner = {
   title: state.results[rand]?.original_title,
   id: state.results[rand]?.id,
   backdropPath: state.results[rand]?.backdrop_path,
 }
  return (
   <>
      <SearchBar setSearchValue={setSearchValue} /> 
   {
      !searchValue && state.results[rand] ? 
        <ImgBanner 
       img={`${IMG_BASE_URL}${BACKDROP_WIDTH}${movieBanner.backdropPath}`} 
       title={movieBanner.title}
       movieId={movieBanner.id}
       /> : null
   }
   
      <MovieGrid label={state.results.length === 0 ? '' : !searchValue ? "Trending Movies" : "Search Results"}>
         {state.results.map(movie => (
             <MovieThumbnail 
             key={movie.id}
             movieImg={movie.poster_path ? `${IMG_BASE_URL}${BACKDROP_WIDTH}${movie.poster_path}` : NoImage}
             click
             movieId={movie.id}
             title={movie.title}
             />
        
         ))}
      </MovieGrid>
     {isLoading && <Preloader />} 
     {state.results.length === 0 && !isLoading ? <NotFound /> : ''}
    {state.results.length !== 0 && <Button text="Load More" action={() => setIsLoadMore(true)} />} 
   </>
  )
}

export default Home;