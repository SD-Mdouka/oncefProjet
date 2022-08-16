import React from "react";
import Text from "../../share-component/Text";
import { BtnRecherche } from "./shar-component/BtnRecherche";
import IconRserve from "./shar-component/svgs/IconRserve";

const Reservation = () => {
  return (
    <div className="sc-gqjmRU gfgnpg travelCaseSearch">
      <div className="sc-VigVT cnXTMg searchForm">
        <div className="sc-jTzLTM gRHrnw">
          <div className="sc-dnqmqq iDggWg textfield">
            <div className="sc-bZQynM dMBiHs">
              label
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
              <div className="sc-gzVnrw bmTwsK label">
                <Text classStyle="" text="Adresse email" />
              </div>
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