import React from 'react'
import TechStackRow from '../../molecules/TechStackRow'
import Section from '../Section'

const stacks = {
  frontend: ["React JS", "Next JS", "Chakra UI"],
  backend: ["Node JS", "Express JS"],
  language: ["JavaScript", "TypeScript"],
  project: ["Notion", "Jira", "Figma"]
}

const TechStack: React.FC = () => {
  return (
    <Section title="Tech Stack">
      <TechStackRow
        title="LANGUAGE"
        stacks={ stacks.language }
      />
      <TechStackRow
        title="FRONTEND"
        stacks={ stacks.frontend }
      />
      <TechStackRow
        title="BACKEND"
        stacks={ stacks.backend }
      />
      <TechStackRow
        title="PROJECT"
        stacks={ stacks.project }
      />
    </Section>
  )
}

export default TechStack