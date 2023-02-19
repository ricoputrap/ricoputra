import { Box, Text } from '@chakra-ui/react'
import React from 'react'

const HeroDescription = () => {
  return (
    <Box textAlign={{ base: "center", md: "unset" }}>
      <Text maxWidth={96} fontWeight="bold">Rico Putra Pradana 🙋🏻‍♂️</Text>
      <Text maxWidth={96}>Professionally coding for <strong>2 years</strong> 🧑🏻‍💻</Text>
      <Text maxWidth={96}>
        I love doing <strong>System Analysis & Design</strong> and  develop the
        system in <strong>TypeScript</strong> using <strong>React & Express JS</strong>.
      </Text>
    </Box>
  )
}

export default HeroDescription