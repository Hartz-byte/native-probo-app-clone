import React from "react";
import { StyleSheet, View, Text, FlatList, Image } from "react-native";

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
                <View
                  style={
                    condition && !item.title
                      ? styles.displayBanner
                      : styles.displayFlex
                  }
                >
                  {/* title and sub title text */}
                  {item.title ? (
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
                  ) : null}

                  {/* increament text */}
                  {item.increament ? (
                    <Text style={styles.text3}>{item.increament}</Text>
                  ) : null}

                  {/* image */}
                  <Image
                    source={item.image}
                    style={
                      condition && !item.title
                        ? styles.largeImage
                        : condition
                        ? styles.bannerImage
                        : styles.image
                    }
                  />
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
    marginLeft: 10,
    marginRight: 10,
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
    width: 225,
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
    alignItems: "center",
    gap: 20,
  },
  displayBanner: {},

  image: {
    width: 50,
    height: 50,
  },
  bannerImage: {
    width: 100,
    height: 50,
  },
  largeImage: {
    width: 385,
    height: 130,
  },
});

export default SliderComponent;
