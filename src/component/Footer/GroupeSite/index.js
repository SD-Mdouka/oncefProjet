import { OncfVoyages } from './OncfVoyages';
import './index.css';

export const GroupeSite = () => {
    return (
        <>
         <div className='list'>
            <OncfVoyages title={'Oncf Voyages'} lien1 = '/recherche-disponibilites' lien2="/apres-vente"  textl2="Gérer la réservation" textl1="Réserver et planifier"/>
            <OncfVoyages title={'Sites du groupe'} lien1 = 'https://www.oncf.ma/' lien2="http://www.supratours.ma/"  textl2="supratours.ma" textl1="oncf.ma"/>
         </div> 
        </>
    )
}