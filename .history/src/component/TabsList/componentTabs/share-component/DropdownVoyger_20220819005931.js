import React, { useState, useEffect, useRef } from "react";
import "antd/dist/antd.css";
import { UserOutlined } from "@ant-design/icons";
import { Dropdown, Menu, Space } from "antd";

const DropdownVoyger = () => {
  const [counter, setCounter] = useState(0);
  const [User, setUser] = useState("");

  const btnDecRef = useRef(null);
  const btnIncRef = useRef(null);
  // Counter floor when the length is 6 Adulte or 4 enfant
  useEffect(() => {
    if (counter >= 6 && User === "Adulte") {
      // btnDecRef.current.disabled = false;
      // btnIncRef.current.disabled = false;
      console.log("good");
    }
  }, [counter]);

  //increase counter

  const increase = () => {
    setCounter((count) => count + 1);
  };

  //decrease counter
  const decrease = () => {
    setCounter((count) => count - 1);
  };

  //function couter
  const couters = (Users) => {
    setUser(User);
    return (
      <div className="text-[#4a20aa] inline-block p-4 relative">
        <button
          className="bg-[#f4f1f7] rounded-[50%] w-5"
          ref={btnDecRef}
          onClick={decrease}
        >
          -
        </button>
        <span>{Users === "Adulte" ? counter + 1 : counter}</span>
        <button
          className="bg-[#f4f1f7] rounded-[50%] w-5"
          ref={btnIncRef}
          onClick={increase}
        >
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
                {couters("Adulte")}
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
          key: "1",
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
