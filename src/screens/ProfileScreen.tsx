import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native'
import React from 'react'
import Stopwatch from '../components/Stopwatch';


const ProfileScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'light-content'} />
        <Text style={styles.titleScreen}>Profile</Text>
      <SafeAreaView style={styles.bigCircle}>
        <Text style={styles.bigCircleTxt}></Text>
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
  bigCircle: {
    width: 250,
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
    borderRadius: 150,
    backgroundColor: '#DCDCDC',
    borderColor: "#415A77",
    borderWidth: 10,
  },
})

export default ProfileScreen