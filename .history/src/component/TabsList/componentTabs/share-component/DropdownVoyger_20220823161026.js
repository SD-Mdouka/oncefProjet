import React, { useState, useEffect, useRef } from "react";
import "antd/dist/antd.css";
import { UserOutlined } from "@ant-design/icons";
import { Dropdown, Menu, Space } from "antd";

const DropdownVoyger = () => {
  const [counterAdulte, setCounterAdulte] = useState(0);
  const [counterKids, setCounterKids] = useState(0);

  //increase counter
  // Counter floor when the length is 6 Adulte or 4 enfant

  const increase = (User) => {
    if (User == "adulte") {
      if (counterAdulte < 6 && counterKids < 6 - counterAdulte) {
        setCounterAdulte((count) => count + 1);
      }
    }
    if (User == "kids") {
      if (counterKids < 4 && counterAdulte < 6 - counterKids) {
        setCounterKids((count) => count + 1);
      }
    }
  };

  //decrease counter
  const decrease = (User) => {
    if (User == "adulte") {
      if (counterAdulte <= 6 && counterAdulte > 1) {
        setCounterAdulte((count) => count - 1);
      }
    }
    if (User == "kids") {
      if (counterKids < 6 && counterKids > 0) {
        setCounterKids((count) => count - 1);
      }
    }
  };

  //function couter
  const countersAdulte = () => {
    return (
      <div className="text-[#4a20aa] inline-block p-4 text-xl space-x-2 relative">
        <button
          className="bg-[#f4f1f7] rounded-[50%] w-5"
          onClick={() => decrease("adulte")}
        >
          -
        </button>
        <span>{counterAdulte === 0 ? counterAdulte + 1 : counterAdulte}</span>

        <button
          className="bg-[#f4f1f7] rounded-[50%] w-5"
          onClick={() => increase("adulte")}
        >
          +
        </button>
      </div>
    );
  };
  const countersKids = () => {
    return (
      <div className="text-[#4a20aa] inline-block p-4 text-xl space-x-2 relative">
        <button
          className="bg-[#f4f1f7] rounded-[50%] w-5"
          onClick={() => decrease("kids")}
        >
          -
        </button>
        <span> {counterKids}</span>

        <button
          className="bg-[#f4f1f7] rounded-[50%] w-5"
          onClick={() => increase("kids")}
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
              <div className="TravelersCounterItem_label text-xl w-full">
                <span className="spacien mt-7 text-xl">
                  Adulte (s) <small>&gt; 15 ans</small>
                </span>
                <span className="!float-right">{countersAdulte()}</span>
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
              <div className="TravelersCounterItem_label w-full">
                <span className="spacien !text-center mt-7">
                  Enfant (s) <small>&lt; 15 ans</small>
                </span>
                <span className="!float-right">{countersKids()}</span>
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
            <UserOutlined />
            {counterAdulte === 0
              ? ` ${counterAdulte + 1}  Adulte(s)`
              : `, ${counterAdulte} Adulte(s)`}
            {counterKids > 0 && `, ${counterKids} Enfant(s)`}
          </Space>
        </span>
      </a>
    </Dropdown>
  );
};

export default DropdownVoyger;
