import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Wrapper } from './index.styles';

interface Props {
  img: any;
  to: string;
  isActive?: boolean;
  label: string;
}

const NavMenuItem: React.FC<Props> = ({ img, to, isActive = false, label }) => {
  return (
    <Link href={to}>
      <Wrapper isActive={isActive}>
        <Image src={img} width={20} height={20} className="nav-icon" />
        <p>{label}</p>
      </Wrapper>
    </Link>
  )
}

export default NavMenuItem