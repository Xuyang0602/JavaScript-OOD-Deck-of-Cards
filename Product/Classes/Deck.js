export default class Deck {
  constructor() {
    this.deck = [];
    this.suits = ["Diamonds", "Spades", "Hearts", "Clubs"];
    this.cardNumber = [
      "A",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K"
    ];
    this.init();
  }

  init() {
    this.suits.forEach(suit => {
      this.cardNumber.forEach(num => {
        this.deck.push({
          suits: suit,
          value: num
        });
      });
    });
  }

  reset() {
    this.deck = [];
    this.init();
  }

  shuffle() {
    let len = this.deck.length;
    let indexValue;
    while (len > 0) {
      indexValue = Math.floor(Math.random() * len--);
      [this.deck[indexValue], this.deck[len]] = [
        this.deck[len],
        this.deck[indexValue]
      ];
    }
  }

  deal() {
    return this.deck.length > 3 ? this.deck.shift() : "no more card";
  }
}

// module.exports = "texts";
