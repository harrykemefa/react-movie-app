import { Link } from 'react-router-dom'
import Logo from '../../images/logos/logo.svg';
import { Wrapper, Content, LogoImg } from './Header.styles';

const Header = () => {
  return (
   <Wrapper>
       <Content>
      <Link to='/'>  <LogoImg  src={Logo} /></Link>   
       </Content>
  </Wrapper>
  )
}

export default Header;