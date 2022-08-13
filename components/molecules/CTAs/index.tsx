import React from 'react'
import { Stack } from '@chakra-ui/react'
import { SiGmail, SiLinkedin, SiGithub } from "react-icons/si";

import LinkButton from '../../atoms/LinkButton'

const CTAs: React.FC = () => {
  return (
    <Stack
      direction="row"
      gap={4}
      wrap={{ base: "wrap", md: "unset" }}
      justifyContent={{ base: "center", md: "unset" }}
    >
      <LinkButton
        Icon={SiGmail}
        iconColor="redGmail"
        textColor="blueLinkedIn"
        label="Email Me"
        url="mailto:pradanaricoputra@gmail.com"
      />

      <LinkButton
        Icon={SiLinkedin}
        iconColor="blueLinkedIn"
        textColor="blueLinkedIn"
        label="LinkedIn"
        url="http://linkedin.com/in/ricoputrap/"
      />

      <LinkButton
        Icon={SiGithub}
        iconColor="black"
        textColor="blueLinkedIn"
        label="GitHub"
        url="https://github.com/ricoputrap"
      />
    </Stack>
  )
}

export default CTAs