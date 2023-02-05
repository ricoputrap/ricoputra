import { GetStaticPaths, GetStaticProps } from "next"
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked"
import { TFrontmatter } from "../../types/blog.types";
import { Box, Text } from "@chakra-ui/react";

interface Props {
  frontmatter: TFrontmatter;
  slug: string;
  content: string;
}

const PostPage: React.FC<Props> = ({
  frontmatter: { title, date, description },
  slug,
  content
}) => {

  return (
    <Box>
      <Text
        fontSize="32px"
        fontWeight={600}
      >
        { title }
      </Text>

      <Text>
        Posted on { date }
      </Text>

      <div
        dangerouslySetInnerHTML={{
          __html: marked(content)
        }}
      ></div>
    </Box>
  )
}

type TParams = {
  slug: string;
}

type TPath = {
  params: TParams;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const files = fs.readdirSync(path.join("posts"));

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
    path.join("posts", slug + ".md"),
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