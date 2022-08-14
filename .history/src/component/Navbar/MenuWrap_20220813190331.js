import React, { useState } from "react";
import { slide as Menu } from "react-burger-menu";

const toggleMenu = ({ isOpen }) => {
  const menuWrap = document.querySelector(".bm-menu-wrap");
  isOpen
    ? menuWrap.setAttribute("aria-hidden", false)
    : menuWrap.setAttribute("aria-hidden", true);
};

const BurgerMenu = () => {
  const [contentOneVisible, setContentOneVisible] = useState(0);
  const [contentTowVisible, setContentTwoVisible] = useState(0);
  const [contentThreVisible, setContentThreVisible] = useState(0);
  const [contentForeVisible, setContentForeVisible] = useState(0);
  const [contentFiveVisible, setContentFiveVisible] = useState(0);
  const toggleContentOneVisible = () => {
    setContentOneVisible((prevState) => !prevState);
  };
  const toggleContentTowVisible = () => {
    setContentTwoVisible((prevState) => !prevState);
  };
  const toggleContentThreVisible = () => {
    setContentThreVisible((prevState) => !prevState);
  };
  const toggleContentForeVisible = () => {
    setContentForeVisible((prevState) => !prevState);
  };
  const toggleContentFiveVisible = () => {
    setContentFiveVisible((prevState) => !prevState);
  };
  return (
    <Menu noOverlay onStateChange={toggleMenu}>
      <div className="accordion_container">
        <div className="accordion">
          {/* when button clicked, toggle the contentVisible value in our state*/}
          <button
            type="button"
            className="accordion_title"
            onClick={toggleContentOneVisible}
          >
            Réserver et planifier
          </button>
        </div>
        {/* For the below Div hide / show */}
        <div
          className={`accordion_content ${
            contentOneVisible ? "show_content" : ""
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
          <div className="list_item_container">
            <p>
              <a href="/telechargement-des-horaires">
                Télécharger mes horaires
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="accordion_container">
        <div className="accordion">
          <button
            type="button"
            className="accordion_title"
            onClick={toggleContentTowVisible}
          >
            Abonnements et réductions{" "}
          </button>
        </div>
        <div
          className={`accordion_content ${
            contentTowVisible ? "show_content" : ""
          }`}
        >
          <div className="list_item_container">
            <p>
              <a href="/carte-navette-hebdo">Cartes d'abonnement</a>
            </p>
          </div>
          <div className="list_item_container">
            <div class="sc-fONwsr bcdkPp">
              <a href="/carte-jeune">Cartes de réduction</a>
            </div>
          </div>
        </div>
      </div>
      <div className="accordion_container">
        <div className="accordion">
          <button
            type="button"
            className="accordion_title"
            onClick={toggleContentThreVisible}
          >
            Abonnements et réductions{" "}
          </button>
        </div>
        <div
          className={`accordion_content ${
            contentThreVisible ? "show_content" : ""
          }`}
        >
          <div className="list_item_container">
            <p>
              <a href="/carte-navette-hebdo">Cartes d'abonnement</a>
            </p>
          </div>
          <div className="list_item_container">
            <div class="sc-fONwsr bcdkPp">
              <a href="/carte-jeune">Cartes de réduction</a>
            </div>
          </div>
        </div>
      </div>
      <div className="accordion_container">
        <div className="accordion">
          <button
            type="button"
            className="accordion_title"
            onClick={toggleContentForeVisible}
          >
            Abonnements et réductions{" "}
          </button>
        </div>
        <div
          className={`accordion_content ${
            contentForeVisible ? "show_content" : ""
          }`}
        >
          <div className="list_item_container">
            <p>
              <a href="/carte-navette-hebdo">Cartes d'abonnement</a>
            </p>
          </div>
          <div className="list_item_container">
            <div class="sc-fONwsr bcdkPp">
              <a href="/carte-jeune">Cartes de réduction</a>
            </div>
          </div>
        </div>
      </div>
      <div className="accordion_container">
        <div className="accordion">
          <button
            type="button"
            className="accordion_title"
            onClick={toggleContentFiveVisible}
          >
            Abonnements et réductions{" "}
          </button>
        </div>
        <div
          className={`accordion_content ${
            contentFiveVisible ? "show_content" : ""
          }`}
        >
          <div className="list_item_container">
            <p>
              <a href="/carte-navette-hebdo">Cartes d'abonnement</a>
            </p>
          </div>
          <div className="list_item_container">
            <div class="sc-fONwsr bcdkPp">
              <a href="/carte-jeune">Cartes de réduction</a>
            </div>
          </div>
        </div>
      </div>
    </Menu>
  );
};

export default BurgerMenu;
