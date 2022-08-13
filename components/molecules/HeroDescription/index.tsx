import { Box, Text } from '@chakra-ui/react'
import React from 'react'

const HeroDescription = () => {
  return (
    <Box textAlign={{ base: "center", md: "unset" }}>
      <Text maxWidth={96} fontWeight="bold">Rico Putra Pradana 🙋🏻‍♂️</Text>
      <Text maxWidth={96}>Professionally coding for <strong>2 years</strong> 🧑🏻‍💻</Text>
      <Text maxWidth={96}>
        A <strong>React Developer</strong> who can 
        coding <strong>backend</strong> on <strong>Express JS</strong> and love 
        doing <strong>system analysis</strong>.
      </Text>
    </Box>
  )
}

export default HeroDescription