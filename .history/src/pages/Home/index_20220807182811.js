import React from "react";
import { CardConnect } from "../../component/CardConnect";
import TabList from "../../component/TabsList/TabsList";
import Footer from "../../component/Footer";

const index = () => {
  return (
    <div className="ant-col">
      <main className="ant-layout-content">
        <div className="b_homeBanner">
          <div className="b_homeBanner_content main">
            <TabList />
          </div>
        </div>
        <CardConnect />
        <Footer />
      </main>
    </div>
  );
};

export default index;
