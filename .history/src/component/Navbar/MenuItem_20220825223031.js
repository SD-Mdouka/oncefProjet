import React from "react";
import "./styleMenu.css";

const MenuItem = () => {
  return (
    <div>
      {" "}
      <input type="radio" name="accordion" id="cb1" />
      <section className="box">
        <label className="box-title" for="cb1">
          Readme
        </label>
        <label className="box-close" for="acc-close"></label>
        <div className="box-content">
          Click on an item to open. Click on its header or the list header to
          close.
        </div>
      </section>
      <input type="radio" name="accordion" id="cb2" />
      <section className="box">
        <label className="box-title" for="cb2">
          Read me too
        </label>
        <label className="box-close" for="acc-close"></label>
        <div className="box-content">
          Add the className 'arrows' to nav.accordion to add dropdown arrows.
        </div>
      </section>
      <input type="radio" name="accordion" id="cb3" />
      <section className="box">
        <label className="box-title" for="cb3">
          Item 3
        </label>
        <label className="box-close" for="acc-close"></label>
        <div className="box-content">
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
          posuere cubilia Curae; Quisque finibus tristique nisi, maximus
          ullamcorper ante finibus eget.
        </div>
      </section>
      <input type="radio" name="accordion" id="acc-close" />
    </div>
  );
};

export default MenuItem;
