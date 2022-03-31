import { GetStaticProps, NextPage } from 'next'
import React from 'react'
import ProjectItem from '../../components/molecules/ProjectItem'
import { HOST } from '../../config'
import Section from '../../core-ui/atoms/Section'
import Base from '../../core-ui/Base'
import { Projects } from '../../types/project'

const Projects: NextPage<Projects> = ({ data }) => {
  return (
    <Base title='Projects by ricoputra'>
      <Section title='Projects'>
        {data.map(({ id, title, cover, techStacks }) => 
          <ProjectItem
            key={id}
            id={id}
            title={title}
            cover={cover}
            techStacks={techStacks}
          />
        )}
      </Section>
    </Base>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const URL: string = HOST + "/api/projects";  

  const req = await fetch(URL);
  const projectsData = await req.json();
  const data = projectsData.data;

  return {
    props: { data }
  }
}

export default Projects