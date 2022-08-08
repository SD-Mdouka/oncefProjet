import React from 'react'
import {Line} from './share-component/Line';
import {LastText} from './share-component/LastText';
import {IconCard} from './share-component/IconCard';
import {Politice} from './share-component/Politice';
import { GroupeSite } from './GroupeSite';

import './index.css';
import { GroupSocial } from './GroupSocial';

const index = () => {
  return (
    <div>
        <Line/>
        <GroupSocial/>
        <GroupeSite/>
        <Line/>
        <Politice/>
        <IconCard/>
        <LastText/>
    </div>
  )
}

export default index