import { Flex } from '@chakra-ui/react'
import React from 'react'
import Hero from '../Hero'
import { Container } from './index.styles'

const Layout: React.FC = () => {
  return (
    <Flex justifyContent="center">
      <Container>
        <Hero />
      </Container>
    </Flex>
  )
}

export default Layout