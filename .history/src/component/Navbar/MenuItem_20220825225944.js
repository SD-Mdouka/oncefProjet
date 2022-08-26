import React from "react";
import "./styleMenu.css";

const MenuItem = () => {
  return (
    <div>
      {" "}
      <nav className="accordion arrows">
        <input type="radio" name="accordion" id="cb1" />
        <section className="box">
          <label className="box-title accordion_title" for="cb1">
            Readme
          </label>
          <label className="box-close" for="acc-close"></label>
          <div className="box-content show_content accordion_content">
            Click on an item to open. Click on its header or the list header to
            close.
          </div>
        </section>
        <input type="radio" name="accordion" id="acc-close" />
      </nav>
    </div>
  );
};

export default MenuItem;
