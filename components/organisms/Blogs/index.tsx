import React from 'react'
import Card from '../../molecules/Card'
import Section from '../Section'
import BlogCover from "../../../assets/images/blog__cover.png";
import { Box, Text } from '@chakra-ui/react';

type Props = {
  data: any[];
}

const Blogs: React.FC<Props> = ({ data }) => {
  return (
    <Section title="Blogs">
      <Box
        display="flex"
        justifyContent={{ base: "center", md: "flex-start" }}
        flexWrap="wrap"
        gap="20px"
      >
        {data.map(blog => (
          <Card key={ blog.id } coverImg={ BlogCover } url={ blog.url }>
            <Text fontWeight={600}>{ blog.title }</Text>

            <Box display="flex" flexWrap="wrap" gap="8px">
              {blog.categories.map((category: any) => (
                <Box
                  key={category.id}
                  paddingX="4px"
                  borderRadius="4px"
                  backgroundColor={category.bgColor}
                >
                  <Text fontSize="12px">{ category.label }</Text>
                </Box>
              ))}
            </Box>
          </Card>
        ))}
      </Box>
    </Section>
  )
}

export default Blogs