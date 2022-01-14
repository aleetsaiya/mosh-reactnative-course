import React from "react";
import { ImageBackground, StyleSheet } from "react-native-web";

const WelcomeScreen = (props) => {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/background.jpg")}
    ></ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
});

export default WelcomeScreen;
