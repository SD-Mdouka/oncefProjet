import SimpleImageSlider from "react-simple-image-slider";
import { images } from "../../fakeData";
import "./style.css";

const SlideImage = () => {
  return (
    <div className="slider-wrapper">
      <SimpleImageSlider
        style={{
          transform: "translate3d(-160%, 0px, 0px)",
          transitionDuration: "350ms",
        }}
        width="100%"
        height={504}
        images={images}
        showBullets={true}
        showNavs={true}
      />
    </div>
  );
};
export default SlideImage;
