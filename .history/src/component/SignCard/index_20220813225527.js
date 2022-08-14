import React from "react";
import { IconsAPRESVENTE } from "../Navbar/Icon";
import SlideToggle from "react-slide-toggle";
import "./style.css";

const Collapse = () => {
  return (
    <SlideToggle
      duration={1000}
      collapsed={true}
      whenReversedUseBackwardEase={false}
      render={({ toggle, setCollapsibleElement }) => (
        <>
          <div
            className="ant-card ant-popover-inner "
            ref={setCollapsibleElement}
          >
            <div className="ant-card AuthPopover mt-[300px] ml-[100px]">
              <div className="ant-card-head">
                <div className="ant-card-head-wrapper">
                  <div className="ant-card-head-title">
                    <label className="AuthPopover_title">Je m'identifie</label>
                  </div>
                </div>
              </div>
              <div className="ant-card-body">
                <div className="SignInForm">
                  <label className="SignInForm_label">Mon e-mail</label>
                  <div className="SignInForm_input">
                    <div className="InputWrapper">
                      <input
                        placeholder="example@domain.com"
                        rules="[object Object]"
                        namespace="SignInForm"
                        id="SignInFormUsername"
                        field=""
                        className="ant-input CustomInput "
                        type="text"
                        value=""
                      />
                    </div>
                  </div>
                  <label className="SignInForm_label">Mon mot de passe</label>
                  <div className="SignInForm_input">
                    <div className="InputWrapper">
                      <input
                        placeholder="********"
                        rules="[object Object]"
                        namespace="SignInForm"
                        id="SignInFormPassword"
                        field=""
                        type="password"
                        className="ant-input CustomInput "
                      />
                    </div>
                  </div>
                  <div className="SignInForm_pswForgotten">
                    <a tag="a" className="CustomLink--default" rel="noopener">
                      J'ai oublié mon mot de passe
                    </a>
                  </div>
                  <button
                    type="button"
                    className="ant-btn btn-secondary SignInForm_ctaSignIn ant-btn-secondary ant-btn-round"
                  >
                    <span>Je m'identifie</span>
                  </button>
                </div>
                <div className="AuthPopover_link">
                  <a
                    tag="a"
                    className="CustomLink--secondary"
                    href="/creation-compte"
                  >
                    Je ne suis pas encore inscrit
                  </a>
                </div>
              </div>
            </div>
          </div>
          <button className="btn btn-primary" onClick={toggle}>
            <IconsAPRESVENTE />
          </button>
        </>
      )}
    />
  );
};

export default Collapse;
