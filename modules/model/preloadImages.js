const icons = [
  "anchor.svg",
  "bell.svg",
  "check.svg",
  "crown.svg",
  "gear.svg",
  "gifts.svg",
  "shop.svg",
  "smile.svg",
  "star.svg",
  "thumbs.svg",
  "atom.svg",
  "drink.svg",
  "lamp.svg",
  "music.svg",
  "target.svg",
  "spade.svg",
  "clover.svg",
  "snowman.svg",
];

const images = [];

export default function preloadImages(){
  for (let i = 0; i < icons.length; i++){
    const img = new Image();
  
    img.src = icons[i];
    images.push(images);
  }
}