import { Box, Heading, Text } from '@chakra-ui/react'
import Image from 'next/image';
import React from 'react'

import SelfPic from "../../../assets/images/self-pic.png";
import CTAs from '../../molecules/CTAs';
import HeroDescription from '../../molecules/HeroDescription';

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
        {/* Title */}
        <Heading as="h1" fontSize={{ base: 36, lg: 40 }}>
          Hi, I&apos;m Rico
        </Heading>

        {/* Subtitle */}
        <Heading 
          as="h2" 
          fontSize={{ base: "20px", lg: "24px" }}
          color="grayText"
        >
          Software Engineer - React JS
        </Heading>

        <HeroDescription />
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