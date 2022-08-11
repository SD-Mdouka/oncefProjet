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
    <div id="Menu" className="vente-navbar-container">
      <div className="menuList">
        <div className="app-header-container">
          <div className="IconMenu">
            <div className="iconFirst">
              <div className="groupIcon">
                <IconsMenu />
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
