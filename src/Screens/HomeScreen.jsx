import React from "react";
import { StyleSheet, SafeAreaView, ScrollView } from "react-native";

import HeaderComponent from "../Components/HomeScreenComponents/HeaderComponent";
import SliderComponent from "../Components/HomeScreenComponents/SliderComponent";
import YesNoComponent from "../Components/HomeScreenComponents/YesNoComponent";

import { SliderItem, SliderItem2 } from "../Utils/SliderItem";

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* header component */}
      <HeaderComponent />

      <ScrollView>
        {/* small slider component */}
        <SliderComponent items={SliderItem} />

        {/* big slider component */}
        <SliderComponent items={SliderItem2} condition={true} />

        {/* yes no component */}
        <YesNoComponent />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#171717",
  },
});

export default HomeScreen;
