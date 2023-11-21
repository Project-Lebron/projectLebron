import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, StatusBar, Touchable } from 'react-native'
import React from 'react'

// https://stackoverflow.com/questions/63132548/react-navigation-5-error-binding-element-navigation-implicitly-has-an-any-ty
const HomeScreen = ({ navigation}: {navigation: any}) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'light-content'} />

      {/* title text */}
      <Text style={styles.titleText}>Project Lebron </Text>

      {/* big circle */}
      <SafeAreaView style={styles.bigCircle}>
        <Text style={styles.bigCircleTxt}>0</Text>
      </SafeAreaView>

      {/* text over small circles */}
      <SafeAreaView style={styles.tagsContainer}>
        <Text style={styles.tagsText}>Made</Text>
        <Text style={styles.tagsText}>Missed</Text>
      </SafeAreaView>

      {/* small circles */}
      <SafeAreaView style={styles.bottomCircles}>
        <SafeAreaView style={styles.smallCircles}>
          <Text style={styles.smallCircleTxt}>0</Text>
        </SafeAreaView>
        <SafeAreaView style={styles.smallCircles}>
          <Text style={styles.smallCircleTxt}>0</Text>
        </SafeAreaView>
      </SafeAreaView>

      {/* button */}
      <TouchableOpacity 
        style={styles.startButton} 
        onPress={() => {
          console.log('Pressed!')
          navigation.navigate('WorkoutStart')
        }}>
        <Text style={styles.startButtonText}>Start</Text>
      </TouchableOpacity>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D1B2A',
    alignItems: 'center',
  },
  
  titleText: {
    color:'white',
    fontFamily: 'Roboto',
    marginTop: 15,
    marginBottom: 50,
    fontSize: 24,
    fontWeight: "800",
  },

  bigCircle: {
    width: 250,
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    borderRadius: 150,
    backgroundColor: '#DCDCDC',
    borderColor: "#415A77",
    borderWidth: 10,
  },

  bigCircleTxt: {
    color:'#415A77',
    fontFamily: 'Roboto',
    fontSize: 100,
    fontWeight: "900",
  },

  tagsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  tagsText: {
    color:'#415A77',
    fontFamily: 'Roboto',
    marginHorizontal: 50,
    fontSize: 25,
    fontWeight: "900",
  },

  bottomCircles: {
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  },

  smallCircles: {
    width: 160,
    height: 160,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    marginTop: 20,
    margin: 15,
    backgroundColor: '#DCDCDC',
    borderColor: "#415A77",
    borderWidth: 7,
  },
  smallCircleTxt: {
    color:'#415A77',
    fontFamily: 'Roboto',
    fontSize: 70,
    fontWeight: "900",
  },

  startButton: {
    width: 250,
    heigth: 50,
    borderRadius: 20,
    alignItems: 'center',
    backgroundColor: '#415A77',
    marginTop: 20,
  },
  startButtonText: {
    color: '#DCDCDC',
    fontFamily: 'Roboto',
    fontSize: 30,
    fontWeight: '800',
    marginVertical: 15,
  }
})

export default HomeScreen