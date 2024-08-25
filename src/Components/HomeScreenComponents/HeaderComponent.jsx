import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Switch } from "react-native";
import { MaterialIcons, SimpleLineIcons } from "@expo/vector-icons";

const HeaderComponent = () => {
  const [toggle, setToggel] = useState(false);

  const handleToggle = () => {
    setToggel(!toggle);
  };

  return (
    <View style={styles.container}>
      {/* left section */}
      <View>
        <TouchableOpacity style={styles.displayFlex}>
          <Text style={styles.text}>Category</Text>

          <MaterialIcons name="keyboard-arrow-down" size={34} color="white" />
        </TouchableOpacity>
      </View>

      {/* right section */}
      <View style={styles.displayFlex2}>
        {/* toggle icon */}
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          onValueChange={handleToggle}
          value={toggle}
        />

        <Text style={toggle ? styles.liveText : styles.text}>LIVE</Text>

        {/* notification icon */}
        <TouchableOpacity style={styles.circle}>
          <SimpleLineIcons name="bell" size={20} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 120,
    backgroundColor: "black",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  text: {
    color: "white",
    letterSpacing: 1,
    fontSize: 20,
  },
  liveText: {
    color: "red",
    letterSpacing: 1,
    fontSize: 20,
  },

  displayFlex: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    marginLeft: 15,
  },
  displayFlex2: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginRight: 15,
  },

  circle: {
    width: 40,
    height: 40,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "gray",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default HeaderComponent;
