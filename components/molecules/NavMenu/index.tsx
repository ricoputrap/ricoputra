import React, { useMemo } from 'react'
import House from "../../../public/icons/House.svg"
import code from "../../../public/icons/code.svg"
import book from "../../../public/icons/book.svg"
import message from "../../../public/icons/message.svg"
import NavMenuItem from '../../atoms/NavMenuItem'
import { useRouter } from 'next/router'

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
    return {
      to,
      img,
      label,
      isActive
    }
  };

  const menus = useMemo(() => ([
    createMenuItemData("/", House, "Home"),
    createMenuItemData("/projects", code, "Projects"),
    createMenuItemData("/blog", book, "Blog"),
    createMenuItemData("/contact", message, "Contact"),
  ]), []);

  return (
    <div>
      {menus.map(item => (
        <NavMenuItem 
          key={item.to}
          to={item.to} 
          img={item.img} 
          isActive={item.isActive}
        >
          {item.label}
        </NavMenuItem>
      ))}
    </div>
  )
}

export default NavMenu