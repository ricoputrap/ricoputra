import React from 'react'
import { marked } from "marked"
import { Container } from './index.styles';

interface Props {
  content: string;
}

const BlogPostContent: React.FC<Props> = ({ content }) => {
  return (
    <Container
      dangerouslySetInnerHTML={{
        __html: marked(content)
      }}
    ></Container>
  )
}

export default BlogPostContent