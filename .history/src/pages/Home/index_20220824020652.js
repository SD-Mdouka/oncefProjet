import React from "react";
import { CardConnect } from "../../component/CardConnect";
import { Planifier } from "../../component/Planifier";
import TabList from "../../component/TabsList/TabsList";
import Footer from "../../component/Footer";
import SliderImage from "../../component/Slider/SlideImage";
import SlideText from "../../component/Slider/SlideText/SlideText";
import InfoTrafic from "../../component/InfoTrafic";
import ProfitRegion from "../../component/ProfitRegion";
import NavBar from "../../component/Navbar";
import "../../index.css";

const index = () => {
  return (
    <div className="ant-col">
      <main className="ant-layout-content">
        <NavBar />
        <div className="b_homeBanner">
          <TabList />
        </div>
      </main>
      <SliderImage />
      {/* <ProfitRegion /> */}
      {/* <InfoTrafic /> */}
      {/* <SlideText /> */}
      {/* <Planifier /> */}
      {/* <CardConnect /> */}
      {/* <Footer /> */}
    </div>
  );
};

export default index;
