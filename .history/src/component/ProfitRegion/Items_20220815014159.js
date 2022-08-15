import React, { useState } from "react";
const ListVoyage = [
  { id: 1, name: "Tange", itemsVoyage: "voyage" },
  { id: 2, name: "Tange1", itemsVoyage: "voyage" },
  ,
  { id: 3, name: "Tang2", itemsVoyage: "voyage" },
];

const Items = () => {
  const [contentVisible, setContentVisible] = useState(0);
  const toggleContentVisible = () => {
    setContentVisible((prevState) => !prevState);
  };

  return (
    <>
      {ListVoyage.map((item) => {
        return (
          <div className="accordion_container">
            <div className="accordion styleContent ">
              {/* when button clicked, toggle the contentVisible value in our state*/}
              <button
                type="button"
                className="accordion_title text-new "
                onClick={toggleContentVisible}
              >
                Accordion Menu {item.name}
              </button>
              <div className="btn-new flex">
                {contentVisible ? (
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
                ) : (
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
                )}
              </div>
            </div>

            <div
              className={`accordion_content ${
                contentVisible ? "show_content" : ""
              }`}
            >
              <a
                className="iIUvbp"
                href="/recherche-disponibilites?depart=250&amp;arrivee=303"
              >
                <div className="sc-kafWEX frzQon">
                  <div className="sc-feJyhm ggVxCV">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="7px"
                      height="14px"
                      viewBox="0 0 7 14"
                      version="1.1"
                      className="injected-svg"
                      data-src="/static/media/odarrow.4511a659.svg"
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
                          transform="translate(-480.000000, -2234.000000)"
                          stroke="#FFFFFF"
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
                              <polyline
                                id="Path-2"
                                transform="translate(33.500000, 90.000000) rotate(-90.000000) translate(-33.500000, -90.000000) "
                                points="28 88 33.6344107 92 39 88"
                              ></polyline>
                            </g>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </div>
                  <div className="sc-iELTvK eZckQM">Depuis Kenitra</div>
                </div>
                <div className="sc-cmTdod bjlyHF">
                  <div className="sc-jwKygS jOMxiX">à partir de</div>
                  <div className="sc-btzYZH hUjbuY">89 Dhs</div>
                </div>
              </a>
              <a
                className="sc-cIShpX iIUvbp"
                href="/recherche-disponibilites?depart=229&amp;arrivee=303"
              >
                <div className="sc-kafWEX frzQon">
                  <div className="sc-feJyhm ggVxCV">
                    <div>
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="7px"
                          height="14px"
                          viewBox="0 0 7 14"
                          version="1.1"
                          className="injected-svg"
                          data-src="/static/media/odarrow.4511a659.svg"
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
                              transform="translate(-480.000000, -2234.000000)"
                              stroke="#FFFFFF"
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
                                  <polyline
                                    id="Path-2"
                                    transform="translate(33.500000, 90.000000) rotate(-90.000000) translate(-33.500000, -90.000000) "
                                    points="28 88 33.6344107 92 39 88"
                                  ></polyline>
                                </g>
                              </g>
                            </g>
                          </g>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="sc-iELTvK eZckQM">Depuis Rabat</div>
                </div>
                <div className="sc-cmTdod bjlyHF">
                  <div className="sc-jwKygS jOMxiX">à partir de</div>
                  <div className="sc-btzYZH hUjbuY">89 Dhs</div>
                </div>
              </a>
              <a
                className="sc-cIShpX iIUvbp"
                href="/recherche-disponibilites?depart=200&amp;arrivee=303"
              >
                <div className="sc-kafWEX frzQon">
                  <div className="sc-feJyhm ggVxCV">
                    <div>
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="7px"
                          height="14px"
                          viewBox="0 0 7 14"
                          version="1.1"
                          className="injected-svg"
                          data-src="/static/media/odarrow.4511a659.svg"
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
                              transform="translate(-480.000000, -2234.000000)"
                              stroke="#FFFFFF"
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
                                  <polyline
                                    id="Path-2"
                                    transform="translate(33.500000, 90.000000) rotate(-90.000000) translate(-33.500000, -90.000000) "
                                    points="28 88 33.6344107 92 39 88"
                                  ></polyline>
                                </g>
                              </g>
                            </g>
                          </g>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="sc-iELTvK eZckQM">Depuis Casablanca</div>
                </div>
                <div className="sc-cmTdod bjlyHF">
                  <div className="sc-jwKygS jOMxiX">à partir de</div>
                  <div className="sc-btzYZH hUjbuY">89 Dhs</div>
                </div>
              </a>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Items;
