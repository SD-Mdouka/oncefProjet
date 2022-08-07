import React, { useState } from "react";
import { Tab, ButtonGroup } from "./styled";
import ListProject from "./ListProject";

const types = [
  {
    id: "1",
    title: "01 Dec. 2022",
    icon: "EUR 49€",
  },
  {
    id: "2",
    title: "01 Nov. 2022",
    icon: "EUR 49€",
  },
  {
    id: "3",
    title: "01 Oct. 2022",
    icon: "EUR 49€",
  },
  {
    id: "4",
    title: "01 Sep. 2022",
    icon: "EUR 49€",
  },
];
export default function TabGroup() {
  const [active, setActive] = useState(types[0]);
  return (
    <>
      <ButtonGroup>
        {types.map((type) => (
          <Tab
            key={type.titel}
            active={active === type.titel}
            onClick={() => setActive(type.titel)}
          >
            {type.icon} {type.titel}
          </Tab>
        ))}
      </ButtonGroup>
      <p />
      <div className="p-5 border border-[#44566c]">
        {" "}
        {active && <ListProject tab={active} />}{" "}
      </div>
    </>
  );
}
// Usage
<TabGroup />;
