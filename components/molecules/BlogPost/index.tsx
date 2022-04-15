import Image from 'next/image'
import React from 'react'
import { Text } from '../../../core-ui/atoms/Text/index.styles'
import { Card } from '../../../core-ui/Base/index.styles'
import { BlogPost as Post } from '../../../types/blog'
import { Content, Details } from './index.styles'

const BlogPost: React.FC<Post> = ({ title, desc, published_at, cover }) => {
  return (
    <Card>
      <Content>
        <Image
          className='blog-cover'
          src={cover}
          width={365}
          height={220}
          alt="title"
        />

        <Details>
          {/* published at */}
          <Text color="secondary" weight="medium" size={14}>
            {published_at}
          </Text>

          {/* title */}
          <Text color="primary" size={24}>
            {title}
          </Text>

          {/* desc */}
          <Text color="secondary" weight="regular" size={18}>
            {desc}
          </Text>
        </Details>
      </Content>
    </Card>
  )
}

export default BlogPost