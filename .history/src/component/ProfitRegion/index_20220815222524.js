import React from 'react';
import { Text } from '../share-component/Text';
import { ListVoyage } from '../../fakeData';
import Items from './Items';
import './style.css';

const PortfitRegion = () => {
  return (
    <div className='content'>
      <div className='imgRight'></div>
      <div className='imgLeft'>
        <div className='imgLContent'></div>
      </div>
      <div className='w-full h-full mt-[-53px] px-0 py-[10px] overflow'>
        <Text classStyle={'Title'} text='Je profite des meilleurs tarifs !' />
        <div className='relative left-[525px] top-4 flex flex-col justify-between space-y-[50px] pr-[1050px]'>
          {ListVoyage.map((item) => {
            return (
              <div id='content' className='relative' key={item.id}>
                <Items nameVoyage={item.nameVoyage} key={item.id} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default PortfitRegion;
