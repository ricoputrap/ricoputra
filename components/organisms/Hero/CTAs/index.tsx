import React from 'react'
import ButtonLink from '../../../../core-ui/atoms/ButtonLink'
import { Container } from './index.styles'

const CTAs = () => {
  return (
    <Container>
      <ButtonLink 
        link="/contact" 
        label="contact me"
        variant="filled"
        textTransform="uppercase"
      />
      <ButtonLink 
        link="/projects" 
        label="check my latest work"
        variant="outlined"
        textTransform="uppercase"
      />
    </Container>
  )
}

export default CTAs