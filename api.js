import { AsyncStorage } from "react-native";

const DECKS_STORAGE_KEY = "DECKS_STORAGE_KEY";
const CARDS_STORAGE_KEY = "CARDS_STORAGE_KEY";

export function fetchDecks() {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY)
  .then((decks) =>  JSON.parse(decks));
}

export function insertDeck(deck) {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY).then((decks) => {
    const initDecks = decks == null ? {} : JSON.parse(decks);
    console.log("initDecks", initDecks);
    initDecks[deck.id] = deck;
    AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(initDecks));
  });
}
export function fetchCards() {
  return AsyncStorage.getItem(CARDS_STORAGE_KEY)
  .then((cards) =>  JSON.parse(cards));
}

export function insertCard(card) {
  //{id,answer,question,deckID}
  return AsyncStorage.getItem(CARDS_STORAGE_KEY).then((cards) => {
    const initCards = cards == null ? {} : JSON.parse(cards);
    initCards[card.id] = card;
    AsyncStorage.setItem(CARDS_STORAGE_KEY, JSON.stringify(initCards));
  });
}

export function removeEntry(key) {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY).then((results) => {
    const data = JSON.parse(results);
    data[key] = undefined;
    delete data[key];
    AsyncStorage.setItem(CALENDAR_STORAGE_KEY, JSON.stringify(data));
  });
}
export function getInitialData() {
  return Promise.all([fetchDecks(), fetchCards()]).then(([decks, cards]) => ({
    decks,
    cards,
  }));
}
