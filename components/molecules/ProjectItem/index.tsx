import Image from 'next/image'
import React from 'react'
import { Text } from '../../../core-ui/atoms/Text/index.styles'
import { Card } from '../../../core-ui/Base/index.styles'
import { Project } from '../../../types/project'
import { Content, TechChip, TechStacks, Title } from './index.styles'

const ProjectItem: React.FC<Project> = ({ title, cover, techStacks }) => {
  return (
    <Card>
      <Content>
        <Image 
          className='project-cover'
          src={cover} 
          width={365} 
          height={220} 
          alt="title" 
        />
        <Title>{title}</Title>
        
        <TechStacks>
          {techStacks.map(tech => (
            <TechChip key={tech.id}>
              <Image src={tech.icon} width={14} height={14} alt="tech" />
              <Text color="primary" size={12} weight="regular">
                {tech.name}
              </Text>
            </TechChip>
          ))}
        </TechStacks>
      </Content>
    </Card>
  )
}

export default ProjectItem