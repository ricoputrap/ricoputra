import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import Image from 'next/image';
import React from 'react'

import SelfPic from "../../assets/images/self-pic.png";

const Hero: React.FC = () => {
  return (
    <Box display="flex" justifyContent="space-between">
      <Box display="flex" flexDirection="column" gap={4} maxHeight={305} justifyContent="center">
        <Heading as="h1" fontSize={40}>Hi, I'm Rico</Heading>
        <Heading as="h2" fontSize={24} color="grayText">Software Engineer - React JS</Heading>
        <Box>
          <Text maxWidth={96} fontWeight="bold">Rico Putra Pradana 🙋🏻‍♂️</Text>
          <Text maxWidth={96}>Professionally coding for <strong>2 years</strong> 🧑🏻‍💻</Text>
          <Text maxWidth={96}>
            A <strong>React Developer</strong> who can 
            coding <strong>backend</strong> on <strong>Express JS</strong> and love 
            doing <strong>system analysis</strong>.
          </Text>
        </Box>
      </Box>
      <Box>
        <Image src={ SelfPic } width={278} height={305} alt="self-picture" />
      </Box>
    </Box>
  )
}

export default Hero