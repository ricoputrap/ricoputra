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
    img: any;
    label: string;
    isActive: boolean;
  }

  const createMenuItemData = (to: string, img: any, label: string): Item => {
    const isActive = activePath === to;
    return { to, img, label, isActive }
  };

  const menus = useMemo(() => ([
    createMenuItemData("/", House, "Home"),
    createMenuItemData("/projects", code, "Projects"),
    createMenuItemData("/blog", book, "Blog"),
    createMenuItemData("/contact", message, "Contact"),
  ]), [activePath]);

  return (
    <Wrapper>
      {menus.map(item => (
        <NavMenuItem 
          key={item.to}
          to={item.to} 
          img={item.img} 
          label={item.label}
          isActive={activePath === item.to}
        />
      ))}
    </Wrapper>
  )
}

export default NavMenu