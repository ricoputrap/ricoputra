import React from 'react'
import { TPost } from '../../../types/blog.types'
import { Box, Text } from '@chakra-ui/react'
import Link from 'next/link';

const Post: React.FC<TPost> = ({ frontmatter, slug }) => {
  const { title, description, date } = frontmatter;

  return (
    <Box
      width={{ md: "300px", lg: "372px" }}
      padding="5px"
      borderRadius="5px"
      boxShadow="0px 2px 4px rgba(0, 0, 0, 0.25)"
    >
      <Text
        fontSize="16px"
        fontWeight={600}
      >
        { title }
      </Text>
      <Text fontSize="12px">
        { date }
      </Text>

      <Link href={`/blog/${slug}`}>
        Read More
      </Link>
    </Box>
  )
}

export default Post 