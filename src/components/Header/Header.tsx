import { useState } from "react"
import Hamburger from "./Hamburger"
import { useMediaQuery } from "react-responsive"
import Logo from './Logo'
import Search_Icon from "./Search_Icon"
import Heart from './Heart'
import Shopping_cart from './Shopping_cart'


interface HeaderProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

const Header: React.FC<HeaderProps> = ({ isOpen, toggleMenu }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <div className="flex justify-between items-center px-4 py-2 md:hidden">
      <div className="flex gap-4 items-center">
        {isMobile && <Hamburger isOpen={isOpen} SetIsOpen={toggleMenu} />}
        <Logo />
      </div>
      <div className="flex gap-4 items-center">
        <Heart />
        <Search_Icon />
        <Shopping_cart />
      </div>
    </div>
  );
};

export default Header;