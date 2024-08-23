import React from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";

const SliderComponent = ({ items, condition }) => {
  return (
    <View>
      <FlatList
        horizontal
        data={items}
        keyExtractor={(item) => item.title}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <View style={styles.sliderContainer}>
              <View style={styles.itemBox}>
                <View style={styles.displayFlex}>
                  <View>
                    <Text style={styles.text}>{item.title}</Text>
                    <Text style={styles.text2}>{item.subtitle}</Text>
                  </View>

                  <Text style={styles.text3}>{item.increament}</Text>
                </View>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  sliderContainer: {
    flexDirection: "row",
    marginTop: 20,
  },
  itemBox: {
    width: 250,
    height: 80,
    backgroundColor: "#1c1c1e",
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    borderRadius: 12,
  },
  text: {
    color: "white",
    letterSpacing: 1,
    fontWeight: "bold",
    fontSize: 18,
  },
  text2: {
    color: "gray",
    letterSpacing: 1,
    fontSize: 18,
  },
  text3: {
    color: "green",
    letterSpacing: 1,
    fontSize: 18,
    marginTop: 25,
  },
  displayFlex: {
    flexDirection: "row",
    gap: 10,
  },
});

export default SliderComponent;
