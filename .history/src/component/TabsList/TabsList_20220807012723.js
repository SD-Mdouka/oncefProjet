import React, { useState } from "react";
import { BilleIcon } from "./svgs/BilleIcon";
import { Tab, ButtonGroup } from "./styled";
import "./style.css";

const types = [
  {
    id: 1,
    title: "J'achète mon billet",
    icon: <BilleIcon />,
  },
  {
    id: 2,
    title: "Je consulte les horaires",
    icon: "EUR 49€",
  },
  {
    id: 3,
    title: "Je réserve avec ma carte",
    icon: "EUR 49€",
  },
  {
    id: 4,
    title: "Je gère ma réservation",
    icon: "EUR 49€",
  },
];
export default function TabGroup() {
  const [active, setActive] = useState(types.id);
  return (
    <>
      <div className="tabs">
        <div className="tabsList">
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

        <div className="tabsPage stylePage"> {active} </div>
      </div>
    </>
  );
}
// Usage
<TabGroup />;
