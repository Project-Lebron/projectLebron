import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, StatusBar, Touchable } from 'react-native'
import React from 'react'

const WorkoutEnd = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
          <StatusBar barStyle={'light-content'} />
    
          {/* title text */}
          <Text style={styles.date}> 11.18.2023</Text>
          <SafeAreaView style={styles.topContainer}>
            <Text style={styles.titleText}>Morning Shootaround </Text>
          </SafeAreaView>

          {/* big circle */}
          <SafeAreaView style={styles.bigCircle}>
            <Text style={styles.bigCircleTxt}>70%</Text>
          </SafeAreaView>

          {/* boxes */}
          <SafeAreaView style={styles.bottomBoxContainer}>
            <SafeAreaView style={styles.bottomBoxes}></SafeAreaView>
            <SafeAreaView style={styles.bottomBoxes}></SafeAreaView>
          </SafeAreaView>
    
          {/* button */}
          <TouchableOpacity 
            style={styles.startButton} 
            onPress={() => {
              console.log('Pressed!')
              navigation.navigate('Stats')
            }}>
            <Text style={styles.startButtonText}>End</Text>
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
    topContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleText: {
      color:'white',
      fontFamily: 'Roboto',
      marginTop: 15,
      marginBottom: 30,
      fontSize: 25,
      fontWeight: "800",
    },
    date: {
        color:'#415A77',
        fontFamily: 'Roboto',
        marginTop: 15,
        marginBottom: 5,
        fontSize: 16,
        fontWeight: "800",
      },
    bigCircle: {
      width: 190,
      height: 190,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 20,
      borderRadius: 150,
      backgroundColor: '#DCDCDC',
      borderColor: "#415A77",
      borderWidth: 6,
    },
    bigCircleTxt: {
      color:'#415A77',
      fontFamily: 'Roboto',
      fontSize: 60,
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
    bottomBoxContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    bottomBoxes: {
      width: 160,
      height: 120,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 30,
      marginTop: 20,
      margin: 15,
      backgroundColor: '#415A77',
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

export default WorkoutEnd