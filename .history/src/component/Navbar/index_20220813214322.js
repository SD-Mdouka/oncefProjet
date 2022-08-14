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
        <div className="app-header-container">
          <div className="IconMenu">
            <a href="/">
              <IconMenulogoOncf />
            </a>
            <div className="iconLeft">
              <div className="lastChild">
                <a className="panierShop">
                  <div className="user_login_icon">
                    <a className="user">
                      <SignCard />
                    </a>
                  </div>
                  <IconLastVENTE />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
