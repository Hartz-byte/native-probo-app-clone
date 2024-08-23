import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "../Screens/HomeScreen";
import PortfolioScreen from "../Screens/PortfolioScreen";
import WalletScreen from "../Screens/WalletScreen";
import ProfileScreen from "../Screens/ProfileScreen";

import { AntDesign, MaterialIcons, Feather } from "@expo/vector-icons";

const TabNavigator = () => {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarHeight: 70,

          tabBarActiveTintColor: "white",
          tabBarInactiveTintColor: "gray",
          tabBarStyle: {
            backgroundColor: "black",
            borderTopWidth: 2,
            borderTopColor: "gray",

            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            height: "8%",
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
                  <AntDesign
                    name="home"
                    size={24}
                    color={focused ? "#E0B420" : "white"}
                    style={styles.icon}
                  />
                </View>
              );
            },
          }}
        />

        {/* portfolio */}
        <Tab.Screen name="Portfolio" component={PortfolioScreen} />

        {/* wallet */}
        <Tab.Screen name="Wallet" component={WalletScreen} />

        {/* profile */}
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default TabNavigator;
