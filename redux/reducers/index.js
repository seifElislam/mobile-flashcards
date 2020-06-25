import { combineReducers } from "redux";
import cards from "./cards";
import decks from "./decks";
import loading from "./loading";

export default combineReducers({
  cards,
  decks,
  loading
});
