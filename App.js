import React from "react";
import { Image, StyleSheet } from "react-native";
import OnBoading from "react-native-onboarding-swiper";

export default function App() {
  return (
    <OnBoading
      onDone={() => console.log("login")}
      controlStatusBar={false}
      pages={[
        {
          backgroundColor: "#a6e4d0",
          image: (
            <Image
              source={require("./assets/travel1.png")}
              resizeMode="contain"
              style={styles.boardingImage}
            />
          ),
          title: "Hello World",
          subtitle:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, suscipit!",
        },
        {
          backgroundColor: "#fd3b93",
          image: (
            <Image
              source={require("./assets/travel2.png")}
              resizeMode="contain"
              style={styles.boardingImage}
            />
          ),
          title: "Hello World",
          subtitle:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, suscipit!",
        },
      ]}
    />
  );
}

const styles = StyleSheet.create({
  boardingImage: {
    width: "100%",
    height: 200,
  },
});
