import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Platform,
  Text
} from "react-native";
import appColors from "../colors";
import Button from "./Button";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Body
} from "native-base";
export default function CardQuestion({ onShowAnswer, quizText, progress }) {
  return (
      <Container >
        <Content contentContainerStyle={styles.container}>
          <Card style={{marginBottom:50,width:300}}>
            <CardItem style={{minHeight:100,alignItems:"stretch"}} button onPress={onShowAnswer} >
              <Body>
                  <Text style={styles.cardText}>{quizText}</Text>
              </Body>
            </CardItem>
          </Card>
          <Button text="Show Answer" onPress={onShowAnswer} />
          <Text>{progress}</Text>
        </Content>
      </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
    },
  showAnswerButton: {
    backgroundColor: appColors.accentColor,
    color: appColors.whiteTextColor,
  },
  cardText: {
    color: appColors.primaryTextColor,
    fontSize: 16,
  },
});
