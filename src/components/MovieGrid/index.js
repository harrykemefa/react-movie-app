import { Wrapper, Content } from './MovieGrid.styles'

const MovieGrid = ({label, children}) => {
  return (
    <>
    <Wrapper>
        <h3>{label}</h3>
        <Content>
            {children}
        </Content>
    </Wrapper>
    </>
  )
}

export default MovieGrid;