import React from "react";
import Layout from "./share-component/Layout";
import Reservation from "./PagesTabs/Reservation";
import ReserveCard from "./PagesTabs/ReserveCard";
import AchateBille from "./PagesTabs/AchateBille";
import HorierConsulte from "./PagesTabs/HorierConsulte";
import "./StyleTabs.css";

const ComponentTaps = ({ steps }) => {
  const [counterAdulte, setCounterAdulte] = useState(0);
  const [counterKids, setCounterKids] = useState(0);

  const params = {
    counterAdulte,
    setCounterAdulte,
    counterKids,
    setCounterKids,
  };

  return (
    <Layout>
      {steps === 1 && <AchateBille {...params} />}
      {steps === 2 && <HorierConsulte />}
      {steps === 3 && <ReserveCard />}
      {steps === 4 && <Reservation />}
    </Layout>
  );
};
export default ComponentTaps;
