import React from "react";
import { StyleSheet, View, Text } from "react-native";

const WalletScreen = () => {
  return (
    <View style={styles.container}>
      <Text>WalletScreen</Text>
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

export default WalletScreen;
