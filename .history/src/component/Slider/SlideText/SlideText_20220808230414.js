import React from 'react';
import { FormSlid } from './FormSlid';
import './index.css';

const SlideText = () => {
  return (
    <div
      className='bg-[url("https://www.oncf-voyages.ma/media/static/fr/images/illustration-cartes-1.png")] 
    bg-no-repeat bg-cover h-[955px]
    '
    >
      <div className='contentGlobal'>
        <div className='flex items-center containerLocal '>
          <FormSlid key={2} />
        </div>
      </div>
    </div>
  );
};
export default SlideText;
