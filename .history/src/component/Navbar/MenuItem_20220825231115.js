import React from "react";
import "./styleMenu.css";

const MenuItem = () => {
  return (
    <div>
      {" "}
      <nav className="accordion arrows accordion_container">
        <div className="accordion_container">
          <div className="accordion">
            {/* when button clicked, toggle the contentVisible value in our state*/}
            <button
              type="button"
              className="accordion_title"
              // onClick={toggleContentOneVisible}
            >
              Réserver et planifier
            </button>
          </div>
          {/* For the below Div hide / show */}
          <div
            className={`accordion_content
           
            `}
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
        <input type="radio" name="accordion" id="cb1" />
        <section className="box">
          <label className="box-title accordion" for="cb1">
            Réserver et planifier
          </label>
          <label className="box-close" for="acc-close"></label>
          <div className="box-content show_content accordion_content">
            Click on an item to open. Click on its header or the list header to
            close.
          </div>
        </section>
        <input type="radio" name="accordion" id="acc-close" />
      </nav>
    </div>
  );
};

export default MenuItem;
