const cards = [
    'https://picsum.photos/id/237/100/100',
    'https://picsum.photos/id/238/100/100',
    'https://picsum.photos/id/239/100/100',
    'https://picsum.photos/id/240/100/100',
    'https://picsum.photos/id/241/100/100',
    'https://picsum.photos/id/242/100/100',
    'https://picsum.photos/id/243/100/100',
    'https://picsum.photos/id/244/100/100'
];

const gameBoard = document.getElementById('game-board');

let allCards = duplicateArray(cards);
/* -------*-------*------- */


// Fonction de création d'une carte
function createCard(CardUrl) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.dataset.value = CardUrl;

    const cardContent = document.createElement('img');
    cardContent.classList.add('card-content');
    cardContent.src = `${CardUrl}`;

    card.appendChild(cardContent);

    card.addEventListener('click', onCardClick);

    return card;
}
/* -------*-------*------- */


// Fonction de duplication des 8 images
function duplicateArray (arraySimple) {
    let arrayDouble = [];
    arrayDouble.push(...arraySimple);
    arrayDouble.push(...arraySimple);
    return arrayDouble;
}
/* -------*-------*------- */


// Fonction mélangeur de cartes dans le tableau "cards"
function shuffleArray(arrayToShuffle) {
    const arrayShuffled = arrayToShuffle.sort(() => 0.5 - Math.random());
    return arrayShuffled;
}
/* -------*-------*------- */


allCards = shuffleArray(allCards);


// Méthode de création des 16 cartes
allCards.forEach(card => {
    const cardHtml = createCard(card);
    gameBoard.appendChild(cardHtml);
})


// 
function onCardClick(e) {
    const card = e.target.parentElement;
    card.classList.add("flip");
}