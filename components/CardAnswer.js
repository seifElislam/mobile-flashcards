import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Platform,
} from "react-native";
import appColors from "../colors";
import Button from "./Button";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Body,
  Text,
} from "native-base";
export default function CardAnswer({
  onCorrectPressed,
  onInCorrectPressed,
  answerText,
  progress,
}) {
  return (
    <Container>
      <Content contentContainerStyle={styles.container}>
        <Card style={{ marginBottom: 50, width: 300,elevation:7 }}>
          <CardItem
            style={{
              minHeight: 100,
              alignItems: "stretch",
              backgroundColor: appColors.whiteTextColor,
            }}>
            <Body>
              <Text style={styles.cardText}>
                {answerText }
              </Text>
            </Body>
          </CardItem>
        </Card>
        <Button
          style={styles.actionButton}
          text="Correct"
          onPress={onCorrectPressed}
          textStyle={{ color: appColors.whiteTextColor }}
          btnStyle={{
            backgroundColor: appColors.correctColor,
            ...styles.actionButton,
          }}
        />
        <Button
          style={styles.actionButton}
          text="InCorrect"
          onPress={onInCorrectPressed}
          textStyle={{ color: appColors.whiteTextColor }}
          btnStyle={{
            backgroundColor: appColors.incorrectColor,
            ...styles.actionButton,
          }}
        />
        <Text>{progress}</Text>
      </Content>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColors.backgroundColor,
    alignItems: "center",
    justifyContent: "center",
  },
  actionButton: {
    margin: 10,
    width: 200,
  },
  card: {
    backgroundColor: appColors.whiteTextColor,
    borderColor: appColors.darkPrimaryColor,
    borderRadius: 8,
    borderWidth: 2,
    minHeight: 100,
    width: 300,
    padding: 20,
    margin: 30,
    alignContent: "center",
  },
  cardText: {
    color: appColors.text,
    fontSize: 16,
  },
});
