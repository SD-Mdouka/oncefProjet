import React from 'react';
import IconChange from './svgs/IconChange';

export const BtnChange = () => {
  return (
    <div id='btnChange'>
      <button type='button' className='ant-btn'>
        <i className='anticon anticon-swap'>
          <IconChange />
        </i>
      </button>
    </div>
  );
};
