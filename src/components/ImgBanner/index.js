import { Link } from 'react-router-dom';
import { Wrapper, Content, Info } from './ImgBanner.styles';

 
const ImgBanner = ({img, title, movieId}) => {
  return (
  <Wrapper image={img}>
      <Content>
          <Info>
              <h1>{title}</h1>
              <Link to={`/${movieId}`}>
              <button>Stream Movie</button>
              </Link>
         </Info>
     </Content>
  </Wrapper>
  )
}
export default ImgBanner;