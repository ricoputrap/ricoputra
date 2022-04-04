import { GetStaticProps, NextPage } from 'next'
import Image from 'next/image'
import React from 'react'
import { HOST } from '../../config'
import Section from '../../core-ui/atoms/Section'
import { Heading3 } from '../../core-ui/atoms/Text/index.styles'
import Base from '../../core-ui/Base'
import { FlexContainer } from '../../core-ui/Base/index.styles'
import { Blogs } from '../../types/blog'

const Blog: NextPage<Blogs> = ({ data }) => {
  return (
    <Base title='Blogs by ricoputra'>
      <Section title='Blogs'>
        <FlexContainer>
          {data.map(({ id, title, desc, published_at, cover }) => 
            <div key={id}>
              <Image 
                src={cover} 
                width={365} 
                height={220} 
                alt="title"
              />
              <p>{published_at}</p>
              <Heading3>{title}</Heading3>
              <p>{desc}</p>
            </div>
          )}
        </FlexContainer>
      </Section>
    </Base>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const URL: string = HOST + "/api/blogs";

  const req = await fetch(URL);
  const projectsData = await req.json();
  const data = projectsData.data;

  return {
    props: { data }
  }
}

export default Blog