import React, { useState } from "react";
import { IconsAPRESVENTE } from "../Navbar/Icon";
import SlideToggle from "react-slide-toggle";
import "./style.css";

const Collapse = () => {
  const [isVisible, setVisible, fadeProps] = useState();
  return (
    // <SlideToggle
    //   duration={1000}
    //   collapsed={true}
    //   whenReversedUseBackwardEase={true}
    //   render={({ toggle, setCollapsibleElement }) => (
    //     <>
    //       <div className="ant-card AuthPopover" ref={setCollapsibleElement}>
    //         <div className="ant-card-head">
    //           <div className="ant-card-head-wrapper">
    //             <div className="ant-card-head-title">
    //               <label className="AuthPopover_title">Je m'identifie</label>
    //             </div>
    //           </div>
    //         </div>
    //         <div className="ant-card-body">
    //           <div className="SignInForm">
    //             <label className="SignInForm_label">Mon e-mail</label>
    //             <div className="SignInForm_input">
    //               <div className="InputWrapper">
    //                 <input
    //                   placeholder="example@domain.com"
    //                   className="ant-input CustomInput "
    //                   type="text"
    //                 />
    //               </div>
    //             </div>
    //             <label className="SignInForm_label">Mon mot de passe</label>
    //             <div className="SignInForm_input">
    //               <div className="InputWrapper">
    //                 <input
    //                   placeholder="********"
    //                   rules="[object Object]"
    //                   namespace="SignInForm"
    //                   id="SignInFormPassword"
    //                   field=""
    //                   type="password"
    //                   className="ant-input CustomInput "
    //                 />
    //               </div>
    //             </div>
    //             <div className="SignInForm_pswForgotten">
    //               <a tag="a" className="CustomLink--default" rel="noopener">
    //                 J'ai oublié mon mot de passe
    //               </a>
    //             </div>
    //             <button
    //               type="button"
    //               className="ant-btn btn-secondary SignInForm_ctaSignIn ant-btn-secondary ant-btn-round"
    //             >
    //               <span className="text-[#fff]">Je m'identifie</span>
    //             </button>
    //           </div>
    //           <div className="AuthPopover_link">
    //             <a
    //               tag="a"
    //               className="CustomLink--secondary"
    //               href="/creation-compte"
    //             >
    //               Je ne suis pas encore inscrit
    //             </a>
    //           </div>
    //         </div>
    //       </div>
    //       <button className="btn btn-primary" onClick={toggle}>
    //         <IconsAPRESVENTE />
    //       </button>
    //     </>
    //   )}
    // />
    <>
      <button onClick={() => setVisible(!isVisible)}>Toggle visibility</button>
      {isVisible && <h2 {...fadeProps}>Now you see me...</h2>}
    </>
  );
};

export default Collapse;
