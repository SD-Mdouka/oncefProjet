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
        <div id="content" className="absolute left-[600px]">
          <Items />
        </div>
      </div>
    </div>
  );
};
export default PortfitRegion;
