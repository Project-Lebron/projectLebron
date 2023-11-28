import { StyleSheet, Text, Dimensions, View, SafeAreaView, StatusBar } from 'react-native'
import React from 'react'


const ProfileScreen = () => {

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'light-content'} />


      <SafeAreaView style={styles.topContainer}>
        <Text style={styles.topText}>Bronny James</Text>
        <Text style={[styles.topText, {fontSize: 20, fontWeight: '900'}]}>CO 2023</Text>
      </SafeAreaView>

      <View style={styles.circleContainer}>
        <Text style={[styles.topText, {fontSize: 20, color: '#415A77', marginTop: 10}]}>@bronnyjames</Text>
        <SafeAreaView style={styles.bigCircle}></SafeAreaView>
      </View>

      <View style={[styles.container, {alignItems: 'center', marginBottom: 0}]}>
        <View style={[styles.statsContainer, {marginBottom: 0}]}></View>
      </View>

      <View style={[styles.container, {alignItems: 'center', marginBottom: 0}]}>
        <View style={[styles.statsContainer, {marginBottom: 0}]}></View>
      </View>



    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1B263B',
  },

  topContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },

  topText: {
    color:'white',
    marginRight: 15,
    marginLeft: 15,
    marginTop: 20,
    fontFamily: 'Roboto',
    fontSize: 30,
    fontWeight: '900',
  },
  circleContainer: {
    alignItems: 'center',
  },
  bigCircle: {
    width: 150,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
    borderRadius: 150,
    backgroundColor: '#DCDCDC',
    borderColor: "#415A77",
    borderWidth: 7,
  },
  header: {
    alignItems: 'flex-start',
    marginLeft: 20,
  },
  statsContainer: {
    backgroundColor: '#0D1B2A',
    borderRadius: 25,
    padding: 0,
    width: '85%', 
    height: 200, 
    marginTop: 0,

  },
})

export default ProfileScreen