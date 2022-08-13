import { Box } from '@chakra-ui/react'
import React from 'react'
import Hero from '../organisms/Hero'

const Layout: React.FC = () => {
  return (
    <Box display="flex" justifyContent="center">
      <Box
        width={{ base: "660px", lg: "764px" }}
        marginTop={{ base: "64px", lg: "120px" }}
        marginBottom="80px"
      >
        <Hero />
      </Box> 
    </Box>
  )
}

export default Layout