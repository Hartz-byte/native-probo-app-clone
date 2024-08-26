import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Modal from "react-native-modal";

import PricingComponent from "./PricingComponent";

import IplLogo from "../../Assets/IPLLogo.png";

const YesNoComponent = () => {
  const navigation = useNavigation();

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedButton, setSelectedButton] = useState(null);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const handleButtonClick = (button) => {
    setSelectedButton(button);
    toggleModal();
  };

  return (
    <View>
      {/* yes no cards */}
      {[...Array(3)].map((_, index) => (
        <TouchableOpacity
          key={index}
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
            <TouchableOpacity
              style={styles.yesButton}
              onPress={() => handleButtonClick("yes")}
            >
              <View style={styles.internalYesButton}>
                <Text style={styles.buttonText}>Yes ₹ 5.3</Text>
              </View>
            </TouchableOpacity>

            {/* no button */}
            <TouchableOpacity
              style={styles.noButton}
              onPress={() => handleButtonClick("no")}
            >
              <View style={styles.internalNoButton}>
                <Text style={styles.buttonText}>No ₹ 4.7</Text>
              </View>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      ))}

      {/* model */}
      <Modal
        isVisible={isModalVisible}
        onBackdropPress={toggleModal}
        animationIn="slideInUp"
        animationOut="slideOutDown"
        animationInTiming={500}
        animationOutTiming={500}
        useNativeDriver={true}
        style={{
          margin: 0,
          justifyContent: "flex-end",
        }}
      >
        <View style={styles.modalContent}>
          {/* prcing component */}
          <PricingComponent selectedButton={selectedButton} />
        </View>
      </Modal>
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

export default YesNoComponent;
