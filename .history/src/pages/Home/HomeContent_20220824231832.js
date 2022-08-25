import React from "react";
import SliderImage from "../../component/Slider/SlideImage";
import SlideText from "../../component/Slider/SlideText/SlideText";
import InfoTrafic from "../../component/InfoTrafic";
import ProfitRegion from "../../component/ProfitRegion";
import { CardConnect } from "../../component/CardConnect";
import { Planifier } from "../../component/Planifier";

const index = () => {
  return (
    <div className="p-0 m-0">
      <SliderImage />
      <ProfitRegion />
      <InfoTrafic />
      <SlideText />
      <Planifier />
      <CardConnect />
    </div>
  );
};

export default index;
