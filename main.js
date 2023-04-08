// Self Care Center

// variables
var buddha = document.querySelector('.buddha-icon');
var message = document.querySelector('.message');
var favoriteSection = document.querySelector('.favorite-section');
var favoriteMessage = document.querySelector('.favorite-message');
var favoriteBox = document.querySelector('.favorite-box');
// button variables
var removeBtn = document.querySelector('.remove-btn');
var receiveBtn = document.querySelector('.receive-btn-section');
var affirmationBtn = document.querySelector('.affirmation-btn');
var mantraBtn = document.querySelector('.mantra-btn');
var favBtn = document.querySelector('.favorite');
// navigation variables
var homePage = document.querySelector('.home-page');
var favoritesPage = document.querySelector('.favorites-page');
var homeBtn = document.querySelector('.home-btn');
var favoritesPageBtn = document.querySelector('.favorites-page-btn');
// arrays
var favorites = [];
var currentMessage = [];

// event listeners

receiveBtn.addEventListener('click', receiveMessage);

favBtn.addEventListener('click', addFavorite);

favoritesPageBtn.addEventListener('click', viewFavoritesPage);

homeBtn.addEventListener('click', viewHomePage);

favoriteSection.addEventListener("dblclick", removeFavorite);

// functions

function receiveMessage() {
    displayMessage();
    var displayedMessage = getMessage();
    message.innerText = displayedMessage.message;
};

function displayMessage() {
    buddha.classList.add('hidden');
    message.classList.remove('hidden');
    favBtn.classList.remove('hidden');
};

function getRandomIndex(messageType) {
    var index = Math.floor(Math.random() * messageType.length);
    return index;
};

function getMessage() {
    var displayedMessage = {
        message: 'Would you like a mantra or an affirmation?',
        id: Date.now()
    }
    if (mantraBtn.checked) {
        displayedMessage.message = mantras[getRandomIndex(mantras)];
    } else if (affirmationBtn.checked) {
        displayedMessage.message = affirmations[getRandomIndex(affirmations)];
    } 
    currentMessage.splice(0, 1, displayedMessage);
    return displayedMessage;
};

function addFavorite() {
    favoritesPageBtn.classList.remove('hidden');
    for (var i = 0; i < favorites.length; i++) {
        if (favorites[i].message === currentMessage[0].message) {
            return null;
        }
    }
    favorites.push(currentMessage[0]);
};

function viewFavoritesPage() {
    homePage.classList.add('hidden');
    favoritesPage.classList.remove('hidden');
    homeBtn.classList.remove('hidden');
    displayFavMessage();
};

function viewHomePage() {
    homePage.classList.remove('hidden');
    favoritesPage.classList.add('hidden');
    homeBtn.classList.add('hidden');
};

function displayFavMessage() {
    favoriteSection.innerHTML = '';
    for (var i = 0; i < favorites.length; i++) {
        favoriteSection.innerHTML += 
        `<box class="favorite-box" id=${favorites[i].id}>
            <p class="favorite-message">${favorites[i].message}</p>
        </box>`
    }
};

function removeFavorite(e) {
    var messageId = e.target.closest('.favorite-box').id;
    for (var i = 0; i < favorites.length; i++) {
      if (favorites[i].id == messageId) {
        favorites.splice(i, 1);
      }
    }
    displayFavMessage();
    return favorites;
  };




