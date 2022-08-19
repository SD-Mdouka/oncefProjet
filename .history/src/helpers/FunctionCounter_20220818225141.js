import { React, useState, useEffect, useRef } from "react";

const FunctionCounter = ({ nameUser }) => {
  const [counter, setCounter] = useState(0);

  //condition disable

  // useEffect(() => {
  //   // countAdulte number is 6
  //   if (counterAdulte >= 6) {
  //     // plus adulte
  //     btnIncAdulteRef.current.disabled = true;
  //     btnDecAdulteRef.current.disabled = false;
  //   } else if (counterAdulte === 1) {
  //     //minus adulte
  //     btnIncAdulteRef.current.disabled = false;
  //     btnDecAdulteRef.current.disabled = true;
  //   } else if (counterAdulte === 6) {
  //     //minus adulte
  //     btnIncAdulteRef.current.disabled = false;
  //     btnDecAdulteRef.current.disabled = true;
  //   }
  //   // counter Enfant number is 6
  //   if (counterEnfant >= 4) {
  //     // plus adulte
  //     btnIncEnfantRef.current.disabled = true;
  //     btnDecEnfantRef.current.disabled = false;
  //   } else if (counterEnfant === 0) {
  //     //minus adulte
  //     btnIncEnfantRef.current.disabled = false;
  //     btnDecEnfantRef.current.disabled = true;
  //   }
  // }, [counterAdulte, counterEnfant]);

  //increase counter

  const increase = () => {
    if (nameUser === "Adulte") {
      setCounter((count) => count + 1);
    }
  };

  //decrease counter
  const decrease = () => {
    if (nameUser === "Adulte") {
      setCounter((count) => count - 1);
    }
  };

  //function couter
  const couters = () => {
    return (
      <div className="text-[#4a20aa] inline-block p-4 relative">
        <button className="bg-[#f4f1f7] rounded-[50%] w-5" onClick={decrease}>
          -
        </button>
        <span>{counter}</span>
        <button className="bg-[#f4f1f7] rounded-[50%] w-5" onClick={increase}>
          +
        </button>
      </div>
    );
  };

  if (nameUser === "Adulte") {
    return (
      <>
        <div className="TravelersCounterItem_label inline-block w-full">
          <span className="spacien">
            {nameUser}(s) <small>&gt; 15 ans</small>
          </span>
          {couters()}
        </div>
      </>
    );
  } else if (nameUser === "Enfant") {
    return (
      <div className="TravelersCounterItem_label inline-block w-full">
        <span className="spacien">
          {nameUser}(s) <small>&lt; 15 ans</small>
        </span>
        <span className="-ml-6">{couters()}</span>
      </div>
    );
  }
};

export default FunctionCounter;
