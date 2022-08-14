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
        <div>
          <div className="card mt-4">
            <button className="btn btn-primary" onClick={toggle}>
              <IconsAPRESVENTE />
            </button>
            <div className="card-body p-0" ref={setCollapsibleElement}>
              <div class="ant-popover-inner-content">
                <div class="ant-card AuthPopover">
                  <div class="ant-card-head">
                    <div class="ant-card-head-wrapper">
                      <div class="ant-card-head-title">
                        <label class="AuthPopover_title">Je m'identifie</label>
                      </div>
                    </div>
                  </div>
                  <div class="ant-card-body">
                    <div class="SignInForm">
                      <label class="SignInForm_label">Mon e-mail</label>
                      <div class="SignInForm_input">
                        <div class="InputWrapper">
                          <input
                            placeholder="example@domain.com"
                            rules="[object Object]"
                            namespace="SignInForm"
                            id="SignInFormUsername"
                            field=""
                            class="ant-input CustomInput "
                            type="text"
                            value=""
                          />
                        </div>
                      </div>
                      <label class="SignInForm_label">Mon mot de passe</label>
                      <div class="SignInForm_input">
                        <div class="InputWrapper">
                          <input
                            placeholder="********"
                            rules="[object Object]"
                            namespace="SignInForm"
                            id="SignInFormPassword"
                            field=""
                            type="password"
                            class="ant-input CustomInput "
                          />
                        </div>
                      </div>
                      <div class="SignInForm_pswForgotten">
                        <a tag="a" class="CustomLink--default" rel="noopener">
                          J'ai oublié mon mot de passe
                        </a>
                      </div>
                      <button
                        type="button"
                        class="ant-btn btn-secondary SignInForm_ctaSignIn ant-btn-secondary ant-btn-round"
                      >
                        <span>Je m'identifie</span>
                      </button>
                    </div>
                    <div class="AuthPopover_link">
                      <a
                        tag="a"
                        class="CustomLink--secondary"
                        href="/creation-compte"
                      >
                        Je ne suis pas encore inscrit
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    />
  );
};

export default Collapse;
