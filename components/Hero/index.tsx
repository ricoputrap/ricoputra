import { Box, Button, Heading, Stack, Text } from '@chakra-ui/react'
import Image from 'next/image';
import React from 'react'
import { SiGmail, SiLinkedin, SiGithub } from "react-icons/si";

import SelfPic from "../../assets/images/self-pic.png";

const Hero: React.FC = () => {
  return (
    <Box display="flex" justifyContent="space-between">
      <Box display="flex" flexDirection="column" gap={4} maxHeight={305} justifyContent="center">
        <Heading as="h1" fontSize={40}>Hi, I&apos;m Rico</Heading>
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
       
        <Stack direction="row" gap={4}>
          <Button leftIcon={<SiGmail />} color="redGmail" outlineColor="blueLinkedIn" outlineOffset={0}>
            <Text color="blueLinkedIn">Email Me</Text>
          </Button>
          <Button leftIcon={<SiLinkedin />} color="blueLinkedIn" outlineColor="blueLinkedIn" outlineOffset={0}>
            <Text color="blueLinkedIn">LinkedIn</Text>
          </Button>
          <Button leftIcon={<SiGithub />} color="black" outlineColor="blueLinkedIn" outlineOffset={0}>
            <Text color="blueLinkedIn">Github</Text>
          </Button>
        </Stack>
      </Box>
      <Box>
        <Image src={ SelfPic } width={278} height={305} alt="self-picture" />
      </Box>
    </Box>
  )
}

export default Hero