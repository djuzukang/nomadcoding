const images = [
  'image1.jpg',
  'image2.jpg',
  'image3.jpg',
  'image4.jpg',
  'image5.jpg',
  'image6.jpg',
  'image7.jpg',
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

// const bgImage = document.createElement('img');
// bgImage.src = `img/${chosenImage}`;

// document.body.appendChild(bgImage);
document.body.style.backgroundImage = `url('img/${chosenImage}')`;
document.body.style.backgroundSize = 'cover';
document.body.style.backgroundPosition = 'center';
