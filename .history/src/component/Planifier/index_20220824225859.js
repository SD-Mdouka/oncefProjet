import React from "react";
import { Text } from "../share-component/Text";
import { Button } from "../share-component/Button";
import "./style.css";
import UserFlip from "./svgs/UserFlip";

export const Planifier = () => {
  return (
    <>
      <div id="flipPLanifier" className="filp mt-[200px]">
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
          <div className="flipeVisible flipeInVisible">
            <UserFlip />
          </div>
        </div>
      </div>
    </>
  );
};
