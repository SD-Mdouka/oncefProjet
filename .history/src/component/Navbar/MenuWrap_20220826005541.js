import React from "react";
import { slide as Menu } from "react-burger-menu";
import MenuItem from "./MenuItem";

const toggleMenu = ({ isOpen }) => {
  const menuWrap = document.querySelector(".bm-menu-wrap");
  isOpen
    ? menuWrap.setAttribute("aria-hidden", false)
    : menuWrap.setAttribute("aria-hidden", true);
};

const BurgerMenu = () => {
  return (
    <Menu id="MenuContent" noOverlay onStateChange={toggleMenu}>
      <MenuItem />
    </Menu>
  );
};

export default BurgerMenu;
