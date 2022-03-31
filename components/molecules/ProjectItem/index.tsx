import Image from 'next/image'
import React from 'react'
import { Project } from '../../../types/project'

const ProjectItem: React.FC<Project> = ({ title, cover, techStacks }) => {
  return (
    <div>
      <h1>{title}</h1>
      <i>{cover}</i>
      <Image src={cover} width={332} height={200} alt="title" />
      {techStacks.map(tech => (
        <p key={tech.id}>{tech.name}</p>
      ))}
    </div>
  )
}

export default ProjectItem