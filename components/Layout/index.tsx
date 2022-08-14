import { Box } from '@chakra-ui/react'
import React from 'react'

type Props = {
  children: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <Box display="flex" justifyContent="center">
      <Box
        width={{ base: "660px", lg: "764px" }}
        marginTop={{ base: "64px", lg: "120px" }}
        marginBottom="80px"
      >
        { children }
      </Box> 
    </Box>
  )
}

export default Layout