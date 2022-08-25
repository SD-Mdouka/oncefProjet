import React from "react";
import TabList from "../../component/TabsList/TabsList";
import LayoutHome from "../../component/Layout/LayoutHome";
import HomeContent from "./HomeContent";
import "../../index.css";

const index = () => {
  return (
    <LayoutHome>
      <div className="b_homeBanner">
        <TabList />
      </div>
      <HomeContent />
    </LayoutHome>
  );
};

export default index;
