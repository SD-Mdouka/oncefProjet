import React from "react";
import "./styleMenu.css";

const ListItemMenu = [
  {
    id: "cb1",
    title: "Réserver et planifier",
    Item: [
      { name: "Acheter mon billet", url: "/recherche-disponibilites" },
      {
        name: "Mon tarif réduit",
        url: "/recherche-disponibilites?tarif-reduits",
      },
      { name: "Gérer ma réservation", url: "/apres-vente" },
      { name: "Consulter mes horaires", url: "/recherche-horaires" },
      { name: "Télécharger mes horaires", url: "/telechargement-des-horaires" },
    ],
  },
];

const MenuItem = () => {
  return (
    <div id="MenuContent">
      {ListItemMenu.map((items) => {
        return (
          <nav className="accordion arrows">
            <input type="radio" name="accordion" id={items.id} />
            <section className="box">
              <label className="box-title accordion" for={items.id}>
                {items.title}
              </label>
              <label className="box-close" for="acc-close"></label>
              {items.Item.map((item) => {
                return (
                  <div className="box-content show_content accordion_content">
                    <p>
                      <a href={item.url}>{item.name}</a>
                    </p>
                  </div>
                );
              })}
            </section>
            <input type="radio" name="accordion" id="acc-close" />
          </nav>
        );
      })}
    </div>
  );
};

export default MenuItem;
