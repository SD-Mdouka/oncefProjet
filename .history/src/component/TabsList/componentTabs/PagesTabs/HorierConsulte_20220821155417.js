import React from 'react';
import { BtnRecherche } from '../share-component/BtnRecherche';
import IconRserve from '../share-component/svgs/IconRserve';
import Input from '../share-component/Input';
import { Label } from '../share-component/Label';
import InputGare from '../share-component/InputInfo/InputGare';
import { BtnChange } from '../share-component/BtnChange';

const HorierConslute = () => {
  return (
    <div id='ReserveCard' className='Forms searchForm'>
      <div className='child flex-col space-x-1 ml-3 mr-4'>
        <div className='textfield'>
          <Label text={'Ma gare de départ'} classes='labelfieild' />
          <InputGare placeHolder={'Ma gare de départ'} />
        </div>
        <BtnChange />
        <div className='textfield mt-[25px]'>
          <Label text={`Ma gare de d'arrivée`} classes='labelfieild' />
          <InputGare placeHolder={"Ma gare d'arrivée"} />
        </div>
      </div>
      <div className='childAdresse flex-col space-x-1'>
        <div className='textfield'>
          <Label text={'Ma date de départ'} classes='labelfieild' />
          <Input placeholder={'15/08/2022'} type={'email'} name={'email'} />
        </div>
        <div className='textfield mt-[60px]'>
          <Label text={'Ma date de retour'} classes='labelfieild' />
          <Input placeholder={'mon retour'} type={'email'} name={'email'} />
        </div>
      </div>
      <div className='layoutBtn '>
        <div className='ant-col searchForm_footer booking '>
          <BtnRecherche
            text=''
            classIcon={'!w-[110px] !h-[110px]'}
            classStyle='btnRechercheIcon filled primary medium btn-primary'
          />
        </div>
      </div>
    </div>
  );
};

export default HorierConslute;
