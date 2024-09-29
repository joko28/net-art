// js/favorites.js

// Function to save the current pair to favorites
function saveFavorite() {
  const imgElement = document.getElementById("randomImage");
  const poemElement = document.getElementById("poemText");

  const favoritePair = {
    image: imgElement.src,
    poem: poemElement.textContent,
  };

  // Retrieve existing favorites from local storage, or initialize an empty array
  let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

  // Add the new favorite pair
  favorites.push(favoritePair);

  // Save the updated favorites array back to local storage
  localStorage.setItem("favorites", JSON.stringify(favorites));

  alert("Favorite saved!");
}

// Event listener for the Save Favorite button
document
  .getElementById("saveFavoriteBtn")
  .addEventListener("click", saveFavorite);
