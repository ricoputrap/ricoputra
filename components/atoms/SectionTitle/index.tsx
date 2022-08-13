import { Heading } from '@chakra-ui/react';
import React from 'react'

type Props = {
  label: string;
}

const SectionTitle: React.FC<Props> = ({ label }) => {
  return (
    <Heading
      as="h2"
      fontSize="32px"
      backgroundColor="blueSecondary"
      width="fit-content"
      paddingX="8px"
      marginBottom="12px"
    >
      { label }
    </Heading>
  )
}

export default SectionTitle