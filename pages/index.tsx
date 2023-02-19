import type { GetStaticProps, NextPage } from 'next'
import fs from "fs"
import matter from "gray-matter"
import Layout from '../components/Layout'
// import Blogs from '../components/organisms/Blogs';
import Hero from '../components/organisms/Hero';
import TechStack from '../components/organisms/TechStack';
import Base from '../core-ui/Base'
// import blogs from "../data/blogs.json";
import path from 'path';
import { TPost } from '../types/blog.types';
import Post from '../components/molecules/Post';
import { Flex } from '@chakra-ui/react';
import Section from '../components/organisms/Section';

type Props = {
  // blogs: any[]
  posts: TPost[];
}

const Home: NextPage<Props> = ({ posts }) => {

  return (
    <Base>
      <Layout>
        <Hero />
        <TechStack />

        <Section title="Blogs">
          <Flex
            wrap="wrap" gap="20px"
            justifyContent={{ base: "center", md: "flex-start" }}
          >
            {posts.map(post => (
              <Post
                key={ post.slug }
                frontmatter={ post.frontmatter }
                slug={ post.slug }
              />
            ))}
          </Flex>
        </Section>

      </Layout>
    </Base>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  // get files from '/posts' directory
  const files = fs.readdirSync(path.join('posts/published'));

  // get sluf and frontmatter from posts
  const posts = files.map(filename => {
    const slug = filename.replace(".md", "");
    const markdownWithMeta = fs.readFileSync(
      path.join("posts/published", filename),
      "utf-8"
    );

    const { data: frontmatter } = matter(markdownWithMeta);

    return {
      slug,
      frontmatter
    }
  })

  return {
    props: {
      // blogs: blogs.data,
      posts
    }
  }
}

export default Home
