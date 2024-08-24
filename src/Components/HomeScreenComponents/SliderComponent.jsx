import React from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";

const SliderComponent = ({ items, condition }) => {
  return (
    <View>
      <FlatList
        horizontal
        data={items}
        // keyExtractor={(item) => item.title}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => {
          return (
            <View style={styles.sliderContainer} key={index}>
              <View
                style={[
                  styles.itemBox,
                  condition ? styles.wideBox : styles.smallBox,
                ]}
              >
                <View style={styles.displayFlex}>
                  <View>
                    {/* title text */}
                    <Text
                      style={[
                        styles.text,
                        condition ? styles.wideText : styles.smallText,
                      ]}
                    >
                      {item.title}
                    </Text>
                    {/* sub title text */}
                    <Text
                      style={[
                        styles.text2,
                        condition ? styles.wideText2 : styles.smallText2,
                      ]}
                    >
                      {item.subtitle}
                    </Text>
                  </View>

                  {/* increament text */}
                  <Text style={styles.text3}>{item.increament}</Text>

                  {/* image */}
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
    justifyContent: "center",
    alignItems: "center",
  },
  wideBox: {
    width: 385,
    height: 130,
    backgroundColor: "white",
    margin: 10,
  },
  smallBox: {
    width: 250,
    height: 80,
    backgroundColor: "#1c1c1e",
    margin: 10,
    borderRadius: 12,
  },

  text: {
    letterSpacing: 1,
    fontWeight: "bold",
  },
  wideText: {
    color: "black",
    fontSize: 14,
  },
  smallText: {
    color: "white",
    fontSize: 18,
  },

  text2: {
    color: "gray",
    letterSpacing: 1,
  },
  wideText2: {
    fontSize: 8,
    width: 255,
    marginTop: 10,
  },
  smallText2: {
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
