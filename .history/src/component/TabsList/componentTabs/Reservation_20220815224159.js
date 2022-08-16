import React from "react";

import { BtnRecherche } from "./shar-component/BtnRecherche";
import IconRserve from "./shar-component/svgs/IconRserve";
import { Label } from "./share-component/Label";

const Reservation = () => {
  return (
    <div className="sc-gqjmRU gfgnpg travelCaseSearch">
      <div className="sc-VigVT cnXTMg searchForm">
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
            <input
              type="text"
              name="code"
              placeholder="Insérer le numéro"
              className="sc-htoDjs kPpUxs"
              value=""
            />
          </div>
        </div>
        <div className="sc-jTzLTM gRHrnw">
          <div className="sc-dnqmqq iDggWg textfield">
            <div className="sc-bZQynM dMBiHs">
              <Label text={"Adresse email"} classes="label" />
            </div>
            <input
              type="text"
              name="email"
              placeholder="Adresse email utilisée lors de l'achat"
              className="sc-htoDjs kPpUxs"
              value=""
            />
          </div>
        </div>
        <div width="60" className="sc-jTzLTM btNvT">
          <BtnRecherche />
        </div>
      </div>
    </div>
  );
};

export default Reservation;
