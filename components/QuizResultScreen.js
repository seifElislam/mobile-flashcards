import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import appColors from "../colors";
import { Container, Content, Input, Form, Item, Label } from "native-base";
import Button from "./Button";

export default function QuizResultScreen(props) {
  const { correctAnswersCount, incorrectAnswersCount,onRetakePressed,onGoBack } = props;
  const totalPercentage = (
    (correctAnswersCount / (correctAnswersCount + incorrectAnswersCount)) *
    100
  ).toFixed(2);
  return (
    <View style={styles.quizResultContainer}>
      <Text style={styles.titleStyle}>The Quiz Results</Text>
      <View>
      <Text style={styles.detailsStyle}>
        Correct Answers: {correctAnswersCount}
      </Text>
      <Text style={styles.detailsStyle}>
        Incorrect Answers: {incorrectAnswersCount}
      </Text>
      <Text style={styles.detailsStyle}>
        Total percentage: {totalPercentage}%
      </Text>
      </View>
      <View style={{ flexDirection: "row", alignContent: "space-around" }}>
        <Button
          text="Retake the Quiz"
          onPress={onRetakePressed}
          btnStyle={{ margin:5,backgroundColor: appColors.primaryColor }}
        />
        <Button
          text="Go Back"
          onPress={props.onGoBack}
          btnStyle={{ margin:5}}
        /> 
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  quizResultContainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-around",
  },
  titleStyle: {
    fontSize: 32,
  },
  detailsStyle: {
    fontSize: 18,
    marginVertical:10
  },
});
