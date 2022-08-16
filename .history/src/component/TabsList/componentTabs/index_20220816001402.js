import React from "react";
import Layout from "./share-component/Layout";
import Reservation from "./PagesTabs/Reservation";
import "./StyleTabs.css";

const ComponentTaps = ({ steps }) => {
  return <Layout>{steps === 4 && <Reservation />}</Layout>;
};
export default ComponentTaps;
