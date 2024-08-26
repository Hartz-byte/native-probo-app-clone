import React from "react";
import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Slider from "@react-native-community/slider";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { SwipeButton } from "react-native-expo-swipe-button";

import IplLogo from "../../Assets/IPLLogo.png";

const PricingComponent = ({ selectedButton }) => {
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

      {/* yes no button toggle */}
      <View style={styles.buttonContainer}>
        {/* yes button */}
        <TouchableOpacity
          style={
            selectedButton === "yes" ? styles.yesButton : styles.defaultButton
          }
        >
          <View
            style={
              selectedButton === "yes"
                ? styles.internalYesButton
                : styles.defaultButton
            }
          >
            <Text style={styles.buttonText}>Yes ₹ 5.3</Text>
          </View>
        </TouchableOpacity>

        {/* no button */}
        <TouchableOpacity
          style={
            selectedButton === "no" ? styles.noButton : styles.defaultButton
          }
        >
          <View
            style={
              selectedButton === "no"
                ? styles.internalNoButton
                : styles.defaultButton
            }
          >
            <Text style={styles.buttonText}>No ₹ 4.7</Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* slider container */}
      <View style={styles.sliderContainer}>
        {/* top text */}
        <View style={styles.flex}>
          <Text style={styles.questionText}>Price</Text>

          <View style={styles.textStyle}>
            <Text style={styles.questionText}>₹ 5.3</Text>
            <Text style={styles.text2}>132045 qty available</Text>
          </View>
        </View>

        {/* slider */}
        <View style={styles.flex}>
          <TouchableOpacity style={styles.iconConatiner}>
            <AntDesign name="minus" size={24} color="black" />
          </TouchableOpacity>

          {/* slider */}
          <Slider
            style={styles.slider}
            minimumValue={0}
            maximumValue={1}
            minimumTrackTintColor={
              selectedButton === "yes" ? "#0A44C2" : "#078C52"
            }
            maximumTrackTintColor="#fff"
            thumbTintColor={selectedButton === "yes" ? "#0A44C2" : "#078C52"}
          />

          <TouchableOpacity style={styles.iconConatiner}>
            <AntDesign name="plus" size={24} color="black" />
          </TouchableOpacity>
        </View>

        {/* dotted border */}
        <View style={styles.dottedBorder} />

        {/* bottom text */}
        <View style={styles.flex}>
          <View>
            <Text style={styles.questionText}>₹ 5.3</Text>
            <Text style={styles.text2}>You put</Text>
          </View>

          <View>
            <Text style={styles.greenText}>₹ 10</Text>
            <Text style={styles.text2}>You get</Text>
          </View>
        </View>
      </View>

      {/* swipe button */}
      <View>
        <SwipeButton
          Icon={<MaterialIcons name="double-arrow" size={40} color="white" />}
          title="Swipe for Yes"
          borderRadius={180}
          containerStyle={{
            backgroundColor: selectedButton === "yes" ? "#0E368F" : "#078C52",
          }}
          underlayTitle="Release to complete"
          underlayTitleStyle={{ color: "white" }}
        />
      </View>

      {/* balance */}
      <Text style={styles.balanceText}>Available Balance : 400.00</Text>
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
  greenText: {
    color: "#039855",
    fontWeight: "bold",
    fontSize: 18,
    marginLeft: 8,
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

  buttonContainer: {
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    width: "95%",
    height: 70,
    backgroundColor: "#212426",
    borderRadius: 50,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  yesButton: {
    width: "50%",
    height: "100%",
    backgroundColor: "#0E368F",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  internalYesButton: {
    width: "96%",
    height: "92%",
    backgroundColor: "#144CC7",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },

  noButton: {
    width: "50%",
    height: "100%",
    backgroundColor: "#078C52",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  internalNoButton: {
    width: "96%",
    height: "92%",
    backgroundColor: "#06C270",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },

  sliderContainer: {
    margin: 10,
    marginTop: 30,
    width: "95%",
    height: 250,
    borderWidth: 0.4,
    borderColor: "gray",
    borderRadius: 9,
    padding: 20,
  },

  slider: {
    width: 250,
    height: 40,
    marginTop: 20,
  },

  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    letterSpacing: 0.5,
  },

  flex: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  flex2: {
    flexDirection: "row",
    gap: 0,
  },
  textStyle: {
    alignItems: "flex-end",
  },

  text2: {
    color: "white",
    fontSize: 16,
  },

  iconConatiner: {
    width: 40,
    height: 40,
    backgroundColor: "white",
    borderRadius: 9,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 20,
  },

  dottedBorder: {
    borderStyle: "dotted",
    borderWidth: 2,
    borderColor: "gray",
    marginTop: 10,
    marginBottom: 10,
  },

  balanceText: {
    color: "white",
    textAlign: "center",
    marginTop: 10,
  },

  defaultButton: {
    width: "50%",
    height: "100%",
    backgroundColor: "transparent",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default PricingComponent;
