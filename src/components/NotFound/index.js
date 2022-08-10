import { Wrapper, Content } from './NotFound.styles'
import EmptyImg from '../../images/illustrations/illustration-empty-state.png';
const NotFound = () => {
  return (
   <Wrapper>
      <Content>
         <img src={EmptyImg} alt="empty state illustration" />
         <h3>Don't know what to search?</h3>
         <p>Here's an offer you can't refuse</p>
      </Content>
   </Wrapper>
  )
}

export default NotFound