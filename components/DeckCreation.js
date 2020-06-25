import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import appColors from "../colors";
import { Container, Content, Input, Form, Item, Label } from "native-base";
import Button from "./Button";

export default class DeckCreation extends Component {
  addDeck = () => {
  };
  render() {
    return (
      <Container>
        <Content padder>
          <Form>
            <Item floatingLabel>
              <Label>Deck Name</Label>
              <Input />
            </Item>
          </Form>
          <Button text="Create Deck" />
        </Content>
      </Container>
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
