import React from "react";
import TextSvgs from "../share-component/svgs/TextSvgs";

export const BtnRecherche = () => {
  return (
    <a className="btnRecherche filled primary medium false button">
      <div className="icon">
        <TextSvgs />
      </div>
      <span className="ml-[20px] w-full">Recherche</span>
    </a>
  );
};
