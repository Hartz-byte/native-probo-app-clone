import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";

import TabNavigator from "./src/TabNavigator/TabNavigator";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <TabNavigator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
