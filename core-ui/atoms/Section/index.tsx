import React from 'react'
import { Heading2 } from '../Text/index.styles';
import { StyledSection } from './index.styles';

interface Props {
  title?: string;
  children: React.ReactNode
}

const Section: React.FC<Props> = ({ title = "", children }) => {
  return (
    <StyledSection>
      {title && (
        <Heading2>{ title }</Heading2>
      )}
      { children }
    </StyledSection>
  )
}

export default Section