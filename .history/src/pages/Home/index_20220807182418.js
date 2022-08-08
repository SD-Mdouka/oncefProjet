import React from "react";
import { CardConnect } from "../../component/CardConnect";
import TabList from "../../component/TabsList/TabsList";
import Footer from "../../component/Footer";

const index = () => {
  return (
    <div className="ant-col">
      <main className="ant-layout-content">
        <div className="b_homeBanner">
          <TabList />
        </div>
        <CardConnect />
        <Footer />
      </main>
    </div>
  );
};

export default index;
