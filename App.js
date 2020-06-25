import React, { Component } from "react";
import { StyleSheet, StatusBar, View } from "react-native";
import appColors from "./colors";
import Constants from "expo-constants";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./components/Home";
import DeckScreen from "./components/DeckScreen";
import DeckPracticeScreen from "./components/DeckPracticeScreen";
import CardCreationScreen from "./components/CardCreationScreen";
import QuizResultScreen from "./components/QuizResultScreen";
import { Provider } from "react-redux";
import reducer from "./redux/reducers";
import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger'
import {setLocalNotification} from "./utils"
const Stack = createStackNavigator();
export default class App extends Component {
  state = {
    showDeckCreationDialog: false,
  };
  componentDidMount(){
    setLocalNotification()
  }
  render() {
    return (
      <Provider store={createStore(reducer,applyMiddleware(logger))}>
        <NavigationContainer>
          <AppStack />
        </NavigationContainer>
      </Provider>
    );
  }
}
function AppStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: appColors.primaryColor,
        },

        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Deck Details" component={DeckScreen} />
      <Stack.Screen name="Deck Practice" component={DeckPracticeScreen} />
      <Stack.Screen name="Card Creation" component={CardCreationScreen} />
    </Stack.Navigator>
  );
}

function AppStatusBar({ backgroundColor, ...props }) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColors.backgroundColor,
    alignItems: "stretch",
    justifyContent: "center",
  },
});
