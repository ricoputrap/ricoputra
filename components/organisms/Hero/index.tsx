import React from 'react'
import { Heading1, Heading2 } from '../../../core-ui/atoms/Text/index.styles'
import { Container, ImageWrapper, Name } from './index.styles'
import HeroImage from "../../../public/images/HeroImage.png"
import Image from 'next/image'
import TechStacks from './TechStacks'
import CTAs from './CTAs'
import { Section } from '../../../core-ui/atoms/Section/index.styles'


const Hero: React.FC = () => {
  return (
    <Section>
      <Container>

        {/* TEXTS */}
        <div>
          <Heading1>
            HI, MY NAME IS
            <Name className='color-active bg-color-border'>RICO PUTRA</Name>
          </Heading1>

          <Heading2>
            AND I&apos;M A
            <span className="color-active"> FRONTEND DEVELOPER </span>
            SPECIALIZED IN 
            <span className="color-active"> REACT </span>
          </Heading2>

          <TechStacks />

          <div>
            <CTAs />
          </div>
        </div>

        {/* IMAGE */}
        <ImageWrapper>
          <Image src={HeroImage} width={304} height={403} alt="hero" />
        </ImageWrapper>
        
      </Container>
    </Section>
  )
}

export default Hero