import React, { useState } from "react";
import { Tab, ButtonGroup } from "./styled";
import "./style.css";

const types = [
  {
    id: 1,
    title: "J'achète mon billet",
    icon: "EUR 49€",
  },
  {
    id: 2,
    title: "01 Nov. 2022",
    icon: "EUR 49€",
  },
  {
    id: 3,
    title: "01 Oct. 2022",
    icon: "EUR 49€",
  },
  {
    id: 4,
    title: "01 Sep. 2022",
    icon: "EUR 49€",
  },
];
export default function TabGroup() {
  const [active, setActive] = useState(types.id);
  return (
    <>
      <div className="tabs">
        <div className="tabsList stylePage">
          <ButtonGroup>
            {types.map((type) => (
              <Tab
                key={type.id}
                active={active === type.id}
                onClick={() => setActive(type.id)}
              >
                {type.icon} {type.title}
              </Tab>
            ))}
          </ButtonGroup>
        </div>

        <div className="tabsPage"> {active} </div>
      </div>
    </>
  );
}
// Usage
<TabGroup />;