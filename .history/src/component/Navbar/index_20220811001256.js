import React from "react";
import {
  IconsMenu,
  IconMenulogoOncf,
  IconsAPRESVENTE,
  IconLastVENTE,
} from "./Icon";
import "./style.css";
const NavBar = () => {
  return (
    <div id="Menu" class="vente-navbar-container">
      <div className="menuList">
        <div className="app-header-container">
          <div className="IconMenu">
            <div class="iconFirst">
              <div class="groupIcon">
                <IconsMenu />
                <span class="title">Menu</span>
              </div>
              <div class="encfGroup">
                <a href="/">
                  <IconMenulogoOncf />
                </a>
              </div>
            </div>
            <div class="iconLeft">
              <div class="UserIcon">
                <div class="user_login_icon">
                  <a class="user">
                    <div class="icon">
                      <IconsAPRESVENTE />
                    </div>
                  </a>
                </div>
              </div>
              <div class="lastChild">
                <a class="panierShop">
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
