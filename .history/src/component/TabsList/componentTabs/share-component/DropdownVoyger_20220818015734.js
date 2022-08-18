import React from "react";
import "antd/dist/antd.css";
import { UserOutlined } from "@ant-design/icons";
import { Dropdown, Menu, Space } from "antd";

const menu = (
  <Menu
    className="w-[130%] !absolute !left-2"
    items={[
      {
        label: (
          <label className="TravelersCounterItem_label">
            <i className="spacien">
              Adulte(s) <small>&gt; 15 ans</small>
            </i>
            <div>
              <div class="TravelersCounterItem_switch"><div class="ant-input-number"><div class="ant-input-number-handler-wrap"><span unselectable="unselectable" role="button" aria-label="Increase Value" aria-disabled="false" class="ant-input-number-handler ant-input-number-handler-up "><i aria-label="icon: up" class="anticon anticon-up ant-input-number-handler-up-inner"><svg viewBox="64 64 896 896" focusable="false" class="" data-icon="up" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M890.5 755.3L537.9 269.2c-12.8-17.6-39-17.6-51.7 0L133.5 755.3A8 8 0 0 0 140 768h75c5.1 0 9.9-2.5 12.9-6.6L512 369.8l284.1 391.6c3 4.1 7.8 6.6 12.9 6.6h75c6.5 0 10.3-7.4 6.5-12.7z"></path></svg></i></span><span unselectable="unselectable" role="button" aria-label="Decrease Value" aria-disabled="false" class="ant-input-number-handler ant-input-number-handler-down "><i aria-label="icon: down" class="anticon anticon-down ant-input-number-handler-down-inner"><svg viewBox="64 64 896 896" focusable="false" class="" data-icon="down" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"></path></svg></i></span></div><div class="ant-input-number-input-wrap"><input role="spinbutton" aria-valuemin="1" aria-valuemax="6" aria-valuenow="2" class="ant-input-number-input" autocomplete="off" max="6" min="1" step="1" name="traveler-count-adulte" inputmode="readOnly" value="2"></div></div></div>
            </div>
            {/* <button>b</button> */}
          </label>
        ),
        key: "0",
      },
      {
        type: "divider",
      },
      {
        label: (
          <label className="TravelersCounterItem_label flex flex-row">
            <i className="spacien">
              Enfant(s) <small>&lt; 15 ans</small>
            </i>
          </label>
        ),
        icon: <UserOutlined className="mr-2" />,
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
