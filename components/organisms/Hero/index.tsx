import React from 'react'
import { Heading1, Heading2 } from '../../atoms/Text/index.styles'
import { Container, ImageWrapper, Name } from './index.styles'
import HeroImage from "../../../public/images/HeroImage.png"
import Image from 'next/image'
import TechStacks from './TechStacks'



const Hero: React.FC = () => {
  return (
    <Container>
      <div>
        <Heading1>
          HI, MY NAME IS
          <Name className='color-active bg-color-border'>RICO PUTRA</Name>
        </Heading1>

        <Heading2>
          AND I'M A
          <span className="color-active"> FRONTEND DEVELOPER </span>
          SPECIALIZED IN 
          <span className="color-active"> REACT </span>
        </Heading2>

        <TechStacks />
      </div>
      <ImageWrapper>
        <Image src={HeroImage} width={304} height={403} />
      </ImageWrapper>
    </Container>
  )
}

export default Hero