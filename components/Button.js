import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Platform,
} from "react-native";
import appColors from "../colors";
export default function Button({ btnStyle, txtStyle, text,onPress,disabled }) {
const platformBtnStyle = Platform.OS === "ios" ? styles.iosSubmitBtn : styles.AndroidSubmitBtn
  return(
    <TouchableOpacity
      disabled={disabled}
      style={[platformBtnStyle,{...btnStyle}]}
      onPress={onPress}
    >
      <Text style={[styles.submitBtnText, { ...txtStyle }]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  iosSubmitBtn: {
    backgroundColor: appColors.accentColor,
    padding: 10,
    borderRadius: 7,
    height: 45,
    marginLeft: 40,
    marginRight: 40,
  },
  AndroidSubmitBtn: {
    backgroundColor: appColors.accentColor,
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    height: 45,
    borderRadius: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  submitBtnText: {
    color: appColors.whiteTextColor,
    fontSize: 18,
    textAlign: "center",
  },
});
