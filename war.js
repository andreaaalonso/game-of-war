let playerOne = {
  cardsPlayed: [],
  roundWon: false,
  numCards: [],
}

let playerTwo = {
  cardsPlayed: [],
  roundWon: false,
  numCards: [],
}

let deck = [
  2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A",
  2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A",
  2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A",
  2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"
]

let faceValue = {
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  10: 10,
  "J": 11,
  "Q": 12,
  "K": 13,
  "A": 14,
}

function shuffleTheDeck(arr) {
  let currentCard = arr.length;
  while (0 !== currentCard) {
    let randomCard = Math.floor(Math.random() * currentCard);
    currentCard -= 1;
    let tmp = arr[currentCard];
    arr[currentCard] = arr[randomCard];
    arr[randomCard] = tmp;
  }
  return arr;
}

let shuffledDeck = shuffleTheDeck(deck)

for (let i = 0; i < 26; i++) {
  playerOne.numCards.push(shuffledDeck.pop(0))
  playerTwo.numCards.push(shuffledDeck.pop(0))
}

console.log(playerOne.numCards);
console.log(playerTwo.numCards);