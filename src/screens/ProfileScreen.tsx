import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native'
import React from 'react'
import Stopwatch from '../components/Stopwatch';


const ProfileScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'light-content'} />
        <Text style={styles.titleScreen}>Profile</Text>
      <SafeAreaView>
        <Stopwatch />
      </SafeAreaView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D1B2A',
    alignItems: 'center',
  },
  titleScreen: {
    color:'white',
    fontFamily: 'Arial',
    fontSize: 32,
    fontWeight: 'bold',
  },
})

export default ProfileScreen