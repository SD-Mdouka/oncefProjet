import React, { useState } from "react";
import {
  IconsMenu,
  IconMenulogoOncf,
  IconsAPRESVENTE,
  IconLastVENTE,
} from "./Icon";
import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
} from "icons";
import { Button, Menu } from "antd";
import { GetItem } from "../../helpers/GetItem";
import "./style.css";

const items = [
  GetItem("Option 1", "1", <PieChartOutlined />),
  GetItem("Option 2", "2", <DesktopOutlined />),
  GetItem("Option 3", "3", <ContainerOutlined />),
  GetItem("Navigation One", "sub1", <MailOutlined />, [
    GetItem("Option 5", "5"),
    GetItem("Option 6", "6"),
    GetItem("Option 7", "7"),
    GetItem("Option 8", "8"),
  ]),
  GetItem("Navigation Two", "sub2", <AppstoreOutlined />, [
    GetItem("Option 9", "9"),
    GetItem("Option 10", "10"),
    GetItem("Submenu", "sub3", null, [
      GetItem("Option 11", "11"),
      GetItem("Option 12", "12"),
    ]),
  ]),
];

const NavBar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  return (
    <div id="Menu" className="vente-navbar-container">
      <div className="menuList">
        <div className="app-header-container">
          <div className="IconMenu">
            <div className="iconFirst">
              <Menu
                defaultSelectedKeys={["1"]}
                defaultOpenKeys={["sub1"]}
                mode="inline"
                theme="dark"
                inlineCollapsed={collapsed}
                items={items}
              />
              <div className="groupIcon">
                <Button
                  type="primary"
                  onClick={toggleCollapsed}
                  style={{
                    top: 30,
                    marginLeft: 300,
                  }}
                >
                  {collapsed ? <MenuUnfoldOutlined /> : <IconsMenu />}
                </Button>
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
