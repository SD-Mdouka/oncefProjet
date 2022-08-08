import SimpleImageSlider from 'react-simple-image-slider';
import { images } from '../../fakeData';
import './style.css';

const SlideImage = () => {
  return (
    <div className='slider-wrapper'>
      <SimpleImageSlider
        navStyle={2}
        navMargin={150}
        width={'100%'}
        height={708}
        images={images}
        showBullets={true}
        showNavs={true}
        autoPlay={true}
        slideDuration={1.5}
      />
    </div>
  );
};
export default SlideImage;
