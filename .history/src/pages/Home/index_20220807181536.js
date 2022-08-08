import React from "react";
import { CardConnect } from "../../component/CardConnect";
import TabList from "../../component/TabsList/TabsList";
import Footer from "../../component/Footer";

const index = () => {
  return (
    <main className="ant-layout-content">
      <TabList />
      <CardConnect />
      <Footer />
    </main>
  );
};

export default index;
