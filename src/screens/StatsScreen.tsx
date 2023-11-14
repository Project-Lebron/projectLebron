import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native';
import React from 'react';

import TopNav from "../navigators/TopNav";

const StatsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <TopNav />
      <StatusBar barStyle={'light-content'} />
      <Text style={styles.titleScreen}>Stats</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  listTab: {
    flex: 1, 
    backgroundColor: '#fff',
    padding: 15
  },
  titleScreen: {
    color:'white',
    fontFamily: 'Arial',
    fontSize: 32,
    fontWeight: 'bold',
  },
})

export default StatsScreen
