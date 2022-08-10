import React from "react";
import { FormSlid } from "./FormSlid";
import SimpleImageSlider from "react-simple-image-slider";
import "./index.css";

const texts = [
  {
    FormSlidText: <FormSlid idLine={1} />,
  },
  {
    FormSlidText: <FormSlid idLine={2} />,
  },
  {
    FormSlidText: <FormSlid idLine={3} />,
  },
  {
    FormSlidText: <FormSlid idLine={4} />,
  },
];
const SlideText = () => {
  return (
    <div
      className='bg-[url("https://www.oncf-voyages.ma/media/static/fr/images/illustration-cartes-1.png")] 
    bg-no-repeat bg-cover h-[955px]'
    >
      <div className="contentGlobal">
        <div className="flex items-center containerLocal ">
          <SimpleImageSlider
            navStyle={2}
            navMargin={150}
            width={"100%"}
            height={708}
            images={texts}
            showBullets={true}
            showNavs={true}
            autoPlay={true}
            slideDuration={1.5}
          />
        </div>
      </div>
    </div>
  );
};
export default SlideText;
