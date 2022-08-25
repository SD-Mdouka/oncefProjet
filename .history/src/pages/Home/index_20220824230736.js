import React from "react";
import { CardConnect } from "../../component/CardConnect";
import { Planifier } from "../../component/Planifier";
import TabList from "../../component/TabsList/TabsList";
import SliderImage from "../../component/Slider/SlideImage";
import SlideText from "../../component/Slider/SlideText/SlideText";
import InfoTrafic from "../../component/InfoTrafic";
import ProfitRegion from "../../component/ProfitRegion";

import "../../index.css";
import LayoutHome from "../../component/Layout/LayoutHome";

const index = () => {
  return (
    <div className="ant-col">
      <main className="ant-layout-content">
        <LayoutHome>
          <div className="b_homeBanner">
            <TabList />
          </div>
          {/* <SliderImage /> */}
          <ProfitRegion />
          {/* <InfoTrafic /> */}
          {/* <SlideText /> */}
          {/* <Planifier /> */}
          {/* <CardConnect /> */}
        </LayoutHome>
      </main>
    </div>
  );
};

export default index;
