import { NextPage } from 'next'
import React from 'react'
import { Section } from '../../../core-ui/atoms/Section/index.styles'
import { Heading2, Heading3, Text } from '../../../core-ui/atoms/Text/index.styles'
import { Container, JobCard, JobsContainer } from './index.styles'

const Career: NextPage = () => {
  const data = [
    { 
      id: 0,
      title: "Senior Web Developer",
      company: "M+ Software",
      start: "Jan 2022",
      end: ""
    },
    { 
      id: 1,
      title: "Junior Web Developer",
      company: "M+ Software",
      start: "Dec 2020",
      end: "Jan 2022"
    },
    { 
      id: 2,
      title: "Freelance Frontend Web Developer",
      company: "Universitas Indonesia",
      start: "Sep 2020",
      end: "Jan 2021"
    },
    { 
      id: 3,
      title: "Freelance Project Manager",
      company: "Universitas Indonesia",
      start: "Nov 2019",
      end: "Mar 2020"
    },
  ]
  return (
    <Section>
      <Container>
        <Heading2>Career</Heading2>

        <JobsContainer>
          {data && data.map(item => (
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