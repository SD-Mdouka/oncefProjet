import React from "react";
import { Button } from "../Button";
import { Paragraph } from "../Paragraph";
import "./style.css";

export const CardConnect = () => {
  return (
    <div className="relative bg-[#4a20aa] rounded-[20px] mx-[120px] my-auto w-6">
      <div className="imageStyle">
        <img src="https://www.oncf-voyages.ma/media/static/fr/images/illustration-contact.png" />
      </div>
      <div className="GroupList">
        <div className="ml-[85px] mb-[20px] w-[150px]">
          <Paragraph classStyle="title" text="Centre de Relation Client" />
          <Paragraph classStyle="Total" text="2255" />
        </div>
        <div className="leftStyle">
          <Paragraph
            classStyle="title"
            text="Vos avis, suggestions remarques et réclamations"
          />
          <div className="">
            <Button
              classStyle="btnStyle"
              href="https://www.oncf2255.ma/"
              title="Écrivez - nous"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
