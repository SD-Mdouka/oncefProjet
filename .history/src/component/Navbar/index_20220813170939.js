import React, { useState, useEffect } from "react";
import {
  IconsMenu,
  IconMenulogoOncf,
  IconsAPRESVENTE,
  IconLastVENTE,
} from "./Icon";
import MenuWrap from "./MenuWrap";
import "./style.css";

useEffect(() => {
  const menuWrap = document.querySelector(".bm-menu-wrap");
  if (menuWrap) {
    menuWrap.setAttribute("aria-hidden", true);
  }
}, []);

const NavBar = () => {
  return (
    <div id="Menu" className="vente-navbar-container">
      <div className="menuList">
        <MenuWrap />
        <div className="app-header-container">
          <div className="IconMenu">
            <div className="iconFirst">
              <div className="groupIcon">
                <span className="title">Menu</span>
              </div>

              <div className="encfGroup">
                <a href="/">
                  <IconMenulogoOncf />
                </a>
              </div>
            </div>
            <div className="iconLeft">
              <div className="UserIcon">
                <div className="user_login_icon">
                  <a className="user">
                    <div className="icon">
                      <IconsAPRESVENTE />
                    </div>
                  </a>
                </div>
              </div>
              <div className="lastChild">
                <a className="panierShop">
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
