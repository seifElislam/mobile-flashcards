import React, { Component } from "react";

import { connect } from "react-redux";
import { getCardsOfDeck } from "../utils";
import DeckDetails from "./DeckDetails"
class DeckScreen extends Component {

  onQuizStarPressed = () => {
    this.props.navigation.navigate("Deck Practice", {
      id: this.props.deck.id,
    });
  };
  onAddCardPressed = () => {
    this.props.navigation.navigate("Card Creation", {
      id: this.props.deck.id,
    });
  };
  state = {};
  render() {
    const deckInfo = {
      title:this.props.deck.title,
      creationDate: this.props.deck.creationDate,
      cardsNumber: this.props.cards.length,

    };
    return (
      <DeckDetails
        onQuizStartPressed={this.onQuizStarPressed}
        onAddCardPressed={this.onAddCardPressed}
        deckInfo={deckInfo}
      />
    );
  }
}
function mapStateToProps({ decks, cards }, { route }) {
  return {
    deck: decks[route.params.id],
    cards: getCardsOfDeck(route.params.id, cards),
  };
}

export default connect(mapStateToProps)(DeckScreen);
