import React, { useEffect } from "react";
import {
  IconsMenu,
  IconMenulogoOncf,
  IconsAPRESVENTE,
  IconLastVENTE,
} from "./Icon";
import SignCard from "../SignCard";
import MenuWrap from "./MenuWrap";
import "./style.css";
import MenuItem from "./MenuItem";

const NavBar = () => {
  useEffect(() => {
    const menuWrap = document.querySelector(".bm-menu-wrap");
    if (menuWrap) {
      menuWrap.setAttribute("aria-hidden", true);
    }
  }, []);
  return (
    <div id="Menu" className="vente-navbar-container">
      <div className="menuList">
        <MenuWrap />
        <MenuItem />
        <div className="app-header-container">
          <div className="IconMenu">
            <a href="/">
              <IconMenulogoOncf />
            </a>
            <div className="iconLeft">
              <div className="lastChild">
                <p className="panierShop">
                  <span className="user">
                    <SignCard />
                  </span>
                  <IconLastVENTE />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
