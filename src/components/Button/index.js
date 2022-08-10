import React from 'react'
import { Container } from './Button.styles';
const Button = ({text, action}) => {
  return (
   <Container type='button' onClick={action}>
     { text }
   </Container>
  )
}

export default Button