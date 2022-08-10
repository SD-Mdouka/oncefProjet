import React from "react";
import { TextSlid } from "../../../fakeData";
import { Button } from "../../Button";
import { Paragraph } from "../../Paragraph";
import { Text } from "../../Text";
import "./index.css";

export const FormSlid = ({ idLine }) => {
  return TextSlid.map((LineText) => {
    return (
      <div className="relative mt-[110px] ">
        <div className="containerList w-full p-[20px]" key={key}>
          <Text text={LineText.text} classStyle="titleContainer" />
          <Paragraph text={LineText.paragraph} classStyle="paragraph" />
          {LineText.id == !{ idLine } && "test"}
          <div className="pt-[5px]">
            <Button
              title={"Découvrir"}
              href={LineText.url}
              classStyle={"btnDecouvrir"}
            />
          </div>
        </div>
      </div>
    );
  });
};
