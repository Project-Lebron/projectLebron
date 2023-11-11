import { StyleSheet, Text, View } from "react-native";
import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import StatsScreen from "../screens/StatsScreen";
import ProfileScreen from "../screens/ProfileScreen";

// https://fonts.google.com/icons?selected=Material+Icons:sports_basketball:&icon.query=basketball

const Tab = createBottomTabNavigator();

const BottomNav = () => {
  return (
    <Tab.Navigator
        screenOptions={{
            headerShown: false,
        	tabBarHideOnKeyboard: true,
            tabBarShowLabel: false,
            tabBarStyle:styles.tabBarStyle,
        }}>
        
      <Tab.Screen name="Stats" component={StatsScreen}></Tab.Screen>
      <Tab.Screen name="Home" component={HomeScreen}></Tab.Screen>
      <Tab.Screen name="Profile" component={ProfileScreen}></Tab.Screen>
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({

	tabBarStyle: {
		height:80,
		position:'absolute',
		backgroundColor:'#ddd',
		borderTopwidth:0,
		elevation:0,
		borderTopColor:'transparent',
	}

});



export default BottomNav;
