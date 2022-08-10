import { Link } from 'react-router-dom';
import {Img, ImgWrapper, Overlay} from './MovieThumbnail.styles'
import HeartIconGrey from '../../images/icons/icon-heart-white.svg';

const MovieThumbnail = ({ movieImg, movieId, click, title }) => {
  return (
    <div>
      {
        click ? 
        <Link to={`/${movieId}`}>
         <ImgWrapper>
        <Overlay> 
            <img src={HeartIconGrey} alt="Heart Icon" />
            <h3>{title}</h3>
       </Overlay>
        <Img src={movieImg} alt="movie-thumbnail" />
    </ImgWrapper>
        </Link>
       
        : 
        <ImgWrapper>
        <Overlay> 
            <img src={HeartIconGrey} alt="Heart Icon" />
            <h3>{title}</h3>
       </Overlay>
        <Img src={movieImg} alt="movie-thumbnail" />
    </ImgWrapper>
      }
   
    
    
    </div>
  )
}

export default MovieThumbnail