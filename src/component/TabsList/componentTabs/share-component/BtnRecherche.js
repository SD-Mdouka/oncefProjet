import React from 'react';
import CachedIcon from '@mui/icons-material/Cached';

export const BtnRecherche = ({ classStyle, text = 'Recherche', classIcon }) => {
  return (
    <a className={classStyle}>
      <div className={'iconSvge'}>
        <CachedIcon className={classIcon} />
      </div>
      <span className='ml-[40px] w-full'>{text}</span>
    </a>
  );
};
