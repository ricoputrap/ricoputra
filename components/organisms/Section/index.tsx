import { Stack } from '@chakra-ui/react'
import React from 'react'
import SectionTitle from '../../atoms/SectionTitle'

type Props = {
  title: string;
  children: React.ReactNode
}

const Section: React.FC<Props> = ({ title, children }) => {
  return (
    <Stack marginTop="60px" alignItems={{ base: "center", md: "unset" }}>
      <SectionTitle label={ title } />
      { children }
    </Stack>
  )
}

export default Section