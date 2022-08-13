import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Layout from '../components/Layout'

const theme = extendTheme({
  fonts: {
    heading: `'Fira Code', monospace`,
    body: `'Fira Code', monospace`
  },
  colors: {
    grayText: "#787774"
  }
})

const Home: NextPage = () => {
  return (
    <ChakraProvider theme={theme}>
      <Layout />
    </ChakraProvider>
  )
}

export default Home
