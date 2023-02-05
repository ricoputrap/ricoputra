import type { GetStaticProps, NextPage } from 'next'
import Layout from '../components/Layout'
import Project from '../components/molecules/ProjectCard/index.types';
import Blogs from '../components/organisms/Blogs';
import Hero from '../components/organisms/Hero';
import Projects from '../components/organisms/Projects';
import TechStack from '../components/organisms/TechStack';
import Base from '../core-ui/Base'
import blogs from "../data/blogs.json";
import projects from "../data/projects.json"

type Props = {
  blogs: any[];
  projects: Project[];
}

const Home: NextPage<Props> = ({ blogs, projects }) => {
  console.log(blogs)
  return (
    <Base>
      <Layout>
        <Hero />
        <TechStack />
        <Blogs data={ blogs } />
        <Projects projects={ projects } />
      </Layout>
    </Base>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      blogs: blogs.data,
      projects: projects.data
    }
  }
}

export default Home
