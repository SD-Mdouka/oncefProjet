import React, { useState } from "react";

const Items = () => {
  const [contentVisible, setContentVisible] = useState(0);
  const toggleContentVisible = () => {
    setContentVisible((prevState) => !prevState);
  };
  return (
    <div className="accordion_container ">
      <div className="accordion">
        {/* when button clicked, toggle the contentVisible value in our state*/}
        <button
          type="button"
          className="accordion_title"
          onClick={toggleContentVisible}
        >
          Accordion Menu
        </button>
      </div>

      <div
        className={`accordion_content ${contentVisible ? "show_content" : ""}`}
      >
        <div className="list_item_container">
          <p>Item 1</p>
        </div>
        <div className="list_item_container">
          <p>Item 2</p>
        </div>
        <div className="list_item_container">
          <p>Item 3</p>
        </div>
      </div>
    </div>
  );
};

export default Items;
