import { StyleSheet, Text, View, Dimensions, FlatList, Image,  SafeAreaView, TouchableOpacity} from "react-native";
import React from "react";

// icons
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from "../screens/HomeScreen";
import StatsScreen from "../screens/StatsScreen";
import ProfileScreen from "../screens/ProfileScreen";

//test

const Tab = createBottomTabNavigator();

const BottomNav = () => {
  // const iconColor = ''; // color of icons at the navigator

  return (
    <Tab.Navigator
        screenOptions={{
            headerShown: false,
        	tabBarHideOnKeyboard: true,
            tabBarShowLabel: false,
            tabBarStyle:styles.tabBarStyle,
        }}>
      
      <Tab.Screen name="Stats" component={StatsScreen} // stats 
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="stats-chart" size={35} color={color} />
          ),}}>
        </Tab.Screen>

      <Tab.Screen name="Home" component={HomeScreen} // homescreen
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="basketball" size={35} color={color} />
          ),}}>
      </Tab.Screen>

      <Tab.Screen name="Profile" component={ProfileScreen} // profile
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" size={35} color={color} />
          ),}}>
      </Tab.Screen>

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
	},
});



export default BottomNav;
