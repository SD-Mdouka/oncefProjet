import SimpleImageSlider from "react-simple-image-slider";
import { images } from "../../fakeData";
import "./style.css";

const SlideImage = () => {
  return (
    <div className="slider-wrapper">
      <SimpleImageSlider
        width={1200}
        height={504}
        images={images}
        showBullets={true}
        showNavs={true}
      />
    </div>
  );
};
export default SlideImage;
