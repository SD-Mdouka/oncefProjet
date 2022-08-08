import React from "react";
import { Text } from "../Text";
import { Button } from "../Button";
import "./style.css";

export default Planifier = () => {
  return (
    <>
      <div className="filpImage">
        <div className="containerFilp">
          <div className="flipeOne">
            <Text
              classStyle="titleFilp"
              text=" Je planifie mes voyages à l’avance et je profite des meilleurs
              tarifs…"
            />

            <div class="btnSpace">
              <Button
                title="Découvrir"
                href="https://www.oncf-voyages.ma/recherche-disponibilites"
                classStyle="btnDecouvrir"
              />
            </div>
          </div>
          <div className="flipeTow">
            <Text
              classStyle="textTow"
              text="Flex/Semi Flex, on vous explique tout…"
            />
            <div className="btnSpace">
              <Button
                title="Découvrir"
                href="https://www.oncf-voyages.ma/faq#apres-vente"
                classStyle="btnDecouvrirVisible"
              />
            </div>
          </div>
          <div className="flipeVisible">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="110px"
              height="110px"
              viewBox="0 0 110 110"
              version="1.1"
              class="injected-svg"
              data-src="/static/media/redPattern.54b8cb8c.svg"
            >
              <title></title>
              <desc>Created with sketchtool.</desc>
              <g
                id="CONTENU"
                stroke="none"
                stroke-width="1"
                fill="none"
                fill-rule="evenodd"
              >
                <g
                  id="GABARIT-CONTENU---DESKTOP"
                  transform="translate(-99.000000, -5542.000000)"
                  fill="#EF2E42"
                >
                  <g
                    id="image+content-left"
                    transform="translate(99.000000, 5084.000000)"
                  >
                    <g
                      id="Patterns/Default"
                      transform="translate(0.000000, 458.000000)"
                    >
                      <path
                        d="M22,88 L22,95.3333333 C13.9128,95.3333333 7.33333333,101.9128 7.33333333,110 L7.33333333,110 L0,110 C0,97.8501333 9.8494,88 22,88 L22,88 Z M66,88 L66,95.3333333 C57.9128,95.3333333 51.3333333,101.9128 51.3333333,110 L51.3333333,110 L44,110 C44,97.8501333 53.8494,88 66,88 L66,88 Z M110,88 L110,95.3333333 C101.9128,95.3333333 95.3333333,101.9128 95.3333333,110 L95.3333333,110 L88,110 C88,97.8501333 97.8494,88 110,88 L110,88 Z M44,88 L44,95.3333333 C35.9128,95.3333333 29.3333333,101.9128 29.3333333,110 L29.3333333,110 L22,110 C22,97.8501333 31.8494,88 44,88 L44,88 Z M88,88 L88,95.3333333 C79.9128,95.3333333 73.3333333,101.9128 73.3333333,110 L73.3333333,110 L66,110 C66,97.8501333 75.8494,88 88,88 L88,88 Z M22,66 L22,73.3333333 C13.9128,73.3333333 7.33333333,79.9128 7.33333333,88 L7.33333333,88 L0,88 C0,75.8501333 9.8494,66 22,66 L22,66 Z M66,66 L66,73.3333333 C57.9128,73.3333333 51.3333333,79.9128 51.3333333,88 L51.3333333,88 L44,88 C44,75.8501333 53.8494,66 66,66 L66,66 Z M110,66 L110,73.3333333 C101.9128,73.3333333 95.3333333,79.9128 95.3333333,88 L95.3333333,88 L88,88 C88,75.8501333 97.8494,66 110,66 L110,66 Z M44,66 L44,73.3333333 C35.9128,73.3333333 29.3333333,79.9128 29.3333333,88 L29.3333333,88 L22,88 C22,75.8501333 31.8494,66 44,66 L44,66 Z M88,66 L88,73.3333333 C79.9128,73.3333333 73.3333333,79.9128 73.3333333,88 L73.3333333,88 L66,88 C66,75.8501333 75.8494,66 88,66 L88,66 Z M22,44 L22,51.3333333 C13.9128,51.3333333 7.33333333,57.9128 7.33333333,66 L7.33333333,66 L0,66 C0,53.8501333 9.8494,44 22,44 L22,44 Z M66,44 L66,51.3333333 C57.9128,51.3333333 51.3333333,57.9128 51.3333333,66 L51.3333333,66 L44,66 C44,53.8501333 53.8494,44 66,44 L66,44 Z M110,44 L110,51.3333333 C101.9128,51.3333333 95.3333333,57.9128 95.3333333,66 L95.3333333,66 L88,66 C88,53.8501333 97.8494,44 110,44 L110,44 Z M44,44 L44,51.3333333 C35.9128,51.3333333 29.3333333,57.9128 29.3333333,66 L29.3333333,66 L22,66 C22,53.8501333 31.8494,44 44,44 L44,44 Z M88,44 L88,51.3333333 C79.9128,51.3333333 73.3333333,57.9128 73.3333333,66 L73.3333333,66 L66,66 C66,53.8501333 75.8494,44 88,44 L88,44 Z M22,22 L22,29.3333333 C13.9128,29.3333333 7.33333333,35.9128 7.33333333,44 L7.33333333,44 L0,44 C0,31.8501333 9.8494,22 22,22 L22,22 Z M66,22 L66,29.3333333 C57.9128,29.3333333 51.3333333,35.9128 51.3333333,44 L51.3333333,44 L44,44 C44,31.8501333 53.8494,22 66,22 L66,22 Z M110,22 L110,29.3333333 C101.9128,29.3333333 95.3333333,35.9128 95.3333333,44 L95.3333333,44 L88,44 C88,31.8501333 97.8494,22 110,22 L110,22 Z M44,22 L44,29.3333333 C35.9128,29.3333333 29.3333333,35.9128 29.3333333,44 L29.3333333,44 L22,44 C22,31.8501333 31.8494,22 44,22 L44,22 Z M88,22 L88,29.3333333 C79.9128,29.3333333 73.3333333,35.9128 73.3333333,44 L73.3333333,44 L66,44 C66,31.8501333 75.8494,22 88,22 L88,22 Z M22,-5.32907052e-14 L22,7.33333333 C13.9128,7.33333333 7.33333333,13.9128 7.33333333,22 L7.33333333,22 L0,22 C0,9.85013333 9.8494,-5.32907052e-14 22,-5.32907052e-14 L22,-5.32907052e-14 Z M66,-5.32907052e-14 L66,7.33333333 C57.9128,7.33333333 51.3333333,13.9128 51.3333333,22 L51.3333333,22 L44,22 C44,9.85013333 53.8494,-5.32907052e-14 66,-5.32907052e-14 L66,-5.32907052e-14 Z M110,-5.32907052e-14 L110,7.33333333 C101.9128,7.33333333 95.3333333,13.9128 95.3333333,22 L95.3333333,22 L88,22 C88,9.85013333 97.8494,-5.32907052e-14 110,-5.32907052e-14 L110,-5.32907052e-14 Z M44,-5.32907052e-14 L44,7.33333333 C35.9128,7.33333333 29.3333333,13.9128 29.3333333,22 L29.3333333,22 L22,22 C22,9.85013333 31.8494,-5.32907052e-14 44,-5.32907052e-14 L44,-5.32907052e-14 Z M88,-5.32907052e-14 L88,7.33333333 C79.9128,7.33333333 73.3333333,13.9128 73.3333333,22 L73.3333333,22 L66,22 C66,9.85013333 75.8494,-5.32907052e-14 88,-5.32907052e-14 L88,-5.32907052e-14 Z"
                        id="Pattern-Fill-1"
                      ></path>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};
