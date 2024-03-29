import '../styles/globals.css'
import type { AppProps } from 'next/app'

import { ChakraProvider, extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  fonts: {
    heading: `'Fira Code', monospace`,
    body: `'Fira Code', monospace`
  },
  colors: {
    grayText: "#787774",
    grayBg: "#E0E0E0",
    blueLinkedIn: "#0077B7",
    blueSecondary: "#DAEBF1",
    redGmail: "#F14336"
  }
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
