import React from 'react';
import TextSvgs from '../share-component/svgs/TextSvgs';

export const BtnRecherche = ({ classStyle, text = 'Recherche', classIcon }) => {
  return (
    <a className={classStyle}>
      <div className={'iconSvge'}>
        <TextSvgs height={classIcon} />
      </div>
      <span className='ml-[40px] w-full'>{text}</span>
    </a>
  );
};
