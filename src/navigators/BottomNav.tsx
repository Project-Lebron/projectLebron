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
      
      <Tab.Screen name="Stats" component={StatsScreen}
        options={{ // stats icon
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="stats-chart" size={50} color={color} />
          ),}}>
        </Tab.Screen>

      <Tab.Screen name="HomeScreen" component={HomeScreen}
        options={{ // homescreen icon
          tabBarIcon: ({ color, size }) => ( 
            <Ionicons name="basketball" size={50} color={color} />
          ),}}>
      </Tab.Screen>

      <Tab.Screen name="Profile" component={ProfileScreen}
        options={{ // profile icon
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" size={50} color={color} />
          ),}}>
      </Tab.Screen>

    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({

	tabBarStyle: {
		height: 100,
		position: 'absolute',
		backgroundColor: '#ddd',
		borderTopwidth: 0,
		elevation: 0,
		borderTopColor: 'transparent',
	},
});

export default BottomNav;
