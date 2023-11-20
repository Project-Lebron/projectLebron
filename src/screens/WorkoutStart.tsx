import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, StatusBar, Touchable } from 'react-native'
import React from 'react'

const WorkoutStart = ({ navigation }: {navigation: any}) => {
    return (
        <SafeAreaView style={styles.container}>
          <StatusBar barStyle={'light-content'} />
    
          {/* title text */}
          <Text style={styles.titleText}>0:00 </Text>
    
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
              <Text style={styles.smallCircleMade}>0</Text>
            </SafeAreaView>
            <SafeAreaView style={styles.smallCircles}>
              <Text style={styles.smallCircleMissed}>0</Text>
            </SafeAreaView>
          </SafeAreaView>
    
          {/* button */}
          <TouchableOpacity 
            style={styles.startButton} 
            onPress={() => {
              console.log('Pressed!')
              navigation.navigate('WorkoutEnd')
            }}>
            <Text style={styles.startButtonText}>End</Text>
          </TouchableOpacity>
          
          <SafeAreaView style={styles.tagsContainer}>
            <Text style={styles.bottomText}>Pause</Text>
            <Text style={styles.bottomText} onPress={() => {navigation.navigate('Home')
            }}>Cancel</Text>
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
    titleText: {
      color:'white',
      fontFamily: 'Roboto',
      marginTop: 15,
      marginBottom: 30,
      fontSize: 48,
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
    smallCircleMade: {
      color:'#497741',
      fontFamily: 'Roboto',
      fontSize: 70,
      fontWeight: "900",
    },
    smallCircleMissed: {
        color:'#A05050',
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
      marginBottom: 30,
    },
    startButtonText: {
      color: '#DCDCDC',
      fontFamily: 'Roboto',
      fontSize: 30,
      marginVertical: 15,
    },
    bottomText: {
        color:'#fff',
        fontFamily: 'Roboto',
        marginHorizontal: 50,
        fontSize: 24,
        fontWeight: "900",
    },
  })

export default WorkoutStart