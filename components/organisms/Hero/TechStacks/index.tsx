import React from 'react'
import Image from 'next/image'

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
      <Image src={ReactLogo} width={40} height={40} />
      <Image src={TypescriptLogo} width={40} height={40} />
      <Image src={NextLogo} width={40} height={40} />
      <Image src={StyledComponentsLogo} width={40} height={40} />
      <Image src={FigmaLogo} width={40} height={40} />
      <Image src={DockerLogo} width={40} height={40} />
    </Wrapper>
  )
}

export default TechStacks