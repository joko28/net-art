// js/main.js

// Arrays of image paths and poems
const images = [
  "images/mushroom-forest-moss-640.jpg",
  "images/birds-branch-640.jpg",
  "images/trees-lake-sunrise-640.jpg",
  "images/water-lake-640.jpg",
  "images/trees-fall-640.jpg",
  "images/pink-cherry-blossoms-640.jpg",
  "images/mountains-alps-meadow-640.jpg",
  "images/mountains-alps-640.jpg",
  "images/lake-thun-mountains-640.jpg",
  "images/grass-dewdrop-640.jpg",
  "images/forest-snow-winter-640.jpg",
  "images/flowers-chamomile-640.jpg",
  "images/field-sunrise-640.jpg",
  "images/beach-waves-640.jpg",
  "images/avenue-trees-path-640.jpg",
  // Add more image paths as needed
];

const poems = [
  "Whispers of the night, under moonlit skies so bright.",
  "Urban echoes dance, shadows play in twilight's glance.",
  "Morning dew on petals, sunlight breaks through the nettles.",
  "Silent forests speak, secrets hide in every creek.",
  "Stars align above, a symphony of endless love.",
  "Shadows dance beneath the trees, carried softly by the breeze.",
  "Waves kiss the shore with gentle grace, as stars reflect the ocean’s face.",
  "The forest hums with twilight song, a place where whispers still belong.",
  "Under the silver moon’s soft glow, the night awakens, calm and slow.",
  "The dawn breaks through the misty haze, painting the sky with golden rays.",
  "Raindrops tap on leaves above, a lullaby of nature’s love.",
  "The river flows, both wild and free, whispering secrets to the trees.",
  "Beneath the stars, the night is still, while mountains rest, majestic, chill.",
  "Breezes weave through meadows green, where flowers bloom in sunlight’s sheen.",
  "Moonlight drips through ancient pines, a symphony of quiet signs.",
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

document
  .getElementById("poetryForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    const poemInput = document.getElementById("poemInput");
    const submittedPoemsContainer = document.getElementById("submittedPoems");

    // Create a new paragraph for the submitted poem
    const newPoem = document.createElement("p");
    newPoem.textContent = poemInput.value;

    // Add the new poem to the submitted poems section
    submittedPoemsContainer.appendChild(newPoem);

    // Clear the textarea for new input
    poemInput.value = "";
  });
