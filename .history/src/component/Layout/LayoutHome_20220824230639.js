import React from "react";
import NavBar from "../Navbar";
import Footer from "../Footer";

const LayoutHome = ({ children }) => {
  return (
    <div className="Layout">
      <NavBar />
      {children}
      <Footer />
    </div>
  );
};

export default LayoutHome;
