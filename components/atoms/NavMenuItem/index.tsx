import React from 'react'
import Link from 'next/link'
import { Label, Wrapper } from './index.styles';

interface Props {
  Icon: any;
  to: string;
  isActive?: boolean;
  label: string;
}

const NavMenuItem: React.FC<Props> = ({ Icon, to, isActive = false, label }) => {
  return (
    <Link href={to} passHref>
      <Wrapper isActive={isActive}>
        <Icon className="nav-icon" />
        <Label>{label}</Label>
      </Wrapper>
    </Link>
  )
}

export default NavMenuItem