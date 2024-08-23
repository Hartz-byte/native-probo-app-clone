import { StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";

import TabNavigator from "./src/TabNavigator/TabNavigator";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <StatusBar style="auto" /> */}

      <TabNavigator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0D0D0D",
  },
});
