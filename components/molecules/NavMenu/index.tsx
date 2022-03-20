import React, { useMemo } from 'react'
import House from "../../../public/icons/House.svg"
import code from "../../../public/icons/code.svg"
import book from "../../../public/icons/book.svg"
import message from "../../../public/icons/message.svg"
import NavMenuItem from '../../atoms/NavMenuItem'
import { useRouter } from 'next/router'
import { Wrapper } from './index.styles'

const NavMenu: React.FC = () => {
  const router = useRouter();
  const activePath = router.asPath;

  interface Item {
    to: string;
    Icon: any;
    label: string;
    isActive: boolean;
  }

  const createMenuItemData = (to: string, Icon: any, label: string): Item => {
    const isActive = activePath === to;
    return { to, Icon, label, isActive }
  };

  const menus = useMemo(() => ([
    createMenuItemData("/", House, "Home"),
    createMenuItemData("/projects", code, "Projects"),
    createMenuItemData("/blog", book, "Blog"),
    createMenuItemData("/contact", message, "Contact"),
  ]), [activePath, createMenuItemData]);

  return (
    <Wrapper>
      {menus.map(item => (
        <NavMenuItem 
          key={item.to}
          to={item.to} 
          Icon={item.Icon} 
          label={item.label}
          isActive={activePath === item.to}
        />
      ))}
    </Wrapper>
  )
}

export default NavMenu