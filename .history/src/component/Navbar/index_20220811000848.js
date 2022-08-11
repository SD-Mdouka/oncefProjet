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
                <div class="icon">
                  <IconsMenu />
                </div>
                <span class="title">Menu</span>
              </div>
              <div class="encfGroup">
                <a href="/">
                  <div class="icon">
                    <IconMenulogoOncf />
                  </div>
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
              <div class="sc-jKVCRD eiRSLv">
                <a class="sc-kaNhvL jNZnFh">
                  <div class="icon">
                    <IconLastVENTE />
                  </div>
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
