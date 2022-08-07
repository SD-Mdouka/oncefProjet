import React from "react";
import { CardConnect } from "../../component/CardConnect";
import { TabList } from "../../component/TabsList/TabsList";
import Footer from "../../component/Footer";

const index = () => {
  return (
    <div>
      <TabList />
      <CardConnect />
      <Footer />
    </div>
  );
};

export default index;
