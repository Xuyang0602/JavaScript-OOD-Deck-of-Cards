class Card {
  constructor(suit, faceVale) {
    this.available = true;
    this.suit = suit;
    this.faceVale = faceVale;
  }

  getValue() {
    return this.faceVale;
  }

  isAvailable() {
    return this.available;
  }

  markUnavailable() {
    this.available = false;
  }

  print() {
    console.log(this.suit + this.faceVale);
  }
}

class Deck {
  constructor() {
    this.deck = [];
    this.reset();
    this.shffle()
  }

  reset() {
    let suits = ["Diamonds", "Hearts", "Clubs", "Spades"];
    let value = ["Ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King"];
    for (let suit in suits) {
      for (let val in value) {
        this.deck.push(new Card(suits[suit], value[val]));
      }
    }
  }

  shffle() {
    const { deck } = this;
    let i;
    let len = deck.length;

    while (len) {
      i = Math.floor(Math.random() * len--);
      [deck[i], deck[len]] = [deck[len], deck[i]];
    }

    return this;
  }

  deal() {
    return this.deck.pop();
  }
}

let deck = new Deck();
console.log(deck);
