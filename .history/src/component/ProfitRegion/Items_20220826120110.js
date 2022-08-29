import React, { useState } from "react";
import { itemList } from "../../fakeData";
import BtnPlus from "./svgs/BtnPlus";
import BtnMInus from "./svgs/BtnMInus";
import BtnLink from "./svgs/BtnLink";

const Items = ({ nameVoyage }) => {
  const [contentVisible, setContentVisible] = useState(0);
  const toggleContentVisible = () => {
    setContentVisible((prevState) => !prevState);
    console.log(contentVisible);
  };
  return (
    <div id="contentItem">
      <div className="accordion_container">
        <div className="accordion styleContent ">
          {/* when button clicked, toggle the contentVisible value in our state*/}
          <button
            type="button"
            className="accordion_title text-new "
            onClick={toggleContentVisible}
          >
            {nameVoyage}
          </button>
          <div className="btn-new flex">
            {contentVisible ? <BtnPlus /> : <BtnMInus />}
          </div>
        </div>

        <div
          className={`accordion_content ${
            contentVisible ? "show_content" : ""
          }`}
        >
          {itemList.map((item) => {
            return (
              <>
                {item.itemVoyage.map((rowItem) => {
                  if (item.nameVoyage === nameVoyage) {
                    return (
                      <a
                        className="btnLink"
                        href={rowItem.url}
                        key={rowItem.Voyage}
                      >
                        <div className="styleBtnLink">
                          <div className="Link">
                            <BtnLink />
                          </div>
                          <div className="StyleVille">
                            Depuis {rowItem.ville}
                          </div>
                        </div>
                        <div className="PartierTotal">
                          <div className="Partier">à partir de</div>
                          <div className="Total">{rowItem.total} Dhs</div>
                        </div>
                      </a>
                    );
                  }
                })}
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Items;
