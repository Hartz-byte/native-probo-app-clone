import React from "react";
import { StyleSheet, ScrollView } from "react-native";

import Header from "../Components/YesNoScreenComponents/Header";
import MarketPredict from "../Components/YesNoScreenComponents/MarketPredict";

const YesNoScreen = () => {
  return (
    <ScrollView style={styles.mainContainer}>
      {/* header component */}
      <Header />

      {/* the market predict component */}
      <MarketPredict />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    width: "100%",
    height: "100%",
    backgroundColor: "black",
  },
});

export default YesNoScreen;
