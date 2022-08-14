import React from 'react'
import Card from '../../molecules/Card'
import Section from '../Section'
import BlogCover from "../../../assets/images/blog__cover.png";
import { Box, Text } from '@chakra-ui/react';

const data = [
  {
    id: 0,
    title: "Paginasi - Bagian I (Pengenalan)",
    categories: [
      { id: 0, label: "Software Engineering", bgColor: "blueSecondary" },
      { id: 1, label: "Bahasa Indonesia", bgColor: "grayBg" }
    ],
    cover: BlogCover,
    url: "https://ricoputrap.notion.site/Paginasi-Bagian-I-Pengenalan-c3c7c29588bd4dab8f2a48618bb9215f"
  },
  {
    id: 1,
    title: "Paginasi - Bagian I (Pengenalan)",
    categories: [
      { id: 0, label: "Software Engineering", bgColor: "blueSecondary" },
      { id: 1, label: "Bahasa Indonesia", bgColor: "grayBg" }
    ],
    cover: BlogCover,
    url: "https://ricoputrap.notion.site/Paginasi-Bagian-I-Pengenalan-c3c7c29588bd4dab8f2a48618bb9215f"
  },
  {
    id: 2,
    title: "Paginasi - Bagian I (Pengenalan)",
    categories: [
      { id: 0, label: "Software Engineering", bgColor: "blueSecondary" },
      { id: 1, label: "Bahasa Indonesia", bgColor: "grayBg" }
    ],
    cover: BlogCover,
    url: "https://ricoputrap.notion.site/Paginasi-Bagian-I-Pengenalan-c3c7c29588bd4dab8f2a48618bb9215f"
  },
  {
    id: 3,
    title: "Paginasi - Bagian I (Pengenalan)",
    categories: [
      { id: 0, label: "Software Engineering", bgColor: "blueSecondary" },
      { id: 1, label: "Bahasa Indonesia", bgColor: "grayBg" }
    ],
    cover: BlogCover,
    url: "https://ricoputrap.notion.site/Paginasi-Bagian-I-Pengenalan-c3c7c29588bd4dab8f2a48618bb9215f"
  },
]

const Blogs: React.FC = () => {
  return (
    <Section title="Blogs">
      <Box
        display="flex"
        justifyContent="flex-start"
        flexWrap="wrap"
        gap="20px"
      >
        {data.map(blog => (
          <Card key={ blog.id } coverImg={ blog.cover } url={ blog.url }>
            <Text>{ blog.title }</Text>

            <Box display="flex" flexWrap="wrap" gap="8px">
              {blog.categories.map(category => (
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