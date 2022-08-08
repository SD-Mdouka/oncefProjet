import SimpleImageSlider from "react-simple-image-slider";
import { images } from "../../fakeData";

const SlideImage = () => {
  return (
    <div>
      <SimpleImageSlider
        width={896}
        height={504}
        images={images}
        showBullets={true}
        showNavs={true}
      />
    </div>
  );
};
export default SlideImage;
