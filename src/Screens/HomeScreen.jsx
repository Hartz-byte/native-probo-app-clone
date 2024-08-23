import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";

import HeaderComponent from "../Components/HomeScreenComponents/HeaderComponent";
import SliderComponent from "../Components/HomeScreenComponents/SliderComponent";
import BackgroundStory from "../Components/HomeScreenComponents/BackgroundStory";

import { SliderItem, SliderItem2 } from "../Utils/SliderItem";

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* header component */}
      <HeaderComponent />

      {/* small slider component */}
      <SliderComponent items={SliderItem} />

      {/* big slider component */}
      {/* <BackgroundStory /> */}
      <SliderComponent items={SliderItem2} condition={true} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#101011",
  },
});

export default HomeScreen;
