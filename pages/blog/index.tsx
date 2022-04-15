import { GetStaticProps, NextPage } from 'next'
import Image from 'next/image'
import React from 'react'
import BlogPost from '../../components/molecules/BlogPost'
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
            <BlogPost
              key={id}
              id={id}
              title={title}
              desc={desc}
              published_at={published_at}
              cover={cover}
            />
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