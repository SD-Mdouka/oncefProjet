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
          <div className="slideshow">
            <div
              className="slideshowSlider"
              style={{ transform: "translate3d(${-index * 100}%, 0, 0)" }}
            >
              {texts.map((backgroundColor, index) => (
                <div
                  className="slide"
                  key={index}
                  style={{ backgroundColor }}
                ></div>
              ))}
            </div>

            <div className="slideshowDots">
              {texts.map((_, idx) => (
                <div
                  key={idx}
                  className={`slideshowDot${index === idx ? " active" : ""}`}
                  onClick={() => {
                    setIndex(idx);
                  }}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SlideText;