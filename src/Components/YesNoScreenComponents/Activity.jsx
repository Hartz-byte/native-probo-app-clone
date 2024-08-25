import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons, FontAwesome } from "@expo/vector-icons";

const Activity = () => {
  return (
    <View style={styles.container}>
      {/* top text */}
      <View style={styles.flex}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>ACTIVITY</Text>
        </View>

        <Text style={{ ...styles.text, marginLeft: 40 }}>ORDER BOOK</Text>
      </View>

      {/* comparision and text */}
      {[...Array(4)].map((_, index) => (
        <View key={index}>
          {/* comparision */}
          <View style={styles.comparisionContainer}>
            {/* profile icon */}
            <View style={styles.profileCircle}>
              <MaterialCommunityIcons name="account" size={42} color="black" />
            </View>

            {/* yes no bar */}
            <View style={styles.barContainer}>
              <View style={styles.blueBar}>
                <View style={[styles.blueBar, styles.blue]}>
                  <Text style={styles.barText}>₹ 9</Text>
                </View>
              </View>

              <View style={styles.greenBar}>
                <View style={[styles.greenBar, styles.green]}>
                  <Text style={styles.barText}>₹ 1</Text>
                </View>
              </View>
            </View>

            {/* profile icon */}
            <View style={styles.profileCircle}>
              <MaterialCommunityIcons name="account" size={42} color="black" />
            </View>
          </View>

          {/* text */}
          <View style={styles.flex2}>
            <Text style={styles.barText}>Hella</Text>
            <Text style={styles.barText2}>a few second ago</Text>
            <Text style={styles.barText}>Robin</Text>
          </View>
        </View>
      ))}

      {/* show all button */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Show all</Text>
        <FontAwesome name="long-arrow-right" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginTop: 20,
  },

  flex: {
    flexDirection: "row",
    alignItems: "center",
  },
  flex2: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: 26,
    paddingRight: 29,
  },

  textContainer: {
    width: 100,
    height: 50,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 7,
    shadowColor: "#fff",
    elevation: 5,
  },

  text: {
    color: "white",
    fontWeight: "bold",
    letterSpacing: 2,
    fontSize: 16,
  },

  profileCircle: {
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },

  comparisionContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 40,
    marginBottom: 10,
  },

  barContainer: {
    width: 190,
    height: 30,
    flexDirection: "row",
  },

  blueBar: {
    width: "80%",
    height: "100%",
    backgroundColor: "#064FEF",
    borderTopLeftRadius: 9,
    borderBottomLeftRadius: 9,
    justifyContent: "center",
    alignItems: "center",
  },
  greenBar: {
    width: "20%",
    height: "100%",
    backgroundColor: "#06C270",
    borderTopRightRadius: 9,
    borderBottomRightRadius: 9,
    justifyContent: "center",
    alignItems: "center",
  },

  blue: {
    width: "96%",
    height: "88%",
    backgroundColor: "#144CC7",
    alignItems: "start",
  },
  green: {
    width: "90%",
    height: "88%",
    backgroundColor: "#05ae64",
    alignItems: "start",
  },

  barText: {
    color: "white",
    fontSize: 18,
    marginLeft: 5,
    fontWeight: "bold",
    letterSpacing: 0.3,
  },
  barText2: {
    color: "white",
    fontSize: 16,
    marginLeft: 5,
  },

  button: {
    marginTop: 30,
    marginLeft: 10,
    marginRight: 10,
    width: 370,
    height: 50,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 7,
    shadowColor: "#fff",
    elevation: 2,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },

  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
    letterSpacing: 0.5,
  },
});

export default Activity;
