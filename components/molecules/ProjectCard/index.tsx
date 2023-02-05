import { Box, IconButton, Text } from '@chakra-ui/react'
import React from 'react'
import Card from '../Card'
import Project from './index.types'
import { SiGithub } from "react-icons/si";
import { BiLink } from "react-icons/bi"

const ProjectCard: React.FC<Project> = ({ id, cover, title, url, github }) => {
  return (
    <Card coverImg="/images/projects/project-nextjs-ts-pagination.png">
      <Text fontWeight={600}>{ title }</Text>
      <Text>
        An SPA displaying departments data table using a simple server-side pagination.
      </Text>

      <Box display="flex" flexWrap="wrap" gap="8px">
        
      </Box>

      <Box display="flex" flexWrap="wrap" gap="20px">
        <a
          href={ url }
          target="_blank"
          rel="noopener noreferrer"
        >
          <BiLink size="32px" />
        </a>
        <a
          href={ github }
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiGithub size="32px" />
        </a>
      </Box>
    </Card>
  )
}

export default ProjectCard