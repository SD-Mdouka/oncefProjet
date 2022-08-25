import React from "react";
import { Paragraph } from "../share-component/Paragraph";
import { Text } from "../share-component/Text";
import "./style.css";

const InfoTrafic = () => {
  return (
    <div id="infotrafic" className="p-[100px]">
      <div className="bg-img">
        <div className="imgLeft">
          <div className="imgContainer">
            <img
              src="https://www.oncf-voyages.ma/media/static/fr/images/icon-android_carre_4_39090.png"
              alt="ONCF Traffic"
            />
          </div>
          <Text classStyle={"imgTitle"} text={"ONCF TRAFIC"} />

          <div className="paragraph">
            <Paragraph text={"Je m'informe sur l'état"} />
            <br />
            <Paragraph text={"du trafic en temps réel."} />
          </div>
          <div className="imgTElecharge">
            <a href="https://itunes.apple.com/dz/app/oncf-trafic/id1246696539">
              <img
                src="https://www.oncf-voyages.ma/media/static/fr/images/icone-appstore.png"
                alt=""
              />
            </a>
            <a href="https://play.google.com/store/apps/details?id=ma.oncf.oncftrafic&amp;amp;hl=en">
              <img
                src="https://www.oncf-voyages.ma/media/static/fr/images/icone-googleplay.png"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default InfoTrafic;
