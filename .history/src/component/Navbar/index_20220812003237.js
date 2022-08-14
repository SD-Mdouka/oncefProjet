import React, { useState } from "react";
import {
  IconsMenu,
  IconMenulogoOncf,
  IconsAPRESVENTE,
  IconLastVENTE,
} from "./Icon";
// import {
//   AppstoreOutlined,
//   ContainerOutlined,
//   DesktopOutlined,
//   MailOutlined,
//   MenuFoldOutlined,
//   MenuUnfoldOutlined,
//   PieChartOutlined,
// } from "@ant-design/icons";
// import { Button, Menu } from "antd";
import { slide as Menu } from "react-burger-menu";
// import { getItem } from "../../helpers/GetItem";
import "./style.css";

// const items = [
//   getItem("Option 1", "1", <PieChartOutlined />),
//   getItem("Option 2", "2", <DesktopOutlined />),
//   getItem("Option 3", "3", <ContainerOutlined />),
//   getItem("Navigation One", "sub1", <MailOutlined />, [
//     getItem("Option 5", "5"),
//     getItem("Option 6", "6"),
//     getItem("Option 7", "7"),
//     getItem("Option 8", "8"),
//   ]),
//   getItem("Navigation Two", "sub2", <AppstoreOutlined />, [
//     getItem("Option 9", "9"),
//     getItem("Option 10", "10"),
//     getItem("Submenu", "sub3", null, [
//       getItem("Option 11", "11"),
//       getItem("Option 12", "12"),
//     ]),
//   ]),
// ];

const NavBar = () => {
  const showSettings = (e) => {
    e.preventDefault();
  };
  // const [collapsed, setCollapsed] = useState(false);

  // const toggleCollapsed = () => {
  //   setCollapsed(!collapsed);
  // };
  return (
    <div id="Menu" className="vente-navbar-container">
      <div className="menuList">
        {/* <Menu
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          mode="inline"
          theme="dark"
          inlineCollapsed={collapsed}
          items={items}
        /> */}
        <Menu className="bg-[#333] z-2">
          <a id="home" className="menu-item" href="/">
            Home
          </a>
          <a id="about" className="menu-item" href="/about">
            About
          </a>
          <a id="contact" className="menu-item" href="/contact">
            Contact
          </a>
          <a onClick={showSettings} className="menu-item--small" href="">
            Settings
          </a>
        </Menu>
        <div className="app-header-container">
          <div className="IconMenu">
            <div className="iconFirst">
              <div className="groupIcon">
                <span className="title">
                  {/* <Button
                    type="primary"
                    onClick={toggleCollapsed}
                    style={{
                      top: 30,
                      marginLeft: 300,
                    }}
                  >
                    {collapsed ? <MenuUnfoldOutlined /> : <IconsMenu />}
                  </Button> */}
                  Menu
                </span>
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
