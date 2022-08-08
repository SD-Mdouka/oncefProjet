import React from "react";
import { CardConnect } from "../../component/CardConnect";
import TabList from "../../component/TabsList/TabsList";
import Footer from "../../component/Footer";

const index = () => {
  return (
    <div className="ant-layout-content">
      <TabList />
      <CardConnect />
      <Footer />
    </div>
  );
};

export default index;
