import React, { useState } from "react";
import BilleIcon from "./svgs/BilleIcon";
import { Tab, ButtonGroup } from "./styled";
import "./style.css";
import HorierIcon from "./svgs/HorierIcon";
import CardIcon from "./svgs/CardIcon";
import ResirveIcon from "./svgs/ResirveIcon";
import { ComponentTaps } from "./componentTabs";

const types = [
  {
    id: 1,
    title: "J'achète mon billet",
    icon: <BilleIcon />,
  },
  {
    id: 2,
    title: "Je consulte les horaires",
    icon: <HorierIcon />,
  },
  {
    id: 3,
    title: "Je réserve avec ma carte",
    icon: <CardIcon />,
  },
  {
    id: 4,
    title: "Je gère ma réservation",
    icon: <ResirveIcon />,
  },
];
export default function TabGroup() {
  const [active, setActive] = useState(1);
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
                <span className="icon">
                  {type.icon}
                  <span className="tabTitel">{type.title}</span>
                </span>
              </Tab>
            ))}
          </ButtonGroup>
        </div>

        <div className="tabsPage stylePage">{<ComponentTaps steps={4} />}</div>
      </div>
    </>
  );
}
// Usage
<TabGroup />;
