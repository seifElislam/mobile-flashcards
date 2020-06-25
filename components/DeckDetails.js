import { StyleSheet, Text, View } from "react-native";
import React, { Component } from "react";
import appColors from "../colors";
import Button from "./Button";
export default function DeckDetails(props) {
  const {
    title,
    creationDate,
    cardsNumber,
    lastResult,
    numberOfPractices,
  } = props.deckInfo;
  return (
    <View style={styles.deckInfoContainer}>
      <Text style={styles.titleStyle}>{title}</Text>
      <View>
        <Text style={styles.detailsStyle}>Created At: {creationDate}</Text>
        <Text style={styles.detailsStyle}>Contained Cards: {cardsNumber}</Text>
      </View>
      <View style={{ flexDirection: "row", alignContent: "space-around" }}>
        <Button
          text="Add Card"
          onPress={props.onAddCardPressed}
          btnStyle={{ margin: 5, backgroundColor: appColors.primaryColor }}
        />
        <Button
          disabled={cardsNumber === 0}
          text="Start Practice"
          onPress={props.onQuizStartPressed}
          btnStyle={{ margin: 5 }}
        />
      </View>
    </View>
  );
} 
const styles = StyleSheet.create({
  deckInfoContainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-around",
  },
  titleStyle: {
    fontSize: 32,
  },
  detailsStyle: {
    fontSize: 16,
  },
});
