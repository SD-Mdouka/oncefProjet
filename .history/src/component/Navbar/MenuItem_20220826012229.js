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
  {
    id: "cb2",
    title: " Abonnements et réductions",
    Item: [
      { name: "Cartes d'abonnement", url: "/carte-navette-hebdo" },
      {
        name: "Cartes de réduction",
        url: "/carte-jeune",
      },
    ],
  },
  {
    id: "cb3",
    title: "Tarifs et promos",
    Item: [
      { name: "Yalla", url: "/yalla-al-boraq" },
      {
        name: "Yalla Family",
        url: "/yalla-family",
      },
      {
        name: "Tarif MRE Ahlan",
        url: "/tarif-mre-ahlan-bienvenue-a-nos-mre-dans-leur-pays",
      },
      {
        name: "Carte Ntsara Bladi",
        url: "/carte-ntsara-bladi",
      },
      {
        name: "Offre Petits Groupes",
        url: "/offre-petits-groupes",
      },
      {
        name: "Train'Art",
        url: "/train-art-ete-2022",
      },
      {
        name: "Al Boraq Nautico",
        url: "/al-boraq-nautico-ete-2022",
      },
    ],
  },
  {
    id: "cb4",
    title: "Train + Auto",
    Item: [
      { name: "Location à la journée", url: "/location-journee" },
      {
        name: "Voitures en libre-service",
        url: "/voitures-libre-service",
      },
    ],
  },
  {
    id: "cb5",
    title: " Infos et services",
    Item: [
      { name: "Cartes d'abonnement", url: "/carte-navette-hebdo" },
      { name: "Actualités", url: "/actualites-3" },
      {
        name: " Utilisation du site",
        url: "/comment-acheter-sur-oncf-voyages",
      },
      { name: "Conditions d'après-vente", url: "/apv" },
      { name: "Services à distance", url: "/chatbot" },
      { name: "Assistance et réclamation", url: "https://www.oncf2255.ma/" },
    ],
  },
];

const MenuItem = () => {
  return (
    <div id="MenuContent">
      {ListItemMenu.map((items) => {
        return (
          <nav className="accordion arrows ">
            <input
              type="radio"
              className="!text-[#fff]"
              name="accordion"
              id={items.id}
            />
            <section className="box !text-[#fff]">
              <label className="box-title text-[#fff]" for={items.id}>
                {items.title}
              </label>
              <label className="box-close" for="acc-close"></label>
              {items.Item.map((item) => {
                return (
                  <div className="box-content">
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
