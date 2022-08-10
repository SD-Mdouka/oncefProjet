import React from "react";
import { FormSlid } from "./FormSlid";
import SimpleImageSlider from "react-simple-image-slider";
import "./index.css";

const texts = [
  {
    url: <FormSlid idLine={1} />,
  },
  {
    url: <FormSlid idLine={2} />,
  },
  {
    url: <FormSlid idLine={3} />,
  },
  {
    url: <FormSlid idLine={4} />,
  },
];
const delay = 2500;

const SlideText = () => {
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === colors.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);
  return (
    <div
      className='bg-[url("https://www.oncf-voyages.ma/media/static/fr/images/illustration-cartes-1.png")] 
    bg-no-repeat bg-cover h-[955px]'
    >
      <div className="contentGlobal">
        <div className="flex items-center containerLocal ">
          <SimpleImageSlider
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
