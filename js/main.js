// js/main.js

// Arrays of image paths and poems
const images = [
  "images/mushroom-640.jpg",
  "images/birds-640.jpg",
  "images/trees-640.jpg",
  "images/mountain-640.jpg",
  "images/sunset-640.jpg",
  // Add more image paths as needed
];

const poems = [
  "Whispers of the night, under moonlit skies so bright.",
  "Urban echoes dance, shadows play in twilight's glance.",
  "Morning dew on petals, sunlight breaks through the nettles.",
  "Silent forests speak, secrets hide in every creek.",
  "Stars align above, a symphony of endless love.",
  // Add more poems as needed
];

// Variables to keep track of current indices
let currentImageIndex = 0;
let currentPoemIndex = 0;

// Function to get a random index different from the current one
function getRandomIndex(arrayLength, currentIndex) {
  if (arrayLength <= 1) return 0; // Only one element available

  let newIndex;
  do {
    newIndex = Math.floor(Math.random() * arrayLength);
  } while (newIndex === currentIndex);
  return newIndex;
}

// Function to show a new random image and poem
function showRandomPhotoPoem() {
  // Get new indices
  const newImageIndex = getRandomIndex(images.length, currentImageIndex);
  const newPoemIndex = getRandomIndex(poems.length, currentPoemIndex);

  const imgElement = document.getElementById("randomImage");
  const poemElement = document.getElementById("poemText");

  // Add fade-out class
  imgElement.classList.add("fade-out");
  poemElement.classList.add("fade-out");

  // After fade-out transition
  setTimeout(() => {
    // Update image
    imgElement.src = images[newImageIndex];
    imgElement.alt = getAltText(newImageIndex);
    currentImageIndex = newImageIndex;

    // Update poem
    poemElement.textContent = poems[newPoemIndex];
    currentPoemIndex = newPoemIndex;

    // Remove fade-out and add fade-in
    imgElement.classList.remove("fade-out");
    poemElement.classList.remove("fade-out");
    imgElement.classList.add("fade-in");
    poemElement.classList.add("fade-in");

    // Remove fade-in class after transition completes
    setTimeout(() => {
      imgElement.classList.remove("fade-in");
      poemElement.classList.remove("fade-in");
    }, 500); // Duration matches the CSS transition duration
  }, 500); // Duration matches the CSS transition duration
}

// Function to generate descriptive alt text based on image index
function getAltText(index) {
  const descriptions = [
    "Mushroom in a forest setting",
    "Dense forest with towering trees",
    "Serene lake reflecting the sky",
    "Majestic mountain under a clear blue sky",
    "Sunset over a tranquil landscape",
    // Add more descriptions corresponding to images
  ];

  return descriptions[index] || "Artistic depiction";
}

// Event listener for the randomize button
document
  .getElementById("randomizeBtn")
  .addEventListener("click", showRandomPhotoPoem);
