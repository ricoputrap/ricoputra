import React from 'react'
import { TPost } from '../../../types/blog.types'
import { Box, Stack, Text } from '@chakra-ui/react'
import Image from 'next/image';
import Link from 'next/link';

const Post: React.FC<TPost> = ({ frontmatter, slug }) => {
  const { title, description, date, cover, tags } = frontmatter;

  return (
    <Link href={`/blog/${slug}`} passHref>
      <Box
        width={{ md: "300px", lg: "372px" }}
        borderRadius="5px"
        boxShadow="0px 2px 4px rgba(0, 0, 0, 0.25)"
      >
        <Box height={{ md: "162px", lg: "200px" }} overflow="hidden" borderTopRadius="5px">
          <Image
            src={`/${cover}`}
            alt="card-cover"
            width={372}
            height={200}
          />
        </Box>

        <Stack padding="12px" rowGap="8px">
          <Text fontSize="16px">
            { title }
          </Text>
          <Text fontSize="12px" margin="0 !important">
            { date }
          </Text>
        </Stack>
      </Box>
    </Link>
  )
}

export default Post 