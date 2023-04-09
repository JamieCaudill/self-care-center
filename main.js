// Self Care Center

// variables
var buddha = document.querySelector('.buddha-icon');
var message = document.querySelector('.message');
var buddhaBox = document.querySelector('.buddha-box');
var favoriteSection = document.querySelector('.favorite-section');
var favoriteMessage = document.querySelector('.favorite-message');
var favoriteBox = document.querySelector('.favorite-box');
var buddhaMessage = document.querySelector('.buddha-to-message');
var addedMessage = document.querySelector('.added-message');
var favBtnDiv = document.querySelector('.fav-btn-div');
var removeInfo = document.querySelector('.remove-info');
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

favBtn.addEventListener('mouseover', function() {
    addedMessage.classList.remove('hide');
} );

favBtn.addEventListener('mouseout', function() {
    addedMessage.classList.add('hide');
})

favoritesPageBtn.addEventListener('click', viewFavoritesPage);

homeBtn.addEventListener('click', viewHomePage);

favoriteSection.addEventListener("dblclick", removeFavorite);

removeBtn.addEventListener('mouseover', function() {
    removeInfo.classList.remove('hide');
})

removeBtn.addEventListener('mouseout', function() {
    removeInfo.classList.add('hide');
})



// functions

function receiveMessage() {
    buddhaMessage.innerHTML = '';
    favBtn.classList.remove('hidden');
    buddhaMessage.innerHTML = `<p class="message">${getMessage().message}</p>`
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
    removeBtn.classList.remove('hide');
    displayFavMessage();
};

function viewHomePage() {
    homePage.classList.remove('hidden');
    favoritesPage.classList.add('hidden');
    homeBtn.classList.add('hidden');
    removeBtn.classList.add('hide');
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




  
