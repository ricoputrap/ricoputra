import Image from 'next/image'
import React from 'react'
import { Wrapper } from './index.styles'
import Avatar from "../../../public/avatar.png"
import NavMenu from '../NavMenu'

const Navbar: React.FC = () => {
  return (
    <Wrapper>
      <Image src={Avatar} height={129} width={129} alt="avatar" />
      <NavMenu />
    </Wrapper>
  )
}

export default Navbar