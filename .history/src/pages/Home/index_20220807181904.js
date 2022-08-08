import React from "react";
import { CardConnect } from "../../component/CardConnect";
import TabList from "../../component/TabsList/TabsList";
import Footer from "../../component/Footer";

const index = () => {
  return (
    <main className="ant-layout-content">
      <div className="b_homeBanner">
        <TabList />
        <CardConnect />
        <Footer />
      </div>
    </main>
  );
};

export default index;
