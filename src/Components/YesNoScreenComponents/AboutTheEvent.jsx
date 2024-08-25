import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const AboutTheEvent = () => {
  return (
    <View style={styles.mainContainer}>
      {/* details and buttons */}
      <View>
        <View style={styles.container}>
          <Text style={styles.title}>About The Event</Text>
          {/* flex text */}
          <View style={styles.flexRow}>
            {/* traders and started at */}
            <View>
              <Text style={styles.lightText}>Traders</Text>
              <Text style={styles.darkText}>₹ 47.12K</Text>

              <Text style={styles.lightText}>Started at</Text>
              <Text style={styles.darkText}>Jun 19, 2024 3:40 PM</Text>
            </View>

            {/* volume and ending at */}
            <View>
              <Text style={styles.lightText}>Volume</Text>
              <Text style={styles.darkText}>₹ 9.9L</Text>

              <Text style={styles.lightText}>Ending at</Text>
              <Text style={styles.darkText}>Jun 19, 2024 9:00 PM</Text>
            </View>
          </View>
        </View>

        {/* dotted border */}
        <View style={styles.dottedBorder} />

        {/* overview */}
        <TouchableOpacity style={styles.arrowButtonContainer}>
          <View>
            <Text style={styles.darkText}>Overview</Text>
            <Text style={styles.lightText}>Information about event</Text>
          </View>

          {/* arrow icon */}
          <MaterialIcons name="arrow-forward-ios" size={24} color="white" />
        </TouchableOpacity>

        {/* dotted border */}
        <View style={styles.dottedBorder} />

        {/* source of truth */}
        <TouchableOpacity style={styles.arrowButtonContainer}>
          <View>
            <Text style={styles.darkText}>Source of truth</Text>
            <Text style={styles.lightText}>
              Information about source of truth
            </Text>
          </View>

          {/* arrow icon */}
          <MaterialIcons name="arrow-forward-ios" size={24} color="white" />
        </TouchableOpacity>

        {/* dotted border */}
        <View style={styles.dottedBorder} />

        {/* rules */}
        <TouchableOpacity style={styles.arrowButtonContainer}>
          <View>
            <Text style={styles.darkText}>Rules</Text>
            <Text style={styles.lightText}>Terms and conditions</Text>
          </View>

          {/* arrow icon */}
          <MaterialIcons name="arrow-forward-ios" size={24} color="white" />
        </TouchableOpacity>

        {/* dotted border */}
        <View style={styles.dottedBorder} />
      </View>

      {/* keep trading text */}
      <View style={styles.tradingContainer}>
        <Text style={styles.tradingText}>Keep</Text>
        <Text style={styles.tradingText}>Trading !</Text>
      </View>

      {/* border */}
      <View style={styles.border} />

      {/* yes no buttons */}
      <View style={styles.contentContainer}>
        {/* yes button */}
        <TouchableOpacity style={styles.yesButton}>
          <View style={styles.internalYesButton}>
            <Text style={styles.buttonText}>Yes ₹ 5.3</Text>
          </View>
        </TouchableOpacity>

        {/* no button */}
        <TouchableOpacity style={styles.noButton}>
          <View style={styles.internalNoButton}>
            <Text style={styles.buttonText}>No ₹ 4.7</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    margin: 5,
    marginTop: 20,
  },

  container: {
    margin: 30,
  },
  title: {
    color: "white",
    fontWeight: "bold",
    fontSize: 26,
  },

  flexRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 15,
    marginTop: 30,
  },

  lightText: {
    color: "gray",
    fontSize: 14,
    marginTop: 10,
  },
  darkText: {
    color: "white",
    fontSize: 16,
    marginTop: 5,
  },

  dottedBorder: {
    borderStyle: "dotted",
    borderWidth: 2,
    borderColor: "gray",
  },

  arrowButtonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 10,
    paddingBottom: 15,
  },

  tradingContainer: {
    padding: 30,
  },
  tradingText: {
    color: "#8A8A8A",
    fontWeight: "bold",
    fontSize: 40,
    letterSpacing: 1,
  },

  border: {
    width: "100%",
    height: 0.8,
    backgroundColor: "gray",
  },

  contentContainer: {
    flexDirection: "row",
    gap: 20,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 50,
  },
  yesButton: {
    width: 165,
    height: 60,
    backgroundColor: "#fff",
    borderRadius: 7,
    marginTop: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0F3995",
  },
  noButton: {
    width: 165,
    height: 60,
    backgroundColor: "#fff",
    borderRadius: 7,
    marginTop: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#089558",
    justifyContent: "center",
    alignItems: "center",
  },

  internalYesButton: {
    width: 160,
    height: 54,
    backgroundColor: "#fff",
    borderRadius: 7,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#144CC7",
  },
  internalNoButton: {
    width: 160,
    height: 54,
    backgroundColor: "#fff",
    borderRadius: 7,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#06C270",
  },

  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
});

export default AboutTheEvent;
