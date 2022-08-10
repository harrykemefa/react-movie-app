import { Link, useParams } from 'react-router-dom'; 
import { UseMovieFetch }  from '../../hooks/UseMovieFetch';
import { useState, useEffect } from 'react';
import { Wrapper, Content, Left, Right, Label, Label2, LabelContainer, InfoContainer, Info, RLabel } from './MovieDetails.styles'
import { IMG_BASE_URL, BACKDROP_WIDTH } from '../../config';
import Preloader from '../PreLoader';
import NoImage from '../../images/illustrations/no-cover.jpeg';
import HeartIconGrey from '../../images/icons/icon-heart-white.svg';
import HeartIconFull from '../../images/icons/icon-heart-full.svg';
import IconArrow from '../../images/icons/icon-arrow-grey.svg';
import ImdbLogo from '../../images/logos/logo-imdb.svg';
import Tomatoe from '../../images/logos/logo-rotten-tomatoes.svg';

const MovieDetails = () => {
const { movieId } = useParams();
 const { state: movie, isLoading } = UseMovieFetch(movieId);
 const [favorites, setFavorites] = useState(localStorage.getItem('favorites') ? JSON.parse(localStorage.getItem('favorites')) : []);
 let checkFavorite = favorites.find(id => id === movieId);
 const [isIncluded, setIncluded] = useState(checkFavorite ? true : false)
 
const addToFavorite = movieId => {
    const data = favorites.includes(movieId);
     if(!data) {
        favorites.push(movieId);
        localStorage.setItem('favorites', JSON.stringify(favorites));
        setIncluded(true);
     }
  };

  const deleteFavorite = id => {
    const data = favorites.filter(item => item !== id);
    localStorage.setItem('favorites', JSON.stringify(data));
    setFavorites(data);
    setIncluded(false);
  };


 
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  
  }, [favorites, movieId]);
  return (
    <Wrapper>
        <Content> 
            <Left>
                <Link to="/">
               <img src={IconArrow} alt="back arrow icon" />
                </Link>
              <RLabel>
                <li> {movie.runtime}min .</li>
                <li> {movie.release_date?.split('-')[0]} . </li>
                <li>  <span>R</span> </li>
             
                </RLabel>
                 <h1>{movie.title}</h1>

                 <LabelContainer>
                 <Label>
                    <div>
                    <img src={ImdbLogo} alt="imdb logo" /> 
                    </div>
                  
                    <span>{movie.vote_average}/10</span>
                 </Label>
                 <Label>
                    <div>
                    <img src={Tomatoe} alt="tomatoe icon" /> 
                    </div>
                    <span>96%</span>
                 </Label>
                {
                !isIncluded ?  
                  <Label onClick={() => addToFavorite(movieId)}>
                    <img src={HeartIconGrey} alt="heart icon" /> 
                    <span>Add to favourites</span>
                 </Label> :
                   <Label2 onClick={() => deleteFavorite(movieId)}>
                   <img src={HeartIconFull} alt="heart icon"  /> 
                   <span>Added</span>
                </Label2>

                }
              
                 </LabelContainer>
                
                 <span>Plot</span>
                 <p>{movie.overview}</p>

                <InfoContainer>
                    <Info>
                    <ul>
                        <li> <span>Genre</span></li>
                        {
                            movie.genres?.map(genre => (
                                <li key={genre.id}>{genre.name}</li>
                            ))
                        }

                    </ul>
                    </Info>

                    <Info>
                    <ul>
                        <li> <span>Production Studio</span></li>
                        {
                            movie.production_companies?.map(company => (
                                <li key={company.id}>{company.name}</li>
                            ))
                        }

                    </ul>
                    </Info>

                    <Info>
                    <ul>
                        <li> <span>Production Countries</span></li>
                        {
                            movie.production_countries?.map(country => (
                                <li key={country.iso_3166_1}>{country.name}</li>
                            ))
                        }

                    </ul>
                    </Info>
                  
                </InfoContainer>
           </Left>
        <Right>
            <img src={movie.poster_path ? `${IMG_BASE_URL}${BACKDROP_WIDTH}${movie.poster_path}` : NoImage} alt="movie thumbnail" /> </Right>
            {isLoading && <Preloader />}
        </Content>
    </Wrapper>
   
  )
}

export default MovieDetails