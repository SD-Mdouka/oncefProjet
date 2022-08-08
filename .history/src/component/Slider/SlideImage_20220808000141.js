import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const fadeImages = [
  {
    url: "https://www.oncf-voyages.ma/media/static/fr/images…3%A8re-ONCF-Offres-%C3%89t%C3%A9-2022-Desktop.jpg",
    caption: "First Slide",
  },
  {
    url: "https://www.oncf-voyages.ma/media/static/fr/images…F-Avantages-e-billet-Apr%C3%A8s-vente-Desktop.jpg",
    caption: "Second Slide",
  },
  {
    url: "https://www.oncf-voyages.ma/media/static/fr/images…fre-Petits-Groupes-%C3%89t%C3%A9-2022-Desktop.jpg",
    caption: "Third Slide",
  },
  {
    url: "https://www.oncf-voyages.ma/media/static/fr/images/ONCF-Banni%C3%A8re-Yalla-Family-Tanger-Desktop.jpg",
    caption: "Fore Slide",
  },
  {
    url: "https://www.oncf-voyages.ma/media/static/fr/images…stique-Ntsara-Bladi-R%C3%A9duction-30-Desktop.jpg",
    caption: "Five Slide",
  },
  {
    url: "https://www.oncf-voyages.ma/media/static/fr/images/ONCF-Banni%C3%A8re-Chatbot-MONCF-V3-Desktop.jpg",
    caption: "Sex Slide",
  },
  {
    url: "https://www.oncf-voyages.ma/media/static/fr/images…C3%A8re-TrainArt-%C3%89t%C3%A9-2022-2-Desktop.jpg",
    caption: "Seven Slide",
  },
  {
    url: "https://www.oncf-voyages.ma/media/static/fr/images…re-Al-Boraq-Nautico-Tanger-Marina-2-2-Desktop.jpg",
    caption: "Eight Slide",
  },
  {
    url: "https://www.oncf-voyages.ma/media/static/fr/images/KV1-ONCF-MRE-Al-Boraq-VF-1.jpg",
    caption: "Neuf Slide",
  },
];

const Slideshow = () => {
  return (
    <div className="slide-container">
      <Slide>
        {fadeImages.map((fadeImage, index) => (
          <div className="each-slide" key={index}>
            <div className="image-container">
              <img src={fadeImage.url} />
            </div>
            <h2>{fadeImage.caption}</h2>
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default Slideshow;
