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
        <div class="sc-ipZHIp bAYLup">
          <div class="sc-iGrrsa fHPvbR">
            <div class="sc-dEoRIm cGPwcs">
              <div class="icon">
                <IconsMenu />
              </div>
              <div class="sc-jtggT iOclnP">Menu</div>
            </div>
            <div class="sc-bmyXtO cEeJlL">
              <a href="/">
                <div class="icon">
                  <IconMenulogoOncf />
                </div>
              </a>
            </div>
          </div>
          <div class="sc-ebFjAB rlbbb">
            <div class="sc-iBEsjs kpJmle">
              <div class="HeaderMenu_nav--right_item_link dark">
                <div class="sc-jKVCRD eiRSLv user_login_icon">
                  <a class="sc-kaNhvL jNZnFh user">
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
