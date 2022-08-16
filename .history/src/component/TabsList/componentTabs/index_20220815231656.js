import React from "react";
import Layout from "./share-component/Layout";
import Reservation from "./Reservation";
import "./StyleTabs.css";

export const index = ({ steps }) => {
  return <Layout>{steps === 1 && <Reservation />}</Layout>;
};
