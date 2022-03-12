import type { NextPage } from 'next'
import Head from 'next/head'
import { Heading1 } from '../components/atoms/Text/index.styles'
import Hero from '../components/organisms/Hero'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>ricoputra.space</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/avatar.png" />
      </Head>

      <main>
        <Hero />
        
      </main>

      <footer>
      </footer>
    </div>
  )
}

export default Home
