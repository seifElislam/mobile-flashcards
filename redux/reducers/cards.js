import { RECEIVE_CARDS, ADD_CARD } from "../actions/cards";

export default function cards(state = {}, action) {
  switch (action.type) {
    case RECEIVE_CARDS:
      return {
        ...state,
        ...action.cards,
      };
    case ADD_CARD:
      return {
        ...state,
        [action.card.id]: action.card,
      };
    default:
      return state;
  }
}