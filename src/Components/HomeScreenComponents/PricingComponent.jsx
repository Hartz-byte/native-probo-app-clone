import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Slider from "@react-native-community/slider";

import IplLogo from "../../Assets/IPLLogo.png";

const PricingComponent = () => {
  return (
    <View style={styles.mainContainer}>
      {/* question and image */}
      <View style={styles.questionContainer}>
        <Text style={styles.questionText}>
          Kolkata to win the match vs Mumbai?
        </Text>

        <View style={styles.imageContainer}>
          <Image source={IplLogo} style={styles.image} />
        </View>
      </View>

      {/* slider */}
      <Slider
        style={{ width: 300, height: 40 }}
        minimumValue={0}
        maximumValue={1}
        minimumTrackTintColor="#0A44C2"
        maximumTrackTintColor="#fff"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "black",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingTop: 10,
    paddingBottom: 10,
  },

  questionContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
  },

  questionText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },

  imageContainer: {
    width: 60,
    height: 60,
    backgroundColor: "#fff",
    borderRadius: 9,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 40,
    height: 40,
  },
});

export default PricingComponent;
