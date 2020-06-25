import { getInitialData } from "../../api";
import { receiveDecks } from "../actions/decks";
import { recieveCards } from "../actions/cards";
import { showLoading, hideLoading } from "../actions/loading";
export function handleInitialData(dispatch) {
  dispatch(showLoading());
  getInitialData().then(({ decks, cards }) => {
    dispatch(receiveDecks(decks));
    dispatch(recieveCards(cards));
    dispatch(hideLoading());
  });
}
