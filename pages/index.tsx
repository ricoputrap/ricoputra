import type { GetStaticProps, NextPage } from 'next'
import fs from "fs"
import matter from "gray-matter"
import Layout from '../components/Layout'
import Blogs from '../components/organisms/Blogs';
import Hero from '../components/organisms/Hero';
import TechStack from '../components/organisms/TechStack';
import Base from '../core-ui/Base'
import blogs from "../data/blogs.json";
import path from 'path';
import { TPost } from '../types/blog.types';
import Post from '../components/molecules/Post';
import { Flex } from '@chakra-ui/react';

type Props = {
  blogs: any[]
  posts: TPost[];
}

const Home: NextPage<Props> = ({ blogs, posts }) => {

  return (
    <Base>
      <Layout>
        <Hero />
        <TechStack />
        <Blogs data={ blogs } />

        <Flex wrap="wrap" gap="20px" justifyContent="space-between">
          {posts.map(post => (
            <Post
              key={ post.slug }
              frontmatter={ post.frontmatter }
              slug={ post.slug }
            />
          ))}
        </Flex>

      </Layout>
    </Base>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  // get files from '/posts' directory
  const files = fs.readdirSync(path.join('posts'));

  // get sluf and frontmatter from posts
  const posts = files.map(filename => {
    const slug = filename.replace(".md", "");
    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
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
      blogs: blogs.data,
      posts
    }
  }
}

export default Home
