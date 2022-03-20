import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import BaseTheme from "../styles/index.styles";
import Navbar from '../components/molecules/Navbar';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={BaseTheme}>
      <div style={{
        display: "flex"
      }}>
        <Navbar />
        <div>
          <Component {...pageProps} />
        </div>
      </div>
    </ThemeProvider>
  )
}

export default MyApp
