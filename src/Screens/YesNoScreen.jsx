import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";

import Header from "../Components/YesNoScreenComponents/Header";

const YesNoScreen = () => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      {/* header component */}
      <Header />

      {/* the market predict component */}
    </SafeAreaView>
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
