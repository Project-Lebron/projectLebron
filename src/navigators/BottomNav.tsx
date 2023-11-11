import { StyleSheet, Text, View } from "react-native";
import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import StatsScreen from "../screens/StatsScreen";
import ProfileScreen from "../screens/ProfileScreen";

const Tab = createBottomTabNavigator();

const BottomNav = () => {
  return (
    <Tab.Navigator
        screenOptions={{
            headerShown: false,
        	tabBarHideOnKeyboard: true,
            tabBarShowLabel: false,
        }}>
      <Tab.Screen name="Stats" component={StatsScreen}></Tab.Screen>
      <Tab.Screen name="Home" component={HomeScreen}></Tab.Screen>
      <Tab.Screen name="Profile" component={ProfileScreen}></Tab.Screen>
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({});

export default BottomNav;
