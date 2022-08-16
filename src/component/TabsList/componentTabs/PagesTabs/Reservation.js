import React from 'react';
import { BtnRecherche } from '../share-component/BtnRecherche';
import IconRserve from '../share-component/svgs/IconRserve';
import Input from '../share-component/Input';
import { Label } from '../share-component/Label';

const Reservation = () => {
  return (
    <div id='reservation' className='Forms searchForm'>
      <div className='child'>
        <div className='textfield'>
          <Label
            text={'Code du dossier de voyage / N° de commande CMI'}
            classes='labelfieild'
          />
          <Input
            placeholder={'Insérer le numéro'}
            type={'text'}
            name={'code'}
          />
        </div>
      </div>
      <div className='childAdresse'>
        <div className='textfield'>
          <Label text={'Adresse email'} classes='labelfieild' />
          <Input
            placeholder={"Adresse email utilisée lors de l'achat"}
            type={'email'}
            name={'email'}
          />
        </div>
      </div>
      <div width='60' className='layoutBtn'>
        <BtnRecherche
          classStyle='btnRecherche filled primary medium !pl-[65px]'
          classIcon={'24'}
        />
      </div>
    </div>
  );
};

export default Reservation;
