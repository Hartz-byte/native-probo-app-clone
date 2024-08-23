import React from "react";
import { StyleSheet, View, Text } from "react-native";

const PortfolioScreen = () => {
  return (
    <View style={styles.container}>
      <Text>PortfolioScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default PortfolioScreen;
