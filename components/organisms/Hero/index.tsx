import React from 'react'
import { Heading1 } from '../../atoms/Text/index.styles'
import { Name } from './index.styles'

const Hero: React.FC = () => {
  return (
    <div>
      <Heading1>
        HI, MY NAME IS
        <Name className='color-active bg-color-border'>RICO PUTRA</Name>
      </Heading1>
    </div>
  )
}

export default Hero