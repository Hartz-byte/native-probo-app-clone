import React from "react";
import { View, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "../Screens/HomeScreen";
import PortfolioScreen from "../Screens/PortfolioScreen";
import WalletScreen from "../Screens/WalletScreen";
import ProfileScreen from "../Screens/ProfileScreen";

import {
  AntDesign,
  Feather,
  MaterialCommunityIcons,
  Ionicons,
} from "@expo/vector-icons";

const TabNavigator = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,

        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "white",

        tabBarLabelStyle: {
          fontWeight: "bold",
          fontSize: 14,
          letterSpacing: 1,
        },

        tabBarStyle: {
          backgroundColor: "black",
          borderTopWidth: 2,
          borderTopColor: "white",
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40,
          height: "12%",
        },
      }}
    >
      {/* home */}
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={styles.btn}>
                <Feather name="home" size={24} color="white" />
              </View>
            );
          },
        }}
      />

      {/* portfolio */}
      <Tab.Screen
        name="Portfolio"
        component={PortfolioScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={styles.btn}>
                <MaterialCommunityIcons
                  name="briefcase-variant"
                  size={24}
                  color="white"
                />
              </View>
            );
          },
        }}
      />

      {/* wallet */}
      <Tab.Screen
        name="Wallet"
        component={WalletScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={styles.btn}>
                <Ionicons name="wallet-outline" size={24} color="white" />
              </View>
            );
          },
        }}
      />

      {/* profile */}
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={styles.btn}>
                <AntDesign name="profile" size={24} color="white" />
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  btn: {
    width: 55,
    height: 55,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default TabNavigator;
