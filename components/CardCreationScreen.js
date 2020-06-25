import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import appColors from "../colors";
import { Container, Content, Textarea, Form } from "native-base";
import Button from "./Button";
import { connect } from "react-redux";
import { insertCard } from "../api";
import { addCard } from "../redux/actions/cards";
class CardCreationScreen extends Component {
  state = {
    answerText: "",
    quizText: "",
  };
  addCard = () => {
    const card = {
      id: Date.now(),
      answer: this.state.answerText,
      question: this.state.quizText,
      deckID: this.props.route.params.id,
    };
    insertCard(card);
    this.props.dispatch(addCard(card));
    this.props.navigation.goBack();
  };
  render() {
    return (
      <Container>
        <Content padder>
          <Form>
            <Textarea
              onChangeText={(text) => {
                this.setState({ quizText: text });
              }}
              rowSpan={6}
              // bordered
              placeholder="Write your question..."
              style={{ marginBottom: 20 }}
            />
            <Textarea
              onChangeText={(text) => {
                this.setState({ answerText: text });
              }}
              rowSpan={6}
              // bordered
              placeholder="Write your answer..."
              style={{ marginBottom: 20 }}
            />
            <Button
              disabled={
                isEmpty(this.state.quizText) 
                || isEmpty(this.state.answerText)
              }
              text="Submit"
              onPress={(e) => this.addCard()}
            />
          </Form>
        </Content>
      </Container>
    );
  }
}
function isEmpty(str) {
  return !str || 0 === str.length;
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "stretch",
    justifyContent: "center",
  },
});

export default connect()(CardCreationScreen);
