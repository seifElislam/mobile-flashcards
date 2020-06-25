
import { AsyncStorage } from "react-native";
import { Notifications } from 'expo'
import {askAsync, NOTIFICATIONS} from 'expo-permissions'
const NOTIFICATION_KEY = 'Flashcards:notifications'

export function objectToArray(obj) {
  return Object.keys(obj).map((key) => obj[key]);
}

export function getSnippetDecksArray(decks, cards) {
  return objectToArray(decks).map((deck) => {
    return {
      id: deck.id,
      title: deck.title,
      cardsCount: getCardsOfDeck(deck.id, cards).length,
    };
  });
}
export function getCardsOfDeck(deckID, cards) {
  return objectToArray(cards).filter((card) => card.deckID == deckID);
}
export function timeConverter(timeStamp) {
  var a = new Date(timeStamp);
  var months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  var hour = a.getHours();
  var min = a.getMinutes();
  var sec = a.getSeconds();
  var time = date + " " + month + " " + year + " " + hour + ":" + min;
  return time;
}

export function clearLocalNotification () {
    return AsyncStorage.removeItem(NOTIFICATION_KEY)
      .then(Notifications.cancelAllScheduledNotificationsAsync)
  }
  
  function createNotification () {
    return {
      title: 'Practice now!',
      body: "👋 don't forget to practice today!",
      ios: {
        sound: true,
      },
      android: {
        sound: true,
        priority: 'high',
        sticky: false,
        vibrate: true,
      }
    }
  }
  
  export function setLocalNotification () {
    AsyncStorage.getItem(NOTIFICATION_KEY)
      .then(JSON.parse)
      .then((data) => {
        if (data === null) {
          askAsync(NOTIFICATIONS)
            .then(({ status }) => {
              if (status === 'granted') {
                Notifications.cancelAllScheduledNotificationsAsync()
  
                let tomorrow = new Date()
                tomorrow.setDate(tomorrow.getDate()+1)
                tomorrow.setHours(18)
                tomorrow.setMinutes(0)
  
                Notifications.scheduleLocalNotificationAsync(
                  createNotification(),
                  {
                    time: tomorrow,
                    repeat: 'day',
                  }
                )
  
                AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
              }
            })
        }
      })
  }
  