import { GetStaticPaths, GetStaticProps, NextPage } from "next"
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { TFrontmatter } from "../../types/blog.types";
import { Box, Text } from "@chakra-ui/react";
import Base from "../../core-ui/Base";
import Layout from "../../components/Layout";
import BlogPostContent from "../../core-ui/BlogPostContent";

interface Props {
  frontmatter: TFrontmatter;
  slug: string;
  content: string;
}

const PostPage: NextPage<Props> = ({
  frontmatter: { title, date, description },
  slug,
  content
}) => {

  return (
    <Base>
      <Layout>
        <Box paddingX="20px">
          <Text
            fontSize="40px"
            fontWeight={600}
          >
            { title }
          </Text>

          <Text fontSize="12px">
            Posted on { date }
          </Text>

          <Box marginTop="20px">
            <BlogPostContent content={ content } />
          </Box>
        </Box>
      </Layout>
    </Base>
  )
}

type TParams = {
  slug: string;
}

type TPath = {
  params: TParams;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const files = fs.readdirSync(path.join("posts/published"));

  const paths: TPath[] = files.map(filename => ({
    params: {
      slug: filename.replace(".md", "")
    }
  }))

  return {
    paths,
    fallback: false // return 404 if the slug not exists
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const slug = context.params?.slug;
  const markdownWithMeta = fs.readFileSync(
    path.join("posts/published", slug + ".md"),
    "utf-8"
  );

  const { data: frontmatter, content } = matter(markdownWithMeta);

  return {
    props: {
      frontmatter,
      slug,
      content
    }
  }
}

export default PostPage;