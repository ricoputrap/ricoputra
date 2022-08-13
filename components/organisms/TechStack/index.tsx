import React from 'react'
import TechStackRow from '../../molecules/TechStackRow'
import Section from '../Section'

const stacks = {
  frontend: ["React JS", "Next JS", "JavaScript"],
  backend: ["Node JS", "Express JS", "TypeScript"],
  project: ["Notion", "Jira", "Confluence", "Figma", "Invision"]
}

const TechStack: React.FC = () => {
  return (
    <Section title="Tech Stack">
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