import { InfoCircleFilled } from '@ant-design/icons';
import React from 'react';
import Input from '../share-component/Input';
import { Label } from '../share-component/Label';
import { Paragraph } from '../../../share-component/Paragraph';
import { BtnRecherche } from '../share-component/BtnRecherche';
const ReserveCard = () => {
  return (
    <div id='ReserveCard' classNameName='ant-row'>
      <div className='!pl-0 !pr-0'>
        <div className='!pl-[12px] !pr-[12px] AdvancedSearchWidget_auth--conventionne'>
          <div className='relative h-auto zoom-1 block -ml-[12px] -mr-[12px]'>
            <div className='ant-col block w-fit !pl-[12px] !pr-[12px]'>
              <div className='text-[#4a20aa] flex'>
                <b className='flex'>
                  <InfoCircleFilled className='mt-1 mr-1' />
                  Tarif réduit :
                </b>
                <Paragraph
                  text={`Bénéficiez de tarifs réduits en introduisant les coordonnées de
                votre carte d’abonnement / convention.`}
                  classStyle={'mt-0 mb-[1em]'}
                />
              </div>
              <div className='!pl-[12px] !pr-[12px] flex mb-2'>
                <div className='child '>
                  <div className='textfield'>
                    <Label text={'Ma carte'} classes='labelfieild ' />
                    <Input
                      placeholder={'Choisir'}
                      type={'text'}
                      name={'code'}
                    />
                  </div>
                </div>
                <div className='childAdresse '>
                  <div className='textfield'>
                    <Label text={`Mon code d'adhérent`} classes='labelfieild' />
                    <Input
                      placeholder={'ex : 123456789'}
                      type={'email'}
                      name={'email'}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id='reservation' className='Forms searchForm'>
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
              <Input
                placeholder={'1 Adulte(s)'}
                type={'email'}
                name={'email'}
              />
            </div>
            <div className='textfield'>
              <Label text={'Mon confort'} classes='labelfieild' />
              <Input
                placeholder={'1 ére classe'}
                type={'email'}
                name={'email'}
              />
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
      </div>
    </div>
  );
};

export default ReserveCard;
