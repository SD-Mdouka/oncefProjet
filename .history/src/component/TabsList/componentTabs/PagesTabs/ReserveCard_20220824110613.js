import { InfoCircleFilled } from "@ant-design/icons";
import React from "react";
import Input from "../share-component/Input";
import { Label } from "../share-component/Label";
import { Paragraph } from "../../../share-component/Paragraph";
import { BtnRecherche } from "../share-component/BtnRecherche";
import InputClasses from "../share-component/InputInfo/InputClasses";
import InputCard from "../share-component/InputInfo/InputCard";
import InputGare from "../share-component/InputInfo/InputGare";
import { BtnChange } from "../share-component/BtnChange";
import DropdownVoyger from "../share-component/DropdownVoyger";
import InputDate from "../share-component/InputInfo/InputDate";
const ReserveCard = ({
  counterAdulte,
  setCounterAdulte,
  counterKids,
  setCounterKids,
}) => {
  const params = {
    counterAdulte,
    setCounterAdulte,
    counterKids,
    setCounterKids,
  };
  return (
    <div id="ReserveCard" className="ant-row">
      <div className="!pl-0 !pr-0">
        <div className="!pl-[12px] !pr-[12px] AdvancedSearchWidget_auth--conventionne">
          <div className="relative h-auto zoom-1 block -ml-[12px] -mr-[12px]">
            <div className="ant-col block w-fit !pl-[12px] !pr-[12px]">
              <div className="text-[#4a20aa] flex">
                <b className="flex">
                  <InfoCircleFilled className="mt-1 mr-1" />
                  Tarif réduit :
                </b>
                <Paragraph
                  text={`Bénéficiez de tarifs réduits en introduisant les coordonnées de
                votre carte d’abonnement / convention.`}
                  classStyle={"mt-0 mb-[1em]"}
                />
              </div>
              <div className="!pl-[12px] !pr-[12px] flex mb-2 w-[140%]">
                <div className="child ">
                  <div className="textfield">
                    <Label text={"Ma carte"} classes="labelfieild " />
                    <InputCard />
                  </div>
                </div>
                <div className="childAdresse ">
                  <div className="textfield">
                    <Label text={`Mon code d'adhérent`} classes="labelfieild" />
                    <Input
                      placeholder={"ex : 123456789"}
                      type={"email"}
                      name={"email"}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="reservation" className="Forms searchForm">
          <div className="child flex-col space-x-1 ml-3 mr-4">
            <div className="textfield">
              <Label text={"Ma gare de départ"} classes="labelfieild" />
              <InputGare placeHolder={"Ma gare de départ"} />
            </div>
            <BtnChange />
            <div className="textfield mt-[25px]">
              <Label text={`Ma gare de d'arrivée`} classes="labelfieild" />
              <InputGare placeHolder={"Ma gare d'arrivée"} />
            </div>
          </div>
          <div className="childAdresse flex-col space-x-1">
            <div className="textfield">
              <Label text={"Ma date de départ"} classes="labelfieild" />
              <InputDate />
            </div>
            <div className="textfield mt-[60px]">
              <Label text={"Ma date de retour"} classes="labelfieild" />
              <Input placeholder={"mon retour"} type={"email"} name={"email"} />
            </div>
          </div>
          <div className="childAdresse flex-col space-x-1">
            <div className="textfield">
              <Label text={"Voyageurs"} classes="labelfieild" />
              <DropdownVoyger />
            </div>
            <div className="textfield mt-[58px]">
              <Label text={"Mon confort"} classes="labelfieild" />
              <InputClasses />
            </div>
          </div>
          <div className="layoutBtn">
            <div className="ant-col searchForm_footer booking ">
              <BtnRecherche
                text=""
                classIcon={"!w-[110px] !h-[110px]"}
                classStyle="btnRechercheIcon filled primary medium btn-primary"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReserveCard;
