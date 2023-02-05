import { Box } from '@chakra-ui/react';
import React from 'react'
import ProjectCard from '../../molecules/ProjectCard';
import Project from '../../molecules/ProjectCard/index.types'
import Section from '../Section';

type Props = {
  projects: Project[];
}

const Projects: React.FC<Props> = ({ projects }) => {
  return (
    <Section title='Projects'>
      <Box
        display="flex"
        justifyContent={{ base: "center", md: "flex-start" }}
        flexWrap="wrap"
        gap="20px"
      >
        { projects.map(project => (
          <ProjectCard
            key={ project.id }
            id={ project.id }
            title={ project.title }
            cover={ project.cover }
            url={ project.url }
            github={ project.github }
          />
        ))}
      </Box>
    </Section>
  )
}

export default Projects