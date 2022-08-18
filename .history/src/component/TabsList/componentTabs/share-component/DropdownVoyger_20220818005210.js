import React from "react";
import "antd/dist/antd.css";
import { UserOutlined } from "@ant-design/icons";
import { Dropdown, Menu, Space } from "antd";

const menu = (
  <Menu
    className="mt-5"
    items={[
      {
        label: (
          <label className="TravelersCounterItem_label">
            <i className="spacien">
              Adulte(s) <small>&gt; 15 ans</small>
            </i>
          </label>
        ),
        key: "0",
      },
      {
        type: "divider",
      },
      {
        label: (
          <label className="TravelersCounterItem_label">
            <UserOutlined className="mt-4" />
            <i className="spacien">
              {" "}
              Enfant(s) <small>&lt; 15 ans</small>
            </i>
          </label>
        ),
        key: "1",
      },
    ]}
  />
);

const DropdownVoyger = () => (
  <Dropdown id="#dropMenu" className="InputStyle inputInside" overlay={menu}>
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
