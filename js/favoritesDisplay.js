// js/favoritesDisplay.js

// Function to load favorites from local storage and display them
function loadFavorites() {
  const favoritesContainer = document.getElementById("favoritesContainer");

  // Retrieve favorites from local storage
  let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

  if (favorites.length === 0) {
    favoritesContainer.innerHTML =
      "<p>You have no favorite pairs saved yet.</p>";
    return;
  }

  // Iterate over favorites and create HTML elements for each
  favorites.forEach((pair, index) => {
    // Create a container for each favorite pair
    const pairDiv = document.createElement("div");
    pairDiv.classList.add("favorite-pair");

    // Create and append the image
    const img = document.createElement("img");
    img.src = pair.image;
    img.alt = `Favorite Image ${index + 1}`;
    img.width = 300; // Adjust as needed
    pairDiv.appendChild(img);

    // Create and append the quote
    const quote = document.createElement("p");
    quote.textContent = pair.quote;
    pairDiv.appendChild(quote);

    // Append the pair to the favorites container
    favoritesContainer.appendChild(pairDiv);
  });
}

// Function to clear all favorites
function clearFavorites() {
  if (confirm("Are you sure you want to clear all favorites?")) {
    localStorage.removeItem("favorites");
    const favoritesContainer = document.getElementById("favoritesContainer");
    favoritesContainer.innerHTML =
      "<p>You have no favorite pairs saved yet.</p>"; // Update the display
  }
}

// Event listener for the Clear Favorites button
document
  .getElementById("clearFavoritesBtn")
  .addEventListener("click", clearFavorites);

// Load favorites when the page loads
window.onload = loadFavorites;
