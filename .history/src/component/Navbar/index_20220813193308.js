import React, { useEffect, useState } from "react";
import {
  IconsMenu,
  IconMenulogoOncf,
  IconsAPRESVENTE,
  IconLastVENTE,
} from "./Icon";
import MenuWrap from "./MenuWrap";
import "./style.css";

const NavBar = () => {
  useEffect(() => {
    const menuWrap = document.querySelector(".bm-menu-wrap");
    if (menuWrap) {
      menuWrap.setAttribute("aria-hidden", true);
    }
  }, []);
  const [contentVisible, setContentVisible] = useState(0);
  const toggleContentVisible = () => {
    setContentVisible((prevState) => !prevState);
  };
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
              <div className="UserIcon">
                <div className="user_login_icon">
                  <a className="user">
                    <div className="icon">
                      <div>
                        <div>
                          {/* when button clicked, toggle the contentVisible value in our state*/}
                          <button type="button" onClick={toggleContentVisible}>
                            <IconsAPRESVENTE />
                          </button>
                        </div>
                        {/* For the below Div hide / show */}
                        <div
                          className={`accordion_content ${
                            contentVisible ? "show_content" : ""
                          }`}
                        >
                          p
                        </div>
                      </div>
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
