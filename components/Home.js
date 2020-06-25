import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { AppLoading } from "expo";
import { connect } from "react-redux";
import appColors from "../colors";
import Button from "./Button";
import DeckList from "./DeckList";
import DialogInput from "react-native-dialog-input";
import { handleInitialData } from "../redux/actions/shared";
import { getSnippetDecksArray, timeConverter } from "../utils";
import { insertDeck } from "../api";
import { addDeck } from "../redux/actions/decks";

class HomeScreen extends Component {
  state = {
    initialDataRequested: 0,
    showDeckCreationDialog: 0,
  };
  componentDidMount() {
    if (this.props.loading && !this.state.initialDataRequested) {
      handleInitialData(this.props.dispatch);
      this.setState({ initialDataRequested: true });
    }
  }
  navigateToDeckDetails = (id) => {
    this.props.navigation.navigate("Deck Details", { id });
  };
  onAddDeck = (text) => {
    const deck = {
      id: Date.now().toString(),
      title: text,
      creationDate: timeConverter(Date.now()),
    };
    insertDeck(deck);
    this.props.dispatch(addDeck(deck));
    this.setState({ showDeckCreationDialog: false });
    this.props.navigation.navigate("Deck Details", { id:deck.id });

  };
  renderLoading() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ color: appColors.accentColor, fontSize: 30 }}>
          Loading...
        </Text>
      </View>
    );
  }
  renderEmptyView() {
    return (
      <View
        style={{ flex: 1, justifyContent: "center", alignItems: "stretch" }}
      >
        <Text
          style={{
            color: appColors.primaryTextColor,
            alignSelf: "center",
            fontSize: 25,
          }}
        >
          You didn't create any decks!
        </Text>
      </View>
    );
  }
  render() {
    if (this.props.loading) return this.renderLoading();
    return (
      <View style={styles.container}>
        {this.props.snippets.length == 0 ? (
          this.renderEmptyView()
        ) : (
          <DeckList
            data={this.props.snippets}
            onDeckPressed={this.navigateToDeckDetails}
          />
        )}
        <Button
          text="Add Deck"
          onPress={() => this.setState({ showDeckCreationDialog: true })}
        />
        {this.renderDialog()}
      </View>
    );
  }
  renderDialog() {
    return (
      <DialogInput
        isDialogVisible={this.state.showDeckCreationDialog}
        title={"Add Deck"}
        message={"Name your new deck"}
        hintInput={"Deck name..."}
        submitInput={(inputText) => {
          this.onAddDeck(inputText);
        }}
        closeDialog={() => {
          this.setState({ showDeckCreationDialog: false });
        }}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "stretch",
    justifyContent: "center",
  },
});
function mapStateToProps(state) {
  const { decks, loading,cards } = state;
  console.log(state);
  return { snippets: getSnippetDecksArray(decks,cards), loading };
}

export default connect(mapStateToProps)(HomeScreen);
