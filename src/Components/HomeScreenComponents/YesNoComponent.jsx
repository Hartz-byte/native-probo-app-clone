import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

import IplLogo from "../../Assets/IPLLogo.png";

const YesNoComponent = () => {
  const navigation = useNavigation();

  return (
    <View>
      {/* first */}
      <TouchableOpacity
        style={styles.container}
        onPress={() => navigation.navigate("YesNoScreen")}
      >
        {/* title, sub title and image */}
        <View style={styles.contentContainer}>
          <View>
            {/* title */}
            <Text style={styles.titleText}>
              Kolkata to win the match vs Mumbai?
            </Text>

            {/* sub title */}
            <Text style={styles.subtitleText}>
              H2H last 5 T20 : Kolkata 4, Mumbai 1, DRAW 0
            </Text>
          </View>

          {/* image */}
          <View style={styles.imageContainer}>
            <Image source={IplLogo} style={styles.image} />
          </View>
        </View>

        {/* buttons */}
        <View style={styles.contentContainer}>
          {/* yes button */}
          <TouchableOpacity style={styles.yesButton}>
            <Text style={styles.buttonText}>Yes ₹ 5.3</Text>
          </TouchableOpacity>

          {/* no button */}
          <TouchableOpacity style={styles.noButton}>
            <Text style={styles.buttonText}>No ₹ 4.7</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>

      {/* second */}
      <TouchableOpacity
        style={styles.container}
        onPress={() => navigation.navigate("YesNoScreen")}
      >
        {/* title, sub title and image */}
        <View style={styles.contentContainer}>
          <View>
            {/* title */}
            <Text style={styles.titleText}>
              Kolkata to win the match vs Mumbai?
            </Text>

            {/* sub title */}
            <Text style={styles.subtitleText}>
              H2H last 5 T20 : Kolkata 4, Mumbai 1, DRAW 0
            </Text>
          </View>

          {/* image */}
          <View style={styles.imageContainer}>
            <Image source={IplLogo} style={styles.image} />
          </View>
        </View>

        {/* buttons */}
        <View style={styles.contentContainer}>
          {/* yes button */}
          <TouchableOpacity style={styles.yesButton}>
            <Text style={styles.buttonText}>Yes ₹ 5.3</Text>
          </TouchableOpacity>

          {/* no button */}
          <TouchableOpacity style={styles.noButton}>
            <Text style={styles.buttonText}>No ₹ 4.7</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>

      {/* third */}
      <TouchableOpacity
        style={styles.container}
        onPress={() => navigation.navigate("YesNoScreen")}
      >
        {/* title, sub title and image */}
        <View style={styles.contentContainer}>
          <View>
            {/* title */}
            <Text style={styles.titleText}>
              Kolkata to win the match vs Mumbai?
            </Text>

            {/* sub title */}
            <Text style={styles.subtitleText}>
              H2H last 5 T20 : Kolkata 4, Mumbai 1, DRAW 0
            </Text>
          </View>

          {/* image */}
          <View style={styles.imageContainer}>
            <Image source={IplLogo} style={styles.image} />
          </View>
        </View>

        {/* buttons */}
        <View style={styles.contentContainer}>
          {/* yes button */}
          <TouchableOpacity style={styles.yesButton}>
            <Text style={styles.buttonText}>Yes ₹ 5.3</Text>
          </TouchableOpacity>

          {/* no button */}
          <TouchableOpacity style={styles.noButton}>
            <Text style={styles.buttonText}>No ₹ 4.7</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 385,
    height: 220,
    backgroundColor: "#1c1c1e",
    margin: 10,
    marginTop: 30,
    borderRadius: 9,
    padding: 30,
  },

  titleText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 10,
  },
  subtitleText: {
    color: "white",
    fontSize: 12,
  },

  image: {
    width: 40,
    height: 40,
  },

  contentContainer: {
    flexDirection: "row",
    gap: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: 60,
    height: 60,
    backgroundColor: "#fff",
    borderRadius: 7,
    justifyContent: "center",
    alignItems: "center",
  },

  yesButton: {
    width: 165,
    height: 60,
    backgroundColor: "#fff",
    borderRadius: 7,
    marginTop: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#144CC7",

    shadowColor: "gray",
    shadowOffset: {
      width: 7,
      height: 7,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  noButton: {
    width: 165,
    height: 60,
    backgroundColor: "#fff",
    borderRadius: 7,
    marginTop: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#06C270",

    shadowColor: "gray",
    shadowOffset: {
      width: 7,
      height: 7,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
});

export default YesNoComponent;
