import React from "react";
import { StyleSheet, View, Text } from "react-native";

const BackgroundStory = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Background Story</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "95%",
    height: 150,
    backgroundColor: "white",
    margin: "2.5%",
    padding: "5%",
  },
  title: {
    fontWeight: "bold",
    letterSpacing: 1,
    fontSize: 16,
  },
});

export default BackgroundStory;
