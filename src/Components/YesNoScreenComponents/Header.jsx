import React from "react";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";

import CricketImage from "../../Assets/ipl.png";

const Header = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      {/* back and share buttons */}
      <View style={styles.topContainer}>
        <View style={styles.buttonFlex}>
          {/* back arrow icon */}
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <AntDesign name="arrowleft" size={30} color="white" />
          </TouchableOpacity>

          {/* event text */}
          <Text style={styles.text}>Event 8625</Text>
        </View>

        {/* share icon */}
        <TouchableOpacity>
          <AntDesign name="sharealt" size={28} color="white" />
        </TouchableOpacity>
      </View>

      {/* image and text content */}
      <View style={styles.bottomContainer}>
        {/* image */}
        <Image source={CricketImage} style={styles.image} />

        {/* text */}
        <Text style={styles.questionText}>
          Kolkata to win the match vs Mumbai?
        </Text>
        <Text style={styles.greenText}>
          💡 Last 5 T20 : KOLKATA 4, MUMBAI 1, DRAW 0
        </Text>
      </View>

      {/* border */}
      <View style={styles.border} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  topContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 30,
  },

  text: {
    color: "white",
    letterSpacing: 0.5,
    fontSize: 22,
  },

  buttonFlex: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  bottomContainer: {
    alignItems: "center",
    marginTop: 30,
    gap: 10,
  },

  image: {
    width: 120,
    height: 120,
  },

  questionText: {
    color: "white",
    fontWeight: "bold",
    letterSpacing: 0.5,
    fontSize: 20,
  },
  greenText: {
    color: "#3BFFAD",
    letterSpacing: 1,
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 25,
  },

  border: {
    height: 1,
    width: "100%",
    backgroundColor: "gray",
    marginTop: 30,
    marginBottom: 50,
  },
});

export default Header;
