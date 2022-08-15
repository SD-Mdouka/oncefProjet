import React, { useState } from "react";

const Items = () => {
  const [contentVisible, setContentVisible] = useState(0);
  const toggleContentVisible = () => {
    setContentVisible((prevState) => !prevState);
  };
  return (
    <div className="accordion_container">
      <div className="accordion styleContent">
        {/* when button clicked, toggle the contentVisible value in our state*/}
        <button
          type="button"
          className="accordion_title text-new"
          onClick={toggleContentVisible}
        >
          Accordion Menu
        </button>
        <div className="btn-new">
          {contentVisible ? (
            <div className="plusBtn plus ml-[100px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15px"
                height="3px"
                viewBox="0 0 15 3"
                version="1.1"
                class="injected-svg"
                data-src="/static/media/odclose.2cdb05b7.svg"
              >
                <title></title>
                <desc>Created with sketchtool.</desc>
                <g
                  id="HOME-PAGE"
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd"
                  stroke-linecap="round"
                >
                  <g
                    id="Home-Page---Desktop"
                    transform="translate(-946.000000, -2180.000000)"
                    stroke="#39E6B6"
                    stroke-width="2"
                  >
                    <g
                      id="tarifs-od"
                      transform="translate(-174.000000, 1928.000000)"
                    >
                      <g
                        id="Group-2"
                        transform="translate(624.000000, 223.000000)"
                      >
                        <g id="Group">
                          <line
                            x1="510"
                            y1="30.5"
                            x2="497"
                            y2="30.5"
                            id="Line-4"
                          ></line>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
            </div>
          ) : (
            <div className="plusBtn minus ml-[100px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15px"
                height="15px"
                viewBox="0 0 15 15"
                version="1.1"
                class="injected-svg"
                data-src="/static/media/odopen.94365167.svg"
              >
                <title></title>
                <desc>Created with sketchtool.</desc>
                <g
                  id="HOME-PAGE"
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd"
                  stroke-linecap="round"
                >
                  <g
                    id="Home-Page---Desktop"
                    transform="translate(-946.000000, -2420.000000)"
                    stroke="#39E6B6"
                    stroke-width="2"
                  >
                    <g
                      id="tarifs-od"
                      transform="translate(-174.000000, 1928.000000)"
                    >
                      <g
                        id="Group-4"
                        transform="translate(624.000000, 469.000000)"
                      >
                        <g
                          id="Group-3"
                          transform="translate(497.000000, 24.000000)"
                        >
                          <line
                            x1="13"
                            y1="6.5"
                            x2="1.29896094e-14"
                            y2="6.5"
                            id="Line-4-Copy"
                          ></line>
                          <line
                            x1="13"
                            y1="6.5"
                            x2="1.29896094e-14"
                            y2="6.5"
                            id="Line-4-Copy"
                            transform="translate(6.500000, 6.500000) rotate(-270.000000) translate(-6.500000, -6.500000) "
                          ></line>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
            </div>
          )}
        </div>
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
