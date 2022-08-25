import React from "react";
import NavBar from "../Navbar";
import Footer from "../Footer";

const LayoutHome = ({ children }) => {
  return (
    <div className="ant-col">
      <main className="ant-layout-content">
        <div className="Layout">
          <NavBar />
          {children}
          <Footer />
        </div>
      </main>
    </div>
  );
};

export default LayoutHome;
