import React from "react";
import "./styleMenu.css";

const MenuItem = () => {
  return (
    <div id="MenuContent">
      {" "}
      <nav className="accordion arrows accordion_container">
        <input type="radio" name="accordion" id="cb1" />
        <section className="box">
          <label className="box-title accordion" for="cb1">
            Réserver et planifier
          </label>
          <label className="box-close" for="acc-close"></label>
          <div className="box-content show_content accordion_content">
            <a href="/recherche-disponibilites">Acheter mon billet</a>
            <a href="/recherche-disponibilites?tarif-reduits">
              Mon tarif réduit
            </a>
            <p>
              <a href="/apres-vente">Gérer ma réservation</a>
            </p>
            <a href="/recherche-horaires">Consulter mes horaires</a>
            <a href="/telechargement-des-horaires">Télécharger mes horaires</a>
          </div>
        </section>
        <input type="radio" name="accordion" id="acc-close" />
      </nav>
    </div>
  );
};

export default MenuItem;
