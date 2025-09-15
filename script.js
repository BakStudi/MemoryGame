function createCard(CardUrl) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.dataset.value = CardUrl;

    const cardContent = document.createElement('img');
    cardContent.classList.add('card-content');
    cardContent.src = `${CardUrl}`;
    card.appendChild(cardContent);
    return card;
}

// Code pour tester la fonction -->
const gameBoard = document.getElementById('game-board');
gameBoard.appendChild(createCard('https://picsum.photos/id/243/100/100'));