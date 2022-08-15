import React from "react";
import { Text } from "../share-component/Text";
import Items from "./Items";
import "./style.css";

const PortfitRegion = () => {
  return (
    <div className="content z-2">
      <div className="imgRight"></div>
      <div className="imgLeft">
        <div className="imgLContent"></div>
      </div>
      <div className="w-full h-full mt-[-53px] px-0 py-[10px] overflow">
        <Text classStyle={"Title"} text="Je profite des meilleurs tarifs !" />
        <div id="content" className="absolute z-1 left-[520px]">
          <Items />
        </div>
      </div>
    </div>
  );
};
export default PortfitRegion;
