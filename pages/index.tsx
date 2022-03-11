import type { NextPage } from 'next'
import Head from 'next/head'
import NavMenu from '../components/molecules/NavMenu'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>ricoputra.space</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/avatar.png" />
      </Head>

      <main>
        <NavMenu />
        Home
        
      </main>

      <footer>
      </footer>
    </div>
  )
}

export default Home
