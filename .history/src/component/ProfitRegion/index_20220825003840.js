import React from "react";
import { Text } from "../share-component/Text";
import { ListVoyage } from "../../fakeData";
import Items from "./Items";
import "./style.css";

const PortfitRegion = () => {
  return (
    <div className="content">
      <div className="imgRight"></div>
      <div className="imgLeft">
        <div className="imgLContent"></div>
      </div>
      <div className="w-full h-full mt-[-53px] px-0 py-[10px]">
        <Text classStyle={"Title"} text="Je profite des meilleurs tarifs !" />
        <div className="absolute  flex flex-col">
          {ListVoyage.map((item) => {
            return (
              <div
                id="content"
                className="relative left-[200px] top-[90px]"
                key={item.id}
              >
                <Items nameVoyage={item.nameVoyage} key={item.id} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default PortfitRegion;
