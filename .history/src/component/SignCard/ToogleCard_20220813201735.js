import React from "react";
import { IconsAPRESVENTE } from "../Navbar/Icon";
import SlideToggle from "react-slide-toggle";

const Collapse = () => {
  return (
    <SlideToggle
      duration={1000}
      collapsed={true}
      whenReversedUseBackwardEase={false}
      render={({ toggle, setCollapsibleElement }) => (
        <div style="position: absolute; top: 0px; left: 0px; width: 100%;">
          <div className="card mt-4">
            <div className="card-header">
              <button className="btn btn-primary" onClick={toggle}>
                <IconsAPRESVENTE />
              </button>
            </div>
            <div className="card-body p-0" ref={setCollapsibleElement}>
              <div className="p-3">
                <h3>I am Groot</h3>
                <p>
                  We are Groot. I am Groot. I am Groot. We are Groot. We are
                  Groot. We are Groot. We are Groot. We are Groot. I am Groot.
                  We are Groot. I am Groot. We are Groot. I am Groot. I am
                  Groot. We are Groot. I am Groot. I am Groot. I am Groot. We
                  are Groot. We are Groot. We are Groot. I am Groot. We are
                  Groot. I am Groot. We are Groot.
                </p>
                <p>
                  We are Groot. I am Groot. I am Groot. We are Groot. We are
                  Groot. We are Groot. I am Groot. I am Groot. We are Groot. We
                  are Groot. I am Groot. I am Groot. I am Groot. I am Groot. We
                  are Groot. I am Groot. We are Groot. We are Groot. We are
                  Groot. We are Groot. I am Groot. We are Groot. We are Groot. I
                  am Groot. I am Groot.
                </p>
                <p>
                  I am Groot. We are Groot. I am Groot. I am Groot. I am Groot.
                  We are Groot. We are Groot. I am Groot. I am Groot. I am
                  Groot. We are Groot. I am Groot. We are Groot. We are Groot. I
                  am Groot. We are Groot. I am Groot. I am Groot. We are Groot.
                  We are Groot. We are Groot. I am Groot. We are Groot. We are
                  Groot. We are Groot.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    />
  );
};

export default Collapse;
