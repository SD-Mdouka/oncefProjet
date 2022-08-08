import SimpleImageSlider from "react-simple-image-slider";

const images = [
  {
    url: "https://www.oncf-voyages.ma/media/static/fr/images/KV1-ONCF-MRE-Al-Boraq-VF-1.jpg",
  },
  {
    url: "https://www.oncf-voyages.ma/media/static/fr/images/Bannière-ONCF-Offres-Été-2022-Desktop.jpg",
  },
  {
    url: "https://www.oncf-voyages.ma/media/static/fr/images/Bannière-ONCF-Avantages-e-billet-Après-vente-Desktop.jpg",
  },
  {
    url: "https://www.oncf-voyages.ma/media/static/fr/images/Bannière-ONCF-Offre-Petits-Groupes-Été-2022-Desktop.jpg",
  },
  {
    url: "https://www.oncf-voyages.ma/media/static/fr/images/ONCF-Bannière-Yalla-Family-Tanger-Desktop.jpg",
  },
  {
    url: "https://www.oncf-voyages.ma/media/static/fr/images/ONCF-Bannière-Carte-Touristique-Ntsara-Bladi-Réduction-30-Desktop.jpg",
  },
  {
    url: "https://www.oncf-voyages.ma/media/static/fr/images/ONCF-Bannière-Chatbot-MONCF-V3-Desktop.jpg",
  },
  {
    url: "https://www.oncf-voyages.ma/media/static/fr/images/ONCF-Bannière-TrainArt-Été-2022-2-Desktop.jpg",
  },
  {
    url: "https://www.oncf-voyages.ma/media/static/fr/images/ONCF-Bannière-Al-Boraq-Nautico-Tanger-Marina-2-2-Desktop.jpg",
  },
];

const SlideImage = () => {
  return (
    <div>
      <SimpleImageSlider
        width={896}
        height={504}
        images={images}
        showBullets={true}
        showNavs={true}
      />
    </div>
  );
};
export default SlideImage;