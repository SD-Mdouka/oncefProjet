import SimpleImageSlider from "react-simple-image-slider";
import { images } from "../../fakeData";
import "./style.css";

const SlideImage = () => {
  return (
    <div id="slider" className="slider-wrapper">
      <SimpleImageSlider
        navStyle={"#6a0dad"}
        width={"100%"}
        height={708}
        images={images}
        showBullets={true}
        showNavs={true}
        autoPlay={true}
        slideDuration={0.6}
      />
    </div>
  );
};
export default SlideImage;
