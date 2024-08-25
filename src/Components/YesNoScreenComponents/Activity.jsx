import React from "react";
import { StyleSheet, View, Text } from "react-native";

const Activity = () => {
  return (
    <View style={styles.container}>
      {/* top text */}
      <View style={styles.flex}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>ACTIVITY</Text>
        </View>

        <Text style={{ ...styles.text, marginLeft: 40 }}>ORDER BOOK</Text>
      </View>

      {/* comparision */}
      <View>
        {/* profile icon */}
        <View></View>

        {/* yes no bar */}
        <View></View>

        {/* profile icon */}
        <View></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginTop: 20,
  },

  flex: {
    flexDirection: "row",
    alignItems: "center",
  },

  textContainer: {
    width: 100,
    height: 50,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 7,
    shadowColor: "#fff",
    elevation: 2,
  },

  text: {
    color: "white",
    fontWeight: "bold",
    letterSpacing: 1,
    fontSize: 16,
  },
});

export default Activity;
