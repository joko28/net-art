// js/main.js

// Arrays of image paths and quotes
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
  "images/jellyfish-sea-blue_640.jpg",
  "images/puffin-bird-fish_640.jpg",
  "images/koi-fish-white_640.jpg",
  "images/animal-fish-koi_640.jpg",
  "images/animal-sea-turtle_640.jpg",
  "images/water-waves-splash_640.jpg",
  "images/ocean-sea-waves_640.jpg",
  "images/whale-humpback-tail_640.jpg",
  "images/rabbits-baby-ear_640.jpg",
  "images/owl-raptor-nature_640.jpg",
  "images/blue-tit-feeding_640.jpg",
  "images/sand-lizard-leaves_640.jpg",
  "images/crab-beach-sand_640.jpg",
  "images/owl-long-eared_640.jpg",
  "images/squirrel-rodent_640.jpg",
  "images/bird-bald-eagle_640.jpg",
  "images/horses-head-three_640.jpg",
  "images/penguin-underwater-bird_640.jpg",
  "images/horse-silhouette-sunset_640.jpg",
  "images/zebra-equine-animal_640.jpg",
  "images/bird-cockscomb-chicken_640.jpg",
  "images/llama-alpaca-animal_640.jpg",
  "images/cat-kitten-fluffy_640.jpg",
  "images/panda-bamboo-animal_640.jpg",
  "images/crocodile-eye-water_640.jpg",
  "images/rhinoceros-gray-animal_640.jpg",
  "images/raccoon-wild-animal_640.jpg",
  "images/horse-white-equine_640.jpg",
  "images/dove-nature-bird_640.jpg",
  "images/snail-shell-mollusk_640.jpg",
  "images/lynx-big-cat_640.jpg",
  "images/amphibian-red-frog_640.jpg",
  "images/lion-animal-mammal_640.jpg",
  "images/dolphin-ocean-atlantic_640.jpg",
  "images/turtle-reptile-pond_640.jpg",
  "images/cheetah-african-cat_640.jpg",
  "images/leopard-animal-safari_640.jpg",
  "images/otter-stone-mammal_640.jpg",
  "images/red-deer-fall_640.jpg",
  "images/deer-forest-nature_640.jpg",
  "images/sealion-mammal-aquatic_640.jpg",
  "images/bird-blue-peacock_640.jpg",
  "images/iceland-arctic-fox_640.jpg",
  "images/elephant-trunk-tusks_640.jpg",
  "images/capuchin-monkey_640.jpg",
  "images/snake-nature-animal_640.jpg",
  "images/animal-hedgehog-pet_640.jpg",
  "images/fox-stump-sleeping_640.jpg",
  "images/wolf-brown-canids_640.jpg",
  "images/cat-kitten-tree_640.jpg",
  "images/parrot-yellow-macaw_640.jpg",
  "images/animal-lion-nature_640.jpg",
  "images/bear-grizzly-animal_640.jpg",
  "images/thunderstorm-red-ocean_640.jpg",
  "images/flower-pink-water_640.jpg",
  "images/bee-insect-leaf_640.jpg",
  "images/owl-bird-animal_640.jpg",
  "images/insect-ladybug_640.jpg",
  "images/fog-ocean-beach_640.jpg",
  "images/red-maple-leaves_640.jpg",
  "images/frog-pond-water_640.jpg",
  "images/peacock-flowers-red_640.jpg",
  "images/aurora-northern-lights_640.jpg",
  "images/nature-clouds-travel_640.jpg",
  "images/lake-sunset-rocks_640.jpg",
  "images/grass-sunset-field_640.jpg",
  "images/butterflies-flowers-blue_640.jpg",
  "images/bird-beak-plumage_640.jpg",
  "images/monkeys-primates_640.jpg",
  "images/mountains-sunrise-fall_640.jpg",
  "images/chrysanthemum-pink_640.jpg",
  "images/tree-branch-bud_640.jpg",
  "images/forest-foliage-autumn_640.jpg",
  "images/butterfly-blue-insect_640.jpg",
  "images/coast-sea-waves_640.jpg",
  "images/nature-blue-sunset_640.jpg",
  "images/sunset-purple-water_640.jpg",
  "images/sunrise-morning-sun_640.jpg",
  "images/butterfly-red-flowers_640.jpg",
  "images/autumn-forest-road_640.jpg",
  "images/trees-widerness-nature_640.jpg",
  "images/sunset-dark-mountains_640.jpg",
  "images/leaves-raindrops_640.jpg",
  "images/pier-silhouette-sunrise_640.jpg",
  "images/cactus-nature-plant_640.jpg",
  // Add more image paths as needed
];

const quotes = [
  "I believe we are here on the planet Earth to live, grow up and do what we can to make this world a better place for all people to enjoy freedom. — Rosa Parks",
  "To love oneself is the beginning of a lifelong romance. — Oscar Wilde",
  "Sometimes the most important thing in a whole day is the rest we take between two deep breaths. — Etty Hillesum",
  "Knowing how to be solitary is central to the art of loving. When we can be alone, we can be with others without using them as a means of escape. — Bell Hooks",
  "Time you enjoy wasting is not wasted time. — Unknown",
  "Self-care is how you take your power back. — Lalah Delia",
  "Being happy never goes out of style. — Lilly Pulitzer",
  "You’re braver than you believe, and stronger than you seem, and smarter than you think. — A.A. Mine",
  "You are the sum total of everything you've ever seen, heard, eaten, smelled, been told, forgot—it's all there. Everything influences each of us, and because of that I try to make sure that my experiences are positive. — Maya Angelou",
  "Sometimes, when things are falling apart, they may actually be falling into place. — Unknown",
  "Find out who you are and do it on purpose. — Dolly Parton",
  "My mama always said, life is like a box of chocolates. You never know what you're gonna get. — Forrest Gump",
  "It's your outlook on life that counts. If you take yourself lightly and don't take yourself too seriously, pretty soon you can find the humor in our everyday lives. And sometimes it can be a lifesaver. — Betty White",
  "Say something positive, and you’ll see something positive. — Jim Thompson",
  "To succeed in life, you need three things: a wishbone, a backbone, and a funny bone. — Reba McEntire",
  "All you need in this life is ignorance and confidence; then success is sure. — Mark Twain",
  "Never lose sight of the fact that the most important yard stick to your success is how you treat other people. — Barbara Bush",
  "Do not judge me by my success, judge me by how many times I fell down and got back up again. — Nelson Mandela",
  "Failure is the condiment that gives success its flavor. — Truman Capote",
  "The secret to getting ahead is getting started. — Mark Twain",
  "Being a successful person is not necessarily defined by what you have achieved, but by what you have overcome. — Fannie Flagg, The All-Girl Filling Station's Last Reunion",
  "Many of life’s failures are people who did not realize how close they were to success when they gave up. — Thomas A. Edison",
  "Money and success don’t change people; they merely amplify what is already there. — Will Smith",
  "I have very strong feelings about how you lead your life. You always look ahead, you never look back. — Ann Richards",
  "All your life, you will be faced with a choice. You can choose love or hate…I choose love. — Johnny Cash",
  "I don't go by the rule book…I lead from the heart, not the head. — Princess Diana",
  "The events in our lives happen in a sequence in time, but in their significance to ourselves they find their own order the continuous thread of revelation. — Eudora Welty",
  "The time is always right to do what is right. — Martin Luther King Jr.",
  "The best thing to hold onto in life is each other. — Audrey Hepburn",
  "Life is not a spectator sport. If you're going to spend your whole life in the grandstand just watching what goes on, in my opinion you're wasting your life. — Jackie Robinson",
  "If you don't like the road you're walking, start paving another one. — Dolly Parton",
  "Despite the forecast, live like it's spring. — Lilly Pulitzer",
  "If I'd have done all the things I was supposed to have done, I'd be really tired. — Willie Nelson",
  "If you cannot do great things, do small things in a great way. — Napoleon Hill",
  "You may have to fight a battle more than once to win it. — Margaret Thatcher",
  "Your present circumstances don't determine where you can go; they merely determine where you start. — Nido Qubein",
  "You don't have to be great to start, but you have to start to be great. — Zig Ziglar",
  "Life has no limitations, except the ones you make. — Les Brown",
  "The two most important days in your life are the day you are born and the day you find out why. — Mark Twain",
  "Don't bother just to be better than your contemporaries or predecessors. Try to be better than yourself. — William Faulkner",
  "You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose. — Dr. Seuss, Oh, The Places You'll Go",
  "A life is not important except in the impact it has on other lives. — Jackie Robinson",
  "The older you get, the more fragile you understand life to be. I think that's good motivation for getting out of bed joyfully each day. — Julia Roberts",
  "Now it's the little moments that stop me in my tracks, because that's what life is all about. — Joanna Gaines",
  "Life is short, but it is wide. This too shall pass. — Rebecca Wells, Divine Secrets of the Ya-Ya Sisterhood",
  "Courage doesn't always roar. Sometimes courage is the little voice at the end of the day that says I'll try again tomorrow. — Mary Anne Radmacher",
  "It is not the strength of the body that counts, but the strength of the spirit. — J.R.R. Tolkien",
  "Courage is being scared to death, but saddling up anyway. — John Wayne",
  "Real courage is doing the right thing when nobody's looking. Doing the unpopular thing because it's what you believe, and the heck with everybody. — Justin Cronin",
  "It's your life; you don't need someone's permission to live the life you want. Be brave to live from your heart. — Roy T. Bennett, The Light in the Heart",
  "It's kind of fun to do the impossible. — Walt Disney",
  "When you believe in a thing, believe in it all the way, implicitly and unquestionable. — Walt Disney",
  "Everything you want is on the other side of fear. — Jack Canfield",
  "The difference between winning and losing is most often not quitting. — Walt Disney",
  "Do you give as much energy to your dreams as you do to your fears? — Unknown",
  "You have power over your mind – not outside events. Realize this, and you will find strength. — Marcus Aurelius",
  "The biggest adventure you can take is to live the life of your dreams. — Oprah Winfrey",
  "All serious daring starts from within. — Eudora Welty",
  "You'll never do a whole lot unless you're brave enough to try. — Dolly Parton",
  "It takes a deep commitment to change and an even deeper commitment to grow. — Ralph Ellison",
  "Stand for something or you will fall for anything. Today's mighty oak is yesterday's nut that held its ground. — Rosa Parks",
  "You cannot swim for new horizons until you have courage to lose sight of the shore. — William Faulkner",
  "Never let the fear of striking out keep you from playing the game. — Babe Ruth",
  "Each person must live their life as a model for others. — Rosa Parks",
  "So long as the memory of certain beloved friends lives in my heart, I shall say that life is good. — Helen Keller",
  "My mission in life is not merely to survive, but to thrive; and to do so with some passion, some compassion, some humor, and some style. — Maya Angelou",
  "Life just doesn't hand you things. You have to get out there and make things happen. That's the exciting part. — Emeril Lagasse",
  "I've been around a long time, and life still has a whole lot of surprises for me. — Loretta Lynn",
  "Be a bush if you can't be a tree. If you can't be a highway, just be a trail. If you can't be a sun, be a star. For it isn't by size that you win or fail. Be the best of whatever you are. — Martin Luther King Jr.",
  "You're going to go through tough times—that's life. But I say, 'Nothing happens to you, it happens for you.' See the positive in negative events. — Joel Osteen",
  "If everything was perfect, you would never learn and you would never grow. — Beyoncé Knowles",
  "You have two choices in life; you can either like what you do or dislike what you do. I have chosen to like what I do. — Barbara Bush",
  "The greatest legacy one can pass on to one's children and grandchildren is not money or other material things accumulated in one's life, but rather a legacy of character and faith. — Billy Graham",
  "You build on failure. You use it as a stepping stone. Close the door on the past. You don't try to forget the mistakes, but you don't dwell on it. You don't let it have any of your energy, or any of your time, or any of your space. — Johnny Cash",
  "You'll miss the best things if you keep your eyes shut. — Dr. Seuss, I Can Read With My Eyes Shut",
  "The excursion is the same when you go looking for your sorrow as when you go looking for your joy. — Eudora Welty",
  "Life is to be lived, not controlled; and humanity is won by continuing to play in face of certain defeat. — Ralph Ellison, Invisible Man",
  "I've learned that you shouldn't go through life with a catcher's mitt on both hands; you need to be able to throw something back. — Maya Angelou",
  "Always dream and shoot higher than you know you can do. Do not bother just to be better than your contemporaries or predecessors. Try to be better than yourself. — William Faulkner",
  "We should live our lives as though Christ was coming this afternoon. — Jimmy Carter",
  "Be so happy that, when other people look at you, they become happy too. — Anonymous",
  "Life is either a great adventure or nothing. — Helen Keller",
  "You only live once, but if you do it right, once is enough. — Mae West",
  "Life is what happens when you're busy making other plans. — John Lennon",
  "Almost everything will work again if you unplug it for a few minutes, including you. - Anne Lamott",
  "When I'm not feeling my best I ask myself, what are you gonna do about it? I use the negativity to fuel the transformation into a better me. - Beyoncé Knowles",
  "No one can make you feel inferior without your consent. - Eleanor Roosevelt",
  "True abundance isn't based on our net worth, it's based on our self-worth. - Gabrielle Bernstein",
  "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment. - Ralph Waldo Emerson",
  "A dead end is just a good place to turn around. - Naomi Judd",
  "Even miracles take a little time. - The Fairy Godmother, Cinderella",
  "The way I see it, if you want the rainbow, you gotta put up with the rain! - Dolly Parton",
  "Try to be a rainbow in someone else's cloud. - Maya Angelou",
  "Each day comes bearing its gifts. Untie the ribbon. - Ann Ruth Schabacker",
  "I never dreamed about success. I worked for it. - Estée Lauder",
  "Success is falling nine times and getting up ten. - Jon Bon Jovi",
  "Success is only meaningful and enjoyable if it feels like your own. - Michelle Obama",
  "If life were predictable it would cease to be life, and be without flavor. - Eleanor Roosevelt",
  "The big lesson in life, baby, is never be scared of anyone or anything. - Frank Sinatra",
  // Add more quotes as needed
];

// Variables to keep track of current indices
let currentImageIndex = 0;
let currentQuoteIndex = 0;

// Function to get a random index different from the current one
function getRandomIndex(arrayLength, currentIndex) {
  if (arrayLength <= 1) return 0; // Only one element available

  let newIndex;
  do {
    newIndex = Math.floor(Math.random() * arrayLength);
  } while (newIndex === currentIndex);
  return newIndex;
}

// Function to show a new random image and quote
function showRandomPhotoQuote() {
  // Get new indices
  const newImageIndex = getRandomIndex(images.length, currentImageIndex);
  const newQuoteIndex = getRandomIndex(quotes.length, currentQuoteIndex);

  const imgElement = document.getElementById("randomImage");
  const quoteElement = document.getElementById("quoteText");

  // Add fade-out class
  imgElement.classList.add("fade-out");
  quoteElement.classList.add("fade-out");

  // After fade-out transition
  setTimeout(() => {
    // Update image
    imgElement.src = images[newImageIndex];
    imgElement.alt = getAltText(newImageIndex);
    currentImageIndex = newImageIndex;

    // Update quote
    quoteElement.textContent = quotes[newQuoteIndex];
    currentQuoteIndex = newQuoteIndex;

    // Remove fade-out and add fade-in
    imgElement.classList.remove("fade-out");
    quoteElement.classList.remove("fade-out");
    imgElement.classList.add("fade-in");
    quoteElement.classList.add("fade-in");

    // Remove fade-in class after transition completes
    setTimeout(() => {
      imgElement.classList.remove("fade-in");
      quoteElement.classList.remove("fade-in");
    }, 500); // Duration matches the CSS transition duration
  }, 500); // Duration matches the CSS transition duration
}

// Function to generate descriptive alt text based on image index
function getAltText(index) {
  const descriptions = [
    "Mushroom in a forest setting",
    "Dense forest with towering trees",
    "Serene lake reflecting the sunrise",
    "Calm water at the lake",
    "Autumn trees with falling leaves",
    "Pink cherry blossoms in bloom",
    "Mountain meadow in the Alps",
    "Majestic Alps mountains",
    "Lake Thun with surrounding mountains",
    "Grass with dewdrops in the morning",
    "Snow-covered forest in winter",
    "Chamomile flowers in full bloom",
    "Sunrise over a grassy field",
    "Waves crashing on the beach",
    "Avenue of trees along a path",
    "Jellyfish in the sea",
    "Puffin bird by the fish",
    "Koi fish in white",
    "Animal fish Koi",
    "Sea turtle in the ocean",
    "Splashing water waves",
    "Ocean waves on the coast",
    "Humpback whale tail",
    "Baby rabbits with ears",
    "Owl raptor in nature",
    "Blue tit feeding",
    "Sand lizard on leaves",
    "Crab on the beach sand",
    "Long-eared owl",
    "Squirrel rodent",
    "Bald eagle bird",
    "Horse head in the sunset",
    "Penguin underwater",
    "Silhouette of a horse at sunset",
    "Zebra in the wild",
    "Cockscomb chicken bird",
    "Llama alpaca animal",
    "Fluffy kitten cat",
    "Panda with bamboo",
    "Crocodile eye in water",
    "Gray rhinoceros animal",
    "Raccoon wild animal",
    "White horse equine",
    "Dove in nature bird",
    "Snail shell mollusk",
    "Lynx big cat",
    "Red frog amphibian",
    "Lion animal mammal",
    "Dolphin in the Atlantic ocean",
    "Turtle reptile pond",
    "African cheetah cat",
    "Leopard animal safari",
    "Otter on a stone",
    "Red deer in fall",
    "Deer in forest nature",
    "Sea lion aquatic mammal",
    "Blue peacock bird",
    "Arctic fox in Iceland",
    "Elephant with trunk and tusks",
    "Capuchin monkey",
    "Snake in nature",
    "Hedgehog pet animal",
    "Sleeping fox on stump",
    "Brown wolf canids",
    "Kitten cat in a tree",
    "Yellow macaw parrot",
    "Lion nature animal",
    "Grizzly bear animal",
    "Red ocean thunderstorm",
    "Pink water flower",
    "Bee on a leaf",
    "Owl bird animal",
    "Ladybug insect",
    "Fog over ocean beach",
    "Red maple leaves",
    "Frog in pond water",
    "Peacock with red flowers",
    "Northern lights aurora",
    "Clouds traveling in nature",
    "Sunset rocks by the lake",
    "Sunset grass field",
    "Blue butterflies on flowers",
    "Bird beak plumage",
    "Primates monkeys",
    "Sunrise in fall mountains",
    "Pink chrysanthemum",
    "Tree branch bud",
    "Autumn forest foliage",
    "Blue butterfly insect",
    "Sea waves on the coast",
    "Blue sunset in nature",
    "Purple sunset over water",
    "Morning sunrise",
    "Red butterfly on flowers",
    "Autumn forest road",
    "Wilderness trees in nature",
    "Dark mountain sunset",
    "Raindrops on leaves",
    "Pier silhouette at sunrise",
    "Cactus in nature plant",
    // Add more descriptions corresponding to images
  ];

  return descriptions[index] || "Artistic depiction";
}

// Event listener for the randomize button
document
  .getElementById("randomizeBtn")
  .addEventListener("click", showRandomPhotoQuote);

// Event listener for the save favorite button
document
  .getElementById("saveFavoriteBtn")
  .addEventListener("click", function () {
    const imgSrc = document.getElementById("randomImage").src;
    const quote = document.getElementById("quoteText").textContent;

    // Get favorites from localStorage or initialize
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    // Check for duplicates
    const isDuplicate = favorites.some(
      (favorite) => favorite.image === imgSrc && favorite.quote === quote
    );

    if (!isDuplicate) {
      // Add new favorite
      favorites.push({ image: imgSrc, quote: quote });

      // Save back to localStorage
      localStorage.setItem("favorites", JSON.stringify(favorites));

      alert("Favorite saved!");
    } else {
      alert("This favorite is already saved!");
    }
  });

// Event listener for the quotes form
document
  .getElementById("quotesForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    const quoteInput = document.getElementById("quoteInput");
    const submittedQuotesContainer = document.getElementById("submittedQuotes");

    // Create a new paragraph for the submitted quote
    const newQuote = document.createElement("p");
    newQuote.textContent = quoteInput.value;

    // Add the new quote to the submitted quotes section
    submittedQuotesContainer.appendChild(newQuote);

    // Clear the textarea for new input
    quoteInput.value = "";
  });
