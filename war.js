let playerOne = {
  cardsPlayed: [],
  numCards: [],
}

let playerTwo = {
  cardsPlayed: [],
  numCards: [],
}

let roundWon = "";

let deck = [
  "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A",
  "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A",
  "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A",
  "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"
]

let faceValue = {
  "2": 2,
  "3": 3,
  "4": 4,
  "5": 5,
  "6": 6,
  "7": 7,
  "8": 8,
  "9": 9,
  "10": 10,
  "J": 11,
  "Q": 12,
  "K": 13,
  "A": 14
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

let roundNumber = 1;
while (playerOne.numCards.length != 52 && playerTwo.numCards.length != 52) {
  playerOne.cardsPlayed = [];
  playerOne.cardsPlayed.push(playerOne.numCards.shift());

  playerTwo.cardsPlayed = [];
  playerTwo.cardsPlayed.push(playerTwo.numCards.shift());

  if (faceValue[playerOne.cardsPlayed[0]] > faceValue[playerTwo.cardsPlayed[0]]) {
    roundWon = "PlayerOne";
    playerOne.numCards.push(playerOne.cardsPlayed[0]);
    playerOne.numCards.push(playerTwo.cardsPlayed[0]);
  }
  else if (faceValue[playerTwo.cardsPlayed[0]] > faceValue[playerOne.cardsPlayed[0]]) {
    roundWon = "PlayerTwo";
    playerTwo.numCards.push(playerOne.cardsPlayed[0]);
    playerTwo.numCards.push(playerTwo.cardsPlayed[0]);
  }
  else {
    roundWon = "tie";
    while (roundWon == "tie") {
      if (playerOne.numCards.length > 0) {
        playerOne.cardsPlayed.push(playerOne.numCards.shift());
      }
      if (playerOne.numCards.length > 0) {
        playerOne.cardsPlayed.push(playerOne.numCards.shift());
      }
      if (playerOne.numCards.length > 0) {
        playerOne.cardsPlayed.push(playerOne.numCards.shift());
      }
      if (playerOne.numCards.length > 0) {
        playerOne.cardsPlayed.push(playerOne.numCards.shift());
      }

      if (playerTwo.numCards.length > 0) {
        playerTwo.cardsPlayed.push(playerTwo.numCards.shift());
      }
      if (playerTwo.numCards.length > 0) {
        playerTwo.cardsPlayed.push(playerTwo.numCards.shift());
      }
      if (playerTwo.numCards.length > 0) {
        playerTwo.cardsPlayed.push(playerTwo.numCards.shift());
      }
      if (playerTwo.numCards.length > 0) {
        playerTwo.cardsPlayed.push(playerTwo.numCards.shift());
      }

      if (faceValue[playerOne.cardsPlayed[playerOne.cardsPlayed.length - 1]] > 
        faceValue[playerTwo.cardsPlayed[playerTwo.cardsPlayed.length - 1]]) {
          roundWon = "PlayerOne";
          playerOne.numCards = playerOne.numCards.concat(playerOne.cardsPlayed);
          playerOne.numCards = playerOne.numCards.concat(playerTwo.cardsPlayed);
      }
      else if (faceValue[playerTwo.cardsPlayed[playerTwo.cardsPlayed.length - 1]] > 
        faceValue[playerOne.cardsPlayed[playerOne.cardsPlayed.length - 1]]) {
          roundWon = "PlayerTwo";
          playerTwo.numCards = playerTwo.numCards.concat(playerTwo.cardsPlayed);
          playerTwo.numCards = playerTwo.numCards.concat(playerOne.cardsPlayed);
      }
    }
  }
  console.log("Round: " + roundNumber);
  console.log("PlayerOne cards played: " + playerOne.cardsPlayed);
  console.log("PlayerTwo cards played: " + playerTwo.cardsPlayed);
  console.log(roundWon + " is winner!");
  console.log("PlayerOne number of cards = " + playerOne.numCards);
  console.log("PlayerTwo number of cards = " + playerTwo.numCards);
  roundNumber++;
}