import React from "react";
import { FormSlid } from "./FormSlid";
import "./index.css";

const texts = [
  {
    id: 1,
    FormSlidText: <FormSlid idLine={1} />,
  },
  {
    id: 2,
    FormSlidText: <FormSlid idLine={2} />,
  },
  {
    id: 3,
    FormSlidText: <FormSlid idLine={3} />,
  },
  {
    id: 4,
    FormSlidText: <FormSlid idLine={4} />,
  },
];
const SlideText = () => {
  return (
    <div
      className='bg-[url("https://www.oncf-voyages.ma/media/static/fr/images/illustration-cartes-1.png")] 
    bg-no-repeat bg-cover h-[955px]
    '
    >
      <div className="contentGlobal">
        <div className="flex items-center containerLocal ">
          <FormSlid idLine={2} />
        </div>
      </div>
    </div>
  );
};
export default SlideText;
