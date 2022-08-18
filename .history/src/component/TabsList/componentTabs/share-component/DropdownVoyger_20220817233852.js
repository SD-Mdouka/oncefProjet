import React from "react";
import "antd/dist/antd.css";
import { DownOutlined, UserOutlined } from "@ant-design/icons";
import { Dropdown, Menu, Space } from "antd";

const menu = (
  <Menu
    id="#dropMenu"
    className="mt-5 p-9 border"
    items={[
      {
        label: (
          <label className="TravelersCounterItem_label">
            <i
              aria-label="icon: umaxKidsser"
              className="anticon anticon-umaxKidsser"
            ></i>
            Adulte(s) <small>&gt; 15 ans</small>
          </label>
        ),
        key: "0",
      },
      {
        type: "divider",
      },
      {
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.aliyun.com"
          >
            2nd menu item
          </a>
        ),
        key: "1",
      },
    ]}
  />
);

const DropdownVoyger = () => (
  <Dropdown className="InputStyle inputInside" overlay={menu}>
    <a onClick={(e) => e.preventDefault()}>
      <span
        style={{
          borderColor: "#bda7ef",
          color: "#4a20aa",
          lineHeight: "2px",
          letterSpacing: "1px",
        }}
      >
        <Space>
          <UserOutlined />1 Adulte
        </Space>
      </span>
    </a>
  </Dropdown>
);

export default DropdownVoyger;
