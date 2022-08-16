import React from 'react';
import { BtnRecherche } from '../share-component/BtnRecherche';
import IconRserve from '../share-component/svgs/IconRserve';
import Input from '../share-component/Input';
import { Label } from '../share-component/Label';

const AchateBille = () => {
  return (
    <div id='ReserveCard' className='Forms searchForm'>
      <div className='child flex-col space-x-1'>
        <div className='textfield'>
          <Label text={'Ma gare de départ'} classes='labelfieild' />
          <Input
            placeholder={'Ma gare de départ'}
            type={'text'}
            name={'code'}
          />
        </div>
        <div className='textfield'>
          <Label text={`Ma gare de d'arrivée`} classes='labelfieild' />
          <Input
            placeholder={"Ma gare d'arrivée"}
            type={'text'}
            name={'code'}
          />
        </div>
      </div>
      <div className='childAdresse flex-col space-x-1'>
        <div className='textfield'>
          <Label text={'Ma date de départ'} classes='labelfieild' />
          <Input placeholder={'15/08/2022'} type={'email'} name={'email'} />
        </div>
        <div className='textfield'>
          <Label text={'Ma date de retour'} classes='labelfieild' />
          <Input placeholder={'mon retour'} type={'email'} name={'email'} />
        </div>
      </div>
      <div className='childAdresse flex-col space-x-1'>
        <div className='textfield'>
          <Label text={'Voyageurs'} classes='labelfieild' />
          <Input placeholder={'1 Adulte(s)'} type={'email'} name={'email'} />
        </div>
        <div className='textfield'>
          <Label text={'Mon confort'} classes='labelfieild' />
          <Input placeholder={'1 ére classe'} type={'email'} name={'email'} />
        </div>
      </div>
      <div width='80' className='layoutBtn'>
        <div className='ant-col searchForm_footer booking '>
          <BtnRecherche
            text=''
            classIcon={'100'}
            classStyle='btnRechercheIcon filled primary medium btn-primary'
          />
        </div>
      </div>
    </div>
  );
};

export default AchateBille;
