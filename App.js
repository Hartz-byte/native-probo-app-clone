import { StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";

import TabNavigator from "./src/Navigation/TabNavigator";
import MainTabNavigator from "./src/Navigation/MainTabNavigator";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <StatusBar style="auto" /> */}

      <MainTabNavigator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#171717",
  },
});
