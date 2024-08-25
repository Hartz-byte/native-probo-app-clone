import { StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";

import MainTabNavigator from "./src/Navigation/MainTabNavigator";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <StatusBar /> */}

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
