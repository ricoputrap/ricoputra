import React from 'react'
import Section from '../../../core-ui/atoms/Section'
import { Heading3, Text } from '../../../core-ui/atoms/Text/index.styles'
import { JobCard, JobsContainer } from './index.styles'

interface Props {
  jobsData: any[];
}

const Career = ({ jobsData }: Props) => {
  return (
    <Section title='Career'>
        <JobsContainer>
          {jobsData && jobsData.map(item => (
            <JobCard key={item.id}>
              <Heading3>{item.title}</Heading3>
              <Text size={18} weight="medium" color="active">
                {item.company}
              </Text>
              <Text size={18} weight="medium" color="secondary">
                {item.start} - {item.end || "Present"}
              </Text>
            </JobCard>
          ))}
        </JobsContainer>
    </Section>
  )
}

export default Career