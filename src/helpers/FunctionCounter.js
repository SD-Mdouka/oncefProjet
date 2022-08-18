import { React, useState, useEffect, useRef } from 'react';

const FunctionCounter = ({ countAdulte, countEnfant, nameUser }) => {
  const [disable, setDisable] = useState(false);
  // const [counter, setCounter] = useState(props);
  const [counterAdulte, setCounterAdulte] = useState(countAdulte);

  const btnDecAdulteRef = useRef(null);
  const btnIncAdulteRef = useRef(null);

  const [counterEnfant, setCounterEnfant] = useState(countEnfant);

  const btnDecEnfantRef = useRef(null);
  const btnIncEnfantRef = useRef(null);

  //condition disable

  useEffect(() => {
    // countAdulte number is 6
    if (counterAdulte >= 6) {
      // plus adulte
      btnIncAdulteRef.current.disabled = true;
      btnDecAdulteRef.current.disabled = false;
    } else if (counterAdulte === 1) {
      //minus adulte
      btnIncAdulteRef.current.disabled = false;
      btnDecAdulteRef.current.disabled = true;
    } else if (counterAdulte === 6) {
      //minus adulte
      btnIncAdulteRef.current.disabled = false;
      btnDecAdulteRef.current.disabled = true;
    }
    // counter Enfant number is 6
    if (counterEnfant >= 4) {
      // plus adulte
      btnIncEnfantRef.current.disabled = true;
      btnDecEnfantRef.current.disabled = false;
    } else if (counterEnfant === 0) {
      //minus adulte
      btnIncEnfantRef.current.disabled = false;
      btnDecEnfantRef.current.disabled = true;
    }
  }, [counterAdulte, counterEnfant]);

  //increase counter

  const increase = () => {
    if (nameUser === 'Adulte') {
      setCounterAdulte((count) => count + 1);
    } else if (nameUser === 'Enfant') {
      setCounterEnfant((count) => count + 1);
    }
  };

  //decrease counter
  const decrease = () => {
    if (nameUser === 'Adulte') {
      setCounterAdulte((count) => count - 1);
    } else if (nameUser === 'Enfant') {
      setCounterEnfant((count) => count - 1);
    }
  };
  // //decrease counter
  // const handelChange = () => {
  //   if (counterEnfant === 0 || counterAdulte === 6) {
  //     // plus adulte
  //     btnIncEnfantRef.current.disabled = false;
  //     btnDecEnfantRef.current.disabled = false;
  //     console.log('good');
  //   }
  // };
  //function couter
  const couters = () => {
    if (nameUser === 'Adulte') {
      return (
        <span className=''>
          <div className='space-x-5 left-36 text-[#4a20aa] inline-block p-4 relative'>
            <button
              className='bg-[#f4f1f7] rounded-[50%] w-5'
              ref={btnDecAdulteRef}
              onClick={decrease}
            >
              -
            </button>
            <span onClick={(e) => e.preventDefault()}>{counterAdulte}</span>
            <button
              className='bg-[#f4f1f7] rounded-[50%] w-5'
              ref={btnIncAdulteRef}
              onClick={increase}
            >
              +
            </button>
          </div>
        </span>
      );
    } else if (nameUser === 'Enfant') {
      return (
        <span className=''>
          <div className='space-x-5 left-36 text-[#4a20aa] inline-block p-4 relative'>
            <button
              className='bg-[#f4f1f7] rounded-[50%] w-5'
              ref={btnDecEnfantRef}
              onClick={decrease}
              disabled={disable}
            >
              -
            </button>
            <span>{counterEnfant}</span>
            <button
              className='bg-[#f4f1f7] rounded-[50%] w-5'
              ref={btnIncEnfantRef}
              onClick={increase}
              disabled={disable}
            >
              +
            </button>
          </div>
        </span>
      );
    }
  };

  if (nameUser === 'Adulte') {
    return (
      <>
        <div className='TravelersCounterItem_label inline-block w-full'>
          <span className='spacien'>
            {nameUser}(s) <small>&gt; 15 ans</small>
          </span>
          {couters()}
        </div>
      </>
    );
  } else if (nameUser === 'Enfant') {
    return (
      <div className='TravelersCounterItem_label inline-block w-full'>
        <span className='spacien'>
          {nameUser}(s) <small>&lt; 15 ans</small>
        </span>
        <span className='-ml-6'>{couters()}</span>
      </div>
    );
  }
};

export default FunctionCounter;
