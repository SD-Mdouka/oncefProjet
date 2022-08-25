import React from "react";
import "./StyleInput.css";

const InputClasses = ({ activeTab, setActiveTab }) => {
  const handleTab1 = () => {
    // update the state to tab1
    setActiveTab("classe1");
  };
  const handleTab2 = () => {
    // update the state to tab2
    setActiveTab("classe2");
  };
  const handleTab3 = () => {
    // update the state to tab2
    setActiveTab("classe3");
  };
  return (
    <div id="InputClasse" className="">
      <ul className="nav">
        <li
          className={activeTab === "classe1" ? "active" : ""}
          onClick={handleTab1}
        >
          <span className="button-wrapper">
            <span>
              1<sup>ère</sup>
              classe
            </span>
          </span>
        </li>
        <li
          className={activeTab === "classe2" ? "active" : ""}
          onClick={handleTab2}
        >
          <span className="button-wrapper">
            <span>
              2<sup>ème</sup>
              classe
            </span>
          </span>
        </li>
        <li
          className={activeTab === "classe3" ? "active" : ""}
          onClick={handleTab3}
        >
          <span className="button-wrapper">
            <span>Lit single</span>
          </span>
        </li>
      </ul>
    </div>
  );
};

export default InputClasses;
