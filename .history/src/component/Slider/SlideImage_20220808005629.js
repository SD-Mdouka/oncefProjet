import SimpleImageSlider from "react-simple-image-slider";
import { images } from "../../fakeData";
import "./style.css";

const SlideImage = () => {
  return (
    <div className="slider-wrapper">
      <SimpleImageSlider
        width={"100%"}
        height={"70%"}
        images={images}
        showBullets={true}
        showNavs={true}
      />
    </div>
  );
};
export default SlideImage;
