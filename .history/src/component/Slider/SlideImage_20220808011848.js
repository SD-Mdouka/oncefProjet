import SimpleImageSlider from "react-simple-image-slider";
import { images } from "../../fakeData";
import "./style.css";

const SlideImage = () => {
  return (
    <div className="slider-wrapper">
      <SimpleImageSlider
        className="img"
        style={{ margin: "0 auto", marginTop: "50px" }}
        navSize={50}
        navStyle={2}
        width={"100%"}
        height={704}
        images={images}
        showBullets={true}
        showNavs={true}
      />
    </div>
  );
};
export default SlideImage;
