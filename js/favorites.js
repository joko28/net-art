// js/favorites.js

// Function to save the current pair to favorites
function saveFavorite() {
  const imgElement = document.getElementById("randomImage");
  const quoteElement = document.getElementById("quoteText");

  const favoritePair = {
    image: imgElement.src,
    quote: quoteElement.textContent,
  };

  // Retrieve existing favorites from local storage, or initialize an empty array
  let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

  // Check if the favorite pair already exists
  const isDuplicate = favorites.some(
    (pair) =>
      pair.image === favoritePair.image && pair.quote === favoritePair.quote
  );

  if (isDuplicate) {
    alert("This favorite is already saved!");
    return; // Exit the function if it's a duplicate
  }

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
