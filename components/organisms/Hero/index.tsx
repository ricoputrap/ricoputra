import { Box, Heading, Text } from '@chakra-ui/react'
import Image from 'next/image';
import React from 'react'

import SelfPic from "../../../assets/images/self-pic.png";
import CTAs from '../../molecules/CTAs';

const Hero: React.FC = () => {
  return (
    <Box
      display="flex"
      flexDirection={{ base: "column-reverse", md: "row" }}
      justifyContent={{ base: "center", md: "space-between" }}
      alignItems={{ base: "center" }}
      gap={{ base: "32px", md: "unset" }}
    >

      {/* Descriptions */}
      <Box 
        display="flex" 
        flexDirection="column"
        alignItems={{ base: "center", md: "unset" }}
        gap={4} 
        maxHeight={{ md: "305px" }} 
      >
        <Heading as="h1" fontSize={{ base: 36, lg: 40 }}>
          Hi, I&apos;m Rico
        </Heading>

        <Heading 
          as="h2" 
          fontSize={{ base: "20px", lg: "24px" }}
          color="grayText"
        >
          Software Engineer - React JS
        </Heading>

        <Box textAlign={{ base: "center", md: "unset" }}>
          <Text maxWidth={96} fontWeight="bold">Rico Putra Pradana 🙋🏻‍♂️</Text>
          <Text maxWidth={96}>Professionally coding for <strong>2 years</strong> 🧑🏻‍💻</Text>
          <Text maxWidth={96}>
            A <strong>React Developer</strong> who can 
            coding <strong>backend</strong> on <strong>Express JS</strong> and love 
            doing <strong>system analysis</strong>.
          </Text>
        </Box>
       
       {/* CTAs */}
        <CTAs />
      </Box>

      {/* Self Picture */}
      <Box>
        <Image src={ SelfPic } width={278} height={305} alt="self-picture" />
      </Box>
    </Box>
  )
}

export default Hero