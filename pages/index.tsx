import type { GetStaticProps, NextPage } from 'next'
import Layout from '../components/Layout'
import Blogs from '../components/organisms/Blogs';
import Hero from '../components/organisms/Hero';
import TechStack from '../components/organisms/TechStack';
import Base from '../core-ui/Base'
import blogs from "../data/blogs.json";

type Props = {
  blogs: any[]
}

const Home: NextPage<Props> = ({ blogs }) => {
  console.log(blogs)
  return (
    <Base>
      <Layout>
        <Hero />
        <TechStack />
        <Blogs data={ blogs } />
      </Layout>
    </Base>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      blogs: blogs.data
    }
  }
}

export default Home
