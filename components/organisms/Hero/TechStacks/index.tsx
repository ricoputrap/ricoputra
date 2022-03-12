import React from 'react'

import { Wrapper } from './index.styles'
import ReactLogo from "../../../../assets/logos/React.svg"
import TypescriptLogo from "../../../../assets/logos/typescript.svg"
import NextLogo from "../../../../assets/logos/nextjs.svg"
import StyledComponentsLogo from "../../../../assets/logos/styled-components.svg"
import FigmaLogo from "../../../../assets/logos/figma_logo.svg"
import DockerLogo from "../../../../assets/logos/vertical-logo-monochromatic.svg";

const TechStacks = () => {
  return (
    <Wrapper>
      <ReactLogo />
      <TypescriptLogo />
      <NextLogo />
      <StyledComponentsLogo />
      <FigmaLogo />
      <DockerLogo />
    </Wrapper>
  )
}

export default TechStacks