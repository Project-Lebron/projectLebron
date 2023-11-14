import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import HistoryScreen from '../screens/HistoryScreen';
import WeeklyScreen from '../screens/WeeklyScreen';
import MonthlyScreen from '../screens/MonthlyScreen';
import YearlyScreen from '../screens/YearlyScreen';

const Tab = createMaterialTopTabNavigator();

const TopNav = () => {
  return (
    <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
            tabBarActiveTintColor: "black",
            tabBarLabelStyle: { fontSize: 12},
            tabBarStyle: { backgroundColor: 'white' }
        }}>
      <Tab.Screen name="History" component={HistoryScreen} options={{ tabBarLabel: "Test"}}></Tab.Screen>
      <Tab.Screen name="Weekly" component={WeeklyScreen}></Tab.Screen>
      <Tab.Screen name="Monthly" component={MonthlyScreen}></Tab.Screen>
      <Tab.Screen name="Yearly" component={YearlyScreen}></Tab.Screen>
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({})

export default TopNav