import React from "react";
import { CardConnect } from "../../component/CardConnect";
import { Planifier } from "../../component/Planifier";
import TabList from "../../component/TabsList/TabsList";
import Footer from "../../component/Footer";
import SliderImage from "../../component/Slider/SlideImage";
import SlideText from "../../component/Slider/SlideText/SlideText";
import InfoTrafic from "../../component/InfoTrafic";

const index = () => {
  return (
    <div className="ant-col">
      <main className="ant-layout-content">
        <div className="b_homeBanner">
          <div className="b_homeBanner_content main">
            <TabList />
          </div>
        </div>
      </main>
      <SliderImage />
      {/* <InfoTrafic /> */}
      <SlideText />
      <Planifier />
      <CardConnect />
      <Footer />
    </div>
  );
};

export default index;
