import React from 'react'
import { Section } from '../../../core-ui/atoms/Section/index.styles'
import { Heading2, Heading3, Text } from '../../../core-ui/atoms/Text/index.styles'
import { Container, JobCard, JobsContainer } from './index.styles'

interface Props {
  jobsData: any[];
}

const Career = ({ jobsData }: Props) => {
  return (
    <Section>
      <Container>
        <Heading2>Career</Heading2>

        <JobsContainer>
          {jobsData && jobsData.map(item => (
            <JobCard key={item.id}>
              <Heading3>{item.title}</Heading3>
              <Text size={18} weight="medium" color="active">
                M+ Software
              </Text>
              <Text size={18} weight="medium" color="secondary">
                {item.start} - {item.end || "Present"}
              </Text>
            </JobCard>
          ))}
        </JobsContainer>
      </Container>
    </Section>
  )
}

export default Career