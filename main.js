// Self Care Center

// variables
var buddha = document.querySelector('.buddha-icon');
var message = document.querySelector('.message');
var favoriteSection = document.querySelector('.favorite-section');
var favoriteMessage = document.querySelector('.favorite-message');
var favoriteBox = document.querySelector('.favorite-box');
// button variables
var removeBtn = document.querySelector('.remove-btn');
var receiveBtn = document.querySelector('.receive-btn');
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
var mantras = [
    'Breathing in, I send myself love. Breathing out, I send love to someone else who needs it.',
    "Dont let yesterday take up too much of today.",
    'Every day is a second chance.',
    'Tell the truth and love everyone.',
    'I am free from sadness.',
    'I am enough.',
    'In the beginning it is you, in the middle it is you and in the end it is you.',
    'I love myself.',
    'I am present now.',
    'Inhale the future, exhale the past.',
    'This too shall pass.',
    'Yesterday is not today.',
    'The only constant is change.',
    'Onward and upward.',
    'I am the sky, the rest is weather.'
    ];
    
    var affirmations = [
    'I forgive myself and set myself free.',
    'I believe I can be all that I want to be.',
    'I am in the process of becoming the best version of myself.',
    'I have the freedom & power to create the life I desire.',
    'I choose to be kind to myself and love myself unconditionally.',
    'My possibilities are endless.',
    'I am worthy of my dreams.',
    'I am enough.',
    'I deserve to be healthy and feel good.',
    'I am full of energy and vitality and my mind is calm and peaceful.',
    'Every day I am getting healthier and stronger.',
    'I honor my body by trusting the signals that it sends me.',
    'I manifest perfect health by making smart choices.'
    ];

// Event Listeners

receiveBtn.addEventListener('click', receiveMessage);

favBtn.addEventListener('click', addFavorite);

favoritesPageBtn.addEventListener('click', viewFavoritesPage);

homeBtn.addEventListener('click', viewHomePage);

favoriteSection.addEventListener("dblclick", removeFavorite);

// Functions

function receiveMessage() {
    displayMessage();
    var displayedMessage = getMessage();
    message.innerText = displayedMessage.message;
}

function displayMessage() {
    buddha.classList.add('hidden');
    message.classList.remove('hidden');
    favBtn.classList.remove('hidden');
}

function getMessage() {
    var displayedMessage = {
        message: 'Would you like a mantra or an affirmation?',
        id: Date.now()
    }
    if (mantraBtn.checked) {
        var index = Math.floor(Math.random() * mantras.length);
        displayedMessage.message = mantras[index];
    } else if (affirmationBtn.checked) {
        var index = Math.floor(Math.random() * affirmations.length);
        displayedMessage.message = affirmations[index];
    } 
    currentMessage.splice(0, 1, displayedMessage)
    return displayedMessage;
}

function addFavorite() {
    var displayedMessage = message.innerText;
    favorites.push(currentMessage[0]);
    favoritesPageBtn.classList.remove('hidden');

};

function viewFavoritesPage() {
    homePage.classList.add('hidden');
    favoritesPage.classList.remove('hidden');
    homeBtn.classList.remove('hidden');
    displayFavMessage() 
}

function viewHomePage() {
    homePage.classList.remove('hidden');
    favoritesPage.classList.add('hidden');
    homeBtn.classList.add('hidden');
}

function displayFavMessage() {
    favoriteSection.innerHTML = '';
    for (var i = 0; i < favorites.length; i++) {
        favoriteSection.innerHTML += 
        `<box class="favorite-box" id=${favorites[i].id}>
            <p class="favorite-message">${favorites[i].message}</p>
        </box>`
    }
}

function removeFavorite(e) {
    var messageId = e.target.id;
    var clickedMessage = document.getElementById(`${messageId}`);
    clickedMessage.classList.add('hidden');
    for (var i = 0; i < favorites.length; i++) {
      if (favorites[i].id == messageId) {
        favorites.splice(i, 1);
      }
    }
    return favorites;
  };




