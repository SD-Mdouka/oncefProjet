import React from "react";
import { Text } from "../share-component/Text";
import Items from "./Items";
import "./style.css";

const PortfitRegion = () => {
  return (
    <div className="content">
      <div className="imgRight"></div>
      <div className="imgLeft">
        <div className="imgLContent"></div>
      </div>
      <div className="w-full h-full mt-[-53px] px-0 py-[10px] overflow">
        <Text classStyle={"Title"} text="Je profite des meilleurs tarifs !" />
      </div>
      <div id="content" className="">
        <Items />
      </div>
    </div>
  );
};
export default PortfitRegion;
