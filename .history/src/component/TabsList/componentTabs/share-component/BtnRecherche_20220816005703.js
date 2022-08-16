import React from "react";
import TextSvgs from "../share-component/svgs/TextSvgs";

export const BtnRecherche = () => {
  return (
    <a className="btnRecherche filled primary medium false button">
      <div className="icon">
        <TextSvgs />
      </div>
      <span className=" w-full">Recherche</span>
    </a>
  );
};
