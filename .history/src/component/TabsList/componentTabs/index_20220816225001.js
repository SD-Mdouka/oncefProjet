import React from 'react';
import Layout from './share-component/Layout';
import Reservation from './PagesTabs/Reservation';
import ReserveCard from './PagesTabs/ReserveCard';
import AchateBille from './PagesTabs/AchateBille';
import HorierConsulte from './PagesTabs/HorierConsulte';
import './StyleTabs.css';

const ComponentTaps = ({ steps }) => {
  return (
    <Layout>
      {steps === 1 && <AchateBille />}
      {steps === 2 && <HorierConsulte />}
      {steps === 3 && <ReserveCard />}
      {steps === 4 && <Reservation />}
    </Layout>
  );
};
export default ComponentTaps;
