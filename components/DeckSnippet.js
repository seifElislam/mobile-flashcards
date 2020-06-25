import React, { Component } from "react";
import { StyleSheet, View, TouchableWithoutFeedback, Text } from "react-native";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Body,
} from "native-base";
import appColors from "../colors";

export default function DeckSnippet(props) {
  return (
    <Container style={styles.container}>
      <Content>
        <Card style={{ backgroundColor: appColors.accentColor }}>
          <CardItem button onPress={(_)=>props.onPressItem(props.id)}>
            <Body>
                <View>
                  <Text>{props.title}</Text>
                  <Text>Contained Cards: {props.cardsCount}</Text>
                </View>
            </Body>
          </CardItem>
        </Card>
      </Content>
    </Container>
  );
}
const styles = StyleSheet.create({
  container: {
    height: 100,
    flex: 1,
    margin: 0,
    backgroundColor: "#fff",
    alignItems: "stretch",
    justifyContent: "center",
  },
});
