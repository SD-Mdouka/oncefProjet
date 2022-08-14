import React, { useState } from "react";
import { slide as Menu } from "react-burger-menu";

const toggleMenu = ({ isOpen }) => {
  const menuWrap = document.querySelector(".bm-menu-wrap");
  isOpen
    ? menuWrap.setAttribute("aria-hidden", false)
    : menuWrap.setAttribute("aria-hidden", true);
};

const BurgerMenu = () => {
  const [contentVisible, setContentVisible] = useState(0);
  const toggleContentVisible = () => {
    // called at onClick of accordion button
    // toggles contentVisible between true and false

    setContentVisible((prevState) => !prevState);
  };
  return (
    <Menu noOverlay onStateChange={toggleMenu}>
      <div className="accordion_container">
        <div className="accordion">
          {/* when button clicked, toggle the contentVisible value in our state*/}
          <button
            type="button"
            className="accordion_title"
            onClick={toggleContentVisible}
          >
            Réserver et planifier
          </button>
        </div>
        {/* For the below Div hide / show */}
        <div
          className={`accordion_content ${
            contentVisible ? "show_content" : ""
          }`}
        >
          <div className="list_item_container">
            <p>
              <a href="/recherche-disponibilites">Acheter mon billet</a>
            </p>
          </div>
          <div className="list_item_container">
            <p>
              <a href="/recherche-disponibilites?tarif-reduits">
                Mon tarif réduit
              </a>
            </p>
          </div>
          <div className="list_item_container">
            <p>
              <a href="/apres-vente">Gérer ma réservation</a>
            </p>
          </div>
          <div className="list_item_container">
            <p>
              <a href="/recherche-horaires">Consulter mes horaires</a>
            </p>
          </div>
          <div className="">
            <p>
              <a href="/telechargement-des-horaires">
                Télécharger mes horaires
              </a>
            </p>
          </div>
        </div>
      </div>
      <a className="menu-item" href="/about">
        About
      </a>
      <a className="menu-item" href="/contact">
        Contact
      </a>
    </Menu>
  );
};

export default BurgerMenu;
