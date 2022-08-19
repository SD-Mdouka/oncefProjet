import React, { useState, useEffect } from "react";
import "antd/dist/antd.css";
import { UserOutlined } from "@ant-design/icons";
import { Dropdown, Menu, Space } from "antd";

const DropdownVoyger = () => {
  const [counter, setCounter] = useState(0);

  //increase counter

  const increase = () => {
    setCounter((count) => count + 1);
  };

  //decrease counter
  const decrease = () => {
    setCounter((count) => count - 1);
  };

  //function couter
  const couters = () => {
    return (
      <div className="text-[#4a20aa] inline-block p-4 relative">
        <button className="bg-[#f4f1f7] rounded-[50%] w-5" onClick={decrease}>
          -
        </button>
        <span>{counter}</span>
        <button className="bg-[#f4f1f7] rounded-[50%] w-5" onClick={increase}>
          +
        </button>
      </div>
    );
  };

  const menu = (
    <Menu
      id="dropMenu"
      onClick={(e) => e.preventDefault()}
      className="w-[130%] !absolute !left-2"
      items={[
        {
          label: (
            <>
              <div className="TravelersCounterItem_label inline-block w-full">
                <span className="spacien">
                  Adulte (s) <small>&gt; 15 ans</small>
                </span>
                {couters() + 1}
              </div>
            </>
          ),
          key: "0",
        },
        {
          type: "divider",
        },
        {
          label: (
            <>
              <div className="TravelersCounterItem_label inline-block w-full">
                <span className="spacien">
                  Enfant (s) <small>&lt; 15 ans</small>
                </span>
                <span className="-ml-6">{couters()}</span>
              </div>
            </>
          ),
          icon: <UserOutlined className=" !text-[#4a20aa]" />,
          key: "0",
        },
      ]}
    />
  );

  return (
    <Dropdown
      id="dropMenu"
      className="InputStyle inputInside"
      trigger={["click"]}
      overlay={menu}
    >
      <a>
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
};

export default DropdownVoyger;
