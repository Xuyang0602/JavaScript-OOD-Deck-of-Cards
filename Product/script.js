import Deck from "./Classes/Deck.js";

const deckCard = new Deck();

const btn = document.getElementsByTagName("button");
console.log(btn);

const generateBtn = btn[0];
generateBtn.addEventListener("click", generateCard);

const shuffleBtn = btn[1];
shuffleBtn.addEventListener("click", shuffleCard);

const dealBtn = btn[2];
dealBtn.addEventListener("click", dealCard);

function generateCard() {
  console.log("generated");
  const { deck } = deckCard;
  const cardsContainer = document.querySelector("ul.cards");
  while (cardsContainer.firstChild) {
    cardsContainer.removeChild(cardsContainer.firstChild);
  }

  deck.forEach(d => {
    const { suits, value } = d;

    const li = document.createElement("li");
    li.classList.add("card");

    const val = document.createElement("span");
    const suit = document.createElement("span");

    val.textContent = value;
    if (suits === "Diamonds") {
      suit.innerHTML = "&diams;";
    } else if (suits === "Spades") {
      suit.innerHTML = "&spades;";
    } else if (suits === "Hearts") {
      li.classList.add("red");
      suit.innerHTML = "&hearts;";
    } else if (suits === "Clubs") {
      li.classList.add("red");
      suit.innerHTML = "&clubs;";
    }

    val.classList.add("value");
    li.appendChild(val);

    suit.classList.add("suits");
    li.appendChild(suit);

    cardsContainer.appendChild(li);
  });
}

function shuffleCard() {
  deckCard.shuffle();
  generateCard();
}

function dealCard() {
  deckCard.deal();
  const cardsContainer = document.querySelector("ul.cards");
  cardsContainer.removeChild(cardsContainer.firstChild);
}
