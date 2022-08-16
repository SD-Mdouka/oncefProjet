import React from "react";
import { BtnRecherche } from "../share-component/BtnRecherche";
import IconRserve from "../share-component/svgs/IconRserve";
import Input from "../share-component/Input";
import { Label } from "../share-component/Label";

const Reservation = () => {
  return (
    <div className="Forms searchForm">
      <div className="sc-jTzLTM gRHrnw">
        <div className="sc-dnqmqq iDggWg textfield">
          <div className="sc-bZQynM dMBiHs">
            <Label
              text={"Code du dossier de voyage / N° de commande CMI"}
              classes="labelfieild"
            />
            <div className="icon">
              <IconRserve />
            </div>
          </div>
          <Input
            placeholder={"Insérer le numéro"}
            type={"text"}
            name={"code"}
          />
        </div>
      </div>
      <div className="sc-jTzLTM gRHrnw">
        <div className="sc-dnqmqq iDggWg textfield">
          <div className="sc-bZQynM dMBiHs">
            <Label text={"Adresse email"} classes="label" />
          </div>
          <Input
            placeholder={"Adresse email utilisée lors de l'achat"}
            type={"email"}
            name={"email"}
          />
        </div>
      </div>
      <div width="60" className="sc-jTzLTM btNvT">
        <BtnRecherche />
      </div>
    </div>
  );
};

export default Reservation;
