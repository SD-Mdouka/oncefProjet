import SimpleImageSlider from "react-simple-image-slider";
import { images } from "../../fakeData";
import "./style.css";

const SlideImage = () => {
  return (
    <div id="slider" className="slider-wrapper">
      <SimpleImageSlider
        navStyle={"#6a0dad"}
        navMargin={100}
        width={"100%"}
        height={708}
        images={images}
        showBullets={true}
        showNavs={true}
        autoPlay={true}
        slideDuration={1}
      />
    </div>
  );
};
export default SlideImage;
