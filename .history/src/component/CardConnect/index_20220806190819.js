import React from "react";
import { Button } from "../Button";
import "./style.css";

export const CardConnect = () => {
  return (
    <div className="relative bg-[#4a20aa] rounded-[20px] mx-[120px] my-auto">
      <div className="flex flex-end top-0 left-0 justify-center">
        <img src="https://www.oncf-voyages.ma/media/static/fr/images/illustration-contact.png" />
      </div>
      <div class="sc-cQFLBn hiAZpK">
        <div class="sc-gojNiO cSvYAy">
          <div class="sc-daURTG fejeVo">Centre de Relation Client</div>
          <div class="sc-bXGyLb eUVjMy">2255</div>
        </div>
        <div class="sc-lkqHmb bWSyka">
          <div class="sc-eLExRp bhfjpw">
            Vos avis, suggestions remarques et réclamations
          </div>
          <div class="sc-cbkKFq cXoHwL">
            <Button
              classStyle="btnStyle"
              href="https://www.oncf2255.ma/"
              title={"Écrivez - nous"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
