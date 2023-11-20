import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, StatusBar, Touchable } from 'react-native'
import React from 'react'

const WorkoutEnd = ({ navigation }: {navigation: any}) => {
    return (
        <SafeAreaView style={styles.container}>
          <StatusBar barStyle={'light-content'} />
    
          {/* title text */}
          <Text style={styles.date}> 11.18.2023</Text>
          <View style={styles.topContainer}>
            <Text style={styles.titleText}>Morning Shootaround </Text>
          </View>

          <Text style={[styles.date, { marginBottom: 15 }]}>25 / 60</Text>

          {/* top section */}
          <View style={styles.mainContainer}>
    
            {/* stats on left */}
            <View style={styles.topStatsContainer}>
              <Text style={[styles.topStats, { color: '#6AA760' }]}>70%</Text>
              <Text style={[styles.topStats, { color: '#fff' }]}>26:30</Text>
            </View>

            {/* middle circle */}
            <View style={styles.bigCircle}>
              <Text style={styles.bigCircleTxt}>70%</Text>
            </View>

            {/* right stats */}
            <View style={styles.topStatsContainer}>
              <Text style={[styles.topStats, { color: '#CF5A5A' }]}>70%</Text>
              <Text style={[styles.topStats, { color: '#fff' }]}>7</Text>
            </View>

          </View>

          {/* boxes */}
          <View style={styles.bottomBoxContainer}>
            <View style={styles.bottomBoxes}></View>
            <View style={styles.bottomBoxes}></View>
          </View>
    
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
      marginBottom: 5,
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
    mainContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    topStatsContainer: {
      flexDirection: 'column',
      justifyContent: 'center',
      marginTop: 20,
      alignItems: 'center',
    },
    topStats: {
      color:'#415A77',
      fontFamily: 'Roboto',
      marginTop: 30,
      marginBottom: 30,
      marginRight: 20,
      marginLeft: 20,
      fontSize: 25,
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